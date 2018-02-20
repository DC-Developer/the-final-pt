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
            selected: '',
            generate: false
        }

        this.generateTrainingProtein = this.generateTrainingProtein.bind(this);
        this.generateTrainingCarbs = this.generateTrainingCarbs.bind(this);
        this.generateTrainingFats = this.generateTrainingFats.bind(this);

        this.generateRestProtein = this.generateRestProtein.bind(this);
        this.generateRestCarbs = this.generateRestCarbs.bind(this);
        this.generateRestFats = this.generateRestFats.bind(this);

        this.callApi = this.callApi.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
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
        var cleaned ;
        var selected_client = document.querySelector("#selectedClient").value;
        var target_height = document.getElementById("macroHeight").value = this.state.clients.map(client => {
            if(client.fullname === selected_client){
                // console.log("Training protein: ", this.generateTrainingProtein(client.weight));
                console.log("client_height: ", client.height);
                return client.height;
            }
        });
        var target_weight = document.getElementById("macroWeight").value = this.state.clients.map(client => {
            if(client.fullname === selected_client){
                console.log("client_weight: ", client.weight);
                return client.weight;
            }
        });
        var target_bodyfat = document.getElementById("macroFat").value = this.state.clients.map(client => {
            if(client.fullname === selected_client){
                console.log("client_bodyfat: ", client.bodyfat);
                return client.bodyfat;
            }
        })
        
       
        console.log("selected_client: ", selected_client);
    }

    onClick() {
        this.setState({ generate: !this.state.generate });
        console.log("generate state: ", this.state.generate);

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
//and use that data to perform calculations. we are going to use this.state.selected for the conditional
//to filter the this.state.clients

    generateTrainingProtein() {
        //use ratio of 1.2g of protein per pound of bodyweight
        
        let current_client_weight = this.state.clients.map(client => {
            if(this.state.selected === client.fullname){
                console.log("clientweight: ", client.weight);
                return client.weight;
            }
        });

        return ( parseInt(current_client_weight)* 1.2);
    }
    generateTrainingCarbs() {
        
        let current_client_weight = this.state.clients.map(client => {
            if(this.state.selected === client.fullname){
                return client.weight;
            }
        });

        return (parseInt(current_client_weight)*1.75);
    }
    
    generateTrainingFats() {
        
        let current_client_weight = this.state.clients.map(client => {
            if(this.state.selected === client.fullname){
                return client.weight;
            }
        });
        return (parseInt(current_client_weight)/3);
    }

    generateRestProtein() {
        //use ratio of 0.8g proten per pound
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
                     <button className="generateB" onClick={this.onClick}>
                         GENERATE BREAKDOWN
                     </button>
                 </div>
                 <div className="Line">

                 </div>
          
                 <GeneratedMacros 
                    generate={this.state.generate}
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