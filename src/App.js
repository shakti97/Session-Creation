import React,{Component} from "react";
import {Salary} from "./Component/Salary";
import {SalaryInput} from "./Component/SalaryInput";
export class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Salary/>
      </div>
    )
  }
}