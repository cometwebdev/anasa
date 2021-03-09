import { connect } from 'react-redux';
import { createTeam } from '../../../../actions/team_actions';
import CreateTeamForm from './team_create_form';

const mapStateToProps = () => {

}

const mapDispatchToProps = dispatch => {
  return {
    createTeam: team => dispatch(createTeam(team))
  }
}

export default createTeam(mapStateToProps, mapDispatchToProps)(CreateTeamForm);