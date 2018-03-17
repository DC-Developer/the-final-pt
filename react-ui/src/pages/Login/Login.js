import React from 'react';
import './Login.css';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router';
//take off console logs of any user information
//dry up the code by making a seperate file to store our img files in an array of objects
const loginImgs = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/login-hero.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/logo.png"
    }
];


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form_values: {},
            token: null,
            redirect: false
        }
        this.signup = this.signup.bind(this);
        this.callApi = this.callApi.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    //type has to be specified here, since we're taking the response
    //from google or facebook, we will have to put conditionals with 
    //logic specific to fb or google since they send different responses
    signup(res, type) {

        let postData;
        if(type === 'facebook' && res.email) {
            postData = {name: res.name, provider: type, email: res.email, provider_id: res.id, token: res.accessToken, provider_pic: res.provider_pic};
            this.callApi(type, postData);
        }
        if(type === 'google' && res.w3.U3) {
            postData = {name: res.w3.ig, provider: type, email: res.w3.U3, provider_id: res.El, token: res.Zi.access_token, provider_pic: res.w3.Paa};
            //^this is what will be posted to the database
            this.callApi(type, postData);
        }

        // this.setState({ redirect: true });

    }

    callApi = async (type, client_data) => {
        
        return new Promise((resolve, reject) => {
            fetch("/api/"+type, {
                method: 'POST',
                body: JSON.stringify(client_data)
            })
            .then(response => response.json())
            .then(res => {
                resolve(res)    
            })

            .catch(err => {
                reject(err);
            })
        })
        // const response = await fetch("/oauth/"+type, {
        //     method: 'POST',
        //     body: JSON.stringify(client_data)
        // })
        // const body = await response.json();

        // if (response.status !== 200) throw Error(body.message);

        // console.log("login.js callApi: ", body);
    

        // return body;
        //maybe use custom promise to resolve and reject
    }
    //instead of making duplicate on change functions and re-writing the jsx for the 
    //form, make a form component.
    onChange (e) {
        let form_values = this.state.form_values;
        let name = e.target.name; 
        let value = e.target.value;

        form_values[name] = value;

        this.setState({ form_values })
    }
   //this will be used in a different page 
    onSubmit (e) {
        e.preventDefault();

        fetch('/oauth/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state.form_values)
        })
        .then(res => res.json())
        .then(data => {
            
            //now save the res into the state
            var stringData = JSON.stringify(data.token);
            var cachedToken = sessionStorage.setItem('myToken', stringData);
            //definitely change this in the future
            var readToken = sessionStorage.getItem('myToken');

            this.setState({ token: JSON.parse(readToken) });
            console.log('login token: ', this.state.token + " || redirect: ", this.state.redirect);

            // this.onSuccess();
            
        })
        .catch(err => console.log(err));
    }
//this function will take the token from the local storage and call the api route for token verification
    onSuccess = async () => {
        //this function will be used to verify the user token
        var token = sessionStorage.getItem('myToken');
        console.log('token from onSuccess() : ', token);
        //be sure to add the refresh token later
        
        //change the route name
        fetch('/apiTwo/verify', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "x-access-token": token
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }
//make a function that will handle the click of the register button and redirect 
//them to the register page

    handleClick(e) {
        
        console.log(e);

        this.setState({ redirect: true });
        console.log(this.state.redirect);
    }


    render() {
        var mainImg = loginImgs[0];
        var icon = loginImgs[1];
        //need to edit the redirect
        const { redirect } = this.state.redirect;
        console.log('redirect from render: ', redirect);
        console.log("this.state.token: ", this.state.token);
        //this is potentially where it's messing up at
        if(this.state.token){
            return <Redirect to='/client/clients' />
        }

        if(this.state.redirect){

            return <Redirect to="/register"/>
        }


        const responseGoogle = (response) => {
            console.log(response);
             this.signup(response, 'google');
        }
        const responseFacebook = (response) => {
            console.log(response);
             this.signup(response, 'facebook');
        }
        //after the response, we need to trigger our api to authenthicate
        //the credentials

        return (
            <div className="Login-Alt">
                <img src={mainImg.src} />

                <div className="col-nested-grid">
                    <div className="loginLogoDiv">
                        <img src={icon.src} className="loginLogo"/>FIT CLIENT
                    </div>
                    <div className="oauth2">
                        <h1>Login</h1>
                        <FacebookLogin
                            appId="175418049620583"
                            // autoLoad={true}
                            buttonText="Login with Facebook"
                            fields="name,email,picture"
                            callback={responseFacebook}
                            icon="fa-facebook"
                            cssClass="Rectangle-Copy"
                            
                        />

                        <GoogleLogin
                            clientId="559169765800-3o3ge3ehthqa344cb0feq38a5occr13d.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            className="Rectangle-Copy-2"
                        />
 </div>
                        <div className="hrDiv">
                            <hr /><p className="hrText">or</p><hr />
                        </div>
{/* for refactoring: make the form into a component */}
{/* perhaps make functions to recieve the response, aka the jwt, and store it in the state */}
                       {/* <form action="/oauth/login" className="regLog" method="post"> */}
                       <form className="regLog" onSubmit={this.onSubmit}>
                            <input type="text" placeholder="    Email" name="email" className="Rectangle-login" onChange={this.onChange} /><br />
                            <input type="password" placeholder="    Password" name="password" className="Rectangle-login"onChange={this.onChange} /><br />
                            <button type="submit" className="Rectangle-Copy-3" >Login</button>
                        </form>
                   
                        <div className="hrDiv">
                            <hr /><p className="hrText">or</p><hr />
                        </div>

                        <button className="Rectangle-Copy-4" onClick={this.handleClick}>Register</button>
  
                </div>
            </div>
        );
    }
}

export default Login; 
