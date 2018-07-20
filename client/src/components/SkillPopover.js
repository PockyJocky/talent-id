import React from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class SkillPopover extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({

            popoverOpen: !this.state.popoverOpen
        });

    }

    render() {
        return (
            <span className="badge badge-pill badge-primary" id={this.props.skill} onClick={this.toggle}> {this.props.skill}
                <Popover placement="right" isOpen={this.state.popoverOpen} target={this.props.skill} toggle={this.toggle}>
                    <PopoverHeader>{this.props.skill} Confidence</PopoverHeader>
                    <PopoverBody>
                        <div className='container'>
                            <div className='form-group'>
                                <label>{this.props.skill} Proficiency</label>
                                <input type='range' className='form-control-range' min='1' max='5' />
                            </div>
                            <div className='form-group'>
                                <label>Desire</label>
                                <input type='range' className='form-control-range' min='1' max='5' />
                            </div>
                            <div className='form-group'>
                                <button className='btn btn-dark btn-sm'>Commit</button>
                            </div>

                        </div>
                    </PopoverBody>
                </Popover>
            </span>
        );
    }
}

export default SkillPopover