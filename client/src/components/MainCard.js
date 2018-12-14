import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { fetchUserList } from "../actions/UserActions";
import { fetchSkillList } from "../actions/SkillActions";

import WelcomeCard from "./WelcomeCard";
import UserSearchCard from "./UserSearchCard";
import AddUserCard from './AddUserCard';

import '../styles/MainCard.css';

class MainCard extends React.Component {
    componentDidMount() {
        //fetch the user and skill lists from the backend
        this.props.fetchUserList();
        this.props.fetchSkillList();
    }

    //conditionally render a page based off of what url you are on
    render() {
        return (
            <div className="main_card">
                <Route exact path='/' component={WelcomeCard}/>
                <Route path='/list' component={UserSearchCard}/>
                <Route path='/new' component={AddUserCard}/>
            </div>
        );
    }
}

//redux stuff, allows you to reference the actions described in this code
const mapDispatchToProps = dispatch => {
    return {
        fetchUserList: () => dispatch(fetchUserList()),
        fetchSkillList: () => dispatch(fetchSkillList())
    }
};

//connects the main card to the dispatcher
export default withRouter( connect(undefined, mapDispatchToProps)(MainCard) );
