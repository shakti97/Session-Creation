import React from "react";
export const SalaryInput = (props)=>{
    return( 
       <div>
           <h1><label>{props.inputName}</label> 
           <input type="text" placeholder="enter the salary" onChange={props.takeSal}/></h1>
        </div>
        
    );
}