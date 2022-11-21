
import "../styles/contents.css"
import axios from "axios";
import React, { useState } from "react";
import logo from "../assets/Credo.png"





const baseURL = "https://credo-library.herokuapp.com/listfiles";


export default function Content() {
  
  const [data, setData] = React.useState(null);
  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
      console.log(response.data);

      
      
    });
  }, []);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
 
  const FALLBACK_IMAGE = logo;

  const imageOnLoadHandler = (event) => {
    console.log(
      `The image with url of ${event.currentTarget.src} has been loaded`
    );
    if (event.currentTarget.className !== "error") {
      event.currentTarget.className = "success";
    }
}
const imageOnErrorHandler = (event) => {
    event.currentTarget.src = FALLBACK_IMAGE;
    event.currentTarget.className = "error";
};

  

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  

  return (
    <div className="Content"> 
      <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter book name or level"
          value={wordEntered}
          onChange={handleFilter}
        />
        </div>
        {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((item, index) => {
        return (
          <div >
            
            <div> 
              <ul className="align">
					      <li>
						      <figure class='book'>

             {/*front */}

                    <ul className='hardcover_front'>
                        <li>
                          <div className="coverDesign blue">
                          <img   src={item.thumbnailLink} 
                    onLoad={imageOnLoadHandler}
                    onError={imageOnErrorHandler}
                    alt="error" 
                    onClick = {() => openInNewTab(item.webViewLink)} />
                            
                          </div>
                        </li>
                        <li></li>
                      </ul>
                      {/*pages */}
                      <ul className='page'>
                        <li></li>
                        <li>
                          <a className="btn" href="#" onClick = {() => openInNewTab(item.webViewLink)}>Preview</a>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <ul class='hardcover_back'>
                        <li></li>
                        <li></li>
                      </ul>
                      <ul class='book_spine'>
                        <li></li>
                        <li></li>
                      </ul>
                      <figcaption>
                        <p>{item.name}</p>
                      </figcaption>


                  </figure>
                </li>
              </ul>
             
 
            </div>
            
            
            
          </div>
        );
      })}  
      </div> 
      )}
      </div>
      </div>      
      
        
    
  );
}
