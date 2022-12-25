import React from 'react';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';

async function setup() {
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
