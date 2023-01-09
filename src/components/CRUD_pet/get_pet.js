import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';
import { useTranslation, Trans } from "react-i18next";  
  
const apiUrl = 'https://localhost:44375/api';
const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
};  
  
class PetList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           pets:[],  
           response: {}  
        }  
    }  
  
    async componentDidMount(){  
      let resp = await axios.get(apiUrl + '/Pet', header);
      console.log(resp);
      this.setState({pets:resp.data});
    }  
  
      
    async deletePet(petId) {  
      const { pets } = this.state;     
      axios.delete(apiUrl + '/Pet/' + petId);
      let resp = await axios.get(apiUrl + '/Pet', header);
      console.log(resp);
      this.setState({pets:resp.data});  
    }  
  
    render(){         
        const{error,pets}=this.state;  
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
                        <th><Trans i18nKey={"nickname"}/></th>  
                        <th><Trans i18nKey={"kind"}/></th>  
                        <th><Trans i18nKey={"sex"}/></th>  
                        <th><Trans i18nKey={"breed_id"}/></th>  
                        <th><Trans i18nKey={"sterilization"}/></th>  
                        <th><Trans i18nKey={"birthdate"}/></th>  
                        <th><Trans i18nKey={"color_id"}/></th>
                        <th><Trans i18nKey={"owner_id"}/></th>   
                      </tr>  
                    </thead>  
                    <tbody>  
                      {pets.map(pet => (  
                        <tr key={pet.petId}>  
                          <td>{pet.nickname}</td>  
                          <td>{pet.kind}</td>  
                          <td>{pet.sex}</td>  
                          <td>{pet.breedId}</td>  
                          <td>{pet.sterilization.toString()}</td>  
                          <td>{pet.birthdate}</td>
                          <td>{pet.colorId}</td>
                          <td>{pet.ownerId}</td>  
                          <td><Button variant="info" onClick={() => this.props.editPet(pet.petId)}><Trans i18nKey={"edit"}/></Button>       
                          <Button variant="danger" onClick={() => this.deletePet(pet.petId)}><Trans i18nKey={"delete"}/></Button>  
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
  
export default PetList;  