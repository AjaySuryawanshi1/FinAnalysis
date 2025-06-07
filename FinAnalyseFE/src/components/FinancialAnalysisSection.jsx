import React from 'react'
import './Style.css'

const FinancialAnalysisSection = ({data}) => {

const formatTitle = (key) =>
  key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

// Paragraph block renderer
const ParagraphBlock = ({ title, text }) => (
  <div className="section">
    <h3>{title}</h3>
    {text.split("\n\n").map((para, idx) => (
      <p key={idx}>{para}</p>
    ))}
  </div>
);

// Handles nested trend_analysis block
const TrendAnalysisBlock = ({ data }) => (
  <div className="section">
    <h3>Trend Analysis</h3>
    {Object.entries(data).map(([period, { narrative }], idx) => (
      <div key={idx}>
        <h4>{formatTitle(period)}</h4>
        {narrative.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    ))}
  </div>
); 

  return (
   <section className="financial-analysis">
      {Object.entries(data).map(([key, value]) => {
        if (key === "trend_analysis") {
          return <TrendAnalysisBlock key={key} data={value} />;
        } else {
          return (
            <ParagraphBlock
              key={key}
              title={formatTitle(key)}
              text={value}
            />
          );
        }
      })}
    </section>
  )
}

export default FinancialAnalysisSection
