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
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/clients.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/sliders.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/layouts%20%2B%20imgs/imgs/chart.png"
    }
];
class Client extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false,
            current_client: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.callApi = this.callApi.bind(this);
    }
    
    handleClick(e) {
        //should also delete the session token
        this.setState({ redirect: !this.state.redirect});
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

    render() {
        var logo = clientPageImgs[0];
        var clients = clientPageImgs[1];
        var macro = clientPageImgs[2];
        var overview = clientPageImgs[3];
        //the redirect or logout functionality is buggy and needs to be fixed
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
                                             
                            <a  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.current_client}
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
                            <Link to="/client/overview"><img src={overview.src} className="clients-pic" /><p>Overview</p></Link>
                            <Link to="/client/clients"><img src={clients.src} className="clients-pic-2" /><p>Clients</p></Link>
                            <Link to="/client/macrobreakdown"><img src={macro.src} className="clients-pic-3" /><p className="clients-p-3">Macro Breakdown</p></Link>
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