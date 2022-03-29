import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import React from 'react';
import { Page } from '@shopify/polaris';

import Index from '../index';

import { mountWithAppProvider } from './utils/enzyme';

configure({adapter: new Adapter()});
it('renders page', () => {
    const wrapper = mountWithAppProvider(<Index />);
    expect(wrapper.find(Page).exists()).toBe(true);
});