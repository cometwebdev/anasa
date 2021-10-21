import React from 'react';
import { Link } from 'react-router-dom';


class ProjectShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      placeholder: "Loading project name..."
    };

    this.saveName = this.saveName.bind(this);
  }

  componentDidMount(){
    this.props.thunkGetProject().then(
      (res) => { 
        this.setState({
          name: res.project.name,
          placeholder: "Click to add Project Name"
        })
      }
    )
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.name !== prevProps.name){
      this.setState({ 
        name: this.props.name, 
        placeholder: "Loading project name..."
      });
      this.props.thunkGetProject().then(
        (res) => {
          this.setState({
            name: res.project.name,
            placeholder: "Click to add Project Name"
          })
        }
      );
    }
  }

  saveName(){
    // https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript
    if (this.state.name.length > 0) {
      this.props.thunkUpdateProject(
        {
          id: this.props.id,
          name: this.state.name
        }
      );
    }
  }

  changeName(){
    return (e) => {
      this.setState({
        name: e.currentTarget.value 
      });
      // still having an error of leaving off the last character, 
      // but debouncing should fix that, see below:
      //
      // https://davidwalsh.name/javascript-debounce-function
      this.saveName();
    }
  }

  render(){
    return (
      <div className="home-main">
        {this.props.sidebar}
        <div>
          {this.props.header}
          <div className="ProjectShow-main">
          <h3>
            { this.state.name } 
            <Link to={`/projects/edit/${this.props.id}`}> Edit this project </Link>
          </h3>
          <h5>
            <Link to={`/projects/new`}>
              <span>Create a New Project</span>
            </Link>
          </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectShow;