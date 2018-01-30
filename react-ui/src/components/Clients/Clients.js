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
            <div>
                <input type="text" value="  Search" className="clientSearch" />
            </div>
            <div className="cRow">
                <div className="c1" >Name</div> <div className="c2" >Date Added</div> <div className="c3" >Actions</div>
            </div>
        </div>
    );
}

export default Clients;