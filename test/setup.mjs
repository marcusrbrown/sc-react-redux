import React from 'react';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';

async function setup() {
// Temporary workaround for Enzyme 2.9.1 and React 15.6.1
  if (typeof Enzyme.configure === 'function') {
    const { default: Adapter } = await import('enzyme-adapter-react-15');
    Enzyme.configure({ adapter: new Adapter() });
  }

  const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost:8080' });
  global.window = dom.window;

  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key];
    }
  });

  global.React = React;
  global.expect = expect;
}

await setup();
