import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import React from 'react';
import { Page, Button } from '@shopify/polaris';
import {shallow, mount} from 'enzyme';

import './matchMedia.mock';
import Index from '../index';

configure({adapter: new Adapter()});
let wrapper = mount(<Index />);

it('renders page', () => {
    expect(wrapper.find(Page).exists()).toBe(true);
});

it('renders button', () => {
    expect(wrapper.find(Button).exists()).toBe(true);
});

