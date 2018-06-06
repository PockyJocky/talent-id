import React from 'react'
import {configure, mount, shallow} from "enzyme";
import {Provider} from "react-redux";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { default as Connected, MainCard } from "../../src/components/MainCard"
import WelcomeCard from "../../src/components/WelcomeCard";
import UserInfoCard from "../../src/components/UserInfoCard";
import InterestCard from "../../src/components/InterestCard";
import PlayersCard from "../../src/components/PlayersCard";

import configureStore from "../../src/store/configureStore";
import { updatePlace } from '../../src/actions/NavigationActions';

describe("MainCard", () => {
    const initialState = { };
    let wrapper, store;
    beforeEach(()=>{
        store = configureStore(initialState);
        wrapper = mount(<Provider store={store}><Connected /></Provider>);
    });

    describe('renders', () => {
        it('at all', () => {
            expect(wrapper.find(MainCard).length).toEqual(1);
        });

        it('with a welcome card', () => {
            store.dispatch(updatePlace(0));
            expect(wrapper.update().find(WelcomeCard).length).toEqual(1);
        });

        it('with a user info card', () => {
            store.dispatch(updatePlace(1));
            expect(wrapper.update().find(UserInfoCard).length).toEqual(1);
        });

        it('with a interest card', () => {
            store.dispatch(updatePlace(2));
            expect(wrapper.update().find(InterestCard).length).toEqual(1);
        });

        it('with a player card', () => {
            store.dispatch(updatePlace(3));
            expect(wrapper.update().find(PlayersCard).length).toEqual(1);
        });
    });

    describe('has a button', () => {
        it('that renders', () => {
            expect(wrapper.find('.next_button').length).toEqual(1)
        });

        it('should increment the place when clicked', () => {
            const spy = jest.spyOn(MainCard.prototype, 'clickNext');
            wrapper.update();
            let button =  wrapper.find('.next_button');

            expect(spy).toNotHaveBeenCalled;
            button.simulate("click");
            expect(spy).toHaveBeenCalled;
        });
    });
});