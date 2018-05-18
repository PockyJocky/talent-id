import React, { Component } from 'react';
import MainCard from './components/MainCard';

class App extends Component {

    state = {
        data: null
    };

    componentDidMount() {
    }

    render() {
        return (
        <MainCard />
        );
    }
}

export default App;
