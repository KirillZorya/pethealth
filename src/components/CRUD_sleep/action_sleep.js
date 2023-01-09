import React, { Component } from 'react';  
import { useTranslation, Trans } from "react-i18next"; 
import { Container, Button } from 'react-bootstrap';  
import SleepList from './get_sleep';  
import AddSleep from './add_sleep';  
import axios from 'axios';  
import Navigation from '../Navigation';
const apiUrl = 'https://localhost:44375/api/';  
  
class SleepActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddSleep: false,  
      error: null,  
      response: {},  
      sleepData: {},  
      isEditSleep: false,  
      isSleepDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddSleep: true });  
    this.setState({ isSleepDetails: false });  
  }  
  onDetails() {  
    this.setState({ isSleepDetails: true });  
    this.setState({ isAddSleep: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddSleep: true });  
    this.setState({ isSleepDetails: false });  
    if (this.state.isEditsleep) {  
      axios.put(apiUrl + 'Sleep/' + data.sleepId,data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddSleep: false,  
          isEditsleep: false  
        })  
      });  
    } else {  
     console.log(JSON.stringify(data));
     axios.post(apiUrl + 'Sleep',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddSleep: false,  
          isEditsleep: false  
        })  
      });  
    }  
    
  }  
  
  editSleep = sleepId => {  
  
   this.setState({ isSleepDetails: false });  
   axios.get(apiUrl + "Sleep/" + sleepId).then(result => {  
  
        this.setState({  
          isEditsleep: true,  
          isAddSleep: true,  
          sleepData: result.data           
        });
        console.log(result.data);  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let sleepForm;  
    if (this.state.isAddSleep || this.state.isEditSleep) {  
  
      sleepForm = <AddSleep onFormSubmit={this.onFormSubmit} sleep={this.state.sleepData} />  
       
    }  
    return (  
      <div>
        <Navigation />
      <div className='block'>
      <div className="Sleep">  
  <Container>  
        <h1 className='text'><Trans i18nKey={"sleep"}/></h1>  
        <hr></hr>  
        {!this.state.isSleepDetails && <Button variant="primary" onClick={() => this.onDetails()}><Trans i18nKey={"info"}/></Button>}  
        {!this.state.isAddSleep && <Button variant="primary" onClick={() => this.onCreate()}><Trans i18nKey={"add"}/></Button>}  
        <br></br>  
        {!this.state.isAddSleep && <SleepList editSleep={this.editSleep} />}  
        {sleepForm}  
  </Container>  
      </div>
      </div>
      </div>  
    );  
  }  
}  
export default SleepActionApp;