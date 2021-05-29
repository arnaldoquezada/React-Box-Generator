import React, { useState } from 'react';

const BoxForm = ()=>{
    const [state, setState] = useState("");
   
    const boxGenerate = (e)=>{
       e.preventDefault();

       }
    }
    return(
        <div className="form-box">
                <h1>Box Generator</h1>
                <label htmlFor="">Color: </label>  
                <input type="text" placeholder="Type a color" />
                <button type="submit" onClick={ boxGenerate }>Add</button>
            <div className="boxes">
                {
                 

                }
            </div>
        </div>
       
    )
}
export default BoxForm;