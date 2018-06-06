import React, {Component} from 'react'
import {getUsers} from "../actions/UserActions";
import {connect} from "react-redux";

export class UserSearchCard extends Component {
    constructor(props){
        super(props);
        this.state = { users: props.users, filteredUsers: props.users, search: '', searchBox: ''}
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.props.getUsers();
    }

    onChange(event) {
        this.setState({
            searchBox: event.target.value,
            filteredUsers: this.props.users.filter( user => {
                return user.firstName.includes(event.target.value) 
                    || user.lastName.includes(event.target.value)
            })
        })
    };

    onClick = (event) => {
        console.log(event.target)
    }

    render(){
        const filteredList = this.state.filteredUsers.map( person => (
            <div onClick={e => this.onClick(e)} key={person.edipi} >
                <div style={{color:'white'}} className='person' >
                    {person.firstName + ' ' + person.lastName + ' ' + person.squadron + ' ' + person.edipi}
                </div>
            </div>
        ));
        return(
            <div>
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
        getUsers: () => dispatch(getUsers())
    }
};

const mapStateToProps = state => {
    return { 
        user: state.userCard.user,
        users: state.userCard.users || [],
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchCard)