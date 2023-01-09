import React, { Component } from 'react';  
import { useTranslation, Trans } from "react-i18next";  
import { Container, Button } from 'react-bootstrap';  
import ColorList from './get_color';  
import AddColor from './add_color';  
import axios from 'axios';  
import Navigation from '../Navigation';
const apiUrl = 'https://localhost:44375/api/';  
  
class ColorActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddColor: false,  
      error: null,  
      response: {},  
      colorData: {},  
      isEditColor: false,  
      isColorDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddColor: true });  
    this.setState({ isColorDetails: false });  
  }  
  onDetails() {  
    this.setState({ isColorDetails: true });  
    this.setState({ isAddColor: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddColor: true });  
    this.setState({ isColorDetails: false });  
    if (this.state.isEditcolor) {  
     axios.put(apiUrl + 'Color/' + data.colorId,data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddColor: false,  
          isEditcolor: false  
        })  
      });  
    } else {  
     console.log(JSON.stringify(data));
     axios.post(apiUrl + 'Color',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddColor: false,  
          isEditcolor: false  
        })  
      });  
    }  
    
  }  
  
  editColor = colorId => {  
  
   this.setState({ isColorDetails: false });  
   axios.get(apiUrl + "Color/" + colorId).then(result => {  
  
        this.setState({  
          isEditcolor: true,  
          isAddColor: true,  
          colorData: result.data           
        });
        console.log(result.data);  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let colorForm;  
    if (this.state.isAddColor || this.state.isEditColor) {  
  
      colorForm = <AddColor onFormSubmit={this.onFormSubmit} color={this.state.colorData} />  
       
    }  
    return (
      <div>
        <Navigation />    
      <div className='block'>
      <div className="Color">  
  <Container>  
        <h1 className='text'><Trans i18nKey={"color"}/></h1>  
        <hr></hr>  
        {!this.state.isColorDetails && <Button variant="primary" onClick={() => this.onDetails()}><Trans i18nKey={"info"}/></Button>}  
        {!this.state.isAddColor && <Button variant="primary" onClick={() => this.onCreate()}><Trans i18nKey={"add"}/></Button>}  
        <br></br>  
        {!this.state.isAddColor && <ColorList editColor={this.editColor} />}  
        {colorForm}  
  </Container>  
      </div>
      </div>
      </div>  
    );  
  }  
}  
export default ColorActionApp;