'use strict';

describe('Service: Tabservice', function () {

  // load the service's module
  beforeEach(module('StickitonApp'));

  // instantiate service
  var Tabservice;
  beforeEach(inject(function (_Tabservice_) {
    Tabservice = _Tabservice_;
  }));

  it('should do something', function () {
    expect(!!Tabservice).toBe(true);
  });

});
