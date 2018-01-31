import React from 'react';
import './Clients.css';
import ClientModal from '../ClientModal';
//this component will be setting the size for the client page

const Clients = (props) => {
    return (
        <div>
            <div>
                <div className="h1">Clients</div>
                {/* <button className="addClient">
                    ADD CLIENT
                </button> */}
                <ClientModal />
            </div>
            <div>
                {/* need to add magnifying glass, add in eventhandler that will query the data
                base and default to display all clients and render them below. When a user starts
                entering in letters, change the client grid field to filter out anything that doesn't
                have that letter*/}
                <input type="text" placeholder="  Search" className="clientSearch" />
            </div>
            <div className="cRow">
            {/* need to add drop down */}
                <div className="c1" >Name</div> <div className="c2" >Date Added</div> <div className="c3" >Actions</div>
            </div>
            <div className="clientList">
            {/* dynamically render the client divs with the map function, this is activate based
            off the search bar using jquery */}
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