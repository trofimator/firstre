import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };

    wrapper = shallow(<MainPage {...mockProps} />)
})

it('main page', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', ()=>{
    expect(wrapper.instance().filterRobots([])).toEqual([]);
})