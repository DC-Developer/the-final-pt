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
                {/* need to add magnifying glass */}
                <input type="text" value="  Search" className="clientSearch" />
            </div>
            <div className="cRow">
                <div className="c1" >Name</div> <div className="c2" >Date Added</div> <div className="c3" >Actions</div>
            </div>
            <div className="clientList">
                <div className="client">
                    <div className="clientName">John Doe</div> <div className="clientDate">11-14-2017</div> <a>Edit</a>
                </div>
                <div className="client">
                    <div className="clientName">Bilbo Baggins</div> <div className="clientDate">11-14-2017</div> <a>Edit</a>
                </div>
            </div>
        </div>
    );
}

export default Clients;