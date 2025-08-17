import React from 'react';
import './LegalContent.css';

interface Section {
  heading?: string;
  paragraphs: string[];
}

interface Props {
  title: string;
  introduction: string;
  sections: Section[];
}

export default function LegalContent({ title, introduction, sections }: Props) {
  return (
    <section className="legal-section">
      <div className="section-container legal-container">
        <div className="legal-header">
          <h1 className="legal-title">{title}</h1>
          <p className="legal-intro">{introduction}</p>
        </div>
        <div className="legal-content-grid">
          {sections.map((section, index) => (
            <div className="legal-card" key={index}>
              {section.heading && <h2 className="legal-heading">{section.heading}</h2>}
              {section.paragraphs.map((p, pIndex) => (
                <p key={pIndex}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}