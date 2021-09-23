import React from 'react';
import { Link } from 'react-router-dom';

class ProjectCreationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      team_id: ''
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
    const project = Object.assign({}, this.state);
    this.props.thunkCreateProject(project);
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  // componentWillUnmount(){
  //   this.props.clearErrors()
  // }

  render(){
    return (
      <div className="auth-form-container">
        <form onSubmit={this.handleSubmit} 
              className="auth-form">
          <div className="auth-inputs">
            <span className="auth-input-label">Project Name</span>
            <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    className="auth-input-field"
            />
            <span className="auth-input-label">Team</span>
            <select onChange={this.update('team_id')}
                    className="auth-input-field"
            >
              {
                this.props.teams.map(team => <option value={team.id} key={team.id}>{team.name}</option>)
              }
            </ select>
          </div>
          <input type="submit" 
                  value="Sign up"
                  className="auth-form-submit"
          />
        </form>
      </div>
    );
  }
}

export default ProjectCreationForm;