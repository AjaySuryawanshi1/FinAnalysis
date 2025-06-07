import React from 'react'
import './Style.css'

const Sidebar = ({tree,onSelectPeriod}) => {

  if (!tree || Object.keys(tree).length === 0) {
    return <p >No companies found.</p>;
  }
  return (
    <div>
      <aside className="sidebar">
      <h2 className="sidebar-title">Companies</h2>
      {Object.entries(tree)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([company, years]) => (
          <details key={company} >
            <summary className="sidebar-summary">{company}</summary>
            <ul className="sidebar-list">
              {Object.keys(years)
                .sort((a, b) => b.localeCompare(a))
                .map(ym => (
                  <li key={ym}>
                    <button
                     className="sidebar-button"
                      onClick={() => onSelectPeriod(company, ym, years[ym])}
                    >
                      {ym.replace('_', ' / ')}
                    </button>
                  </li>
                ))}
            </ul>
          </details>
        ))}
    </aside>
    </div>
  )
}

export default Sidebar
