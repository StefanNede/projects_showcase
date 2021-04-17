import React, {useState} from 'react';
import Web from "./screens/Web";
import Other from "./screens/Other";
import Apps from "./screens/Apps";
import Navbar from "./components/Navbar";
import "./styles/Index.css";

function App() {
  // is on the web projects by default
  const [page, setPage] = useState(<Web />);
  return (
    <div>
      <Navbar page={page} setPage={setPage}/>
      {page}
    </div>
  );
}

export default App;
