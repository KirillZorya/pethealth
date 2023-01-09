import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';  
import { useTranslation, Trans } from "react-i18next";

class AddPulse extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      pulseId: 0,  
      petId: '',  
      indication: '',  
      created: ''
    }  
  
    if (props.pulse.pulseId) {  
      this.state = props.pulse
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
    if (this.state.pulseId) {  
  
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
              <Form.Group controlId="PetId">  
                <Form.Label><Trans i18nKey={"pet_id"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="petId"  
                  value={this.state.petId}  
                  onChange={this.handleChange}  
                  placeholder="PetId" />  
              </Form.Group>  
              <Form.Group controlId="Indication">  
                <Form.Label><Trans i18nKey={"value"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="indication"  
                  value={this.state.indication}  
                  onChange={this.handleChange}  
                  placeholder="indication" />  
              </Form.Group>  
              <Form.Group controlId="Created">  
                <Form.Label><Trans i18nKey={"created"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="created"  
                  value={this.state.created}  
                  onChange={this.handleChange}  
                  placeholder="Created" />  
              </Form.Group>  
                    
              <Form.Group>  
                <Form.Control type="hidden" name="pulseId" value={this.state.pulseId} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddPulse;