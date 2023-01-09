import React, { Component } from 'react';  
import { useTranslation, Trans } from "react-i18next";  
import { Container, Button } from 'react-bootstrap';  
import PulseList from './get_pulse';  
import AddPulse from './add_pulse';  
import axios from 'axios';  
import Navigation from '../Navigation';
const apiUrl = 'https://localhost:44375/api/';  
  
class PulseActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddPulse: false,  
      error: null,  
      response: {},  
      pulseData: {},  
      isEditPulse: false,  
      isPulseDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddPulse: true });  
    this.setState({ isPulseDetails: false });  
  }  
  onDetails() {  
    this.setState({ isPulseDetails: true });  
    this.setState({ isAddPulse: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddPulse: true });  
    this.setState({ isPulseDetails: false });  
    if (this.state.isEditpulse) {  
      axios.put(apiUrl + 'Pulse/' + data.pulseId,data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddPulse: false,  
          isEditpulse: false  
        })  
      });  
    } else {  
     console.log(JSON.stringify(data));
     axios.post(apiUrl + 'Pulse',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddPulse: false,  
          isEditpulse: false  
        })  
      });  
    }  
    
  }  
  
  editPulse = pulseId => {  
  
   this.setState({ isPulseDetails: false });  
   axios.get(apiUrl + "Pulse/" + pulseId).then(result => {  
  
        this.setState({  
          isEditpulse: true,  
          isAddPulse: true,  
          pulseData: result.data           
        });
        console.log(result.data);  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let pulseForm;  
    if (this.state.isAddPulse || this.state.isEditPulse) {  
  
      pulseForm = <AddPulse onFormSubmit={this.onFormSubmit} pulse={this.state.pulseData} />  
       
    }  
    return (  
      <div>
        <Navigation />
      <div className='block'>
      <div className="Pulse">  
  <Container>  
        <h1 className='text'><Trans i18nKey={"pulse"}/></h1>  
        <hr></hr>  
        {!this.state.isPulseDetails && <Button variant="primary" onClick={() => this.onDetails()}><Trans i18nKey={"info"}/></Button>}  
        {!this.state.isAddPulse && <Button variant="primary" onClick={() => this.onCreate()}><Trans i18nKey={"add"}/></Button>}  
        <br></br>  
        {!this.state.isAddPulse && <PulseList editPulse={this.editPulse} />}  
        {pulseForm}  
  </Container>  
      </div>
      </div>
      </div>  
    );  
  }  
}  
export default PulseActionApp;