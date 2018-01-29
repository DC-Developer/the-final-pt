import React from 'react';
import './SitePage.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//this component will be setting the size for the client page
const clientPageImgs = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/logo.png"
    }
];

const SitePage = ({ children }) => {
    return (
        <Router>
        <div className="parentElement">
            <div className="header">
                    <div className="logoDiv">
                        <img src={clientPageImgs[0].src} className="logo"/>FIT CLIENT
                    </div>

                <div className="userPic">
                    Jane Doe
                </div>
            </div>
            {/* <ul>
                <Link><li>Overview</li></Link>
                <Link><li>Clients</li></Link>
                <Link><li>Macro Breakdown</li></Link>
            </ul> */}
        </div>
        </Router>
    );
}

export default SitePage;