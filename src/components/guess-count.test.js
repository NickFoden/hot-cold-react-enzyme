import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

it('Renders without crashing', () => {
    shallow(<GuessCount />);
});

it('Check the count is rendering', () => {
    const wrapper = shallow(<GuessCount count=15 />);
    expect(wrapper.prop('count')).toEqual('15');
});