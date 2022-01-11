import React from 'react';
import { Link } from 'react-router-dom';


class ProjectTasks extends React.Component{
  constructor(props){
    super(props);
    // tasks -> id is key, value is text 
    this.state = {
      newTaskName: "",
      assignee_id: 0,
      tasks: {}
    };
    Object.assign(this.state.tasks, this.props.tasks);
    this.saveTask = this.saveTask.bind(this);
  }

  componentDidMount(){

  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.tasks !== prevProps.tasks) {
      this.state.tasks = {};
      this.setState({
        newTaskName: "",
        assignee_id: 0,
        tasks: this.props.tasks 
      });
    }
  }

  update(field) {
    return e => {
      this.setState({
      [field]: e.currentTarget.value
    });
  }
  }

  addTask(){
    return () => {

      const task = {
        name: this.state.newTaskName,
        taskable_type: "project",
        taskable_id: this.props.id,
      }
      if(this.state.assignee_id !== 0){
        task.assignee_id = this.state.assignee_id;
      }

      this.props.thunkCreateTask(task).then(
        () => { this.setState({"newTaskName": ""})}
      );
    }
  }

  deleteTask(id){
    //console.log("hello")
    return () =>{
      // when I delete a task, do I need to change projectIds in the projects reducer
      // for the corresponding project?
      this.props.thunkDeleteTask(this.state.tasks[id]);
    }
  }

  changeTask(id){
    return (e) => {
      const newTask = this.state.tasks[id];
      newTask.name = e.currentTarget.value;
      const newState = {};
      Object.assign(newState, this.state)
      this.setState(newState, ()=>{this.saveTask(id)});
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
    if(this.state.tasks[id].name.length > 0){
        this.props.thunkUpdateTask(this.state.tasks[id]);
    }
  }
 
  render(){
    return(
      <div>
        <ul>
            {
              Object.values(this.props.tasks).map(task => 
                <li className="deletableTask" key={task.id}>
                  <input type="text" 
                         value={this.state.tasks[task.id] ? this.state.tasks[task.id].name : ""}
                         onChange={this.changeTask(task.id)}
                         
                  />
                  
                  <p onClick={this.deleteTask(task.id)}> X </p>
                </li>
              )
            }
            <li>
              <h5>Create a new task:</h5>
              <input type="text"
                     value={this.state.newTaskName}
                     onChange={this.update("newTaskName")}
              />

              <select onChange={this.update("assignee_id")}
                        className="auth-input-field"
              >
              <option value={0} key={0}>No Specified Assignee </option>
                  {
                    this.props.teammates.map(user => <option value={user.id} key={user.id}>{user.email}</option>)
                  }
              </ select>

              <input type="submit" onClick={this.addTask()}/>
            </li>
          </ul>
          
      </div>
    )
  }


}

export default ProjectTasks;