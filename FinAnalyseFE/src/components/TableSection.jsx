import React from 'react'

const TableSection = ({title,data}) => {
    const info = data ; 
    const formatKey = (key) => {
  return key
    .replace(/_/g, ' ')
    .replace(/\b(inr|usd|pct|eps)\b/gi, (match) => match.toUpperCase())
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const formatValue = (key, value) => {
  if (key.includes('pct')) return `${value}%`;
  if (key.includes('inr')) return `₹${value.toLocaleString()}`;
  if (key.includes('usd')) return `$${value} million`;
  return value;
};

  return (
    <div>
      <h2>{title}</h2>
      <table>
        <tbody>
            {info.map(([key,value])=> (
                <tr key={key}>
              <td><strong>{formatKey(key)}</strong></td>
              <td>{formatValue(key, value)}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableSection
