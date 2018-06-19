import React from 'react';
import { Route } from 'react-router';

import '../styles/MainCard.css';
import WelcomeCard from "./WelcomeCard";
import UserSearchCard from "./UserSearchCard";
import AddUserCard from './AddUserCard';

const MainCard = props => (
    <div>
        <div className="main_card">
            <Route exact path='/' component={WelcomeCard}/>
            <Route path='/list' component={UserSearchCard}/>
            <Route path='/new' component={UserCard}/>
        </div>
    </div>
];

export default MainCard;
