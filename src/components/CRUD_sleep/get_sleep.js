import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';
import { useTranslation, Trans } from "react-i18next";  
  
const apiUrl = 'https://localhost:44375/api';
const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
};  
  
class SleepList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           sleeps:[],  
           response: {}  
        }  
    }  
  
    async componentDidMount(){  
      let resp = await axios.get(apiUrl + '/Sleep', header);
      console.log(resp);
      this.setState({sleeps:resp.data});
    }  
  
      
    async deleteSleep(sleepId) {  
      const { sleeps} = this.state;     
      axios.delete(apiUrl + '/Sleep/' + sleepId);
      let resp = await axios.get(apiUrl + '/Sleep', header);
      console.log(resp);
      this.setState({sleeps:resp.data});  
    }  
  
    render(){         
        const{error,sleeps}=this.state;  
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
                      {sleeps.map(sleep => (  
                        <tr key={sleep.sleepId}>  
                          <td>{sleep.petId}</td>  
                          <td>{sleep.sleepTime}</td>  
                          <td>{sleep.created}</td> 
                          <td><Button variant="info" onClick={() => this.props.editSleep(sleep.sleepId)}><Trans i18nKey={"edit"}/></Button>       
                          <Button variant="danger" onClick={() => this.deleteSleep(sleep.sleepId)}><Trans i18nKey={"delete"}/></Button>  
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
  
export default SleepList;