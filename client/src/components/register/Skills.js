import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { buildSkillTree } from "../../actions/SkillActions";

import { Link } from 'react-router-dom';

import SkillPopover from '../helpers/SkillPopover.js'
import { computerSciece } from "../../const/skillNames";

class Skills extends Component {
    constructor(props){
        super(props);
        this.state = {
            popoverOpen: false,
            skillsTree: []
        };

        this.onClick = this.onClick.bind(this);

    }

    toggle = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });

    };

    onClick(e){

    }

    render(){
        const { user } = this.props.auth;
        return(
            <div className="container">
                <div className="row pt-5 mx-auto">
                    <Link to="/new">
                        <button
                            className="btn btn-outline-info"
                        >
                            Back
                        </button>
                    </Link>
                        <button></button>
                </div>
                <div className="p-5">
                    <h3 className="text-white">{ user ? user.firstName : null } { user ? user.lastName : null }</h3>
                </div>
                <div className="row">
                    <div className="col-lg-8 d-block d-lg-block">
                        <div id="skillsAccordian">
                            <div className="card">
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href="#compSci">
                                        Computer Sciences
                                    </a>
                                </div>
                                <div id="collapseOne" className="collapse show" data-parent="#skillsAccordian">
                                    <div className="card-body">
                                        <div className="row">
                                            {
                                                computerSciece.map((skill,i) => (
                                                    <div className="col" key={i}>
                                                        <SkillPopover skill={skill} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-block d-lg-block">
                        <div className="card">
                            <div className="card-body">
                                Pills will populate here
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Skills.propTypes = {
    buildSkillTree: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { buildSkillTree })(Skills);