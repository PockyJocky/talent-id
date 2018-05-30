import React from 'react'
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { UserSearchCard } from "../../src/components/UserSearchCard";
import { SearchCard } from "../../src/components/SearchCard";

describe('UserSearchCard', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SearchCard/>);
    });

    describe('renders', () => {

        it('the UserSearchCard component', () => {
            expect(wrapper.find('UserSearchCard').length).toEqual(1)
        })
    });

});
