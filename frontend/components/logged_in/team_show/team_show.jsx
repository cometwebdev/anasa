import React from 'react';

class TeamShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { description: this.props.description || "" };
    // idea is have a baseState 
    this.baseState = { description: "Loading description" };

    this.saveDescription = this.saveDescription.bind(this);
  }

  componentDidMount(){
    this.props.thunkGetTeam();
  }


  
  componentDidUpdate(prevProps, prevState){
    // https://stackoverflow.com/questions/30528348/setstate-inside-of-componentdidupdate

    // compare if new props id != old props id 
    //    not sure if need to update old Team description here or not
    // if different ids -- then need to thunkGetTeam
    //    does it make sense to use a loading/bufferring text here?
    
    debugger

  }

  saveDescription(){
    if (this.state.name !== "Loading Team Name..." &&
        this.state.description !== this.props.description){
      this.props.thunkUpdateTeam(
        {
          id: this.props.id,
          name: this.props.name,
          description: this.state.description
        }
      );
    }
  }

  changeDescription(){
    return (e) => (
      this.setState({ description: e.currentTarget.value })
    );
  }

  render(){
    return (
      <div className="home-main">
        {this.props.sidebar}
        <div>
          {this.props.header}
          <div className="TeamShow-main">
          <h3>
            { this.props.name }
          </h3>
          <textarea value={this.state.description}
                    placeholder="Click to add team description..."
                    onChange={this.changeDescription()}
                    onBlur={this.saveDescription()}
                    cols="50"
                    rows="30"
            />
            <div>
              <div>Team Members:</div>
              {
                this.props.teammates.map(teammate => <li key={teammate.id}>{teammate.email}</li>)
              }
            </div>
            <div>
              <div>Project Links:</div>
              {
                this.props.projects.map(prj => <li key={prj.id}>{prj.name}</li>)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default TeamShow;