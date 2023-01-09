import React, { Component } from 'react';  
import { useTranslation, Trans } from "react-i18next";   
import { Container, Button } from 'react-bootstrap';  
import UserList from './get_user';  
import AddUser from './add_user';  
import axios from 'axios';  
import Navigation from '../Navigation';
const apiUrl = 'https://localhost:44375/api/';  
  
class UserActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddUser: false,  
      error: null,  
      response: {},  
      userData: {},  
      isEditUser: false,  
      isUserDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddUser: true });  
    this.setState({ isUserDetails: false });  
  }  
  onDetails() {  
    this.setState({ isUserDetails: true });  
    this.setState({ isAddUser: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddUser: true });  
    this.setState({ isUserDetails: false });  
    if (this.state.isEdituser) {  
      axios.put(apiUrl + 'User/' + data.userId,data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddUser: false,  
          isEdituser: false  
        })  
      });  
    } else {  
     console.log(JSON.stringify(data));
     axios.post(apiUrl + 'User',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddUser: false,  
          isEdituser: false  
        })  
      });  
    }  
    
  }  
  
  editUser = userId => {  
  
   this.setState({ isUserDetails: false });  
   axios.get(apiUrl + "User/" + userId).then(result => {  
  
        this.setState({  
          isEdituser: true,  
          isAddUser: true,  
          userData: result.data           
        });
        console.log(result.data);  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let userForm;  
    if (this.state.isAddUser || this.state.isEditUser) {  
  
      userForm = <AddUser onFormSubmit={this.onFormSubmit} user={this.state.userData} />  
       
    }  
    return (  
      <div>
        <Navigation />
      <div className='block'>
      <div className="User">  
  <Container>  
        <h1 className='text'><Trans i18nKey={"user"}/></h1>  
        <hr></hr>  
        {!this.state.isUserDetails && <Button variant="primary" onClick={() => this.onDetails()}><Trans i18nKey={"user"}/></Button>}  
        {!this.state.isAddUser && <Button variant="primary" onClick={() => this.onCreate()}><Trans i18nKey={"add"}/></Button>}  
        <br></br>  
        {!this.state.isAddUser && <UserList editUser={this.editUser} />}  
        {userForm}  
  </Container>  
      </div>
      </div>
      </div>  
    );  
  }  
}  
export default UserActionApp;