import React, { Component } from "react";
import {SalaryInput} from "../Component/SalaryInput";
import {SalaryOutput} from "../Component/SalaryOutput";
import axios from 'axios';


export class Salary extends Component{
    constructor(props){
        super(props);
        this.Salary=0;
        this.state={ Salary : this.Salary}
    }
    takeSalary(event){
        this.Salary= event.target.value;
        this.setState({Salary : this.Salary});
        
    }
    CreateSession(event){
        console.log('Creste Session');
        axios.get(('http://localhost:3001/api'),{
            withCredentials: true
        }).then(response=>{
            console.log(response);
        })
    }


    render(){
        return (
            <div>
            <SalaryInput inputName="Salary " takeSal={this.takeSalary.bind(this)}/>
            <h3>Salary is {this.state.Salary}</h3>
            <br/>
            <hr/>
            <SalaryOutput sal={this.state.Salary} />
            <button onClick={this.CreateSession.bind(this)}>Create Session</button>
            </div>
        )
    } 
}