'use strict';

describe('Service: Flashservice', function () {

  // load the service's module
  beforeEach(module('StickitonApp'));

  // instantiate service
  var Flashservice;
  beforeEach(inject(function (_Flashservice_) {
    Flashservice = _Flashservice_;
  }));

  it('should do something', function () {
    expect(!!Flashservice).toBe(true);
  });

});
