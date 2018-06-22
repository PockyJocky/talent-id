import Fuse from 'fuse.js';
import React, {Component} from 'react'

import {
    Fabric,
    DetailsList,
    Checkbox,
    ComboBox,
    SelectableOptionMenuItemType,
    IComboBoxOption, Label
} from "office-ui-fabric-react";

import {connect} from "react-redux";

const fuseOptions = {
    keys: ['skills.skill'],
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
        'skills.skill': true,
        'squadron': false
    },
    options: [{ key: "Header", text: 'Search Parameters:', itemType: SelectableOptionMenuItemType.Header}]
}

function fillDropdown(props, state) {
    let options = [];
    if (props.users[0]) {
        if (state.opts['skills.skill']) {
            options.push({key: "skillHeader", text: "Skills:", itemType: SelectableOptionMenuItemType.Header})
            for (let user in state.users) {
                for (let skill in state.users[user].skills) {
                    let option = state.users[user].skills[skill].skill
                    options.push({key: option, text: option})
                }
            }
        }
        if (state.opts['firstName']) {
            options.push({key: "firstNameHeader", text: "First Name:", itemType: SelectableOptionMenuItemType.Header})
            for (let user in state.users) {
                let option = state.users[user].firstName
                options.push({key: option, text: option})
            }
        }
        if (state.opts['lastName']) {
            options.push({key: "lastNameHeader", text: "Last Name:", itemType: SelectableOptionMenuItemType.Header})
            for (let user in state.users) {
                let option = state.users[user].lastName
                options.push({key: option, text: option})
            }
        }
        if (state.opts['squadron']) {
            options.push({key: "squadronHeader", text: "Squadron:", itemType: SelectableOptionMenuItemType.Header})
            for (let user in state.users) {
                let option = state.users[user].squadron
                options.push({key: option, text: option})
            }
        }
    }
    return options;
}

function loadState(props, state = initalState) {
    if (props.users !== state.users || props.skills !== state.skills || !state.fuse) {
        state.users = props.users;
        state.skills = props.skills;
        state.fuse = new Fuse(state.users, fuseOptions);
    }

    state.options = fillDropdown(props, state);

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
    },
    {
        key: 'column4',
        name: 'Unit',
        fieldName: 'squadron'
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

    onChange(option: IComboBoxOption) {
        let search
        if(option){search = option.text}else( search = "")
        this.setState({ searchBox: search });
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
        const fuse = new Fuse(this.state.users, { ...fuseOptions, keys: options});
        this.setState({ fuse, opts });
    }

    render(){
        return(
            <Fabric>
                <div>
                    <Label>
                        Search:
                    </Label>
                    <ComboBox
                        options={this.state.options}
                        allowFreeform={true}
                        autoComplete="on"
                        onChanged={this.onChange}
                        text={this.state.searchBox}
                        />
                    <div>
                        <Label>
                            Search by:
                        </Label>
                        <Checkbox label="First Name" checked={this.state.opts["firstName"]} onChange={ (_e, val) => this.onCheckboxChange('firstName', val)}/>
                        <Checkbox label="Last Name" checked={this.state.opts["lastName"]} onChange={ (_e, val) => this.onCheckboxChange('lastName', val)}/>
                        <Checkbox label="Skill" checked={this.state.opts["skills.skill"]} onChange={ (_e, val) => this.onCheckboxChange('skills.skill', val)}/>
                        <Checkbox label="Unit" checked={this.state.opts["squadron"]} onChange={ (_e, val) => this.onCheckboxChange('squadron', val)}/>
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