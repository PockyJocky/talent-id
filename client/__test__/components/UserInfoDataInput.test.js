import React from 'react'
import {configure, mount, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { UserInfoDataInput } from "../../src/components/UserInfoDataInput";
import { UserInfoCard } from "../../src/components/UserInfoCard";
describe('UserInfoDataInput', () => {

    let wrapper, input, spy;
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
                input = wrapper.find('.firstName');
            });
            it('that exists', () => {
                expect(input.length).toEqual(1)
            });

            it('should be able to take input', () => {
                expect(input.type()).toEqual('input')
            });

            it('should fire onChange when changed', () => {
                spy = jest.spyOn(UserInfoDataInput.prototype, 'handleFirstNameChange')
                console.log(input.debug())
                expect(spy).toHaveNotBeenCalled
                input.props().onChange( {target: { value: '7' } })
                expect(spy).toHaveBeenCalled
            });

        });
    });
});