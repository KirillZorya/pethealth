import React, { Component } from 'react';    
import { Container, Button } from 'react-bootstrap';  
import BreedList from './get_breed';  
import AddBreed from './add_breed';  
import axios from 'axios';  
import Navigation from '../Navigation';
import { useTranslation, Trans } from "react-i18next";
const apiUrl = 'https://localhost:44375/api/';  
  
class BreedActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddBreed: false,  
      error: null,  
      response: {},  
      breedData: {},  
      isEditBreed: false,  
      isBreedDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddBreed: true });  
    this.setState({ isBreedDetails: false });  
  }  
  onDetails() {  
    this.setState({ isBreedDetails: true });  
    this.setState({ isAddBreed: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddBreed: true });  
    this.setState({ isBreedDetails: false });  
    if (this.state.isEditbreed) {  
     axios.put(apiUrl + 'Breed/' + data.breedId,data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddBreed: false,  
          isEditbreed: false  
        })  
      });  
    } else {  
     console.log(JSON.stringify(data));
     axios.post(apiUrl + 'Breed',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddBreed: false,  
          isEditbreed: false  
        })  
      });  
    }  
    
  }  
  
  editBreed = breedId => {  
  
   this.setState({ isBreedDetails: false });  
   axios.get(apiUrl + "Breed/" + breedId).then(result => {  
  
        this.setState({  
          isEditbreed: true,  
          isAddBreed: true,  
          breedData: result.data           
        });
        //console.log(result.data);  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let breedForm;  
    if (this.state.isAddBreed || this.state.isEditBreed) {  
  
      breedForm = <AddBreed onFormSubmit={this.onFormSubmit} breed={this.state.breedData} />  
       
    }  
    return (
      <div>
        <Navigation /> 
      <div className='block'>
      <div className="Breed">  
    <Container>  
        <h1 className='text'><Trans i18nKey={"breed_db"}/></h1>  
        <hr></hr>  
        {!this.state.isBreedDetails && <Button variant="primary" onClick={() => this.onDetails()}><Trans i18nKey={"info"}/></Button>}  
        {!this.state.isAddBreed && <Button variant="primary" onClick={() => this.onCreate()}><Trans i18nKey={"add"}/></Button>}  
        <br></br>  
        {!this.state.isAddBreed && <BreedList editBreed={this.editBreed} />}  
        {breedForm}  
    </Container>  
      </div>
      </div>
      </div>   
    );  
  }  
}  
export default BreedActionApp;