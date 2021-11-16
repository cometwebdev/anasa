import React from 'react';
import { Link } from 'react-router-dom';


class ProjectShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      placeholder: "Loading project name...",
      tasks:{}
    };

    this.saveName = this.saveName.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  componentDidMount(){
    this.props.thunkGetProject().then(
      (res) => { 
        const newState = {
          name: res.project.name,
          placeholder: "Click to add Project Name"
        };
        Object.assign(newState, res.tasks);

        this.setState(newState);
      }
    );
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.name !== prevProps.name){
      this.setState({ 
        name: this.props.name, 
        placeholder: "Loading project name...",
        tasks: []
      });
      this.props.thunkGetProject().then(
        (res) => {
          const newState = {
            name: res.project.name,
            placeholder: "Click to add Project Name"
          };
          Object.assign(newState, res.tasks);

          this.setState(newState);
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

  changeTask(id){
    return (e) => {
      const newTask = this.state[id];
      newTask.name = e.currentTarget.value;
      this.setState({[id]: newTask});
      this.saveTask(id);
    }
  }

  saveTask(id){
    if(this.state[id].name !== this.props.tasks[id].name &&
       this.state[id].name !== ""
      ){
        this.props.thunkUpdateTask(this.state[id]);
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
          <ul>
            {
              this.props.tasks.map(task => 
                <li>
                  <input type="text" 
                         value={this.state[task.id] ? this.state[task.id].name : ""}
                         onChange={this.changeTask(task.id)}
                  />
                  <p onClick={() => {this.props.removeTask(task.id)}}> X
                  </p>
                </li>
              )
            }
          </ul>
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