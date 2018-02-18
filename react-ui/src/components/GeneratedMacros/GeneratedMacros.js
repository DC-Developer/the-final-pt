import React from 'react';
import './GeneratedMacros.css';


const GeneratedMacros = (props) => {
   


   return (
   <div className="generated_macros" >
    {/* implement drop down menu later */}
        <button className="export_button" >
            EXPORT AS...
        </button>

        <div className="macro_info" >
            <h2 className="macTitle">Training Day</h2>
            <div> <h3 className="macLabel" >Protein</h3> <div className="macData" id="mac_data">{props.generateTrainingProtein()}</div> </div>
            <div> <h3 className="macLabel" >Carbs</h3> <div className="macData" id="mac_data">{props.generateTrainingCarbs()}</div> </div>
            <div> <h3 className="macLabel" >Fats</h3> <div className="macData" id="mac_data">{props.generateTrainingFats()}</div> </div>
        </div>

        <div className="macro_info2" >
            <h2 className="macTitle">Rest</h2>
            <div> <h3 className="macLabel" >Protein</h3> <div className="macData">{props.generateRestProtein()}</div> </div>
            <div> <h3 className="macLabel" >Carbs</h3> <div className="macData">{props.generateRestCarbs()}</div> </div>
            <div> <h3 className="macLabel" >Fats</h3> <div className="macData">{props.generateRestFats()}</div> </div>
        </div>
    </div>
   );
}

export default GeneratedMacros;