import React from 'react';
import EditModal from '../EditModal';

const ClientDiv = (props) => {
    var style = {color: "#50e2c1"};

    return (
    <div>
        {/* <div className="client">
            <div className="clientName">{props.fullname}</div> <div className="clientDate">{props.date}</div> <a style={style}>Edit</a>
        </div> */}
        <div className="client">
            <div className="clientName">{props.fullname}</div> <div className="clientDate">{props.date}</div> <EditModal />
        </div>
    </div>
    );
}

export default ClientDiv;   



