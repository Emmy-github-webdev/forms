import React, {Component} from 'react';
import axios from 'axios';
import './LoginForm.css';


class LoginForm extends Component {
    state = {
        "userName": "string",
        "password": "string"
      }

    LoginDataHandler = (event) => {
        event.preventDefault();
        const data = {
            userName: "ogaemmanuel@ymail.com",
            password: "Pa$$w0rd"
        }
        //console.log(data);
        let url = 'http://webapi.synergyindustries.org/api/v1/authenticate/login';
        var header = {
            "Content-Type": "application/json"
        }
        axios.post(url, data, header)
            .then(response => {
                console.log(response);
            }).catch((err) => {
                console.log('An error occured ', err);
            });
    }

    render () {

        return(
            <div className="LoginForm">
                <h3>Login Form</h3>
                <form onSubmit={this.LoginDataHandler}>
                    <input className="Input" type="email" name="userName" placeholder="user@example.com"/>
                    <input className="Input" type="password" name="password" placeholder="Password"/>
                    <button >Login</button>
                </form>
            </div>
        );
    }

}

export default LoginForm;