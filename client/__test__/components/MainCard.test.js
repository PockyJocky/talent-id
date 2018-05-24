import React from 'react'
import {configure, mount, shallow} from "enzyme";
import {Provider} from "react-redux";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { MainCard } from "../../src/components/MainCard"
import WelcomeCard from "../../src/components/WelcomeCard";
import UserInfoCard from "../../src/components/UserInfoCard";
import InterestCard from "../../src/components/InterestCard";
import PlayersCard from "../../src/components/PlayersCard";

import configureStore from "../../src/store/configureStore";

describe("MainCard", () => {
    const initialState = { };
    let wrapper,store;
    beforeEach(()=>{
        store = configureStore(initialState)
        wrapper = mount( <Provider store={store}><MainCard /></Provider> )
    });

    describe('renders', () => {
        it('at all', () => {
            expect(wrapper.find(MainCard).length).toEqual(1)
        });

        it('with a welcome card', () => {
            expect(wrapper.find(WelcomeCard).length).toEqual(1)
        });

        it('with a user info card', () => {
            wrapper = shallow(<MainCard />);
            wrapper.setState({ place : 1});
            expect(wrapper.update().find(UserInfoCard).length).toEqual(1)
        });

        it('with a interest card', () => {
            wrapper = shallow(<MainCard />);
            wrapper.setState({ place : 2});
            expect(wrapper.update().find(InterestCard).length).toEqual(1)
        });

        it('with a player card', () => {
            wrapper = shallow(<MainCard />);
            wrapper.setState({ place : 3});
            expect(wrapper.update().find(PlayersCard).length).toEqual(1)
        });
    });

    describe('has a button', () => {
        it('that renders', () => {
            wrapper = shallow(<MainCard/>);
            expect(wrapper.find('.next_button').length).toEqual(1)
        });

        it('should increment the place when clicked', () => {
            const spy = jest.spyOn(MainCard.prototype, 'clickNext');
            wrapper = shallow(<MainCard/>);
            wrapper.update();
            let button =  wrapper.find('.next_button');

            expect(spy).toNotHaveBeenCalled;
            button.simulate("click");
            expect(spy).toHaveBeenCalled;
        });
    });
});