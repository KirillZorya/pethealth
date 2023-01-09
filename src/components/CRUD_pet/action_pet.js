import React, { Component } from 'react';   
import { Container, Button } from 'react-bootstrap';  
import PetList from './get_pet';  
import AddPet from './add_pet';  
import axios from 'axios';  
import Navigation from '../Navigation';
import { useTranslation, Trans } from "react-i18next";
const apiUrl = 'https://localhost:44375/api/';  
  
class PetActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddPet: false,  
      error: null,  
      response: {},  
      petData: {},  
      isEditPet: false,  
      isPetDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddPet: true });  
    this.setState({ isPetDetails: false });  
  }  
  onDetails() {  
    this.setState({ isPetDetails: true });  
    this.setState({ isAddPet: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddPet: true });  
    this.setState({ isPetDetails: false });  
    if (this.state.isEditpet) {  
      axios.put(apiUrl + 'Pet/' + data.petId,data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddPet: false,  
          isEditpet: false  
        })  
      });  
    } else {  
     console.log(JSON.stringify(data));
     axios.post(apiUrl + 'Pet',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddPet: false,  
          isEditpet: false  
        })  
      });  
    }  
    
  }  
  
  editPet = petId => {  
  
   this.setState({ isPetDetails: false });  
   axios.get(apiUrl + "Pet/" + petId).then(result => {  
  
        this.setState({  
          isEditpet: true,  
          isAddPet: true,  
          petData: result.data           
        });
        console.log(result.data);  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let petForm;  
    if (this.state.isAddPet || this.state.isEditPet) {  
  
      petForm = <AddPet onFormSubmit={this.onFormSubmit} pet={this.state.petData} />  
       
    }  
    return (  
      <div>
        <Navigation />
      <div className='block'>
      <div className="Pet">  
  <Container>  
        <h1 className='text'><Trans i18nKey={"pet"}/></h1>  
        <hr></hr>  
        {!this.state.isPetDetails && <Button variant="primary" onClick={() => this.onDetails()}><Trans i18nKey={"info"}/></Button>}  
        {!this.state.isAddPet && <Button variant="primary" onClick={() => this.onCreate()}><Trans i18nKey={"add"}/></Button>}  
        <br></br>  
        {!this.state.isAddPet && <PetList editPet={this.editPet} />}  
        {petForm}  
  </Container>  
      </div>
      </div>
      </div>  
    );  
  }  
}  
export default PetActionApp;  