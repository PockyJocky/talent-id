import Fuse from 'fuse.js';
import React, {Component} from 'react'
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';

import {
    Fabric,
    DetailsList,
    Checkbox,
    ComboBox,
    SelectableOptionMenuItemType,
    Label,
    htmlElementProperties
}
from "office-ui-fabric-react";

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
        'skills.name': true,
        'squadron': false
    },
    sortOpts: {
        'interest': true,
        'proficiency': false
    },
    options: [{ key: "Header", text: 'Search Parameters:', itemType: SelectableOptionMenuItemType.Header}]
}

function fillDropdown(props, state) {
    let options = [];
    if (props.users[0]) {
        if (state.opts['skills.name']) {
            options = state.skills.map( name => ({ key: name, text: name }));
            options.unshift({key: "skillHeader", text: "Skills:", itemType: SelectableOptionMenuItemType.Header});
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

    if(state.searchBox !== ''){
        state.filteredUsers = state.filteredUsers.concat([]).sort((a,b) => {
            a.skills = a.skills.concat([]).sort((c, d) => {
                return ((c.name === state.searchBox) ? -1 : +1)
            });
            b.skills = b.skills.concat([]).sort((c, d) => {
                return ((c.name === state.searchBox) ? -1 : +1)
            });
            for (let skill_a in a.skills){
                for (let skill_b in b.skills){
                    if((a.skills[skill_a].name === state.searchBox) && (b.skills[skill_b].name === state.searchBox)){
                        
                        //skill_a and skill_b will equal 0 after skills sort
                        if(state.sortOpts["interest"]){
                            return ((b.skills[skill_b].interest !== a.skills[skill_a].interest) ? b.skills[skill_b].interest - a.skills[skill_a].interest : ((a.name < b.name) ? -1 : +1));
                        }
                        else{
                            return ((b.skills[skill_b].proficiency !== a.skills[skill_a].proficiency) ? b.skills[skill_b].proficiency - a.skills[skill_a].proficiency : ((a.name < b.name) ? -1 : +1));
                        }
                    }
                }
            }
            return 0;
        });
    }

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
    },
    {
        key: 'column5',
        name: 'Skills',
        isSorted: true,
        onRender: ({ skills }) => {
            const skillList = skills.map( skill => (
                <div>
                    <div key={"name"}>{ skill.name + ": " } </div>
                    <div key={"interest"}> { "Interest level: " + skill.interest }</div>
                    <div key={"proficiency"}> { "Skill level: " + skill.proficiency }</div>
                </div>
            ));
            return <div>{ skillList }</div>;
        }
    },
    { 
      key: "column6", 
      name: "Modifiers",
      fieldName: 'modifiers',
      onRender: () => (
        <div>
            <IconButton
                title='Edit'
                iconProps={{ iconName: 'Edit' }}
                className='input_button remove_button'
                //onClick={e => helpers.remove(index)}
            /> 
          <IconButton
                title='Remove'
                iconProps={{ iconName: 'Trash' }}
                className='input_button remove_button'
                //onClick={e => this.props.removeUser(this.state.filteredUsers[index])}
            />        
        </div>
      )         
    }
];

export class UserSearchCard extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = loadState(props);
    }

    static getDerivedStateFromProps(props, state) {
        return loadState(props, state);
    }

    onChange = (option) => {
        let search;
        if (option) {
            search = option.text
        } else (search = "");

        this.setState({searchBox: search});

    };

    onCheckboxChange(name, val) {
        const {opts} = this.state;
        opts[name] = val;
        let options = [];
        for (let prop in this.state.opts) {
            if (this.state.opts[prop]) {
                options.push(prop)
            }
        }
        const fuse = new Fuse(this.state.users, {...fuseOptions, keys: options});
        this.setState({fuse, opts});
    }

    onSortCheckboxChange(name, val) {
        const {sortOpts} = this.state;
        // sortOpts[name] = val;
        for (let prop in this.state.sortOpts) {
            if (this.state.sortOpts[prop]) {
                sortOpts[prop] = false;
            }
            else{
                sortOpts[prop] = true;
            }
        }
        this.setState({sortOpts});
    }

    removeItem(item) {
        let { items } = this.state.users;
        let index = item.index;
        
        if(window.confirm("This action will perminently remove this user's information. Click 'OK' to continue.")){
            this.setState({
                items: items.splice(index,1) 
              });
        } 
      }

    render() {
        return (
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
                        <Checkbox label="First Name" checked={this.state.opts["firstName"]}
                                  onChange={(_e, val) => this.onCheckboxChange('firstName', val)}/>
                        <Checkbox label="Last Name" checked={this.state.opts["lastName"]}
                                  onChange={(_e, val) => this.onCheckboxChange('lastName', val)}/>
                        <Checkbox label="Skill" checked={this.state.opts["skills.name"]}
                                  onChange={(_e, val) => this.onCheckboxChange('skills.name', val)}/>
                        <Checkbox label="Unit" checked={this.state.opts["squadron"]}
                                  onChange={(_e, val) => this.onCheckboxChange('squadron', val)}/>
                    </div>
                    <div>
                        <Label>
                            Sort by:
                        </Label>
                        <Checkbox label="Interest" checked={this.state.sortOpts["interest"]}
                                    onChange={(_e, val) => this.onSortCheckboxChange('interest', val)}/>
                        <Checkbox label="Proficiency" checked={this.state.sortOpts["proficiency"]}
                                    onChange={(_e, val) => this.onSortCheckboxChange('proficiency', val)}/>
                    </div>
                    <div>
                        <DetailsList
                            className='user_list'
                            items={this.state.filteredUsers}
                            columns={columns}
                            onItemInvoked = {Selection => this.removeItem(Selection)}
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