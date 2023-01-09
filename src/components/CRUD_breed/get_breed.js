import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';
import { useTranslation, Trans } from "react-i18next";  
  
const apiUrl = 'https://localhost:44375/api';
const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
};  
  
class BreedList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           breeds:[],  
           response: {}  
        }  
    }  
  
    async componentDidMount(){  
      let resp = await axios.get(apiUrl + '/Breed', header);
      console.log(resp);
      this.setState({breeds:resp.data});
    }  
  
      
    async deleteBreed(breedId) {  
      const { breeds } = this.state;     
      axios.delete(apiUrl + '/Breed/' + breedId);
      let resp = await axios.get(apiUrl + '/Breed', header);
      console.log(resp);
      this.setState({breeds:resp.data});  
    }  
  
    render(){         
        const{error,breeds}=this.state;  
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
                      {breeds.map(breed => (  
                        <tr key={breed.breedId}>  
                          <td>{breed.name}</td>                              
                          <td><Button variant="info" onClick={() => this.props.editBreed(breed.breedId)}><Trans i18nKey={"edit"}/></Button>       
                          <Button variant="danger" onClick={() => this.deleteBreed(breed.breedId)}><Trans i18nKey={"delete"}/></Button>  
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
  
export default BreedList; 