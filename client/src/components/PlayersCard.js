import React, {Component} from 'react'
import UserInfoDataInput from "./UserInfoDataInput";
import InterestList from "./InterestList";

class PlayersCard extends Component{
    render(){
        return(
            <div>
                <UserInfoDataInput userLocation={ this.props.userLocation}/>
                <InterestList />
            </div>
        )
    }
}

export default PlayersCard