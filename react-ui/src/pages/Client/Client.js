import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Client.css';

const clientPageImgs = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/logo.png"
    }
];
class Client extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
            
    //     }
    // }
    
    render() {
        var logo = clientPageImgs[0];

        return (
            <Router>
                <div className="parentElement">
                    <div className="header">
                        <div className="logoDiv">
                            <img src={logo.src} className="logo"/>FIT CLIENT
                        </div>
                        <div className="userPic">
                            Jane Doe
                        </div>
                    </div>
                    <div>
                        {/* <Link><li>Overview</li></Link>
                        <Link><li>Clients</li></Link>
                        <Link><li>Macro Breakdown</li></Link> */}
                        <p>Overview</p>
                        <p>Clients</p>
                        <p>Macro Breakdown</p>
                    </div>

                    <div className="childElement">
                        
                    </div>
                    
                </div>
            </Router>
        );
    }
}

export default Client; 