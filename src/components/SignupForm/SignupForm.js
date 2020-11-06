import React, {Component} from 'react';
import axios from 'axios';


class SignupForm extends Component {

    constructor() {
        super();
        this.state = {
            dailingCode: "",
            phoneNumber: "",
            howDoyouKnowUs: "",
            refernceid: "",
            countryId: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            lastname: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.cheched: target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
       // console.log(this.state);
        axios.post('http://webapi.synergyindustries.org/api​/registration​/user');
    }
    render() {
        return(
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="dailingCode">Dailing Code</label>
                        <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code" value={this.state.dailingCode} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your dailing code" value={this.state.phoneNumber} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="howDoyouKnowUs">How Do You Know Us</label>
                        <input type="text" id="howDoyouKnowUs" name="howDoyouKnowUs" placeholder="Enter your dailing code" value={this.state.howDoyouKnowUs} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="refernceid">Refernce Id</label>
                        <input type="text" id="refernceid" name="refernceid" placeholder="Enter your dailing code" value={this.state.refernceid} onChange={this.handleChange}/>
                    </div>
                    <div>
                       <label htmlFor="countryId">Country Id</label>
                       <input type="text" id="countryId" name="countryId" placeholder="Enter your dailing code" value={this.state.countryId} onChange={this.handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="emailAddress">E-mail Address</label>
                      <input type="email" id="emailAddress" name="emailAddress" placeholder="Enter your dailing code" value={this.state.emailAddress} onChange={this.handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" name="password" placeholder="Enter your dailing code" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div>
                     <label htmlFor="confirmPassword">Confirm Password</label>
                     <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter your dailing code" value={this.state.confirmPassword} onChange={this.handleChange}/>
                    </div>
                    <div>
                     <label htmlFor="firstname">First Name</label>
                     <input type="text" id="firstname" name="firstname" placeholder="Enter your dailing code" value={this.state.firstname} onChange={this.handleChange}/>
                    </div>
                    <div>
                     <label htmlFor="lastname">Last Name</label>
                     <input type="text" id="lastname" name="lastname" placeholder="Enter your dailing code" value={this.state.lastname} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                          
                </form>
            </div>
        );
    }
}

export default SignupForm;
