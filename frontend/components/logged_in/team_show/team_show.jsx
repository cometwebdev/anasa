import React from 'react';
import { Link } from 'react-router-dom';

class TeamShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { description: this.props.description || "",
                   name: this.props.name,
                   placeholder: "Loading team description..."
                 };

    this.saveDescription = this.saveDescription.bind(this);
  }

  componentDidMount(){
    this.props.thunkGetTeam().then(
      (res) => { this.setState({ description: res.team.description,
        name: res.team.name,
        placeholder: "Click to add team description..."    
      })}
    )
  }


  
  componentDidUpdate(prevProps, prevState){
    // https://stackoverflow.com/questions/30528348/setstate-inside-of-componentdidupdate

    // compare if new props id != old props id 
    //    not sure if need to update old Team description here or not
    // if different ids -- then need to thunkGetTeam
    //    does it make sense to use a loading/bufferring text here?
    
    // if(this.props.id !== prevProps.id){
    //   this.props.thunkGetTeam();
    // }
    if (this.props.name !== prevProps.name){
      this.setState({ description: "",
                      name: this.props.name,
                      placeholder: "Loading team description..."
      });
      this.props.thunkGetTeam().then(
        (res) => { this.setState({ description: res.team.description,
                                    name: res.team.name,
                                    placeholder: "Click to add team description..."  
        })}
      );
    }
  }

  saveDescription(){
    //debugger
    if (this.state.name !== "Loading Team Name..." &&
        this.state.description !== this.props.description &&
        this.state.description !== ""){
      //debugger
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
    return (e) => {
      this.setState({ description: e.currentTarget.value });
      // still having an error of leaving off the last character, 
      // but debouncing should fix that, see below:
      //
      // https://davidwalsh.name/javascript-debounce-function
      this.saveDescription();
    };
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
                this.props.projects.map(prj => 
                  <Link to={`/projects/${prj.id}`} key={prj.id}>
                    <span>{prj.name}</span>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default TeamShow;