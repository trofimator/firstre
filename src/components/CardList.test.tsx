import {shallow, mount, render} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it ('new one', () => {
    const robotsMock = [
        {
        id:1,
        name : 'simple name',
        username:'simple'
    }];

    expect(shallow(<CardList robots ={robotsMock}/>)).toMatchSnapshot();
})
