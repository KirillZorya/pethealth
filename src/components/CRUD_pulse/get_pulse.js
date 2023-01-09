import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
import { useTranslation, Trans } from "react-i18next";

const apiUrl = 'https://localhost:44375/api';
const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
};  
  
class PulseList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           pulses:[],  
           response: {}  
        }  
    }  
  
    async componentDidMount(){  
      let resp = await axios.get(apiUrl + '/Pulse', header);
      console.log(resp);
      this.setState({pulses:resp.data});
    }  
  
      
    async deletePulse(pulseId) {  
      const { pulses } = this.state;     
      axios.delete(apiUrl + '/Pulse/' + pulseId);
      let resp = await axios.get(apiUrl + '/Pulse', header);
      console.log(resp);
      this.setState({pulses:resp.data});  
    }  
  
    render(){         
        const{error,pulses}=this.state;  
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
                      {pulses.map(pulse => (  
                        <tr key={pulse.pulseId}>  
                          <td>{pulse.petId}</td>  
                          <td>{pulse.indication}</td>  
                          <td>{pulse.created}</td> 
                          <td><Button variant="info" onClick={() => this.props.editPulse(pulse.pulseId)}><Trans i18nKey={"edit"}/></Button>       
                          <Button variant="danger" onClick={() => this.deletePulse(pulse.pulseId)}><Trans i18nKey={"delete"}/></Button>  
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
  
export default PulseList;