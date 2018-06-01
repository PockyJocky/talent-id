import React, {Component} from 'react'
import {getUsers} from "../actions/UserActions";
import {connect} from "react-redux";

let Users = [
    {
        firstName: 'bobi',
        lastName: 'sanders',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    },

    {
        firstName: 'bill',
        lastName: 'brewski',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    },

    {
        firstName: 'banjo',
        lastName: 'cruse',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    },
]

export class UserSearchCard extends Component{
    constructor(props){
        super(props);
        Users = this.props.getUsers();
        this.state = {filteredUsers: Users}
    }

    render(){
        return(
            <div>
                <input
                        type = 'text'
                        className = 'search_box'
                        onChange={this.onChange}
                    />
                    <div>
                        {
                            // this.state.filteredUsers.map((person) =>{
                            //     return(
                            //         <div>
                            //             <div
                            //                 style = {{color:'white'}}
                            //                 className = 'person'
                            //             >
                            //                 {person.rank + ' ' + person.lastName + ' ' + person.squadron}
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