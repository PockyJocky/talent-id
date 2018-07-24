import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, holdUserData } from "../../actions/AuthAction";

import Select from 'react-select';
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
            rankType: {},
            rank: {},
            squadron: {},
            errors: {},
        };

        this.onChange = this.onChange.bind(this);
        // this.onBlur = this.onBlur.bind(this);
    }

    handleRankTypeSelection = (rankType) => {
      this.setState({rankType: rankType});
    };

    handleRankMathces = (rankType) => {
        this.setState({rank: rankType});
    };

    handleUnitSelection = (squadron) => {
        this.setState({squadron});
    };

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
        console.log(this.state);
    }

    render(){
        const { errors } = this.state;

        const filteredRankOptions = ranks.filter((o) => o.link === this.state.rankType.value)
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
                                        placeholder='First Name'
                                        name='firstName'
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                        // onBlur={this.onBlur}
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
                                        placeholder='Last Name'
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
                                            placeholder='EDIPI'
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
                                        {/*<Select*/}
                                            {/*name="rankType"*/}
                                            {/*className="form-control"*/}
                                            {/*value={this.state.rankType.value}*/}
                                            {/*onBlur={this.onBlur}*/}
                                            {/*onChange={this.handleRankTypeSelection}*/}
                                            {/*options={rankTypes}*/}
                                            {/*searchable={false}*/}
                                            {/*clearable={false}*/}
                                            {/*required={true}*/}
                                            {/*placeholder="Select your current rank type"*/}
                                        {/*/>*/}
                                        <RankSelection
                                            placeholder='Select your rank type'
                                            name='rankType'
                                            value={this.state.rankType.value}
                                            // onChange={this.handleRankTypeSelection}
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
                                            placeholder='Select your current rank'
                                            name='rank'
                                            value={this.state.rank.value}
                                            // onChange={this.handleRankMathces}
                                            onChange={this.onChange}
                                            options={filteredRankOptions}
                                            error={errors.rank}
                                        />
                                        {/*<Select*/}
                                            {/*name="rank"*/}
                                            {/*className="form-control"*/}
                                            {/*value={this.state.rank.value}*/}
                                            {/*onBlur={this.onBlur}*/}
                                            {/*onChange={this.handleRankMathces}*/}
                                            {/*options={filteredRankOptions}*/}
                                            {/*searchable={false}*/}
                                            {/*clearable={false}*/}
                                            {/*required={true}*/}
                                            {/*placeholder="Select your current rank"*/}
                                        {/*/>*/}
                                    </div>
                                </div>
                            </div>,
                            <div key='org' className='row'>
                                <div className="col-lg-4 d-none d-lg-block mt-2">
                                    <label>Unit<span className="text-danger">*</span></label>
                                </div>
                                <div className="col-lg-8 d-none d-lg-block">
                                    <RankSelection
                                        placeholder='Select your current squadron'
                                        name='squadron'
                                        value={this.state.squadron.value}
                                        onChange={this.handleUnitSelection}
                                        options={squadronList}
                                        error={errors.squadron}
                                    />
                                    {/*<Select*/}
                                        {/*name="squadron"*/}
                                        {/*className="form-control"*/}
                                        {/*value={this.state.squadron.value}*/}
                                        {/*// onBlur={this.onBlur}*/}
                                        {/*onChange={this.handleUnitSelection}*/}
                                        {/*options={squadronList}*/}
                                        {/*searchable={false}*/}
                                        {/*clearable={false}*/}
                                        {/*required={true}*/}
                                        {/*placeholder="Select your current squadron"*/}
                                    {/*/>*/}
                                </div>
                            </div>
                            <div className="d-flex pt-5">
                                <Link to="/skills">
                                    <div className="mx-auto">
                                        <button className="btn btn-dark">To Skills</button>
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