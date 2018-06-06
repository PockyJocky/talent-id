import React, { Component } from 'react';
import InterestCard from './InterestCard';
import UserInfoCard from './UserInfoCard';
import PlayersCard from "./PlayersCard";
import { connect } from "react-redux";
import { addNewUser } from "../actions/UserInfoActions";
import { updatePlace } from "../actions/NavigationActions";
import WelcomeCard from "./WelcomeCard";

import '../styles/MainCard.css';
import { SearchCard } from "./SearchCard";

export class MainCard extends Component {

    constructor () {
        super();
        this.clickNext = this.clickNext.bind(this)
    }

    clickNext () {
        const { place, userInfo } = this.props;
        if (place < 4) {
            if (place === 1) {
                this.props.addUser(userInfo)
            }
            this.props.updatePlace(place + 1);
        }
    };

    render() {
        const { place } = this.props;
        return (
            <div>
                <div className="side_bar" > </div>
                <div className="main_card">
                    {place === 0 && <WelcomeCard/>}
                    {place === 1 && <UserInfoCard userLocation = {place}/>}
                    {place === 2 && <InterestCard />}
                    {place === 3 && <PlayersCard userLocation = {place}/>}
                    {place === 4 && <SearchCard/>}
                    <div className="button_container">
                    <button onClick={this.clickNext} className="next_button">Next</button>
                    </div>
                </div>
                <div className="side_bar" />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch(addNewUser(user)),
        updatePlace: place => dispatch(updatePlace(place))
    }
};

const mapStateToProps = (state) =>{
    return {
        userInfo: state.userCard,
        place: state.navigation.place
    }
};
export default  connect(mapStateToProps,mapDispatchToProps)(MainCard);
