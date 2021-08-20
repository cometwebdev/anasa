import React from 'react';

class TeamCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
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
    let name = this.state.name
    if(typeof name === 'string' && name.length > 0) {
      this.props.createTeam({ name })
      this.setState({ name: "" });
    }
  }

  render(){
    return (
      <div className="create-team-form">
        <h4>Create a new team:</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.name}
                 onChange={this.update('name')}
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

export default TeamCreateForm;