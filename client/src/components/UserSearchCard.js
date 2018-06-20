import Fuse from 'fuse.js';
import React, {Component} from 'react'

import {Fabric, DetailsList, Checkbox, SearchBox} from "office-ui-fabric-react";

import {connect} from "react-redux";

const fuseOptions = {
    keys: ['skills.name'],
    threshold: 0.1
};

const initalState = {
    fuse: false,
    users: [],
    skills: [],
    filteredUsers: [],
    searchBox: '',
    opts: {
        'firstName': false,
        'lastName': false,
        'skills.name': true
    }
}

function loadState(props, state = initalState) {
    if (props.users !== state.users || props.skills !== state.skills || !state.fuse) {
        state.users = props.users;
        state.skills = props.skills;
        state.fuse = new Fuse(state.merged, fuseOptions);
    }
    state.filteredUsers = state.searchBox === ''
        ? state.users
        : state.fuse.search(state.searchBox);
    return state;
}

const columns = [
    {
        key: 'column1',
        name: 'Rank',
        fieldName: 'rank'
    },
    {
        key: 'column2',
        name: 'Last Name',
        fieldName: 'lastName'
    },
    {
        key: 'column3',
        name: 'First Name',
        fieldName: 'firstName'
    }
];

export class UserSearchCard extends Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = loadState(props);
    }

    static getDerivedStateFromProps(props, state) {
        return loadState(props, state);
    }

    onChange(event) {
        this.setState({ searchBox: event });
    };

    onCheckboxChange(name, val) {
        const { opts } = this.state;
        opts[name] = val;
        let options = [];
        for(let prop in this.state.opts) {
            if (this.state.opts[prop]){
                options.push(prop)
            }
        }
        const fuse = new Fuse(this.state.merged, { ...fuseOptions, keys: options});
        this.setState({ fuse, opts });
    }

    onClick = (event) => {
        console.log(event.target)
    };

    render(){
        return(
            <Fabric>
                <div>
                    <SearchBox
                            type='text'
                            placeholder='Search'
                            className='search_box'
                            onChange={this.onChange}
                            value={this.state.searchBox}
                        />
                    <div>
                        Search by:
                        <Checkbox label="First Name" checked={this.state.opts["firstName"]} onChange={ (_e, val) => this.onCheckboxChange('firstName', val)}/>
                        <Checkbox label="Last Name" checked={this.state.opts["lastName"]} onChange={ (_e, val) => this.onCheckboxChange('lastName', val)}/>
                        <Checkbox label="Skill" checked={this.state.opts["skills.name"]} onChange={ (_e, val) => this.onCheckboxChange('skills.name', val)}/>
                    </div>
                    <div>
                        <DetailsList
                            className='user_list'
                            items={ this.state.filteredUsers }
                            columns={ columns }
                        />
                    </div>
                </div>
            </Fabric>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        skills: state.skills,
    };
};

export default connect(mapStateToProps)(UserSearchCard)