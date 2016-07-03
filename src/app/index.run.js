(function() {
  'use strict';

  angular
    .module('sk8App')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
