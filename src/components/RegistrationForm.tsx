import * as React from 'react';
import Menu from "./Menu";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submitted. Email valid is', this.state['email']);
    }

    handleEmailChange(event) {
        console.log('change', event.target['value']);
        this.setState({email: event.target['value']});
    }

    render() {
        return (
            <div>
                <Menu />
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           placeholder="E-mail"
                           value={this.state['email']}
                           onChange={this.handleEmailChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;
