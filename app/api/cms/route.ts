export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';

// Helper function to validate environment variables
function validateEnvVars() {
  const requiredVars = [
    'PLASMIC_PROJECT_ID',
    'PLASMIC_API_TOKEN',
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

export async function POST(request: Request) {
  console.log('\n=== New CMS API Request ===');
  
  try {
    // Log request details
    console.log('Request URL:', request.url);
    console.log('Request method:', request.method);
    
    // Validate environment variables
    console.log('Validating environment variables...');
    validateEnvVars();
    
    // Parse request body
    console.log('Parsing request body...');
    const requestBody = await request.json();
    console.log('Request body:', JSON.stringify(requestBody, null, 2));
    
    const { collection, filters, limit } = requestBody;
    
    if (!collection) {
      throw new Error('Collection name is required');
    }
    
    // Log collection being accessed
    console.log(`Accessing collection: ${collection}`);
    
    // Plasmic CMS REST API endpoint (read)
    const CMS_ID = process.env.PLASMIC_PROJECT_ID;
    const PUBLIC_TOKEN = process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN;
    if (!PUBLIC_TOKEN) throw new Error('Missing NEXT_PUBLIC_PLASMIC_API_TOKEN (public token)');
    
    // Build query string for limit/filter if needed
    let queryObj: any = {};
    if (filters && typeof filters === 'object' && Object.keys(filters).length > 0) {
      queryObj = { ...filters };
    }
    if (limit) {
      queryObj.limit = limit;
    }
    // If no limit is specified, fetch all (do not set limit)
    const query = '?q=' + encodeURIComponent(JSON.stringify(queryObj));
    const url = `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${collection}/query${query}`;
    
    console.log('Making request to Plasmic CMS API...');
    console.log('URL:', url);
    // Use public token for read
    const authToken = `${CMS_ID}:${PUBLIC_TOKEN}`;
    console.log('Using auth token:', authToken.substring(0, 10) + '...');
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-plasmic-api-cms-tokens': authToken,
      },
    });

    if (!response.ok) {
      console.error(`CMS API responded with status: ${response.status} ${response.statusText}`);
      
      let errorData;
      try {
        // Try to parse the error response as JSON
        const errorText = await response.text();
        console.error('Error response body:', errorText);
        
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          errorData = { message: errorText };
        }
      } catch (parseError) {
        console.error('Failed to parse error response:', parseError);
        errorData = {
          error: 'Failed to parse error response',
          status: response.status,
          statusText: response.statusText,
          details: String(parseError)
        };
      }
      
      const errorMessage = errorData?.error || 
                         errorData?.message || 
                         `Failed to fetch from CMS: ${response.status} ${response.statusText}`;
      
      console.error('CMS API error details:', {
        status: response.status,
        statusText: response.statusText,
        error: errorMessage,
        details: errorData
      });
      
      return NextResponse.json(
        { 
          error: errorMessage,
          status: response.status,
          details: errorData 
        },
        { status: response.status }
      );
    }

    // Parse successful response
    console.log('CMS API request successful');
    const responseData = await response.json();
    console.log(`Received ${responseData?.rows?.length || 0} items from CMS`);
    
    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Unexpected error in CMS API route:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error('Error details:', {
      message: errorMessage,
      stack: errorStack,
      error: error
    });
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: errorMessage,
        ...(process.env.NODE_ENV === 'development' && { stack: errorStack })
      },
      { status: 500 }
    );
  }
}
