import React, {Component} from 'react'
import {update} from "../actions/UserActions";
import {connect} from "react-redux";

export class UserInfoDataInput extends Component{

    constructor(props) {
        super(props);
        if(this.props.userLocation === 1)
        {
            this.state = {
                firstName: 'First Name',
                lastName: 'Last Name',
                edipi: 'DOD Military ID Number',
                rank: 'AB',
                squadron: '13 IS'
            };
        }else {
            this.state = {
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                edipi: this.props.user.edipi,
                rank: this.props.user.rank,
                squadron: this.props.user.squadron,
            }
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.updateProps = this.updateProps.bind(this)
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

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
        this.updateProps()
    };

    handleLastNameChange = async (event) => {
        await this.setState({lastName: event.target.value});
        this.updateProps()
    };

    handleEDIPIChange = async (event) => {
        await this.setState({edipi: event.target.value});
        this.updateProps()
    };

    handleRankChange = async (event) => {
        await this.setState({rank: event.target.value});
        this.updateProps()
    };

    handleSquadronChange = async (event) => {
        await this.setState({squadron: event.target.value});
        this.updateProps()
    };

    updateProps() {
        this.props.update({...this.state});
    };

    render(){
        return(
            <ul className = 'interest_input'>
                <li>
                    <input
                        className='firstName text_input'
                        type='text'
                        value={this.state.firstName}
                        onFocus={this.handleFirstNameFocusText}
                        onChange={this.handleFirstNameChange}
                    />
                </li>
                <li>
                    <input
                        className='lastName text_input'
                        type='text'
                        value={this.state.lastName}
                        onFocus={this.handleLastNameFocusText}
                        onChange={this.handleLastNameChange}
                    />
                </li>
                <li>
                    <input
                        className='edipi text_input'
                        type='text'
                        value={this.state.edipi}
                        onFocus={this.handleEDIPIFocusText}
                        onChange={this.handleEDIPIChange}
                    />
                </li>
                <li>
                    <select
                        className = 'drop_box rank'
                        onChange={this.handleRankChange}
                    >
                        <option value="airmenBasic">AB</option>
                        <option value="airmen">Amn</option>
                        <option value="airmenfirst">A1C</option>
                        <option value="seniorairman">SrA</option>
                        <option value="staffsgt">SSgt</option>
                        <option value="techsgt">TSgt</option>
                        <option value="mastersgt">MSgt</option>
                        <option value="seniorsgt">SMSgt</option>
                        <option value="chief">CMSgt</option>
                    </select>
                </li>
                <li>
                    <select
                        className = 'drop_box squadron'
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
        update: user => dispatch(update(user))
    }
};

const mapStateToProps = (state) =>{
    return{user: state.userCard}
};

export default connect(mapStateToProps,mapDispatchToProps)(UserInfoDataInput)