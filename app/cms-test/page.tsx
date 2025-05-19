import { Suspense } from 'react';
import CmsTestClient from './CmsTestClient';

// This is a server component that renders a client component
export default function CmsTestPage() {
  // The collection name to fetch from Plasmic CMS
  const collectionName = "blog";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CMS Test Page</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Suspense fallback={
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <span className="ml-2">Loading CMS data...</span>
          </div>
        }>
          <CmsTestClient collectionName={collectionName} />
        </Suspense>
      </div>
    </div>
  );
}
