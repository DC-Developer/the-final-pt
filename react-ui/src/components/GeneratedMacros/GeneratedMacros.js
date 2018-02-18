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
            <h2 className="macTitle">Training Day</h2>
            <div> <h3 className="macLabel">Protein</h3> <div className="macData">{props.generateMacros()}</div> </div>
            <div> <h3 className="macLabel">Carbs</h3> <div className="macData">{}</div> </div>
            <div> <h3 className="macLabel">Fats</h3> <div className="macData">{}</div> </div>
        </div>

        <div className="macro_info2" >
            <h2 className="macTitle">Rest</h2>
            <div> <h3 className="macLabel">Protein</h3> <h3 className="macData">{}</h3> </div>
            <div> <h3 className="macLabel">Carbs</h3> <h3 className="macData">{}</h3> </div>
            <div> <h3 className="macLabel">Fats</h3> <h3 className="macData">{}</h3> </div>
        </div>
    </div>
   );
}

export default GeneratedMacros;