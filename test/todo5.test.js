'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/todo5.test.js', () => {
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

  describe('Check task items', () => {
    it('Items task counting', () => {
      return driver
        .elementByCss('#new-todo')
        .formInput(`Create Medium article ~)(*)/? ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        })
        .sleep(1000)
        .waitForElementByCss('#todo-count strong')
        .hasText('1')
        .sleep(1500);
    });
  });
});

