export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { fetchWithRetry } from "@/lib/fetchWithRetry";

// Helper function to validate environment variables
function validateEnvVars() {
  const requiredVars = [
    "PLASMIC_PROJECT_ID",
    "NEXT_PUBLIC_PLASMIC_API_TOKEN", // Check for the token we actually use
  ];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }
}

export async function GET(request: Request) {
  try {
    validateEnvVars();
    
    const headersList = headers();
    const referer = headersList.get('referer') || 'Unknown';
    const url = new URL(request.url);
    const type = url.searchParams.get('type');
    
    if (!type) {
      return NextResponse.json(
        { error: "Missing 'type' parameter" },
        { status: 400 }
      );
    }
    
    console.log(`GET request for CMS type: ${type} from ${referer}`);
    
    // Plasmic CMS REST API endpoint (read)
    const CMS_ID = process.env.PLASMIC_PROJECT_ID;
    const PUBLIC_TOKEN = process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN;
    if (!PUBLIC_TOKEN) {
      throw new Error("Missing NEXT_PUBLIC_PLASMIC_API_TOKEN (public token)");
    }
    
    let collection = '';
    let queryObj: any = {};
    
    // Determine which collection to query based on type
    switch (type) {
      case 'contactInfo':
        collection = 'contactInfo';
        break;
      case 'branches':
        collection = 'branches';
        break;
      case 'gallery':
        collection = 'Gallery';
        break;
      default:
        return NextResponse.json(
          { error: `Unsupported type: ${type}` },
          { status: 400 }
        );
    }
    
    const query = "?q=" + encodeURIComponent(JSON.stringify(queryObj));
    const apiUrl = `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${collection}/query${query}`;
    const authToken = `${CMS_ID}:${PUBLIC_TOKEN}`;
    
    console.log(`Fetching from Plasmic CMS: ${apiUrl}`);
    
    // Use our fetchWithRetry utility with a longer timeout for local development
    const response = await fetchWithRetry(
      apiUrl, 
      {
        headers: {
          "x-plasmic-api-cms-tokens": authToken,
        },
        next: { revalidate: 60 },  // Cache for 60 seconds
      },
      3,  // 3 retries
      15000  // 15 second timeout
    );
    
    if (!response.ok) {
      console.error(`CMS API responded with status: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { error: `Failed to fetch from CMS: ${response.status}` },
        { status: response.status }
      );
    }
    
    const responseData = await response.json();
    console.log(`Received ${responseData?.rows?.length || 0} items from CMS for type: ${type}`);
    
    // Process the data based on type
    let result = {};
    
    if (type === 'contactInfo' && responseData.rows && responseData.rows.length > 0) {
      const contactData = responseData.rows[0].data;
      result = {
        contactInfo: {
          phone: contactData.phone || "+6586998667",
          email: contactData.email || "contact@dadi.com.sg",
          calendlyUrl: contactData.calendlyUrl || "https://calendly.com/contact-dadi/2hrs",
          instagramLink: contactData.instagramLink || "https://www.instagram.com/dadilearningstudio",
          facebookLink: contactData.facebookLink || "https://www.facebook.com/profile.php?id=61575097831744"
        }
      };
    } else if (type === 'branches' && responseData.rows && responseData.rows.length > 0) {
      const branchesData = responseData.rows.map((row: { data: any }) => ({
        id: row.data.id || "",
        title: row.data.title || "",
        address: row.data.address || "",
        operatingHours: row.data.operatingHours || "",
        mapEmbedUrl: row.data.mapEmbedUrl || "",
        iframe: row.data.iframe || "" // Added iframe field from Branches model
      }));
      
      result = {
        branches: branchesData
      };
    } else if (type === 'gallery') {
      result = responseData;
    }
    
    return NextResponse.json(result);
  } catch (error) {
    console.error("Unexpected error in CMS API route (GET):", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    
    return NextResponse.json(
      {
        error: "Internal server error",
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Validate environment variables
    validateEnvVars();
    
    // Parse request body
    const requestBody = await request.json();
    const { collection, filters, limit } = requestBody;

    if (!collection) {
      throw new Error("Collection name is required");
    }

    // Log collection being accessed


    // Plasmic CMS REST API endpoint (read)
    const CMS_ID = process.env.PLASMIC_PROJECT_ID;
    const PUBLIC_TOKEN = process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN;
    if (!PUBLIC_TOKEN)
      throw new Error("Missing NEXT_PUBLIC_PLASMIC_API_TOKEN (public token)");

    // Build query string for limit/filter if needed
    let queryObj: any = {};
    if (
      filters &&
      typeof filters === "object" &&
      Object.keys(filters).length > 0
    ) {
      queryObj = { ...filters };
    }
    if (limit) {
      queryObj.limit = limit;
    }
    // If no limit is specified, fetch all    // Construct the API URL
    const query = encodeURIComponent(JSON.stringify(queryObj));
    const apiUrl = `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${collection}/query?q=${query}`;

    // Log the API URL being called
    console.log(`POST request fetching from Plasmic CMS: ${apiUrl}`);

    // Set up authentication headers
    const authToken = `${CMS_ID}:${PUBLIC_TOKEN}`;

    // Make the API request with retry logic and timeout
    const response = await fetchWithRetry(
      apiUrl, 
      {
        method: "GET",
        headers: {
          "x-plasmic-api-cms-tokens": authToken,
        },
      },
      3,  // 3 retries
      15000  // 15 second timeout
    );

    if (!response.ok) {
      console.error(
        `CMS API responded with status: ${response.status} ${response.statusText}`
      );

      let errorData;
      try {
        // Try to parse the error response as JSON
        const errorText = await response.text();
        console.error("Error response body:", errorText);

        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          errorData = { message: errorText };
        }
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
        errorData = {
          error: "Failed to parse error response",
          status: response.status,
          statusText: response.statusText,
          details: String(parseError),
        };
      }

      const errorMessage =
        errorData?.error ||
        errorData?.message ||
        `Failed to fetch from CMS: ${response.status} ${response.statusText}`;

      console.error("CMS API error details:", {
        status: response.status,
        statusText: response.statusText,
        error: errorMessage,
        details: errorData,
      });

      return NextResponse.json(
        {
          error: errorMessage,
          status: response.status,
          details: errorData,
        },
        { status: response.status }
      );
    }

    // Parse successful response
    console.log("CMS API request successful");
    const responseData = await response.json();
    console.log(`Received ${responseData?.rows?.length || 0} items from CMS`);

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Unexpected error in CMS API route:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error("Error details:", {
      message: errorMessage,
      stack: errorStack,
      error: error,
    });

    return NextResponse.json(
      {
        error: "Internal server error",
        message: errorMessage,
        ...(process.env.NODE_ENV === "development" && { stack: errorStack }),
      },
      { status: 500 }
    );
  }
}
