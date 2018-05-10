// ./react-redux-client/src/containers/UserInfoCard.js
import { connect } from 'react-redux';
import * as userInfoCardActions from '../actions/UserInfoCardActions';
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
        mappedfetchUserInfoCardById: addUser => dispatch(userInfoCardActons.fetchUserInfocardById(UserInfoCardId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInfoCard);