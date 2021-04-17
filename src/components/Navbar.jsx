import React, {useEffect} from 'react';
import "../styles/Navbar.css";
import Web from "../screens/Web";
import Other from "../screens/Other";
import Apps from "../screens/Apps";

export default function Navbar(props){
    function changePage(newPage){
        switch (newPage) {
            case "web":
                props.setPage(<Web />)
                break;
            case "apps":
                props.setPage(<Apps />)
                break; 
            case "other":
                props.setPage(<Other />)
                break;
        }
    }
    return (
        <nav>
            <ul className="nav">
                <li className="links" onClick={() => changePage("web")}>Web</li>
                <li className="links" onClick={() => changePage("apps")}>App</li>
                <li className="links" onClick={() => changePage("other")}>Other</li>
            </ul>
        </nav>
    )
}