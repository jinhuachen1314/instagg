import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_action';
import EditProfile from './edit_profile';

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({

  })
}

const mapDispatchToProps = dispatch => {
  return({
    updateUser: (user) => dispatch(updateUser(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);