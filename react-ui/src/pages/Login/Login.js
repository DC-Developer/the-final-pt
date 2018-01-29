import React from 'react';
import './Login.css';

const loginImgs = [
    {
        src: "../../imgs/login-hero.png"
    },
    {
        src: "../../imgs/logo.png"
    }
];


class Login extends React.Component {
    render() {
        var mainImg = loginImgs[0];
        var icon = loginImgs[1];

        return (
            <div className="Login-Alt">
                <img src={mainImg.src} />
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