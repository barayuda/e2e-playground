'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/todo.test.js', () => {
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

  describe('Page input testing', () => {
    it('Input todo task', () => {
      return driver
        .elementByCss('#new-todo')
        .formInput(`Create Medium article by formInput ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        })
        .sleep(3000)
        .elementByCss('#new-todo')
        .clear()
        .sendKeys(`Create Medium article by sendKeys ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        });
    });
  });

  describe('Page checked testing', () => {
    it('Click done one task', () => {
      return driver
        .elementByCss('#new-todo')
        .formInput(`Create Medium article by formInput ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        })
        .sleep(1500)
        .elementByCss('.toggle')
        .click()
        .sleep(1500);
    });
    it('Click clear completed', () => {
      return driver
        .elementByCss('#new-todo')
        .formInput(`Create Medium article by formInput ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        })
        .sleep(2000)
        .elementByCss('#new-todo')
        .clear()
        .sendKeys(`Create Medium article by sendKeys ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        })
        .elementByCss('.toggle')
        .click()
        .sleep(1500)
        .elementByCss('#clear-completed')
        .click()
        .sleep(1500);
    });
  });
});

