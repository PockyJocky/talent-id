// ./react-redux-client/src/containers/InterestCard.js
import { connect } from 'react-redux';
import * as interestCardActions from '../actions/InterestCardActions';
import InterestCard from '../components/InterestCard';

// map state from store to props
const mapStateToProps = (state) => {
    return {
        //you can now say this.props.mappedAppSate
        mappedInterestCardState: state.interestCardState
    }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        mappedfetchInterestCardById: interestCardId => dispatch(interestCardActons.fetchInterestcardById(interestCardId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InterestCard);