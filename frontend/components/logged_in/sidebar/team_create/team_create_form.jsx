import React from 'react';
import { createTeam } from '../../../../actions/team_actions';

class TeamCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Super Team'
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
    this.props.createTeam({ name: this.state.name });
  }

  render(){
    return (
      <div className="create-team-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.name}
          />
          <input type="submit"
                 value="Create Team"
                 className="team-create-submit"
          />
        </form>
      </div>
    );
  }
}

export default CreateTeamForm;