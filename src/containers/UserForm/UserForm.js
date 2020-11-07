import React, {Component} from 'react';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';

class UserForm extends Component {
  
    render () {

        return(
            <div>
                <SignupForm/>
                <LoginForm />
            </div>
        );
    }

}

export default UserForm;