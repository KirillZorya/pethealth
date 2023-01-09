import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';
import { useTranslation, Trans } from "react-i18next";  
  
class AddUser extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      userId: 0,  
      username: '',  
      password: '',  
      firstName: '',
      lastName: '',  
      userType: '',  
      email: ''
    }  
  
    if (props.user.userId) {  
      this.state = props.user;
        
    } else {  
      this.state = this.initialState;
        
    }  
  
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  
  }  
  
  handleChange(event) {  
    const name = event.target.name;  
    const value = event.target.value;  
  
    this.setState({  
      [name]: value  
    });
      
  }  
  
  handleSubmit(event) {  
    event.preventDefault();  
    this.props.onFormSubmit(this.state);  
    this.setState(this.initialState);  
  }  
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state.userId) {  
  
      pageTitle = <h2><Trans i18nKey={"edit"}/></h2>  
      actionStatus = <b><Trans i18nKey={"update"}/></b>  
    } else {  
      pageTitle = <h2><Trans i18nKey={"add"}/></h2>  
      actionStatus = <b><Trans i18nKey={"save"}/></b>  
    }  
  
    return (  
      <div>        
        <h2> {pageTitle}</h2>  
        <Row>  
          <Col sm={7}>  
            <Form onSubmit={this.handleSubmit}>  
              <Form.Group controlId="Username">  
                <Form.Label><Trans i18nKey={"username"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="username"  
                  value={this.state.username}  
                  onChange={this.handleChange}  
                  placeholder="Username" />  
              </Form.Group>  
              <Form.Group controlId="Password">  
                <Form.Label><Trans i18nKey={"password"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="password"  
                  value={this.state.password}  
                  onChange={this.handleChange}  
                  placeholder="Password" />  
              </Form.Group>  
              <Form.Group controlId="FirstName">  
                <Form.Label><Trans i18nKey={"firstname"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="firstName"  
                  value={this.state.firstName}  
                  onChange={this.handleChange}  
                  placeholder="FirstName" />  
              </Form.Group>
              <Form.Group controlId="LastName">  
                <Form.Label><Trans i18nKey={"lastname"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="lastName"  
                  value={this.state.lastName}  
                  onChange={this.handleChange}  
                  placeholder="LastName" />  
              </Form.Group>  
              <Form.Group controlId="UserType">  
                <Form.Label><Trans i18nKey={"usertype"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="userType"  
                  value={this.state.userType}  
                  onChange={this.handleChange}  
                  placeholder="UserType" />  
              </Form.Group>  
              <Form.Group controlId="Email">  
                <Form.Label><Trans i18nKey={"email"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="email"  
                  value={this.state.email}  
                  onChange={this.handleChange}  
                  placeholder="Email" />  
              </Form.Group>  
                    
              <Form.Group>  
                <Form.Control type="hidden" name="userId" value={this.state.userId} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddUser;