import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Card from './Card';

it ('sdfsd', ()=>{

    expect(shallow(<Card />)).toMatchSnapshot();
})
