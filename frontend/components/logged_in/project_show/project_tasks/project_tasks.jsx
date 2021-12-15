import React from 'react';
import { Link } from 'react-router-dom';


class ProjectTasks extends React.Component{
  constructor(props){
    super(props);
    // tasks -> id is key, value is text 
    this.state = {};
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
    return (e) => {
      this.props.thunkCreateTask({
        name: e.currentTarget.value,
        taskable_type: "project",
        taskable_id: this.props.id
      });
    }
  }

  deleteTask(id){
    console.log("hello")
    return () =>{
      this.props.thunkDeleteTask(id);
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

  saveTask(id){
    console.log(this.state[id].name);
    console.log(this.props.tasks[id].name);
    if(
       this.state[id].name.length > 0
      ){
        console.log("shoudl be updating")
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
            {/* <li>
              <input type="text" 
                     value={this.state.newTaskText}
                     onChange={()=>{}}
               />
              <input type="submit" />
            </li> */}
          </ul>
      </div>
    )
  }


}

export default ProjectTasks;