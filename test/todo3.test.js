'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/todo3.test.js', () => {
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

  describe('Check CSS', () => {
    it('Logo wrapper displayed', () => {
      return driver
        .elementByCss('#header')
        .sleep(1500);
    });
    it('Logo displayed', () => {
      return driver
        .waitForElementByCss('#header h1')
        .hasText('todos')
        .sleep(1500);
    });
  });
});

