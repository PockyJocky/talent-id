import React from 'react'
import {configure, mount, shallow} from "enzyme";
import {Provider} from "react-redux";
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import MainCard from "../../src/components/MainCard"
import WelcomeCard from "../../src/components/WelcomeCard";
import AddUserCard from "../../src/components/AddUserCard";

import configureStore from "../../src/store/configureStore";

// Disable Icon Warnings for OfficeFabricUI
import { setIconOptions } from 'office-ui-fabric-react/lib/Styling';
setIconOptions({
  disableWarnings: true
});


describe("MainCard", () => {
    const initialState = { };
    const history = createHistory();
    let wrapper, store, button;

    beforeEach(()=>{
        store = configureStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MainCard />
                </ConnectedRouter>
            </Provider>
        );
    });

    describe('renders', () => {
        it('at all', () => {
            expect(wrapper.find(MainCard).length).toEqual(1);
        });

        it('with a welcome card', () => {
            history.push('/');
            expect(wrapper.update().find(WelcomeCard).length).toEqual(1);
        });

        it('with a new user card', () => {
            history.push('/new');
            expect(wrapper.update().find(AddUserCard).length).toEqual(1);
        });
    });

    // describe('has a button', () => {
    //     beforeEach(() => {
    //         button = wrapper.find('.next_button');
    //     });
        
    //     it('that renders', () => {
    //         expect(button.length).toEqual(1)
    //     });

    //     it('should increment the place when clicked', () => {
    //         store.dispatch(updatePlace(0));

    //         button.simulate("click");
    //         expect(store.getState().navigation.place).toEqual(1);
    //         button.simulate("click");
    //         expect(store.getState().navigation.place).toEqual(2);
    //     });
        
    //     it('should not increment place after the second time', () => {
    //         store.dispatch(updatePlace(2));
    //         button.simulate("click");
    //         let state = store.getState();
    //         expect(state.navigation.place).toEqual(2);
    //     });

    // });
});