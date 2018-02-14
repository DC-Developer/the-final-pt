import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Client.css';
import Overview from '../../components/Overview/Overview.js';
import Clients from '../../components/Clients/Clients.js';
import MacroB from '../../components/MacroB/MacroB.js';

//now that the relations between clients and users, just need to change how we access the
//the api and retrieve the data from the db. make when saving the clients to user, you use
//findOneAndUpdate, pass in an object containing the id of the user, and the second parameter,
//pass in an object with the push method, pushing an object of the clients


const clientPageImgs = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/logo.png"
    }
];
class Client extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            state: {}
        }
    }
    
    render() {
        var logo = clientPageImgs[0];

        return (
            <Router>
                <div className="parentElement">
                    <div className="header">
                        <div className="logoDiv">
                            <img src={logo.src} className="logo"/>FIT CLIENT
                        </div>
                        <div className="userDiv">
                        {/* The user name will be dry coded by passing in the props from the parent 
                        container's state */}
                            <h4>Jane Doe</h4>
                            <div className="userPic">

                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="sidebar">
                            <Link to="/client/overview"><p>Overview</p></Link>
                            <Link to="/client/clients"><p>Clients</p></Link>
                            <Link to="/client/macrobreakdown"><p>Macro Breakdown</p></Link>
                        </div>

                        <div className="childElement">
                            <Route path="/client/overview" component={Overview} />
                            <Route path="/client/clients" component={Clients} />
                            <Route path="/client/macrobreakdown" component={MacroB} />
                        </div>
                    </div>
                  
                </div>
            </Router>
        );
    }
}

export default Client; 

//if user logins, they will see this page. Therefore the links above should disappear.
//the right picture on the type will render the client user, and have a dropdown menu
//allowing the client to edit their profile and logout of the application