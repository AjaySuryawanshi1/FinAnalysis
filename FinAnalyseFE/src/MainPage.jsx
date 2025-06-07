import React,{useEffect,useState} from 'react'
import Sidebar from './components/Sidebar'
import MainDisplay from './components/MainDisplay'
//import data from './assets/jsonData/LTIM - transcript.json'
import trees from './assets/treeJsonData/Tree.json'
import './components/Style.css'

const MainPage = () => {

   const [tree, setTree] = useState(null);
      const [selectedCompany, setSelectedCompany] = useState(null);
    
      useEffect(() => {
        //look for api call to get list -- get company list
        // fetch('./assets/treeJsonData/Tree.json')
        //   .then(res => {
        //     if (!res.ok) throw new Error('Failed to load company tree');
        //     return res.json();
        //   })
        //   .then(data => setTree(data))
        //   .catch(() => setTree({}));
        setTree(trees);
      }, []);
    
  return (
    <div className='layout-container'>
      <Sidebar tree={tree} onSelectPeriod={(company, ym, paths) => setSelectedCompany({ company, ym, paths })}/>
      <MainDisplay selected={selectedCompany}/>
    </div>
  )
}

export default MainPage
