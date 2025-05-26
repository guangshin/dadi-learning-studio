/**
 * Utility function for making fetch requests with timeout and retry logic
 * Helps prevent timeout issues especially on localhost/development environment
 */
export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries = 3,
  timeout = 10000
): Promise<Response> {
  // Create an AbortController for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    // Add the signal to the options
    const fetchOptions = {
      ...options,
      signal: controller.signal
    };
    
    // Execute the fetch request
    const response = await fetch(url, fetchOptions);
    clearTimeout(timeoutId);
    return response;
  } catch (error: any) {
    clearTimeout(timeoutId);
    
    // If we're out of retries, throw the error
    if (retries <= 1) {
      console.error(`Fetch failed after multiple attempts: ${error.message}`);
      throw error;
    }
    
    console.log(`Fetch attempt failed for ${url}, retrying... (${retries-1} attempts left)`);
    
    // Wait a bit before retrying (exponential backoff)
    const delay = 1000 * (4 - retries); // 3s, 2s, 1s
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Recursive call with one less retry
    return fetchWithRetry(url, options, retries - 1, timeout);
  }
}
