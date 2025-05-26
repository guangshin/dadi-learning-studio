          {/* Right Column - Form */}
          <div className="lg:w-1/2 order-first lg:order-last mb-10 lg:mb-0">
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">We&apos;ll get back to you within 1 working day.</p>
              
              <form 
                id="contact-form"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {submitStatus && (
                  <div className={`p-4 ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} rounded-md flex gap-3 items-start`}>
                    <div className="shrink-0 pt-0.5">
                      <svg className={`h-5 w-5 ${submitStatus.success ? 'text-green-500' : 'text-red-500'}`} fill="currentColor" viewBox="0 0 20 20">
                        {submitStatus.success ? (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{submitStatus.success ? 'Success!' : 'Error!'}</p>
                      <p className="mt-1">{submitStatus.message}</p>
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                
                <div>
                  <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                    Child&apos;s Age (if applicable)
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Enquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  >
                    <option value="general">General Enquiry</option>
                    <option value="trial">Book a Trial Class</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-[#4C9A2A] hover:bg-[#3e7e22] focus:ring-4 focus:ring-[#4C9A2A] focus:ring-opacity-50 text-white font-medium rounded-md shadow transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
