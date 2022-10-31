import '../styles/folders.css';
import axios from "axios";
import React from "react";
import logo from "../assets/folder.png"
import {Route } from 'react-router-dom';


import {  Link } from "react-router-dom";



const baseURL = "http://localhost:8080/listfolders";


export default function Folders() {
  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
      console.log(response.data);

      
      
    });
  }, []);
 
  

  if(!data) return null;

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  

  return (
    
    <div className="main">
        
        <button href="https://webdeasy.de" >Default</button>
        <div>
        
      
      {/* 👇️ iterate object KEYS */}
      {data.map((item, index) => {
        return (
        
          <div >
            
            
            
            <div> 
                <div className="folders">
                        <img className='folder-img'   src={logo} width="200" height="185"
                        
                        alt="error" 
                        onClick = {() => openInNewTab(item.webViewLink)} />
                        <p className='name'>{item.name}</p>      
                </div>
              
              
            </div>
            
          </div>
        );
      })}      
    </div>
    
    </div>
  );
}