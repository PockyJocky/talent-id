import React from 'react'

import { Link } from 'react-router-dom';
import { Fabric } from "office-ui-fabric-react";
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

const WelcomeCard = props => (
    <Fabric>
        <div className='welcome_card'>Welcome
            <div>
                <Link to='/list'>
                    <DefaultButton>
                        List Users
                    </DefaultButton>
                </Link>
                <Link to='/new'>
                    <DefaultButton>
                    New User
                    </DefaultButton>
                </Link>
            </div>
        </div>
    </Fabric>
);

export default WelcomeCard