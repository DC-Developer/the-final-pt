import React from 'react';  
import './Clients.css';
import ClientModal from '../ClientModal';
import ClientDiv from '../ClientDiv';

var clients = [];
//this component will need to store data from the api into its state and then call the state and loop through
//the array and dynamically create client divs with client information. --figure out how to automatically 
//make new pages upon reaching the max limit of viewable clients on the page. 

class Clients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clients
        }
        this.callApi = this.callApi.bind(this);
        // this.addedClient = this.addedClient.bind(this);
    }

    componentDidMount() {
        //make the api call inside here and set the state within the api call promise
        this.callApi()
            .then(clients => this.setState({ clients }))
            .catch(err => console.log(err));
            //once this is all done, the state will contain all the clients as an array. now you can use the map
            //method and dynamically add the client divs unto the page

        console.log('component did mount Clients.js state: ', this.state.clients);
    }
    // shouldComponentUpdate(nextState) {
    //     if(nextState !== this.state){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // addedClient() {
    //     //making another api call after the modal is submitted, this will update this page to show the newly
    //     //added divs in realtime. 
    //     this.callApi()
    //     .then(clients => this.setState({ clients }))
    //     .catch(err => console.log(err));
        
    //     console.log('addedClient state: ', this.state.clients);

    // }

    //make the api call to the server to get clients
    callApi = async () => {
        const response = await fetch('/api/clients', { method: 'GET' } );
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        console.log("async callApi from Clients.js: ", body);

        clients = body;

        return clients;
    }

    render(){ 
        console.log('state from Clients.js render: ', this.state.clients);
    return (
        <div>
            <div>
                <div className="h1">Clients</div>
                <ClientModal />
                {/* <ClientModal onClick={this.addedClient}/> */}
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
            <div className="clientList" id="clientDiv">
            {/* dynamically render the client divs with the map function, this is activate based
            off the search bar using jquery */}
                {this.state.clients.map(client => (<ClientDiv fullname={client.fullname} key={client._id}/>))}
            </div>
            {/* potentially feature:
                display modal showing client details upon clicking the client's name  */}
        </div>
    );
 }
}


export default Clients;