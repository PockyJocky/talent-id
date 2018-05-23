import React from 'react'
import {configure, mount, shallow} from "enzyme";
import {Provider} from "react-redux";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { MainCard } from "../../src/components/MainCard";
import { UserInfoCard } from "../../src/components/UserInfoCard";

import configureStore from "../../src/store/configureStore";

describe('UserInfoCard', () => {

    const initialState = { };
    let wrapper,store;
    beforeEach(() => {
        store = configureStore(initialState);
        wrapper = mount( <Provider store={store}><MainCard /></Provider> )
    })

    describe('renders', () => {

        beforeEach( () => {
            wrapper = shallow(<MainCard/>);
            wrapper.setState({ place: 1});
            wrapper.update()
        });

        it('at all', () => {
            expect(wrapper.find(UserInfoCard).length).toEqual(1)
        });
    });
});