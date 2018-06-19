import React, { Component } from 'react'

import { Fabric } from "office-ui-fabric-react";
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export class WelcomeCard extends Component {
    render() {
        return (
            <Fabric>
                <div className='welcome_card'>Welcome
                    <div>
                        <DefaultButton onClick={e => this.props.history.push('/list')}>List Users</DefaultButton>
                        <DefaultButton onClick={e => this.props.history.push('/new')}>New User</DefaultButton>
                    </div>
                </div>
            </Fabric>
        );
    }
}

export default WelcomeCard