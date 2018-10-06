import React from "react";
export const SalaryOutput = (props)=>{
    var HRA= props.sal*0.30;
    var DA = props.sal*0.20;
    var TA = props.sal*0.10;
    return( 
        <div><h2>
        HRA {HRA}
        <br/>
        DA {DA}
        <br/>
        TA {TA}
        </h2></div>
    );
}