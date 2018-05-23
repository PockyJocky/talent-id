import React, {Component} from 'react'
import UserInfoDataInput from './UserInfoDataInput'

export class UserInfoCard extends Component{


    render() {
        let userLocation = this.props.userLocation;
        return (
            <div>
                <div className = 'title'>
                Let's Start With Some Basic Information
                </div>
                <UserInfoDataInput userLocation = {userLocation}   />
            </div>
        );
    }
}
export default UserInfoCard