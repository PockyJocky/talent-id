import Fuse from 'fuse.js';
import React, {Component} from 'react'
import { fetchUserList } from "../actions/UserListActions";
import { fetchInterestList } from "../actions/InterestListActions";
import {connect} from "react-redux";

const fuseOptions = {
    keys: ['skills.skillName', 'firstName', 'lastName'],
    threshold: 0.5
};

const initalState = {
    fuse: false,
    users: [],
    skills: [],
    merged: [],
    filteredUsers: [],
    searchBox: ''
}

function loadState(props, state = initalState) {
    if (props.users !== state.users || props.skills !== state.skills || !state.fuse) {
        state.users = props.users;
        state.skills = props.skills;
        state.merged = mergeSkillsIntoUsers(props.users, props.skills);
        state.fuse = new Fuse(state.merged, fuseOptions);
    }
    state.filteredUsers = state.searchBox === ''
        ? state.merged
        : state.fuse.search(state.searchBox)
    return state;
}

function mergeSkillsIntoUsers(users = [], skills = []) {
    return users.map( user => {
        user.skills = skills.filter( skills => skills.edipi === user.edipi );
        return user;
    });
}

export class UserSearchCard extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = loadState(props);
    }

    componentDidMount() {
        this.props.fetchUserList();
        this.props.fetchInterestList();
    }

    static getDerivedStateFromProps(props, state) {
        return loadState(props, state);
    }

    onChange(event) {
        console.log(this.state)        
        this.setState({ searchBox: event.target.value });
    };

    onClick = (event) => {
        console.log(event.target)
    };

    render(){
        const filteredList = this.state.filteredUsers.map( (person, index) => (
            <div onClick={e => this.onClick(e)} key={index} >
                <div style={{color:'white'}} className='person' >
                    {person.firstName + ' ' + person.lastName + ' ' + person.squadron + ' ' + person.edipi}
                </div>
            </div>
        ));
        return(
            <div>
                <label htmlFor="search_box" className="labels_right">Search:</label>
                <input
                        type='text'
                        className='search_box'
                        onChange={this.onChange}
                        value={this.state.searchBox}
                    />
                    <div>
                        { filteredList }
                    </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserList: () => dispatch(fetchUserList()),
        fetchInterestList: () => dispatch(fetchInterestList())

    }
};

const mapStateToProps = state => {
    return {
        user: state.userCard,
        users: state.userList,
        skill: state.interestCard,
        skills: state.interestList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchCard)