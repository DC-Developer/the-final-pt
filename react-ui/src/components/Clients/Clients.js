import React from 'react';  
import './Clients.css';
import ClientModal from '../ClientModal';
import ClientDiv from '../ClientDiv';
import $ from 'jquery';
//replace jquery with vanilla js

var clients = [];

class Clients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clients,
            added_client: false
        }
        this.callApi = this.callApi.bind(this);
        this.addClient = this.addClient.bind(this);
        this.fade = this.fade.bind(this);
        this.removeInterstitial = this.removeInterstitial.bind(this);
        this.saveClient = this.saveClient.bind(this);
    }

    componentDidMount() {
        this.callApi()
            .then(clients => this.setState({ clients }))
            .catch(err => console.log(err));
    }
    // shouldComponentUpdate(nextState) {
    //     if(nextState !== this.state){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    callApi = async () => {
        const id = sessionStorage.getItem('myToken');
        const response = await fetch('/api/clients/' + JSON.parse(id), { method: 'GET' } );
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        clients = body;

        return clients;
    }
    saveClient() {
        this.callApi()
            .then(clients => this.setState({ clients }))
            .catch(err => console.log(err));
    }
    fade() {
        $(".client-added-div").fadeOut().empty(); 
    }
    removeInterstitial() {
        $(".container").remove();
        var client_added_div = $("<div>").addClass("client-added-div");
        client_added_div.text("Client added!");
        
        $(document.body).prepend(client_added_div);
    }
    addClient() {
        
        this.callApi()
            .then(clients => {
                setTimeout(this.removeInterstitial, 2000);
                setTimeout(this.fade, 3000);
            
                this.setState({ clients })
            })
            .catch(err => console.log(err));
    }

    render(){ 
        return (
            <div id="clientsContainer">
                <div>
                    <div className="h1">Clients</div>
                    <ClientModal addClient={this.addClient} />
                </div>
                <div>
                    <input type="text" placeholder="  Search" className="clientSearch" />
                </div>
                <div className="cRow">
                    <div className="c1" >Name</div> <div className="c2" >Date Added</div> <div className="c3" >Actions</div>
                </div>
                <div className="clientList" id="clientDiv">
                    {this.state.clients.map(client => (<ClientDiv clientData={client} fullname={client.fullname} date={client.formatted_date} saveClient={this.saveClient}key={client._id}/>))}
                </div>
            </div>
        );
 }
}

export default Clients;
