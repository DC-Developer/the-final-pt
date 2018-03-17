import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './Client.css';
import Login from '../Login/Login.js';
import Overview from '../../components/Overview/Overview.js';
import Clients from '../../components/Clients/Clients.js';
import MacroB from '../../components/MacroB/MacroB.js';
import { Redirect } from 'react-router';
import $ from 'jquery';

//create a logout button, which will use Link from react-router and redirect
//to the login page.it will also delete the user token

//this will be taken out and stored in a seperate file to export into Client.js
const clientPageImgs = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/logo.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/clientsN.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/sliders.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/overview.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/avatar-1.png"
    }
];
const icons = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/overviewH.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/clients.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/slidersH.png"
    }
];
class Client extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false,
            current_client: '',
            overview: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/overview.png",
            clients: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/clientsN.png",
            breakdown: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/sliders.png"
        }
        this.handleClick = this.handleClick.bind(this);
        this.callApi = this.callApi.bind(this);
        this.onHoverOverview = this.onHoverOverview.bind(this);
        this.onLeaveOverview = this.onLeaveOverview.bind(this);
        this.onHoverClients = this.onHoverClients.bind(this);
        this.onLeaveClients = this.onLeaveClients.bind(this);
        this.onHoverBreakdown = this.onHoverBreakdown.bind(this);
        this.onLeaveBreakdown = this.onLeaveBreakdown.bind(this);
    }
    
    handleClick(e) {
        //should also delete the session token
        this.setState({ redirect: true});

    }
    componentDidMount() {
        this.callApi()
            .then(body => this.setState({ current_client: body.firstName + " " + body.lastName }))
            .catch(err => console.log(err));

    }
    //this api call's purpose is to get the current user info from the database to get the username to use for
    //the user logout/settings div.

    callApi = async () => {
        const user_id = sessionStorage.getItem('myToken');
        const response = await fetch("/api/user/" + JSON.parse(user_id));
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        console.log("client first and last name: ", body.firstname);
        
        return body;
    }
    onHoverOverview() {
        this.setState({ overview: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/overviewH.png" });

    }
    onHoverClients() {
        this.setState({ clients: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/clients.png" });

    }
    onHoverBreakdown() {
        this.setState({ breakdown: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/slidersH.png" });

    }
    onLeaveOverview() {
        this.setState({ overview: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/overview.png" });

    }
    onLeaveClients() {
        this.setState({ clients: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/clientsN.png" });

    }
    onLeaveBreakdown() {
        this.setState({ breakdown: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/sliders.png" });

    }
    render() {
        var logo = clientPageImgs[0];
        var clients = clientPageImgs[1];
        var macro = clientPageImgs[2];
        var overview = clientPageImgs[3];
        var default_pic = clientPageImgs[4];
        //the redirect or logout functionality is buggy and needs to be fixed
        if(this.state.redirect){
            return <Redirect to="/" />
        }

        return (
                <div className="parentElement">
                    <div className="header">
                        <div className="logoDiv">
                            <img src={logo.src} className="logo"/>FIT CLIENT
                        </div>
                        <div className="userDiv">
                                             
                            <a  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.current_client}
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Settings</a>
                                <Link className="dropdown-item" to="/" >Logout</Link>
                               
                            </div>

                            <div className="userPic">
                                <img id="defaultPic"src={default_pic.src}></img>
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="sidebar">
                            <Link to="/client/overview"><img src={this.state.overview} className="clients-pic" onMouseEnter={this.onHoverOverview} onMouseLeave={this.onLeaveOverview}/><p>Overview</p></Link>
                            <Link to="/client/clients"><img src={this.state.clients} className="clients-pic-2" onMouseEnter={this.onHoverClients} onMouseLeave={this.onLeaveClients}/><p>Clients</p></Link>
                            <Link to="/client/macrobreakdown"><img src={this.state.breakdown} className="clients-pic-3" onMouseEnter={this.onHoverBreakdown} onMouseLeave={this.onLeaveBreakdown}/><p className="clients-p-3">Macro Breakdown</p></Link>
                        </div>

                        <div className="childElement">
                            <Switch>
                                <Route path="/client/overview" component={Overview} />
                                <Route path="/client/clients" component={Clients} />
                                <Route path="/client/macrobreakdown" component={MacroB} />
                            </Switch>
                        </div>
                    </div>
                  
                </div>
        );
    }
}

export default Client; 

//if user logins, they will see this page. Therefore the links above should disappear.
//the right picture on the type will render the client user, and have a dropdown menu
//allowing the client to edit their profile and logout of the application