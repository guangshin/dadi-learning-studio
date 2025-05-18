'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What age groups do your programmes cover?',
    answer: 'Our programmes cater to learners of all ages, from preschoolers (ages 3-6) to adults. We offer specialized curricula designed for different developmental stages and learning objectives.'
  },
  {
    question: 'Can we attend a trial class first?',
    answer: 'Yes! We encourage prospective students to experience our teaching style with a trial class. It\'s a great way to see if our approach is the right fit for you or your child.'
  },
  {
    question: 'Are your programmes aligned with the MOE syllabus?',
    answer: 'Yes, our Primary and Secondary school programmes are carefully aligned with the MOE syllabus, while incorporating our unique teaching methodologies and mindfulness practices.'
  },
  {
    question: 'How does mindfulness fit into language lessons?',
    answer: 'We integrate short mindfulness exercises to help students focus better, reduce anxiety, and create an optimal learning environment. These practices have been shown to improve language acquisition and retention.'
  },
  {
    question: 'What\'s the class size and teaching format?',
    answer: 'We keep our classes small (typically 4-8 students) to ensure personalized attention. Our teaching combines interactive group activities, individual practice, and one-on-one feedback.'
  },
  {
    question: 'How do I know which level is suitable for my child?',
    answer: 'We conduct a simple assessment to understand your child\'s current proficiency level and recommend the most suitable class. This helps ensure they\'re challenged appropriately while building confidence.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Still unsure which programme is right for you? See answers to some common questions below.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="text-gray-500" size={20} />
                  ) : (
                    <Plus className="text-gray-500" size={20} />
                  )}
                </button>
                
                <div 
                  className={`px-6 pb-4 pt-0 transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
