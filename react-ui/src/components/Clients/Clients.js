import React from 'react';
import './Clients.css';
import ClientModal from '../ClientModal';

const clients = [];
//this component will need to store data from the api into its state and then call the state and loop through
//the array and dynamically create client divs with client information. --figure out how to automatically 
//make new pages upon reaching the max limit of viewable clients on the page. 

class Clients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clients
        }
       
    }

    componentDidMount() {
        //make the api call inside here and set the state within the api call promise
        this.callApi()
            .then(clients => this.setState({ clients }))
            .catch(err => console.log(err));
            //once this is all done, the state will contain all the clients as an array. now you can use the map
            //method and dynamically add the client divs unto the page

        console.log('state: ', this.state.clients);
    }
    //make the api call to the server to get clients
    callApi = async () => {
        const response = await fetch('/api/clients', { method: 'GET' } );
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        console.log("react server: ", body);

        clients = body;

        return clients;
    }


    render(){ 
    return (
        <div>
            <div>
                <div className="h1">Clients</div>
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
                {this.state.clients.map(client => <p>{client.fullname}</p>)}
            </div>
            {/* potentially feature:
                display modal showing client details upon clicking the client's name  */}
        </div>
    );
 }
}

export default Clients;