export function LocationMap() {
  // In a real app, you would use the Google Maps JavaScript API or similar
  const mapImageUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=Kampong+Ubi+Community+Club,Singapore&zoom=15&size=800x400&maptype=roadmap&markers=color:red%7C1.3265,103.8953&key=YOUR_GOOGLE_MAPS_API_KEY';
  
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md">
      <div className="h-full bg-gray-100 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Our Location</h3>
          <p className="text-foreground/70 mb-4">Kampong Ubi Community Club</p>
          <p className="text-foreground/70">10 Ubi Cres, Singapore 408564</p>
          
          {/* In a real app, you would use an iframe or the Google Maps component */}
          <div className="mt-6 aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
              <span>Map would be displayed here</span>
            </div>
            {/* 
            For production, use:
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            */}
          </div>
          
          <div className="mt-4">
            <a
              href="https://goo.gl/maps/..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-accent hover:text-accent"
            >
              View on Google Maps
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
