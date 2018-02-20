import React from 'react';
import './MacroB.css';
import GeneratedMacros from '../GeneratedMacros';
import ClientDropDown from '../ClientDropDown';
//this component will be setting the size for the client page
import $ from 'jquery';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var clients = [];
var options ;

class MacroB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients,
            selected: ''
        }

        this.generateTrainingProtein = this.generateTrainingProtein.bind(this);
        this.generateTrainingCarbs = this.generateTrainingCarbs.bind(this);
        this.generateTrainingFats = this.generateTrainingFats.bind(this);

        this.generateRestProtein = this.generateRestProtein.bind(this);
        this.generateRestCarbs = this.generateRestCarbs.bind(this);
        this.generateRestFats = this.generateRestFats.bind(this);

        this.callApi = this.callApi.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createOptions = this.createOptions.bind(this);
    }

    componentDidMount() {
        //put the api call here to retrieve the data from the server. then
        //map through the clients array and making a dropdown element for each
        //client in the drop down box of the client search bar


        this.callApi()
            .then(clients => {
                this.setState({ clients })
                console.log("MacroB state: ", this.state.clients);

            })
            .catch(err => console.log(err));

        
    }
    //createOptions is an Object Contructor used to create the options in the imported Select component 
    createOptions(value, label) {
        this.value = value;
        this.label = label;
    }

    handleChange(e) {
        
        this.setState({ selected: e.target.value });
        var selected_client = document.querySelector("#selectedClient").value;
        var target_height = document.getElementById("macroHeight").value = selected_client;
       
        console.log("selected_client: ", selected_client);
    }

    callApi = async () => {
        const id = JSON.parse(sessionStorage.getItem('myToken'));
        const response = await fetch('/api/clients/'+ id, { method: "GET"} );
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log("async callApi from MacroB.js: ", body);

        clients = body;

        return clients;


    }
//I could not find a way to target the specific element the function was being sent to
//so I had to make a function for each specific element. I will try and find a better 
//solution later and refactor my code when I do.

//these functions will also contain the selected client information that is stored in the state
//and use that data to perform calculations

    generateTrainingProtein() {
        return 168;
    }
    generateTrainingCarbs() {
        return 350;
    }
    generateTrainingFats() {
        return 59;
    }

    generateRestProtein() {
        return 168;
    }
    generateRestCarbs() {
        return 78;
    }
    generateRestFats() {
        return 59;
    }


    render(){
        console.log("Macrob id token: ", sessionStorage.getItem('myToken'));
        console.log("MacroB clients: ", clients);
        console.log("selected client: ", this.state.selected);
     return (
         <div>
            <div className="macroTitle">
                Macro Nutrient Breakdown
            </div> 

             {/* this input field will dynamically render the client based off what was typed, and also have
             a dropdown menu showing all the clients associated with the letters, which will render 
             automatically and have visibility: extend for scrollable searching */}
             <div className="macroForm" > 

                 <div className="clientSearchBar">
                                                     {/* add designs for the select drop down later */}
                     {/* <input placeholder="Search for a client"/>  */}
                     {/* this is where we are going to use the map method to render all clients associated with user */}
                        <select onChange={this.handleChange} id="selectedClient">
                            <option selected disabled value="">Choose a Client</option>
                            {this.state.clients.map(client => {
                                return(
                                    <option value={client.fullname} key={client._id}>
                                        {client.fullname}
                                    </option>
                                );
                            })}
                        </select>
                 </div>   
                
                 <div className="genDiv">
                    <section>
                         <div className="macroHeaders">Height</div>
                         <input className="macroHeight" id="macroHeight"/>
                     </section>
                     <section>
                         <div className="macroHeaders">Weight</div>
                         <input className="macroWeight" id="macroWeight"/>
                     </section>
                     <section>
                         <div className="macroHeaders">Body Fat</div>
                         <input className="macroBfat" id="macroFat"/>
                     </section>
                     <button className="generateB">
                         GENERATE BREAKDOWN
                     </button>
                 </div>
                 <div className="Line">

                 </div>

                 <GeneratedMacros 
                    generateTrainingProtein={this.generateTrainingProtein} 
                    generateTrainingCarbs={this.generateTrainingCarbs} 
                    generateTrainingFats={this.generateTrainingFats} 

                    generateRestProtein={this.generateRestProtein} 
                    generateRestCarbs={this.generateRestCarbs} 
                    generateRestFats={this.generateRestFats} 
                 />

             </div>
            

         </div>
     );
 }
}

export default MacroB;


// ---!!IMPORTANT NOTE!!---

//potentially going to have to render the body to be a different size in here, and then import the
//browser router, route and link from react-router-dom and implement it in this component.