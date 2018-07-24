import React from 'react'


import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {connect} from "react-redux";

import PropTypes from 'prop-types';

import {buildSkillTree} from "../../actions/SkillActions";

class SkillPopover extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            popoverOpen: false,
            skills: [],
            desire: '',
            proficiency: ''
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });

    }

    onClick(e){
        // this.state.skills.push(e);
        // this.setState({ skills: [...this.state.skills] });
        const newSkill = {
          skill_name: this.props.skill,
          skill_desire: this.state.desire,
          skill_proficiency: this.state.proficiency
        };
        this.props.buildSkillTree(newSkill);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <span className="badge badge-pill badge-primary" id={this.props.skill} onClick={this.toggle}> {this.props.skill}
                <Popover placement="right" isOpen={this.state.popoverOpen} target={this.props.skill} toggle={this.toggle}>
                    <PopoverHeader>{this.props.skill} Confidence</PopoverHeader>
                    <PopoverBody>
                        <div className='container'>
                            <div className='form-group'>
                                <label className="text-dark">{this.props.skill} Proficiency</label>
                                <input
                                    type='range'
                                    className='form-control-range'
                                    min='1'
                                    max='5'
                                    name='proficiency'
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label className="text-dark">{this.props.skill} Desire</label>
                                <input
                                    type='range'
                                    className='form-control-range'
                                    min='1'
                                    max='5'
                                    name='desire'
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <button
                                    className='btn btn-dark btn-sm'
                                    onClick={() => this.onClick({
                                        skill_name: this.props.skill,
                                        skill_proficiency: this.state.proficiency,
                                        skill_desire: this.state.desire
                                    })}
                                >
                                    Commit
                                </button>
                            </div>

                        </div>
                    </PopoverBody>
                </Popover>
            </span>
        );
    }
}

// export default SkillPopover

SkillPopover.propTypes = {
    buildSkillTree: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { buildSkillTree })(SkillPopover);