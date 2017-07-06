import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

it('Renders guess-list without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
});

