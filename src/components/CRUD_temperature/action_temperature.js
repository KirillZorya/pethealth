import React, { Component } from 'react';  
import { useTranslation, Trans } from "react-i18next";  
import { Container, Button } from 'react-bootstrap';  
import TemperatureList from './get_temperature';  
import AddTemperature from './add_temperature';  
import axios from 'axios';  
import Navigation from '../Navigation';
const apiUrl = 'https://localhost:44375/api/';  
  
class TemperatureActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddTemperature: false,  
      error: null,  
      response: {},  
      temperatureData: {},  
      isEditTemperature: false,  
      isTemperatureDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddTemperature: true });  
    this.setState({ isTemperatureDetails: false });  
  }  
  onDetails() {  
    this.setState({ isTemperatureDetails: true });  
    this.setState({ isAddTemperature: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddTemperature: true });  
    this.setState({ isTemperatureDetails: false });  
    if (this.state.isEdittemperature) {  
      axios.put(apiUrl + 'Temperature/' + data.temperatureId,data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddTemperature: false,  
          isEdittemperature: false  
        })  
      });  
    } else {  
     console.log(JSON.stringify(data));
     axios.post(apiUrl + 'Temperature',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddTemperature: false,  
          isEdittemperature: false  
        })  
      });  
    }  
    
  }  
  
  editTemperature = temperatureId => {  
  
   this.setState({ isTemperatureDetails: false });  
   axios.get(apiUrl + "Temperature/" + temperatureId).then(result => {  
  
        this.setState({  
          isEdittemperature: true,  
          isAddTemperature: true,  
          temperatureData: result.data           
        });
        console.log(result.data);  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let temperatureForm;  
    if (this.state.isAddTemperature || this.state.isEditTemperature) {  
  
      temperatureForm = <AddTemperature onFormSubmit={this.onFormSubmit} temperature={this.state.temperatureData} />  
       
    }  
    return (  
      <div>
        <Navigation />
      <div className='block'>
      <div className="Temperature">  
  <Container>  
        <h1 className='text'><Trans i18nKey={"temperature"}/></h1>  
        <hr></hr>  
        {!this.state.isTemperatureDetails && <Button variant="primary" onClick={() => this.onDetails()}><Trans i18nKey={"info"}/></Button>}  
        {!this.state.isAddTemperature && <Button variant="primary" onClick={() => this.onCreate()}><Trans i18nKey={"add"}/></Button>}  
        <br></br>  
        {!this.state.isAddTemperature && <TemperatureList editTemperature={this.editTemperature} />}  
        {temperatureForm}  
  </Container>  
      </div>
      </div>
      </div>  
    );  
  }  
}  
export default TemperatureActionApp;