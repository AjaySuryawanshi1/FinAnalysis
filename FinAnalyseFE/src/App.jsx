import { useState,useEffect } from 'react'

import './App.css'
import MainPage from './MainPage'
// import Sidebar from './components/Sidebar'
// import MainDisplay from './components/MainDisplay'
// //import MainDisplay from './components/MainDisplay'

function App() {
  // const [tree, setTree] = useState(null);
  //       const [selectedCompany, setSelectedCompany] = useState(null);
      
  //       useEffect(() => {
  //         //look for api call to get list -- get company list
  //         fetch('./assets/treeJsonData/Tree.json')
  //           .then(res => {
  //             if (!res.ok) throw new Error('Failed to load company tree');
  //             return res.json();
  //           })
  //           .then(data => setTree(data))
  //           .catch(() => setTree({}));
  //       }, []);
      

  return (
    <>
      <MainPage/>
      {/* <MainDisplay/> */}
      {/* <Sidebar tree={tree} onSelectPeriod={(company, ym, paths) => setSelectedCompany({ company, ym, paths })}/>
      <MainDisplay selected={selectedCompany}/> */}
    </>
  )
}

export default App
