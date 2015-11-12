'use strict';

describe('fitness.home module', function() {
  
  beforeEach(module('fitness.home'));

  describe('Home Controller', function() {
    it('should be initialized', inject(function($controller) {
      var testCtrl = $controller('HomeCtrl');
      expect(testCtrl).toBeDefined();
      expect(testCtrl.title).toBeDefined();
      expect(testCtrl.name).toBe('LoftSchool');
    }))
  });
});