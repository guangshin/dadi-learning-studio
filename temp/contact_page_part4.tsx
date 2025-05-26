            {/* Our Locations Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Our Location(s)</h2>
              {isLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              ) : (
                locations.map((location, index) => (
                  <div key={location.id} className={`space-y-6 ${index > 0 ? 'mt-16 pt-16 border-t-2 border-gray-200' : ''}`}>
                    <h3 className="text-xl font-medium text-gray-900">{location.title}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#F0F7E6] rounded-lg">
                          <MapPin className="h-5 w-5 text-[#4C9A2A]" />
                        </div>
                        <div className="text-base text-gray-700">
                          {location.address}
                          <button 
                            className="text-sm text-[#4C9A2A] hover:underline mt-1 block"
                            onClick={() => handleCopy(location.address)}
                          >
                            <span className="flex items-center">
                              <Copy className="h-3.5 w-3.5 mr-1" /> Copy Address
                            </span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#F0F7E6] rounded-lg">
                          <Clock className="h-5 w-5 text-[#4C9A2A]" />
                        </div>
                        <div className="text-base text-gray-700">
                          {location.operatingHours.split('\n').map((line, index) => (
                            <p key={index} className="mb-2">{line}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 aspect-video rounded-lg overflow-hidden relative group">
                        {/* Fallback if mapEmbedUrl is empty */}
                        {location.mapEmbedUrl ? (
                          <iframe
                            src={location.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${location.title} on Google Maps`}
                            onError={() => console.log(`Failed to load map for ${location.title}`)}
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full bg-gray-200 text-gray-600">
                            <p>Map not available</p>
                          </div>
                        )}
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="bg-white hover:bg-gray-50 px-6 py-3 rounded-full shadow-lg flex items-center text-gray-800 font-medium text-lg transition-colors">
                            <svg className="w-6 h-6 mr-2 text-[#4C9A2A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            Open in Google Maps
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </section>
          </div>
