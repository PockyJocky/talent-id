import Fuse from 'fuse.js';
import React, {Component} from 'react'
import { fetchUserList } from "../actions/UserActions";
import { fetchSkillList } from "../actions/SkillActions";

import { Fabric } from "office-ui-fabric-react";
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

import {connect} from "react-redux";

const fuseOptions = {
    keys: ['skills.skillName', 'firstName', 'lastName'],
    threshold: 0.1
};

const initalState = {
    fuse: false,
    users: [],
    skills: [],
    filteredUsers: [],
    searchBox: ''
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

const _columns = [
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
]

export class UserSearchCard extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = loadState(props);
    }

    componentDidMount() {
        this.props.fetchUserList();
        this.props.fetchSkillList();
    }

    static getDerivedStateFromProps(props, state) {
        return loadState(props, state);
    }

    onChange(event) {
        this.setState({ searchBox: event });
    };

    onClick = (event) => {
        console.log(event.target)
    };

    render(){
        return(
            <Fabric>
                <div>
                    <SearchBox
                            type='text'
                            placeholder="Search"
                            className='search_box'
                            onChange={this.onChange}
                            value={this.state.searchBox}
                        />
                    <div>
                        <DetailsList
                            className='user_list'
                            items={ this.state.filteredUsers }
                            columns={ _columns }
                        />
                    </div>
                </div>
            </Fabric>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserList: () => dispatch(fetchUserList()),
        fetchSkillList: () => dispatch(fetchSkillList())
    }
};

const mapStateToProps = state => {
    return {
        users: state.users,
        skills: state.skills,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchCard)