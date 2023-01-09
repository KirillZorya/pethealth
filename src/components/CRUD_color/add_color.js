import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';
import { useTranslation, Trans } from "react-i18next";  
  
class AddColor extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      colorId: 0,  
      name: ''  
    }  
  
    if (props.color.colorId) {  
      this.state = props.color
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
    if (this.state.colorId) {  
  
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
              <Form.Group controlId="Name">  
                <Form.Label><Trans i18nKey={"col_name"}/></Form.Label>  
                <Form.Control  
                  type="text"  
                  name="name"  
                  value={this.state.name}  
                  onChange={this.handleChange}  
                  placeholder="Name" />  
              </Form.Group>  
              
              <Form.Group>  
                <Form.Control type="hidden" name="colorId" value={this.state.colorId} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddColor;