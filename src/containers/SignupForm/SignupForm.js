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

    signupDataHandler = () => {
        const data = {
            dailingCode: this.state.dailingCode,
            phoneNumber: this.state.phoneNumber,
            howDoyouKnowUs: this.state.howDoyouKnowUs,
            refernceid: this.state.refernceid,
            countryId: this.state.countryId,
            emailAddress: this.state.emailAddress,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            firstname: this.state.firstname,
            lastname: this.state.lastname

        }
        axios.post('http://webapi.synergyindustries.org/api​/registration​/user', data)
            .then(response => {
                console.log(response);
            });
    }

    render () {

        return(
            <div className="SignupForm">
                <h3>Registerion Form</h3>
                <form>
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
                    <button onClick={this.signupDataHandler}>SignUp</button>
                </form>
            </div>
        );
    }

}

export default SignupForm;