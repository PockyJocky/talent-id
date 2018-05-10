import React, {Component} from 'react'
import {addUserInfo} from "../actions/UserInfoCardActions";
import {connect} from "react-redux";

class UserInfoDataInput extends Component{

    constructor(props) {
        super(props);
        if(this.props.userLocation === 2)
        {
          this.state = {
              firstName: this.props.userInfo.firstName,
              lastName: this.props.userInfo.lastName,
              edipi: this.props.userInfo.edipi,
              rank: this.props.userInfo.rank,
              squadron: this.props.userInfo.squadron,
          }
        }else {
            this.state = {
                firstName: 'First Name',
                lastName: 'Last Name',
                edipi: 'DOD Military ID Number',
                rank: 'AB',
                squadron: '13 IS'
            };
        }
    }

    handleFirstNameFocusText = () => {
        if(this.state.firstName === 'First Name'){
            this.setState(() => ({firstName: ''}))
        }
    };

    handleLastNameFocusText = () =>{
        if(this.state.lastName === 'Last Name'){
            this.setState(() => ({lastName: ''}))
        }
    };

    handleEDIPIFocusText = () =>{
        if(this.state.edipi === 'DOD Military ID Number'){
            this.setState(() => ({edipi: ''}))
        }
    };

    handleFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});
        this.updateProps('firstName', event.target.value)
    }

    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
        this.updateProps('lastName', event.target.value)
    };

    handleEDIPIChange = (event) => {
        this.setState({edipi: event.target.value});
        this.updateProps('edipi', event.target.value)
    };

    handleRankChange = (event) => {
        this.setState({rank: event.target.value});
        this.updateProps('rank', event.target.value)
    };

    handleSquadronChange = (event) => {
        this.setState({squadron: event.target.value});
        this.updateProps('squadron', event.target.value)
    };

    updateProps = (target, value) => {
        this.props.addUserInfo(({...this.props.userInfo, [target]: value}))
    }

    render(){
        return(
            <ul className = 'interest_input'>
                <li>
                    <input
                        className = 'firstName'
                        type = 'text'
                        value = {this.state.firstName}
                        onFocus = {this.handleFirstNameFocusText}
                        onChange = {this.handleFirstNameChange}
                    />
                </li>
                <li>
                    <input
                        className = 'lastName'
                        type = 'text'
                        value = {this.state.lastName}
                        onFocus={this.handleLastNameFocusText}
                        onChange = {this.handleLastNameChange}
                    />
                </li>
                <li>
                    <input
                        className = 'edipi'
                        type = 'text'
                        value = {this.state.edipi}
                        onFocus={this.handleEDIPIFocusText}
                        onChange = {this.handleEDIPIChange}
                    />
                </li>
                <li>
                    <select
                    onChange={this.handleRankChange}
                    >
                        <option value="airmenBasic">AB</option>
                        <option value="airmen">Amn</option>
                        <option value="airmenfirst">A1C</option>
                        <option value="staffsgt">SSgt</option>
                        <option value="techsgt">TSgt</option>
                        <option value="mastersgt">MSgt</option>
                        <option value="seniorsgt">SMSgt</option>
                        <option value="chief">CMSgt</option>
                    </select>
                </li>
                <li>
                    <select
                    onChange={this.handleSquadronChange}
                    >
                        <option value="13 IS">13 IS</option>
                        <option value="48 IS">48 IS</option>
                        <option value="548 OSS">548 OSS</option>
                        <option value="9 IS">9 IS</option>
                        <option value="groupish">548 ISRG</option>
                    </select>
                </li>
            </ul>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addUserInfo: userInfo => dispatch(addUserInfo(userInfo))
    }
};

const mapStateToProps = (state) =>{
    return{userInfo: state.userCard.userInfo}
};

export default connect(mapStateToProps,mapDispatchToProps)(UserInfoDataInput)