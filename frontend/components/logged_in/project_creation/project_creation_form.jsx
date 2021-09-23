import React from 'react';
import { Link } from 'react-router-dom';

class ProjectCreationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      team_id: '',
      teams: Object.values(this.props.teams)
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.thunkGetTeams().then(
      (res) => { 
        debugger
        this.setState({
          teams: Object.values(res.teams)
        })
      }
    );
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
    // debugger
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
                this.state.teams.map(team => <option value={team.id} key={team.id}>{team.name}</option>)
              }
            </ select>
          </div>
          <input type="submit" 
                  value="Create Project"
                  className="auth-form-submit"
          />
        </form>
      </div>
    );
  }
}

export default ProjectCreationForm;