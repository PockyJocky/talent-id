import React from 'react'
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { InterestCard } from "../../src/components/InterestCard";
import { InterestList } from "../../src/components/InterestList";

describe('InterestList', () => {
    let wrapper, input;

    beforeEach(() => {
        wrapper = shallow(<InterestCard/>);
    });

    describe('renders', () => {

        it('at all', () => {
            expect(wrapper.find('Connect(InterestList)').length).toEqual(1)
        });
    });

    describe('has a', () => {

        describe('input block', () => {

            beforeEach(() => {
                input = wrapper.find('.skill_name_input');
            });
            it('that exists', () => {
                expect(input.length).toEqual(1)
            });

            it('should be able to take input', () => {
                expect(input.type()).toEqual('input')
            });

            it('should fire onChange when changed', () => {
                // spy = jest.spyOn(UserInfoDataInput.prototype, 'handleFirstNameChange')
                // wrapper = shallow(<UserInfoDataInput {...props} />)
                // console.log(input.debug())
                // expect(spy).toHaveNotBeenCalled
                // input.props().onChange( {target: { value: '7' } })
                // expect(spy).toHaveBeenCalled
            });

        });
    });
});