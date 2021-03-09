import { connect } from 'react-redux';
import { createTeam } from '../../../../actions/team_actions';
import TeamCreateForm from './team_create_form';

const mapStateToProps = () => {

}

const mapDispatchToProps = dispatch => {
  return {
    createTeam: team => dispatch(createTeam(team))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreateForm);