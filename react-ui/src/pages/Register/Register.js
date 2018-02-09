import React from 'react';
import './Register.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const loginImgs = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/login-hero.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/logo.png"
    }
];

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.signup = this.signup.bind(this);
        this.callApi = this.callApi.bind(this);
    }
    signup(res, type) {

        let postData;
        // if(type === 'facebook' && res.email) {
        //     postData = {name: res.name, provider: type, email: res.email, provider_id: res.id, token: res.accessToken, provider_pic: res.provider_pic};
        //     this.callApi(type, postData);
        // }
        // if(type === 'google' && res.w3.U3) {
        //     postData = {name: res.w3.ig, provider: type, email: res.w3.U3, provider_id: res.El, token: res.Zi.access_token, provider_pic: res.w3.Paa};
        //     //^this is what will be posted to the database
        //     this.callApi(type, postData);
        // }
        if(type === 'facebook') {
            postData = {response: res};
            this.callApi(type, postData);
        }
        if(type === 'google') {
            postData = {response: res};
            //^this is what will be posted to the database
            this.callApi(type, postData);
        }

        this.setState({ redirect: true });

    }

    callApi = async (type, client_data) => {
        const response = await fetch("/oauth/"+type, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},  
            body: JSON.stringify(client_data)
        })
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        console.log("login.js callApi: ", body);
    
        return body;
        //maybe use custom promise to resolve and reject
    }
    
    
    render() {

        var mainImg = loginImgs[0];
        var icon = loginImgs[1];

        const responseGoogle = (response) => {
            console.log("reponseGoogle: ",response);
             this.signup(response, 'google');
        }
        const responseFacebook = (response) => {
            console.log(response);
             this.signup(response, 'facebook');
        }

        return (
            <div className="Register-Alt">
                <img src={mainImg.src} />

                <div className="col-nested-grid">
                    <div className="loginLogoDiv">
                        <img src={icon.src} className="loginLogo"/>FIT CLIENT
                    </div>
                    <div className="oauth2Reg">
                        <h1>Register</h1>
                        <FacebookLogin
                            appId="175418049620583"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            icon="fa-facebook"
                            cssClass="Rectangle-Copy"
                        />      
                        <GoogleLogin
                            clientId="559169765800-3o3ge3ehthqa344cb0feq38a5occr13d.apps.googleusercontent.com"
                            buttonText="Register with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            className="Rectangle-Copy-2"
                        />            
                        
                        <div className="hrDiv">
                            <hr /><p className="hrText">or</p><hr />
                        </div>

                        <form action="/api/register" className="regForm" method="post">
                            <input type="text" placeholder="    First Name" name="firstname" className="Rectangle-register" /><br />
                            <input type="text" placeholder="    Last Name" name="lastname" className="Rectangle-register" /><br />
                            <input type="text" placeholder="    Email" name="email" className="Rectangle-register" /><br />
                            <input type="password" placeholder="    Password" name="password" className="Rectangle-register" /><br />
                            <input type="submit" value="Register" className="Rectangle-Copy-3" />
                        </form>
                    </div>
  
                </div>
            </div>
        );
    }
}

export default Register; 