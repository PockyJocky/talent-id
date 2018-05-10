// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import UserInfo from './containers/UserInfoCard';
import InterestCard from './containers/InterestCard';

export default (
<Route path="/" component={App}>
    <IndexRoute component={UserInfo} />
<Route path="/:id" component={InterestCard} />
</Route>
)