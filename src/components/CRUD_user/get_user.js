import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';
import { useTranslation, Trans } from "react-i18next";  
  
const apiUrl = 'https://localhost:44375/api';
const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
};  
  
class UserList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           users:[],  
           response: {}  
        }  
    }  
  
    async componentDidMount(){  
      let resp = await axios.get(apiUrl + '/User', header);
      console.log(resp);
      this.setState({users:resp.data});
    }  
  
      
    async deleteUser(userId) {  
      const { users} = this.state;     
      axios.delete(apiUrl + '/User/' + userId);
      let resp = await axios.get(apiUrl + '/User', header);
      console.log(resp);
      this.setState({users:resp.data});  
    }  
  
    render(){         
        const{error,users}=this.state;  
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
                        <th><Trans i18nKey={"username"}/></th>  
                        <th><Trans i18nKey={"password"}/></th>  
                        <th><Trans i18nKey={"firstname"}/></th>
                        <th><Trans i18nKey={"lastname"}/></th>  
                        <th><Trans i18nKey={"usertype"}/></th>  
                        <th><Trans i18nKey={"email"}/></th>     
                      </tr>  
                    </thead>  
                    <tbody>  
                      {users.map(user => (  
                        <tr key={user.userId}>  
                          <td>{user.username}</td>  
                          <td>{user.password}</td>  
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>  
                          <td>{user.userType}</td>  
                          <td>{user.email}</td> 
                          <td><Button variant="info" onClick={() => this.props.editUser(user.userId)}><Trans i18nKey={"edit"}/></Button>       
                          <Button variant="danger" onClick={() => this.deleteUser(user.userId)}><Trans i18nKey={"delete"}/></Button>  
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
  
export default UserList;