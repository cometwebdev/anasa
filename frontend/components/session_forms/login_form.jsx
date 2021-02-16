import React from 'react';
import { Link } from 'react-router-dom';

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

  componentWillUnmount(){
    this.props.clearErrors()
  }

  render(){
    return (
      <div className="auth-page">
        {/* this is my outermost div */}
        <title>Log In -Anasa</title>
        <div className="auth-layout">
          <div className="auth-main">
            <Link to="/" className="auth-logo-container">
              <div className="auth-logo">
                <h5>anasa</h5>
              </div>
            </Link>
            <span className="auth-errors">
              <div>
                {this.renderErrors()}
              </div>
            </span>
            <div className="auth-form-container">
              <form onSubmit={this.handleSubmit} 
                    className="auth-form">
                <div className="auth-inputs">
                  <span className="auth-input-label">Email address</span>
                  <input type="text"
                         value={this.state.email}
                         onChange={this.update('email')}
                         className="auth-input-field"
                  />
                  <span className="auth-input-label">Password</span>
                  <input type="password"
                         value={this.state.password}
                         onChange={this.update('password')}
                         className="auth-input-field"
                  />
                </div>
                <input type="submit" 
                       value="Log in"
                       className="auth-form-submit"
                />
              </form>
              <div className="auth-form-link">
                <span>Don't have an account?</span>
                {this.props.signupLink}
              </div>
              <div className="auth-form-link">
                <span>Or try out Anasa as a demo user!</span>
                <button onClick={this.props.loginDemoUser} 
                        className="demo-login">
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;