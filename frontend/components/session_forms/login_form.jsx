import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.loginUser(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return (
      <div className="login-form-container">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label> Email address
            <input type="text"
                   value={this.state.email}
                   onChange={this.update('email')}
            />
          </label>
          <label> Password
            <input type="password"
                   value={this.state.password}
                   onChange={this.update('password')}
            />
          </label>
          <input type="submit" value="Log in" />
        </form>
        <br/>
        <div>
          <p>Don't have an account?</p>
          {this.props.signupLink}
        </div>
      </div>
    );
  }
}

export default LoginForm;