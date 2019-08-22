import React from 'react';

import { storiesOf } from '@storybook/react';
import { App } from '../src/index';

storiesOf('test', module)
    .add('test', () => <App />)