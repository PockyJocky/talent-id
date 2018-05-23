import React, { Component } from 'react';
import InterestCard from './InterestCard';
import UserInfoCard from './UserInfoCard';
import PlayersCard from "./PlayersCard";
import {connect} from "react-redux";
import {addNewUser} from "../actions/UserActions";
import WelcomeCard from "./WelcomeCard";

import '../styles/MainCard.css';

export class MainCard extends Component {

    constructor () {
        super();
        this.state = { place: 0 };
        this.clickNext = this.clickNext.bind(this)
    }


    clickNext() {
        if( this.props.place <3 ) {
            if( this.props.place === 1) {
                this.props.addUser(({...this.props.userInfo}))
            }
            this.setState((prevState) => ({
                place: prevState.place += 1,
            }));
        }
    };

    render() {
        const place = this.state.place;
        return (
            <div>
                <div className="side_bar" > </div>
                <div className="main_card">
                    {place === 0 && <WelcomeCard/>}
                    {place === 1 && <UserInfoCard userLocation = {place}/>}
                    {place === 2 && <InterestCard />}
                    {place === 3 && <PlayersCard userLocation = {place}/>}
                    <button onClick={this.clickNext} className="next_button">Next</button>
                </div>
                <div className="side_bar" />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addUser: user => dispatch(addNewUser(user))
    }
};

const mapStateToProps = (state) =>{
    return{userInfo: state.userCard, place: this.state.place}
};
export default  connect(mapStateToProps,mapDispatchToProps)(MainCard);
