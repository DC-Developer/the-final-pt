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
            <div> <h3 className="macLabel" id="training_protein">Protein</h3> <div className="macData" id="mac_data">{props.generateTrainingProtein()}</div> </div>
            <div> <h3 className="macLabel" id="training_carbs">Carbs</h3> <div className="macData" id="mac_data">{props.generateTrainingCarbs()}</div> </div>
            <div> <h3 className="macLabel" id="training_fats">Fats</h3> <div className="macData" id="mac_data">{props.generateTrainingFats()}</div> </div>
        </div>

        <div className="macro_info2" >
            <h2 className="macTitle">Rest</h2>
            <div> <h3 className="macLabel" id="rest_protein">Protein</h3> <h3 className="macData">{props.generateRestProtein()}</h3> </div>
            <div> <h3 className="macLabel" id="rest_carbs">Carbs</h3> <h3 className="macData">{props.generateRestCarbs()}</h3> </div>
            <div> <h3 className="macLabel" id="rest_fats">Fats</h3> <h3 className="macData">{props.generateRestFats()}</h3> </div>
        </div>
    </div>
   );
}

export default GeneratedMacros;