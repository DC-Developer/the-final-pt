import React from 'react';


const ClientDiv = (props) => {
    return (
    <div>
        <div className="client">
            <div className="clientName">{props.fullname}</div> <div className="clientDate">{props.date}</div> <a>Edit</a>
        </div>
    </div>
    );
}

export default ClientDiv;   