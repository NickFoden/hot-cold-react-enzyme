import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

it('Renders guess-form without crashing', () => {
    shallow(<GuessForm />);
});

