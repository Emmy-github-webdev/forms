import React, {Component} from 'react';


class SignupForm extends Component {
    render() {
        return(
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="dailingCode">Dailing Code</label>
                        <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                    <div>
                        <label htmlFor="">How Do You Know Us</label>
                        <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                    <div>
                        <label htmlFor="">Refernce Id</label>
                        <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                    <div>
                       <label htmlFor="">Country Id</label>
                       <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                    <div>
                      <label htmlFor="">E-mail Address</label>
                      <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                    <div>
                      <label htmlFor="">Password</label>
                      <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                    <div>
                     <label htmlFor="">Confirm Password</label>
                     <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                    <div>
                     <label htmlFor="">First Name</label>
                     <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                    <div>
                     <label htmlFor="">Last Name</label>
                     <input type="text" id="dailingCode" name="dailingCode" placeholder="Enter your dailing code"/>
                    </div>
                          
                </form>
            </div>
        );
    }
}

export default SignupForm;
