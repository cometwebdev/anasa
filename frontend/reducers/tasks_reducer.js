import { combineReducers } from 'redux';
import projectTasks from './project_tasks_reducer';

// uncomment when user tasks are implemented
// import userTasks from './user_tasks_reducer';

// uncomment when user tasks are implemented
// const tasksReducer = combineReducers({projectTasks, userTasks});
const tasksReducer = combineReducers({projectTasks});

export default tasksReducer;