import React from 'react'
import MetadataSection from './MetadataSection'
import DataExteactionSection from './DataExteactionSection'
import FinancialAnalysisSection from './FinancialAnalysisSection'
//import data from './assets/jsonData/LTIM - transcript.json'
import data from '../assets/jsonData/LTIM - transcript.json'
import { useState } from 'react'

const MainDisplay = ({selected}) => {
//do api call for data /get from main page as prop
//from prop --company or report id
 const {metadata,data_extraction,financial_analysis} = data;

  //   const [activeTab, setActiveTab] = useState('data_extraction');

  // const tabConfig = [
  //   { key: 'data_extraction', label: 'Period Entries', component: <DataExteactionSection data={data_extraction} /> },
  //   { key: 'financial_analysis', label: 'Summary', component: <FinancialAnalysisSection data={financial_analysis} /> },
  // ];    

  return (
    <div>
      <h1>Financial Report </h1>
      <MetadataSection data={metadata} />
      <br />
      {/* <div className="tab-buttons">
        {tabConfig.map((tab) => (
          <button key={tab.key}
                  className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)} >
                    {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabConfig.map((tab) => (
          activeTab === tab.key ? <div key={tab.key}>{tab.component}</div> : null
        ))}
      </div> */}
      <DataExteactionSection data={data_extraction} finData={financial_analysis} />
      {/* <FinancialAnalysisSection data={financial_analysis} /> */}
    </div>
  );
};

export default MainDisplay
