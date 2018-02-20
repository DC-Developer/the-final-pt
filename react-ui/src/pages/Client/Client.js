import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Client.css';
import Overview from '../../components/Overview/Overview.js';
import Clients from '../../components/Clients/Clients.js';
import MacroB from '../../components/MacroB/MacroB.js';
import { Redirect } from 'react-router';


//create a logout button, which will use Link from react-router and redirect
//to the login page.it will also delete the user token

const clientPageImgs = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/logo.png"
    }
];
class Client extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        //should also delete the session token
        this.setState({ redirect: true});
    }


    render() {
        var logo = clientPageImgs[0];

        if(this.state.redirect){
            return <Redirect to="/login" />
        }

        return (
            <Router>
                <div className="parentElement">
                    <div className="header">
                        <div className="logoDiv">
                            <img src={logo.src} className="logo"/>FIT CLIENT
                        </div>
                        <div className="userDiv">
                        {/* we could just access the saved token in the session storage and query the db for the user, get the user info and/or picture */}
                        
                                                        
                            <a  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                User_Name
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Settings</a>
                                <a className="dropdown-item" to="/logout" onClick={this.handleClick}>Logout</a>
                            </div>

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