import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';
import { useTranslation, Trans } from "react-i18next";  
  
const apiUrl = 'https://localhost:44375/api';
const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
};  
  
class TemperatureList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           temperatures:[],  
           response: {}  
        }  
    }  
  
    async componentDidMount(){  
      let resp = await axios.get(apiUrl + '/Temperature', header);
      console.log(resp);
      this.setState({temperatures:resp.data});
    }  
  
      
    async deleteTemperature(temperatureId) {  
      const { temperatures} = this.state;     
      axios.delete(apiUrl + '/Temperature/' + temperatureId);
      let resp = await axios.get(apiUrl + '/Temperature', header);
      console.log(resp);
      this.setState({temperatures:resp.data});  
    }  
  
    render(){         
        const{error,temperatures}=this.state;  
        if(error){  
            return(  
                <div>Error:{error.message}</div>  
            )  
        }  
        else  
        {  
            return(  
         <div>  
                      
                  <Table>  
                    <thead className="btn-primary">  
                      <tr>  
                        <th><Trans i18nKey={"pet_id"}/></th>  
                        <th><Trans i18nKey={"value"}/></th>  
                        <th><Trans i18nKey={"created"}/></th>     
                      </tr>  
                    </thead>  
                    <tbody>  
                      {temperatures.map(temperature => (  
                        <tr key={temperature.temperatureId}>  
                          <td>{temperature.petId}</td>  
                          <td>{temperature.indication}</td>  
                          <td>{temperature.created}</td> 
                          <td><Button variant="info" onClick={() => this.props.editTemperature(temperature.temperatureId)}><Trans i18nKey={"edit"}/></Button>       
                          <Button variant="danger" onClick={() => this.deleteTemperature(temperature.temperatureId)}><Trans i18nKey={"delete"}/></Button>  
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table>  
                </div>  
              )  
        }  
    }  
}  
  
export default TemperatureList;