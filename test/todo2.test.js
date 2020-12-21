'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/todo2.test.js', () => {
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
    it('Input todo task with special char', () => {
      return driver
        .elementByCss('#new-todo')
        .formInput(`Create Medium article @#$%^ ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        })
        .sleep(3000)
        .elementByCss('#new-todo')
        .clear()
        .sendKeys(`Create Medium article ~)(*)/? ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        });
    });
    it('Input todo task with other special char', () => {
      return driver
        .elementByCss('#new-todo')
        .formInput(`Create Medium article ~)(*)/? ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        })
        .sleep(3000);
    });
  });
});

