import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { fetchUserList } from "../actions/UserActions";
import { fetchSkillList } from "../actions/SkillActions";

import WelcomeCard from "./WelcomeCard";
import UserSearchCard from "./UserSearchCard";
import AddUserCard from './AddUserCard';

import 'react-bootstrap';
import '../styles/MainCard.css';


class MainCard extends React.Component {
    componentDidMount() {
        this.props.fetchUserList();
        this.props.fetchSkillList();
    }

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

const mapDispatchToProps = dispatch => {
    return {
        fetchUserList: () => dispatch(fetchUserList()),
        fetchSkillList: () => dispatch(fetchSkillList())
    }
};

export default withRouter( connect(undefined, mapDispatchToProps)(MainCard) );
