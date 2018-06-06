import React from 'react';
import { Route, Link } from 'react-router-redux';

import '../styles/MainCard.css';
import WelcomeCard from "./WelcomeCard";
import { SearchCard } from "./SearchCard";
import UserCard from './UserCard';

const MainCard = props => (
    <div>
        <div className="side_bar" >
            <Link to='/list'>List Users</Link>
            <Link to='/new'>New User</Link>
        </div>
        <div className="main_card">
            <Route exact path='/' component={WelcomeCard} />
            <Route path='/list' component={SearchCard} />
            <Route path='/new' component={UserCard} />
        </div>
    </div>
);

export default MainCard;