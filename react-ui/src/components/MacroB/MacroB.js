import React from 'react';
import './MacroB.css';
import GeneratedMacros from '../GeneratedMacros';
import $ from 'jquery';
//this component will be setting the size for the client page

var clients = [];

class MacroB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients
        }

        this.generateTrainingProtein = this.generateTrainingProtein.bind(this);
        this.generateTrainingCarbs = this.generateTrainingCarbs.bind(this);
        this.generateTrainingFats = this.generateTrainingFats.bind(this);

        this.generateRestProtein = this.generateRestProtein.bind(this);
        this.generateRestCarbs = this.generateRestCarbs.bind(this);
        this.generateRestFats = this.generateRestFats.bind(this);

        this.callApi = this.callApi.bind(this);
    }

    componentDidMount() {
        //put the api call here to retrieve the data from the server. then
        //map through the clients array and making a dropdown element for each
        //client in the drop down box of the client search bar
    }

    callApi = async () => {
        const user_id = sessionStorage.getItem('myToken');
        const response = await fetch("/api/userclients"+ user_id, {
            method: "GET"
        });
        const body = await response.json();

        console.log("async callApi from MacroB.js: ", body);

        clients = body;

        return clients;


    }
//I could not find a way to target the specific element the function was being sent to
//so I had to make a function for each specific element. I will try and find a better 
//solution later and refactor my code when I do.

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
                     <input placeholder="Search for a client"/> <select></select>
                 </div>   
                
                 <div className="genDiv">
                    <section>
                         <div className="macroHeaders">Height</div>
                         <input className="macroHeight" />
                     </section>
                     <section>
                         <div className="macroHeaders">Weight</div>
                         <input className="macroWeight" />
                     </section>
                     <section>
                         <div className="macroHeaders">Body Fat</div>
                         <input className="macroBfat" />
                     </section>
                     <button className="generateB">
                         GENERATE BREAKDOWN
                     </button>
                 </div>
                 <div className="Line">

                 </div>
                 {/* need to call the map method on this.state.client and then use the GeneratedMacros component */}
                 
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