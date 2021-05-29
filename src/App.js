// import BoxForm from './components/BoxForm'
import React, { useState } from 'react';
import './App.scss';  
// import CaroForm from './components/CaroForm';
// import MessageDisplay from './components/MessageDisplay';
// import MessageForm from './components/MessageForm';
 

function App(){    
    const [boxColor, setBoxColor ] = useState("");
    const [boxes, setBoxes] = useState([])
    
    function nuevaCaja(e){
      e.preventDefault();
      setBoxes([...boxes, boxColor])
    }
      return (
       <div className="form-box">
         <form action="" onSubmit={(e) => nuevaCaja(e)}>
           <label htmlFor="">Color</label>
           <input 
              placeholder="Put your favorite Color"
              onChange={
                (e)=>{setBoxColor(e.target.value)
                }}
              type="text" 
              
           />
           <button>Add</button>
         </form>
          <div className="box-def" style={ {display:"flex"}}>
            {
              boxes.map((color, index) => {
                return <div key={index} 
                style={{
                        backgroundColor:color, 
                        width:200, 
                        height:200, 
                        marginRight:10                       
                        }}>
                </div>
              })
            }
          </div>

       </div>  
      );
    }

export default App;
