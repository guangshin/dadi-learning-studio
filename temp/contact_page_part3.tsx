            {/* General Enquiries Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">General Enquiries</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#F0F7E6] rounded-lg">
                    <Phone className="h-5 w-5 text-[#4C9A2A]" />
                  </div>
                  <div>
                    <p className="text-gray-700">{contactInfo.phone}</p>
                    <button 
                      className="text-sm text-[#4C9A2A] hover:underline mt-1 flex items-center"
                      onClick={() => handleCopy(contactInfo.phone)}
                    >
                      <Copy className="h-3.5 w-3.5 mr-1" /> Copy Number
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#F0F7E6] rounded-lg">
                    <Mail className="h-5 w-5 text-[#4C9A2A]" />
                  </div>
                  <div>
                    <p className="text-gray-700">{contactInfo.email}</p>
                    <button 
                      className="text-sm text-[#4C9A2A] hover:underline mt-1 flex items-center"
                      onClick={() => handleCopy(contactInfo.email)}
                    >
                      <Copy className="h-3.5 w-3.5 mr-1" /> Copy Email
                    </button>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-[#F0F7E6] rounded-lg">
                      <MessageSquare className="h-5 w-5 text-[#4C9A2A]" />
                    </div>
                    <p className="text-gray-700 font-medium">Connect with us on social media:</p>
                  </div>
                  <div className="flex space-x-6 pl-14">
                    <a 
                      href={contactInfo.instagramLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#4C9A2A] transition-colors flex flex-col items-center group"
                      aria-label="Instagram"
                    >
                      <div className="p-2 bg-[#F0F7E6] rounded-full group-hover:bg-[#E0EDD1] transition-colors">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="1.5" />
                          <circle cx="12" cy="12" r="4.5" strokeWidth="1.5" />
                          <circle cx="18" cy="6" r="1" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="text-xs mt-1">Instagram</span>
                    </a>

                    <a 
                      href={contactInfo.facebookLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#4C9A2A] transition-colors flex flex-col items-center group"
                      aria-label="Facebook"
                    >
                      <div className="p-2 bg-[#F0F7E6] rounded-full group-hover:bg-[#E0EDD1] transition-colors">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <span className="text-xs mt-1">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
