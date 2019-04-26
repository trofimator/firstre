import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {

    }
    render() {
        return (<div>
            <CounterButton color={'yellow'} />
            <h1 className='f1'>RoobotFriens</h1>
        </div>);
    }
}

export default Header;