// src/pages/dispatch/FAQ/FAQ.tsx
import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is ZUP!?",
    answer: "ZUP! is a modern dispatch platform that connects real taxis with real passengers — no hidden pricing, no outdated systems."
  },
  {
    question: "How is ZUP! different from Uber or Bolt?",
    answer: "We only work with licensed taxis and use transparent, meter-based pricing to support the existing taxi industry, not compete with it."
  },
  {
    question: "Can I pay by card or just cash?",
    answer: "Yes, you can pay with both card directly in the app or with cash to the driver."
  },
  {
    question: "I'm a taxi driver. How can I join ZUP!?",
    answer: "We're glad you're interested! Please visit our driver's page or contact us directly to start the registration process."
  },
  {
    question: "In what cities is ZUP! available?",
    answer: "We started in Piatra Neamț and are rapidly expanding to major cities across Romania. Check the app for the most current list."
  },
  {
    question: "How do ZIP!, ZAP!, and ZUP! NOW work?",
    answer: "These are our different service levels. ZIP! is for immediate rides, ZAP! is for scheduled trips, and ZUP! NOW offers premium features."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="contact">
      <div className="section-container faq-container">
        <div className="faq-split-left">
          <h2 className="faq-heading">Frequently asked questions</h2>
          <p className="faq-subheading">Answers to the burning questions in your mind.</p>
          <div className="faq-contact">
            <p>Have a different question?</p>
            <a href="mailto:contact@zup.digital">Contact us!</a>
          </div>
        </div>
        <div className="faq-split-right">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggle(index)}>
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}