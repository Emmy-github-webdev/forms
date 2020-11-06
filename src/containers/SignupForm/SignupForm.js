import React, {Component} from 'react';
import axios from 'axios';
import './SignupForm.css';


class SignupForm extends Component {
    state = {
        "dailingCode": "string",
        "phoneNumber": "string",
        "howDoyouKnowUs": "string",
        "refernceid": "string",
        "countryId": 0,
        "emailAddress": "user@example.com",
        "password": "string",
        "confirmPassword": "string",
        "firstname": "string",
        "lastname": "string"
    } 

    signupDataHandler = (event) => {
        event.preventDefault();
        const data = {
            dailingCode: "",
            phoneNumber: "",
            howDoyouKnowUs: "",
            refernceid: "",
            countryId: 1,
            emailAddress: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            lastname: ""

        }
        // console.log(data);
        let url = 'http://webapi.synergyindustries.org/api/registration/user';
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
            <div className="SignupForm">
                <h3>Registerion Form</h3>
                <form onSubmit={this.signupDataHandler}>
                    <input className="Input" type="text" name="dailingCode" placeholder="Your dailing code"/>
                    <input className="Input" type="text" name="phoneNumber" placeholder="Phone number"/>
                    <input className="Input" type="text" name="howDoyouKnowUs" placeholder="How do you know about us"/>
                    <input className="Input" type="text" name="referenceid" placeholder="Reference Id"/>
                    <input className="Input" type="text" name="countryId" placeholder="Country"/>
                    <input className="Input" type="email" name="emailAddress" placeholder="user@example.com"/>
                    <input className="Input" type="password" name="password" placeholder="Password"/>
                    <input className="Input" type="password" name="confirmPassword" placeholder="Confirm password"/>
                    <input className="Input" type="text" name="firstName" placeholder="First Name"/>
                    <input className="Input" type="text" name="lastName" placeholder="Last Name"/>
                    <button >SignUp</button>
                </form>
            </div>
        );
    }

}

export default SignupForm;