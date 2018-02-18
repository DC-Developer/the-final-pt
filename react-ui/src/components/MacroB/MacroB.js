import React from 'react';
import './MacroB.css';
import GeneratedMacros from '../GeneratedMacros';

//this component will be setting the size for the client page

class MacroB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: {}
        }
        this.generateMacros = this.generateMacros.bind(this);
    }

    generateMacros() {
        return 165;
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
                 
                 <GeneratedMacros generateMacros={this.generateMacros} />

             </div>
            

         </div>
     );
 }
}

export default MacroB;


// ---!!IMPORTANT NOTE!!---

//potentially going to have to render the body to be a different size in here, and then import the
//browser router, route and link from react-router-dom and implement it in this component.