import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

it('Renders guess-count without crashing', () => {
    shallow(<GuessCount />);
});

it('Check the count is rendering', () => {
	const count = 15;
    const wrapper = shallow(<GuessCount count={count}/>);
    expect(wrapper.contains(<span id="count">{count}</span>)).toEqual(true);
});
