import React, {Component} from 'react'
import { fetchUserList } from "../actions/UserListActions";
import { fetchInterestList } from "../actions/InterestListActions";
import {connect} from "react-redux";

export class UserSearchCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: props.users,
            skills: props.skills,
            filteredUsers: props.users,
            filteredSkills: props.skills,
            search: '',
            searchBox: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.props.fetchUserList();
        this.props.fetchInterestList();
    }

    static getDerivedStateFromProps(props, state) {
        return { 
            ...state,
            users: props.users,
            skills: props.skills,
            filteredUsers: props.users,
            filteredSkills: props.skills
        };
    }

    onChange(event) {
        this.setState({
            searchBox: event.target.value,
            filteredUsers: this.props.users.filter( user => {
                return this.search(user, event);
            }),
        })
    };

    search(key, event) {
        let result;
        switch(event) {
            case key.firstName.includes(event.target.value):
                result = key.firstName.includes(event.target.value);
                break;
            case key.lastName.includes(event.target.value):
                result = key.lastName.includes(event.target.value);
                break;
            case key.edipi.includes(this.props.skills.find(event.target.value).edipi):
                result = key.edipi.includes(this.props.skills.find(event.target.value).edipi);
                break;
            default:
                return result
        }
        return result
    }

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