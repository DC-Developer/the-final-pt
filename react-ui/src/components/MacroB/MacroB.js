import React from 'react';
import './MacroB.css';
//this component will be setting the size for the client page

const MacroB = (props) => {
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
                    <input /> <select></select>
                </div>   

                <div>Height</div>
                <input className="macroHeight" />

                <div>Weight</div>
                <input className="macroWeight" />

                <div>Body Fat</div>
                <input className="macroBfat" />

                <button className="generateB">
                    GENERATE BREAKDOWN
                </button>
            </div>

        </div>
    );
}

export default MacroB;