import React, {Component} from 'react'
import InterestList from './InterestList'
import {connect} from 'react-redux'
import {addNewInterest, updateInterest} from "../actions/InterestCardActions";

//styles
// import '../styles/InterestCard.css'

export class InterestCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillValue: '3',
            interestValue: '3',
            skillName: '',
            skillList: []};
    }

    handleChangeSkill = async (event) => {
        await this.setState({skillValue: event.target.value});
        this.updateProps()
    };

    handleChangeInterest = async (event) => {
        await this.setState({interestValue: event.target.value});
        this.updateProps()
    };

    handleChangeSkillName = async (event) => {
        await this.setState({skillName: event.target.value});
        this.updateProps()
    };

    handleClick = async () =>{
        if(this.props.skillName !== '') {

            const newInterest = {
                skillName: this.props.interest.skillName,
                skillValue: this.props.interest.skillValue,
                interestValue: this.props.interest.interestValue
            };

            await this.props.addNewInterest(newInterest, this.props.user);
            this.setState({
                        skillName: '',
                        skillValue: '3',
                        interestValue: '3',
                        skillList: this.props.interest.skillList
                    })
        }
    };

    updateProps = () => {
        this.props.update({...this.state});
    };

    render() {
        return (
            <div className = 'main'>
                <div className = 'top_buffer' />
                <ul className = 'list'>
                    <li>
                        <div className = 'title'>
                            What Are You Interested In?
                        </div>
                    </li>
                    <li>
                        <ul className = 'interest_input'>
                            <li>
                                <input
                                    className = 'skill_name_input'
                                    type = 'text'
                                    onChange = {this.handleChangeSkillName}
                                    value = {this.state.skillName}
                                />

                            </li>
                            <div className = "labels_left">Unskilled</div>
                            <div className = "labels_right">Very Skilled</div>
                            <li>
                                <input
                                    className = 'big_slider'
                                    id="skill_level"
                                    type = 'range'
                                    min = '1'
                                    max = '5'
                                    step = '1'
                                    onChange = {this.handleChangeSkill}
                                    value = {this.state.skillValue}
                                />
                            </li>
                            <div className = "labels_left">Little Interest</div>
                            <div className = "labels_right">Very Interested</div>
                            <li>
                                <input
                                    className = 'big_slider'
                                    id="interest_level"
                                    type = 'range'
                                    min = '1'
                                    max = '5'
                                    step = '1'
                                    onChange = {this.handleChangeInterest}
                                    value = {this.state.interestValue}
                                />

                            </li>
                            <li>
                                <input
                                    className = 'submit_button'
                                    type = 'submit'
                                    value = 'Submit'
                                    onClick = {this.handleClick}
                                />
                            </li>
                        </ul>
                    </li>
                    <InterestList />
                </ul>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        update: interest => dispatch(updateInterest(interest)),
        addNewInterest: (interest, user) => dispatch(addNewInterest(interest, user))
    }
};

const mapStateToProps = (state) =>{
    return{interest : state.interestCard, user: state.userCard}
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestCard)