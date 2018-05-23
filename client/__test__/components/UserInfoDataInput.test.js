import React from 'react'
import {configure, mount, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { UserInfoDataInput } from "../../src/components/UserInfoDataInput";
import {UserInfoCard} from "../../src/components/UserInfoCard";

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
        wrapper = shallow(<UserInfoCard props={{userLocation : 1}}/>);
        wrapper.update()
    });

    it('renders', () => {
        wrapper = shallow(<UserInfoDataInput props={{...props}} />)
        expect(wrapper.find(UserInfoDataInput).length).toEqual(1)
    });
});