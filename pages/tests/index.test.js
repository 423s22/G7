import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import React from 'react';
import { Page } from '@shopify/polaris';
import {shallow, mount} from 'enzyme';

import './matchMedia.mock';
import Index from '../index';

configure({adapter: new Adapter()});
it('renders page', () => {
    const wrapper = mount(<Index />);
    expect(wrapper.find(Page).exists()).toBe(true);
});