import React from 'react'
import {configure, mount, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { UserInfoDataInput } from "../../src/components/UserInfoDataInput";
import {UserInfoCard} from "../../src/components/UserInfoCard";
import * as sinon from "sinon";
describe('UserInfoDataInput', () => {

    let wrapper;
    let props = {
        userLocation: 1,
        user: {
            firstName: 'First Name',
            lastName: 'Last Name',
            edipi: 'DOD Military ID Number',
            rank: 'AB',
            squadron: '13 IS'
        }};

    beforeEach(() => {
        wrapper = shallow(<UserInfoCard/>);
    });

    describe('renders', () => {

        it('at all', () => {
            expect(wrapper.find('Connect(UserInfoDataInput)').length).toEqual(1)
        });
    });

    describe('has a', () => {

        describe('input block', () => {

            beforeEach(() => {
                wrapper = shallow(<UserInfoDataInput {...props} />)
            });

            it('that exists', () => {
                expect(wrapper.find('.firstName').length).toEqual(1)
            });

            it('should be able to take input', () => {

            });
        });
    });
});