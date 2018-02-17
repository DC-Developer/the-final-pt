import React from 'react';
import './GeneratedMacros.css';


const GeneratedMacros = (props) => {
   
   return (
   <div className="generated_macros" >
    {/* left margin is 50, right margin is 54         */}
        <button className="export_button" >
            EXPORT AS...
        </button>

        <div className="macro_info" >
            <h2>Training Day</h2>
            <div> <h3>Protein</h3> <h3>{}</h3> </div>
            <div> <h3>Carbs</h3> <h3>{}</h3> </div>
            <div> <h3>Fats</h3> <h3>{}</h3> </div>
        </div>

        <div className="macro_info" >
            <h2>Rest</h2>
            <div> <h3>Protein</h3> <h3>{}</h3> </div>
            <div> <h3>Carbs</h3> <h3>{}</h3> </div>
            <div> <h3>Fats</h3> <h3>{}</h3> </div>
        </div>
    </div>
   );
}

export default GeneratedMacros;