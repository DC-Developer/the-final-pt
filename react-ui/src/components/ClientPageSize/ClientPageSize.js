import React from 'react';
import './ClientPageSize.css';

//this component will be setting the size for the client page

const ClientPageSize = ({children}) => {
    return (
        <div className="body">
            {children}
        </div>
    );
}

export default ClientPageSize;