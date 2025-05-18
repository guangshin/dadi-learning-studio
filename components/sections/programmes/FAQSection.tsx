'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'My child refuses to speak Mandarin. What can I do?',
    answer: (
      <>
        <p className="mb-3">At Da Di Learning Studio, we believe <span className="font-medium text-gray-900">communication comes before perfection</span>.</p>
        <p className="mb-3">Many children resist speaking Mandarin because they associate it with pressure and correction. We create safe, joyful speaking opportunities through:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-3">
          <li>Lively conversations and storytelling</li>
          <li>Engaging role-play activities</li>
          <li>Confidence-building exercises</li>
        </ul>
        <p className="text-gray-700 italic">When children experience success expressing themselves naturally, their willingness to speak blossoms.</p>
      </>
    )
  },
  {
    question: 'My child is easily distracted and cannot focus on completing assignments. How can I help?',
    answer: (
      <>
        <p className="mb-3">Today's fast-paced, screen-filled world makes it harder than ever for children to focus.</p>
        <div className="bg-amber-50 border-l-4 border-amber-200 p-4 mb-3 rounded-r">
          <p className="font-medium text-amber-800">At Da Di, we weave mindfulness into every lesson:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-amber-700">
            <li>Mindful breathing exercises</li>
            <li>Focus-building activities</li>
            <li>Short movement breaks</li>
          </ul>
        </div>
        <p>We nurture not just academic skills, but essential life skills like <span className="font-medium">attention, resilience, and joy</span> in the learning process.</p>
      </>
    )
  },
  {
    question: 'My child\'s Chinese exam results are not ideal. Is there a solution?',
    answer: (
      <>
        <p className="mb-3">Yes — and it starts by moving beyond rote memorization.</p>
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <p className="font-medium text-green-800 text-center mb-2">Our Approach:</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-1">问</div>
              <div className="text-xs font-medium">Asking Questions</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-1">思</div>
              <div className="text-xs font-medium">Reflecting</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-1">修</div>
              <div className="text-xs font-medium">Practicing</div>
            </div>
          </div>
        </div>
        <p className="mb-2">Instead of rushing to memorize answers, children learn to:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Think deeply about the language</li>
          <li>Express themselves clearly</li>
          <li>Use Mandarin with real understanding</li>
        </ul>
        <p className="text-gray-700">When they build true confidence in the language, exam success comes naturally — and so does a lifelong love for learning.</p>
      </>
    )
  },
  {
    question: 'How is Da Di different from regular Chinese tuition?',
    answer: (
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="bg-green-100 rounded-full p-1.5 mt-0.5">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-900">Real Communication</p>
            <p className="text-sm text-gray-600">Not just memorization</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-green-100 rounded-full p-1.5 mt-0.5">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-900">Mindful Learning</p>
            <p className="text-sm text-gray-600">Building focus and confidence</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-green-100 rounded-full p-1.5 mt-0.5">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-900">Joyful Connection</p>
            <p className="text-sm text-gray-600">Making learning enjoyable and meaningful</p>
          </div>
        </div>
        <p className="pt-2 text-gray-700">Children don't just "know" Chinese — they live it, speak it, and feel proud using it.</p>
      </div>
    )
  },
  {
    question: 'Can Da Di help if my child already dislikes Mandarin?',
    answer: (
      <div className="space-y-3">
        <p className="text-lg font-medium text-gray-900 text-center py-2 px-4 bg-green-50 rounded-lg">
          Absolutely! We specialize in turning resistance into confidence.
        </p>
        <p>Our approach includes:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Joyful, meaningful learning experiences</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Celebrating small successes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Creating a positive association with Mandarin</span>
          </li>
        </ul>
        <p className="pt-1 text-gray-700">We help children rediscover that Mandarin can be fun, natural, and empowering — not stressful.</p>
      </div>
    )
  },
  {
    question: 'Is it too late for me to start learning Chinese as an adult?',
    answer: (
      <div className="space-y-3">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="font-medium text-blue-800 text-center">
            Not at all! It's never too late to start your Mandarin journey.
          </p>
        </div>
        <p>Our adult programmes are designed to build confidence step-by-step, focusing on:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
          <div className="bg-white p-3 rounded-lg border text-center">
            <div className="text-blue-600 text-2xl mb-1">🗣️</div>
            <p className="text-sm font-medium">Practical Communication</p>
          </div>
          <div className="bg-white p-3 rounded-lg border text-center">
            <div className="text-blue-600 text-2xl mb-1">🧠</div>
            <p className="text-sm font-medium">Mindful Learning</p>
          </div>
          <div className="bg-white p-3 rounded-lg border text-center">
            <div className="text-blue-600 text-2xl mb-1">🌍</div>
            <p className="text-sm font-medium">Real-world Usage</p>
          </div>
        </div>
        <p className="text-gray-700">Whether you're learning for work, family, travel, or personal growth, we meet you where you are and help you move forward with encouragement and clarity.</p>
      </div>
    )
  },
  {
    question: 'I studied Chinese before, but I\'ve forgotten most of it. Can I still join?',
    answer: (
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-300">
          <p className="font-medium text-purple-800">Yes, absolutely! Many adult learners feel this way.</p>
          <p className="text-sm text-purple-700 mt-1">It's completely normal to feel rusty after time away from the language.</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border">
          <p className="font-medium text-gray-900 mb-2">How we help you rebuild your skills:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">Patient, supportive instruction</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">Real conversation practice</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">No pressure environment</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">Personalized learning path</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700">No memorization drills, no pressure — just a clear, supportive path to rediscovering your language skills with confidence and joy.</p>
      </div>
    )
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Find answers to common questions about learning Mandarin at Da Di
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-base md:text-lg font-medium text-gray-900 text-left pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-gray-500 flex-shrink-0 ml-2" size={20} />
                ) : (
                  <Plus className="text-gray-500 flex-shrink-0 ml-2" size={20} />
                )}
              </button>
              
              <div 
                id={`faq-${index}`}
                className={`px-6 pb-6 pt-0 transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}
                aria-hidden={openIndex !== index}
              >
                <div className="text-gray-600 leading-relaxed space-y-3">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
