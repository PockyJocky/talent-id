import React from 'react'
import {configure, shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { UserSearchCard } from "../../src/components/UserSearchCard";
import { SearchCard } from "../../src/components/SearchCard";

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
        describe('search text box', () => {
            beforeEach(() => {
                wrapper = mount(<UserSearchCard/>)
                searchTextBox = wrapper.find('.search_box')
                users = wrapper.find('.person')
            });
            it('that exists', () =>{
                expect(searchTextBox.length).toEqual(1)
            });
            it('should be able to take input', () => {
                expect(searchTextBox.type()).toEqual('input')
            });
            it('should have a list of users', () => {
                const spy = jest.spyOn(UserSearchCard.prototype, 'onChange')
                wrapper.setState({users: Users});
                wrapper.update();
                expect(spy).toNotHaveBeenCalled
                expect(users.length).toEqual(3)
            });
        })
    })

});
