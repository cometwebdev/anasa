import React from 'react';
import { Link } from 'react-router-dom';


class ProjectTasks extends React.Component{
  constructor(props){
    super(props);
    // tasks -> id is key, value is text 
    this.state = {
      newTaskName: "",
    };
    Object.assign(this.state, this.props.tasks);
    //debugger
    this.saveTask = this.saveTask.bind(this);
  }

  componentDidMount(){

  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.tasks !== prevProps.tasks) this.setState(this.props.tasks);
  }

  addTask(){
    return () => {
      this.props.thunkCreateTask({
        name: this.state.newTaskName,
        taskable_type: "project",
        taskable_id: this.props.id
      }).then(
        () => { this.setState({"newTaskName": ""})}
      );
    }
  }

  deleteTask(id){
    //console.log("hello")
    return () =>{
      // when I delete a task, do I need to change projectIds in the projects reducer
      // for the corresponding project?
      this.props.thunkDeleteTask(this.state[id]);
    }
  }

  changeTask(id){
    return (e) => {
      const newTask = this.state[id];
      newTask.name = e.currentTarget.value;
      this.setState({[id]: newTask}, ()=>{this.saveTask(id)});
      // this.saveTask(this.state[id])
    }
  }

  changeNewTask(){
    //later on can do more fancy things like + symbol to create new task on frontend side
    //and then treat new task like any other, but for now just have form
    return (e) => {
      this.setState({"newTaskName": e.currentTarget.value});
    }

  }

  saveTask(id){
    if(this.state[id].name.length > 0){
        // console.log("should be updating")
        this.props.thunkUpdateTask(this.state[id]);
    }
  }
 
  render(){
    return(
      <div>
        <ul>
            {
              Object.values(this.props.tasks).map(task => 
                <li key={task.id}>
                  <input type="text" 
                         value={this.state[task.id] ? this.state[task.id].name : ""}
                         onChange={this.changeTask(task.id)}
                         
                  />
                  
                  <p onClick={this.deleteTask(task.id)}> X {task.name}
                  </p>
                </li>
              )
            }
            <li>
              <h5>Create a new task:</h5>
              <input type="text"
                     value={this.state.newTaskName}
                     onChange={this.changeNewTask()}
              />
              <input type="submit" onClick={this.addTask()}/>
            </li>
          </ul>
      </div>
    )
  }


}

export default ProjectTasks;