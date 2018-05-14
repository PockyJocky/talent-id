import React, {Component} from 'react'
import InterestList from './InterestList'
import {connect} from 'react-redux'
import {addInterest} from "../actions/InterestCardActions";

//styles
// import '../styles/InterestCard.css'

class InterestCard extends Component {
    constructor(props) {
        super(props);
        this.state = {skillValue: '3', interestValue: '3', skillName: '', skillList: []};
    }

    handleChangeSkill = (event) => {
        this.setState({skillValue: event.target.value});
    };

    handleChangeInterest = (event) => {
        this.setState({interestValue: event.target.value});
    };

    handleChangeSkillName = (event) => {
        this.setState({skillName: event.target.value});
    };

    handleClick = () =>{
        if(this.state.skillName !== '') {
            this.props.addInterest({
                skillName: this.state.skillName,
                skillValue: this.state.skillValue,
                interestValue: this.state.interestValue
            });
            this.setState(() => {
                    return ({
                        skillName: '',
                        skillValue: '3',
                        interestValue: '3',
                    });
                }
            )
        }
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
                            <li>
                                <input
                                    className = 'big_slider'
                                    type = 'range'
                                    min = '1'
                                    max = '5'
                                    step = '1'
                                    onChange = {this.handleChangeSkill}
                                    value = {this.state.skillValue}
                                />
                            </li>
                            <li>
                                <input
                                    className = 'big_slider'
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
                    <InterestList skillList = {this.state.skillList} />
                </ul>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addInterest: interest => dispatch(addInterest(interest))
    }
};

export default connect(null, mapDispatchToProps)(InterestCard)