import React from 'react';
import './Login.css';

const loginImgs = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/login-hero.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/logo.png"
    }
];


class Login extends React.Component {
    render() {
        var mainImg = loginImgs[0];
        var icon = loginImgs[1];

        return (
            <div className="Login-Alt">
                <img src={mainImg.src} />

                <div className="col-nested-grid">
                    <div className="logoDiv">
                        <img src={icon.src} className="logo"/>FIT CLIENT
                    </div>
                    <div className="oauth2">
                        <h1>Login</h1>
                        <button className="Rectangle-Copy">Facebook</button>
                        <button className="Rectangle-Copy-2">Google</button>
                        
                        <div className="hrDiv">
                            <hr /><p className="hrText">or</p><hr />
                        </div>

                        <form action ="" className="regLog" method="post">
                            <input type="text" placeholder="    Email" className="Rectangle-login" /><br />
                            <input type="text" placeholder="    Password" className="Rectangle-login" /><br />
                            <input type="submit" value="Login" className="Rectangle-Copy-3" />
                        </form>
                    </div>
  
                </div>
            </div>
        );
    }
}

export default Login; 

//the bootstrap grid system just in case css grid system doesn't work
         {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>It's me</p>
                        </div>
                        <div className="col-lg-6">
                            <p>You fucks!</p>
                        </div>
                    </div>
                </div> */}