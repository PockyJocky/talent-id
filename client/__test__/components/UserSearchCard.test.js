import React from 'react'
import {Provider} from "react-redux";
import {configure, shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { default as Connected, UserSearchCard } from "../../src/components/UserSearchCard";
import { SearchCard } from "../../src/components/SearchCard";
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

import configureStore from "../../src/store/configureStore";

const Users = [
    {
        firstName: 'bobi',
        lastName: 'sanders',
        edipi: '1',
        rank: 'AB',
        squadron: '13 IS'
    },

    {
        firstName: 'bill',
        lastName: 'brewski',
        edipi: '2',
        rank: 'AB',
        squadron: '13 IS'
    },

    {
        firstName: 'banjo',
        lastName: 'cruse',
        edipi: '3',
        rank: 'AB',
        squadron: '13 IS'
    },
];

const initialState = { userCard: {}, userList: Users };

describe('UserSearchCard', () => {
    let wrapper, searchTextBox, users;
    beforeEach(() => {
        wrapper = shallow(<SearchCard/>);
    });

    describe('renders', () => {
        it('the UserSearchCard component', () => {
            expect(wrapper.find('Connect(UserSearchCard)').length).toEqual(1)
        });
        it('the PlayersCard component', () =>{
            expect(wrapper.find('PlayersCard').length).toEqual(1)
        })
    });

    describe('has a', () => {
        let store = configureStore(initialState);
        let wrapper = mount(<Provider store={store}><Connected/></Provider>);

        describe('search text box', () => {
            searchTextBox = wrapper.find('.search_box').first();

            it('that exists', () =>{
                expect(searchTextBox.length).toEqual(1)
            });

            it('should be able to take input', () => {
                expect(searchTextBox.type()).toEqual(SearchBox)
            });

            it('should have a list of users', () => {
                const spy = jest.spyOn(UserSearchCard.prototype, 'onChange')
                wrapper.update();
                users = wrapper.find('.user_list');
                expect(spy).not.toHaveBeenCalled();
                expect(users.length).toEqual(1)
            });
        })
    })
});
