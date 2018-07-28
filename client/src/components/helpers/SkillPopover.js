import React from 'react'


// import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';
import {connect} from "react-redux";

import PropTypes from 'prop-types';

import { buildSkillTree } from "../../actions/SkillActions";

class SkillPopover extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            modal: false,
            closeAll: false,
            skills: [],
            desire: '',
            proficiency: ''
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });

    }

    onClick(e){
        this.setState({
           closeAll: false
        });
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
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader
                        toggle={this.toggle}
                    >
                        {this.props.skill} Proficiency
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for={ this.props.skill + '_proficiency' }>Proficiency</Label>
                            <Input
                                name={ this.props.skill + '_proficiency' }
                                type='range'
                                max='5'
                                min='1'
                                
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </Modal>
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