import React from 'react'
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { UserSearchCard } from "../../src/components/UserSearchCard";
import { SearchCard } from "../../src/components/SearchCard";

describe('UserSearchCard', () => {
    let wrapper, search;
    beforeEach(() => {
        wrapper = shallow(<SearchCard/>);

    });

    describe('renders', () => {

        it('the UserSearchCard component', () => {
            expect(wrapper.find('UserSearchCard').length).toEqual(1)
        })
    });

    describe('has a', () => {
        describe('search text box', () => {
            beforeEach(() => {
                wrapper = shallow(<UserSearchCard/>)
                search = wrapper.find('.search_box')
            })
            it('that exists', () =>{
                expect(search.length).toEqual(1)
            })
            it('should be able to take input', () => {
                expect(search.type()).toEqual('input')
            })
        })
    })

});
