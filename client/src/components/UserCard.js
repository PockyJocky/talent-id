import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import UserInfoCard from './UserInfoCard';
import InterestCard from './InterestCard';
import PlayersCard from './PlayersCard';

import { addNewUser } from '../actions/UserInfoActions';
import { updatePlace } from '../actions/NavigationActions';

const UserCard = props => {
    const { place, clickNext } = this.props;
    return (
        <div className="new_user_card">
            {place === 0 && <UserInfoCard userLocation={place}/>}
            {place === 1 && <InterestCard />}
            {place === 2 && <PlayersCard userLocation={place}/>}
            <button onClick={clickNext} className="next_button">Next</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch, props) => ({
    nextClick: () => {
        const { place, userInfo } = props;
        if (place < 2) {
            if (place === 0) {
                dispatch(addNewUser(userInfo))
            }
            dispatch(updatePlace(place + 1));
        } else {
            dispatch(push('/list'));
        }
    }
});

const mapStateToProps = (state) =>{
    return {
        userInfo: state.userCard, 
        place: state.navigation.place
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserCard);
