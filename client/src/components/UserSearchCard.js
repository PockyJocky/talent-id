import React, {Component} from 'react'
const emptyUser = {
    firstName: 'Just',
    lastName: 'an',
    edipi: 'example',
    rank: 'AB',
    squadron: '13 IS'
}
const Users = [
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
        this.state = {users: Users, filteredUsers: [emptyUser]}
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
                            this.state.filteredUsers.map((person) =>{
                                return(
                                    <div>
                                        <div
                                            style = {{color:'white'}}
                                            className = 'person'
                                        >
                                            {person.rank + ' ' + person.lastName + ' ' + person.squadron}
                                            </div>
                                    </div>
                                )
                                }
                            )
                        }
                    </div>
            </div>
        )
    }
}

export default UserSearchCard