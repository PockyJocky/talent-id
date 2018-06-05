import React, {Component} from 'react'
import {getUsers} from "../actions/UserActions";
import _ from 'lodash'
import {connect} from "react-redux";

let Users = [
    {
        firstName: 'bobi',
        lastName: 'sanders',
        edipi: '1',
        rank: 'AB',
        squadron: '13 IS'
    },

    {
        firstName: 'bill',
        lastName: 'brewski',
        edipi: '2',
        rank: 'AB',
        squadron: '13 IS'
    },

    {
        firstName: 'banjo',
        lastName: 'cruse',
        edipi: '3',
        rank: 'AB',
        squadron: '13 IS'
    },
]

export class UserSearchCard extends Component{
    constructor(props){
        super(props);
        Users = this.props.getUsers();
        this.state = {users: Users, filteredUsers: Users, search: '', searchBox: ''}
        this.onChange = this.onChange.bind(this)
    }

    onChange (event) {
        this.setState(
            {
                searchBox: event.target.value,
                filteredUsers: _.compact(_.map(this.state.user, (user) => {
                if(user.firstName.includes(event.target.value)|| user.lastName.includes(event.target.value)){
                    return user;
                }
            }))
            })
    };

    onClick = (event) => {
        console.log(event.target)
    }

    render(){
        return(
            <div>
                <input
                        type = 'text'
                        className = 'search_box'
                        onChange={this.onChange}
                        value={this.state.searchBox}
                    />
                    <div>
                        {
                            // this.state.filteredUsers.map((person) =>{
                            //     return(
                            //         <div onClick = {this.onClick}>
                            //             <div
                            //                 style = {{color:'white'}}
                            //                 className = 'person'
                            //             >
                            //                 {person.firstName + ' ' + person.lastName + ' ' + person.squadron + ' ' + person.edipi}
                            //                 </div>
                            //         </div>
                            //     )
                            //     }
                            // )
                        }
                    </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getUsers: users => dispatch(getUsers(users))
    }
};

const mapStateToProps = (state) =>{
    return{user: state.userCard}
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchCard)