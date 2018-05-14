// ./react-redux-client/src/containers/MainCard.js
import { connect } from 'react-redux';
import * as intrestCardActions from '../actions/InterestCardActions';
import App from '../components/MainCard';
import * as userInfoActions from '../actions/UserInfoCardActions';
// map state from store to props
const mapStateToProps = (state) => {
    return {
        //you can now say this.props.mappedAppSate
        mappedAppState: state.AppState
    }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        mappedAddInterest: Interest => dispatch(intrestCardActions.addInterest(Interest)),
        mappedAddUser: User => dispatch(userInfoActions.addUser(User))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);