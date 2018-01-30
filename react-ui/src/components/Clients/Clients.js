import React from 'react';
import './Clients.css';
//this component will be setting the size for the client page

const Clients = (props) => {
    return (
        <div>
            <div>
                <div className="h1">Clients</div>
                <button className="addClient">
                    ADD CLIENT
                </button>
            </div>
        </div>
    );
}

export default Clients;