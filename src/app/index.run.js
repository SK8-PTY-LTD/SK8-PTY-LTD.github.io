(function() {
  'use strict';

  angular
    .module('sk8app')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
