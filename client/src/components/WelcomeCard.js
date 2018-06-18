import React, {Component} from 'react'
import { connect } from 'react-redux';
import { push } from "react-router-redux";

import { Fabric } from "office-ui-fabric-react";
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export class WelcomeCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fabric>
                <div className='welcome_card'>Welcome
                    <div>
                        <DefaultButton onClick={e => this.props.updatePage('/list')}>List Users</DefaultButton>
                        <DefaultButton onClick={e => this.props.updatePage('/new')}>New User</DefaultButton>
                    </div>
                </div>
            </Fabric>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        updatePage: page => { dispatch(push(page)) }
    }
};

const mapStateToProps = (state) =>{ return { state: state } };

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeCard)