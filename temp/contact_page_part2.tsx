
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Create form data
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('childAge', formData.childAge);
      
      // Add FormSubmit.co specific fields
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_subject', 'New Enquiry from Da Di Learning Studio');
      formDataToSend.append('_template', 'box');
      formDataToSend.append('_next', window.location.href); // This prevents redirection
      
      // Send the form data using fetch
      const response = await fetch(
        'https://formsubmit.co/ajax/contact@dadi.com.sg', 
        {
          method: 'POST',
          body: formDataToSend
        }
      );
      
      const responseData = await response.json();
      
      if (response.ok) {
        // Success
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: '',
          childAge: ''
        });
        
        // Scroll to the success message
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Error
        setSubmitStatus({
          success: false,
          message: responseData.message || 'There was an error sending your message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section - Reverted to previous design with more spacing */}
        <div className="text-center mb-16 mt-16">  {/* Added top margin to prevent header overlap */}
          <h1 className="text-4xl font-bold mb-4 text-[#4C9A2A]">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your child&apos;s learning journey with Da Di today.
          </p>
        </div>
        
        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Desktop & Top Sections - Mobile */}
          <div className="lg:w-1/2 space-y-10">
            {/* Book a Trial Class Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4">Book a Trial Class</h2>
              <p className="text-gray-700 mb-6">
                Ready to experience our teaching style? Book a free trial class with us!
              </p>
              <a
                href={contactInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-[#4C9A2A] border border-transparent rounded-md shadow-sm hover:bg-[#3e7e22] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4C9A2A] transition-colors"
              >
                <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Book a Free Trial
              </a>
            </section>
