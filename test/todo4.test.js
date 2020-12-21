'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/todo4.test.js', () => {
  before(() => {
    return driver
      .initWindow({
        width: 800,
        height: 600,
        deviceScaleFactor: 2
      });
  });

  beforeEach(() => {
    return driver
      .getUrl(`${BASE_URL}/src`);
  });

  afterEach(function () {
    return driver
      .coverage()
      .saveScreenshots(this);
  });

  after(() => {
    return driver
      .openReporter(true)
      .quit();
  });

  describe('Page Open', () => {
    it('Check page title', () => {
      return driver
        .assertTitle('Vuex TypeScript • TodoMVC')
        .sleep(3000);
    });
    it('App wrapper displayed', () => {
      return driver
        .elementByCss('#todoapp')
        .sleep(1500);
    });
  });
});

