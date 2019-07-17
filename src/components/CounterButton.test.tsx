import {shallow, mount, render} from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it ('second one', () => {
    expect(shallow(<CounterButton color={'red'}/>)).toMatchSnapshot();
})

it ('coutn incrementor', () => {

    const wrapper = shallow(<CounterButton color={'red'}/>)

    wrapper.find('[id="counter"]').simulate('click');

    expect(wrapper.state()).toEqual({count:1});
})