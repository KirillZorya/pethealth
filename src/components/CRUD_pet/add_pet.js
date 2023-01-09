import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';
import { useTranslation, Trans } from "react-i18next";  
  
class AddPet extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      petId: 0,  
      nickname: '',  
      kind: '',  
      sex: '',  
      breedId: '',  
      sterilization: '',  
      birthdate: '',
      colorId: '',
      ownerId: ''  
    }  
  
    if (props.pet.petId) {  
      this.state = props.pet
      //console.log(props.pet);  
    } else {  
      this.state = this.initialState;
      //console.log(props.pet);  
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
    //console.log(this.state);  
  }  
  
  handleSubmit(event) {  
    event.preventDefault();  
    this.props.onFormSubmit(this.state);  
    this.setState(this.initialState);  
  }  
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state.petId) {  
  
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
              <Form.Group controlId="Nickname">  
                <Form.Label><Trans i18nKey={"nickname"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="nickname"  
                  value={this.state.nickname}  
                  onChange={this.handleChange}  
                  placeholder="Nickname" />  
              </Form.Group>  
              <Form.Group controlId="Kind">  
                <Form.Label><Trans i18nKey={"kind"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="kind"  
                  value={this.state.kind}  
                  onChange={this.handleChange}  
                  placeholder="Kind" />  
              </Form.Group>  
              <Form.Group controlId="Sex">  
                <Form.Label><Trans i18nKey={"sex"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="sex"  
                  value={this.state.sex}  
                  onChange={this.handleChange}  
                  placeholder="Sex" />  
              </Form.Group>  
              <Form.Group controlId="BreedId">  
                <Form.Label><Trans i18nKey={"breed_id"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="breedId"  
                  value={this.state.breedId}  
                  onChange={this.handleChange}  
                  placeholder="BreedId" />  
              </Form.Group>  
              <Form.Group controlId="Sterilization">  
                <Form.Label><Trans i18nKey={"sterilization"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="sterilization"  
                  value={this.state.sterilization}  
                  onChange={this.handleChange}  
                  placeholder="Sterilization" />  
              </Form.Group>  
  
              <Form.Group controlId="Birthdate">  
                <Form.Label><Trans i18nKey={"birthdate"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="birthdate"  
                  value={this.state.birthdate}  
                  onChange={this.handleChange}  
                  placeholder="Birthdate" />  
              </Form.Group>
              
              <Form.Group controlId="ColorId">  
                <Form.Label><Trans i18nKey={"color_id"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="colorId"  
                  value={this.state.colorId}  
                  onChange={this.handleChange}  
                  placeholder="ColorId" />  
              </Form.Group>

              <Form.Group controlId="OwnerId">  
                <Form.Label><Trans i18nKey={"owner_id"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="ownerId"  
                  value={this.state.ownerId}  
                  onChange={this.handleChange}  
                  placeholder="OwnerId" />  
              </Form.Group>      
              <Form.Group>  
                <Form.Control type="hidden" name="petId" value={this.state.petId} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddPet;  