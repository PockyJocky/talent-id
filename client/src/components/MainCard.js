import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import '../styles/MainCard.css';
import WelcomeCard from "./WelcomeCard";
import UserSearchCard from "./UserSearchCard";
import UserCard from './UserCard';

const MainCard = props => (
    <div>
        <div className="side_bar" >
            <Link to='/list'>List Users</Link>
            <Link to='/new'>New User</Link>
        </div>
        <div className="main_card">
            <Route exact path='/' component={WelcomeCard} />
            <Route path='/list' component={UserSearchCard} />
            <Route path='/new' component={UserCard} />
        </div>
    </div>
);

export default MainCard;