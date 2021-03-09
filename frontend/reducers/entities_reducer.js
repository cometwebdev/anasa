import { combineReducers } from 'redux';

import users from './users_reducer';
import teams from './teams_reducer';
import projects from './projects_reducer';


const entitiesReducer = combineReducers({
  users,
  teams,
  projects,
});

export default entitiesReducer;