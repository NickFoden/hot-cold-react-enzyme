import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

it('Renders Guess Form without crashing', () => {
    shallow(<GuessForm />);
});

