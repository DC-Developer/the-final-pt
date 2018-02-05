import React from 'react';


const ClientDiv = (props) => {
    return (
    <div>
        <div className="client">
            <div className="clientName">{props.fullname}</div> <div className="clientDate">11-14-2017</div> <a>Edit</a>
        </div>
    </div>
    );
}

export default ClientDiv;   