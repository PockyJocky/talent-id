// ./react-redux-client/src/containers/UserInfoCard.js
import { connect } from 'react-redux';
import * as userActions from '../actions/UserActions';
import UserInfoCard from '../components/UserInfoCard';

// map state from store to props
const mapStateToProps = (state) => {
    return {
        //you can now say this.props.mappedAppSate
        mappedUserInfoCardState: state.UserInfoCardState
    }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        mappedAddUser: User => dispatch(userActions.addUser(User)),
        mappedUpdateUser: User => dispatch(userActions.updateUser(User))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInfoCard);