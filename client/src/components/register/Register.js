import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Redux dependencies
import { connect } from 'react-redux';
import { registerUser } from "../../actions/AuthAction";

import TextField from '../helpers/TextInput';
import RankSelection from '../helpers/RankSelection';

import { Link } from 'react-router-dom';

import { ranks} from '../../const/ranks.js';
import { rankTypes } from '../../const/rankTypes.js';
import { squadronList } from "../../const/squadronList";


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            edipi: '',
            rankType: '',
            rank: '',
            squadron: '',
            errors: {},
        };

        this.onChange = this.onChange.bind(this);
        this.updateUserObject = this.updateUserObject.bind(this);
    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    updateUserObject(){
        const newUser = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            edipi : this.state.edipi,
            rankType : this.state.rankType,
            rank : this.state.rank,
            squadron : this.state.squadron
        };

        this.props.registerUser(newUser);
    }

    render(){
        const { errors } = this.state;

        const filteredRankOptions = ranks.filter((o) => o.link === this.state.rankType)
        return (
            <div>
                <div className="landing container p-5">
                    <h2 className="text-center text-white">Let's get to know you</h2>

                    <div className="row py-5">
                        <div className="container mt-2 pt-2 text-left">
                            <div className="row">
                                <div className="col-lg-4 d-none d-lg-block mt-2">
                                    <label>First Name<span className="text-danger">*</span></label>
                                </div>
                                <div className="col-lg-8 d-none d-lg-block">
                                    <TextField
                                        placeholder='Enter your first name'
                                        name='firstName'
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                        error={errors.firstName}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 d-none d-lg-block mt-2">
                                    <label>Last Name<span className="text-danger">*</span></label>
                                </div>
                                <div className="col-lg-8 d-none d-lg-block">
                                    <TextField
                                        placeholder='Enter you last Name'
                                        name='lastName'
                                        value={this.state.lastName}
                                        onChange={this.onChange}
                                        error={errors.lastName}
                                    />
                                </div>
                            </div>,
                            <div key='id'>
                                <div className="row">
                                    <div className="col-lg-4 d-none d-lg-block mt-2">
                                        <label>DOD EDIPI <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-lg-8 d-none d-lg-block">
                                        <TextField
                                            placeholder='Enter your EDIPI'
                                            name='edipi'
                                            value={this.state.edipi}
                                            onChange={this.onChange}
                                            error={errors.edipi}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 d-none d-lg-block mt-2">
                                        <label>Rank Type<span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-lg-8 d-none d-lg-block">
                                        <RankSelection
                                            name='rankType'
                                            onChange={this.onChange}
                                            options={rankTypes}
                                            error={errors.rankType}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 d-none d-lg-block mt-2">
                                        <label>Rank<span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-lg-8 d-none d-lg-block">
                                        <RankSelection
                                            name='rank'
                                            onChange={this.onChange}
                                            options={filteredRankOptions}
                                            error={errors.rank}
                                        />
                                    </div>
                                </div>
                            </div>,
                            <div key='org' className='row'>
                                <div className="col-lg-4 d-none d-lg-block mt-2">
                                    <label>Unit<span className="text-danger">*</span></label>
                                </div>
                                <div className="col-lg-8 d-none d-lg-block">
                                    <RankSelection
                                        name='squadron'
                                        onChange={this.onChange}
                                        options={squadronList}
                                        error={errors.squadron}
                                    />
                                </div>
                            </div>
                            <div className="d-flex pt-5">
                                <Link to="/skills">
                                    <div className="mx-auto">
                                        <button
                                            className="btn btn-dark"
                                            onClick={this.updateUserObject}
                                        >
                                            To Skills
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));