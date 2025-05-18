import Link from 'next/link';

export function ProgrammeCTA() {
  return (
    <section className="py-16 bg-[#F5F7F0]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still deciding?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you choose the right programme for your needs.
          </p>
          <Link
            href="/contact?subject=Programme%20Inquiry"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-[#A5D66F] hover:bg-[#8BC34A] transition-colors duration-200"
          >
            Book a Free Trial Class
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Or contact us at{' '}
            <a href="mailto:contact@dadi.com.sg" className="text-primary hover:underline">
              contact@dadi.com.sg
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
