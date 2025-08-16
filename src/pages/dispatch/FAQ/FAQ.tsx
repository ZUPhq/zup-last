import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is ZUP!?",
    answer:
      "ZUP! is a dispatch platform that helps taxi drivers and fleet owners connect with passengers via a modern mobile app.",
  },
  {
    question: "How is this different from Bolt or Uber?",
    answer:
      "We only work with licensed taxis, using the taximeter for pricing. ZUP! is designed to support existing taxi infrastructure, not replace it.",
  },
  {
    question: "Is ZUP! available in my city?",
    answer:
      "We’re expanding fast. Check the app or follow our social media for updates on new cities we support.",
  },
  {
    question: "Is there a cost to use ZUP!?",
    answer:
      "Passengers download and use the app for free. Taxi drivers and dispatchers can check our website for pricing plans.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="cf-faq-section-1">
      <div className="cf-faq-main-wrapper horizontal">
        <div className="cf-faqs-text-wrap">
          <h2 className="cf-h2-heading left">Frequently asked questions</h2>
          <p className="cf-faq-paragraph">Answers to the burning questions in your mind.</p>
          <div className="cf-faq-bold-text">Have a different question?</div>
          <a
            className="cf-call-button _24px-bold w-inline-block"
            href="mailto:contact@zup.digital?subject=I%20have%20a%20question!"
          >
            <div className="cf-gradient-span">Contact us!</div>
          </a>
        </div>

        <div className="cf-faqs-wrapper">
          {faqs.map((faq, index) => (
            <div key={index} className="cf-faq-card">
              <div
                className={`cf-faq-question-container-2 ${index === 0 ? "first" : ""}`}
                onClick={() => toggle(index)}
              >
                <div className="cf-faq-question-wrapper-2">
                  <div className="cf-faq-questions">{faq.question}</div>
                  <img
                    className="cf-faq-icon"
                    src={openIndex === index ? "/icon-minus.svg" : "/icon-plus.svg"}
                    alt="toggle icon"
                    width={24}
                  />
                </div>
              </div>
              {openIndex === index && (
                <div className="cf-faq-answer-wrap">
                  <p className="cf-faq-answer-text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}