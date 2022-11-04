

 import React from 'react';
// import {useState} from 'react';

function Form(){

    // const [item , setItem] = useState("");

    const addProduct=()=>{
        
    }

    return(
        <>

       <div className="box">
           <form name="todoForm">
             <div className="cont">
               <div className="cont1">
                   <div className="flex">
                   <h3>Add New Item</h3>
                   <button> <b> x </b></button>
                   </div>
                
                  <input type="text" placeholder="enter car's name"/> <br/> <br/>
                  <input type="text" placeholder="enter car's price"/> <br/> <br/>
                  <input type="file" placeholder="choose a picture"/> <br/>
                      <br/>
                <button id="btn" onClick={addProduct}>Add product</button>
                </div>
                </div>
            </form> 
        </div>
        </>
        
    );
}
export default Form;


