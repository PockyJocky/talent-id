import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import MainCard from '../../src/components/MainCard';
import UserInfoCard from "../../src/components/UserInfoCard";
import {Provider} from 'react-redux'

import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

describe('<MainCard/>', function () {
    it('should display User Information Card', function () {
        const wrapper = shallow(
            <Provider store = {store}>
                <MainCard />
            </Provider>,
            );
        expect(wrapper.find('div')).to.contain(<UserInfoCard/>);
    });
});
