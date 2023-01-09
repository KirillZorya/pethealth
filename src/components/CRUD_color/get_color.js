import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';
import { useTranslation, Trans } from "react-i18next";  
  
const apiUrl = 'https://localhost:44375/api';
const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
};  
  
class ColorList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           colors:[],  
           response: {}  
        }  
    }  
  
    async componentDidMount(){  
      let resp = await axios.get(apiUrl + '/Color', header);
      console.log(resp);
      this.setState({colors:resp.data});
    }  
  
      
    async deleteColor(colorId) {  
      const { colors } = this.state;     
      axios.delete(apiUrl + '/Color/' + colorId);
      let resp = await axios.get(apiUrl + '/Color', header);
      console.log(resp);
      this.setState({colors:resp.data});  
    }  
  
    render(){         
        const{error,colors}=this.state;  
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
                        <th><Trans i18nKey={"col_name"}/></th>    
                      </tr>  
                    </thead>  
                    <tbody>  
                      {colors.map(color => (  
                        <tr key={color.colorId}>  
                          <td>{color.name}</td>   
                          <td><Button variant="info" onClick={() => this.props.editColor(color.colorId)}><Trans i18nKey={"edit"}/></Button>       
                          <Button variant="danger" onClick={() => this.deleteColor(color.colorId)}><Trans i18nKey={"delete"}/></Button>  
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
  
export default ColorList;