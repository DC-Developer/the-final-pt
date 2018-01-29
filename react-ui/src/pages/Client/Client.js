import React from 'react';

class Client extends React.Component {
    render() {

        return (
            <div>
                I AM THE CLIENT PAGE, YOU FUCK!

                {this.props.message}
            </div>
        );
    }
}

export default Client; 