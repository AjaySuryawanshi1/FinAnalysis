import React from 'react'
import MetadataSection from './MetadataSection'
import DataExteactionSection from './DataExteactionSection'
import FinancialAnalysisSection from './FinancialAnalysisSection'
//import data from './assets/jsonData/LTIM - transcript.json'
import data from '../assets/jsonData/LTIM - transcript.json'

const MainDisplay = ({selected}) => {
//do api call for data /get from main page as prop
//from prop --company or report id
 const {metadata,data_extraction,financial_analysis} = data;

        

  return (
    <div>
      <h1>Financial Report </h1>
      <MetadataSection data={metadata} />
      <DataExteactionSection data={data_extraction} />
      <FinancialAnalysisSection data={financial_analysis} />
    </div>
  )
}

export default MainDisplay
