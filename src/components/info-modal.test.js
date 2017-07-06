import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

it('Renders info-modal without crashing', () => {
    shallow(<InfoModal />);
});