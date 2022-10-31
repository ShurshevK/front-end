import ReactDOM from "react-dom";
import { BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";


import Dashboard from "./pages/dashboard";

import Contents from "./pages/contents";






  


  
export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contents" element={<Contents />} />
          
          
          
          
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
  