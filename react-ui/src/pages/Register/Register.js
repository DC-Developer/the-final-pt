import React from 'react';
import './Register.css';

const loginImgs = [
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/login-hero.png"
    },
    {
        src: "https://raw.githubusercontent.com/DC-Developer/the-final-pt/master/react-ui/src/imgs/logo.png"
    }
];

class Register extends React.Component {
    render() {

        var mainImg = loginImgs[0];
        var icon = loginImgs[1];

        return (
            <div className="Register-Alt">
                <img src={mainImg.src} />

                <div className="col-nested-grid">
                    <div className="loginLogoDiv">
                        <img src={icon.src} className="loginLogo"/>FIT CLIENT
                    </div>
                    <div className="oauth2Reg">
                        <h1>Register</h1>
                        <button className="Rectangle-Copy">Facebook</button>
                        <button className="Rectangle-Copy-2">Google</button>
                        
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