import React, {Component} from 'react';
import {connect} from 'react-redux';
import PlayersCard from "./PlayersCard";
import UserSearchCard from "./UserSearchCard";


export class SearchCard extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    //Get all user's and interests from the backend
    render() {
        return(
            <div className = "search_card">
                <UserSearchCard/>
                <PlayersCard/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userInfo: state.userCard,
        interest: state.interestCard
    }
}

export default connect(mapStateToProps)(SearchCard);