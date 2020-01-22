import React, { Component } from 'react';
import e from 'cors';
import noopServiceWorkerMiddleware from 'react-dev-utils/noopServiceWorkerMiddleware';
import { Redirect } from 'react-router-dom';
class NewRequest extends Component {
    constructor() {
		super();
        this.state = {
        skill: "",
        text:"",
        date:"",
        redirect:false
        }
    }
        updateState = (e)=>{
           const value = e.target.value
           const name = e.target.name 
           console.log(name)
           this.setState({
               [name]:value
           })
           console.log(value)

        }

    addNewHelpReq=() =>{
        let details = this.state
        this.props.addNewRequest(details)
        this.setState({
            redirect:true
        })
    }


  render() {
      if(this.state.redirect){
   return(
           <Redirect to="/feed"/>
   )} else {
       return(

           
           <div>
           Descripition:<textarea type="text" name='text' onChange={this.updateState}></textarea>
           skills: 
           <select name="skill" onChange={this.updateState}>
           <option value="" disabled selected>Select your option</option>
           <option value="Carpentry"> Carpentry </option>
           <option value="Design"> Design</option>
           <option value="Electricity"> Electricity</option>
           <option value="Languages"> Languages</option>
           <option value="Legal"> Legal</option>
           <option value="Math"> Math</option>
           <option value="Plumbing"> Plumbing</option>
           <option value="Programming"> Programming</option>
           <option value="Writing"> Writing</option>
           </select>
           <input type="date" name='date' onChange={this.updateState}></input>
           <button onClick={this.addNewHelpReq}>Create request </button>
           </div>
        )
        }
           
  }
}

export default NewRequest;