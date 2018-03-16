import React from 'react';
import './Overview.css';
//this component will be setting the size for the client page
import Link from 'react-router-dom';
import EditModalOverview from '../EditModalOverview';

var clients = [];

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients
        };
        this.callApi = this.callApi.bind(this);
        this.saveClient = this.saveClient.bind(this);
    }
    componentDidMount() {
        this.callApi()
            .then(clients => this.setState({ clients }) )
            .catch(err => console.log(err));
        console.log("overview state: ", this.state.clients);
    }

    callApi = async () => {
        var user_id = sessionStorage.getItem("myToken");
        var response = await fetch("/api/clients/" + JSON.parse(user_id), { method: "GET"} );

        var body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        clients = body;
        return clients;
    }
    saveClient() {
        this.callApi()
        .then(clients => this.setState({ clients }))
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div>

                    <div>
                        <div className="h1" id="overview">Overview</div>
                    </div>
                    <div className="overview-container">
                        <div className="overview-div" id="clients">
                            <div className="overview-div-container">
                                <div className="overview-div-header">Recently added clients</div>
                                            {/* map through the state of recently added clients and create divs here */}
                                            {/* test data */}

                                    {this.state.clients.map(client => <div><div className="client-div" id={client._id}>{client.fullname}</div><EditModalOverview clientData={client} saveClient={this.saveClient} id={client._id}/></div>)}
                                
                                <a id="view-all" href="/client/clients">View All</a>
                            </div>
                        </div>
                        <div className="overview-div" id="appointments">
                            <div className="overview-div-container">
                                <div className="overview-div-header">Upcoming appointments</div>

                                            {/* test data */}
                                <a id="view-all" href="#">View All</a>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

export default Overview;