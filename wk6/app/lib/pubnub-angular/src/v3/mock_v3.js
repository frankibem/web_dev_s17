/* global angular */
/* eslint no-param-reassign: 0 */
let Mock = require('../mock');

module.exports = class extends Mock {

  /**
   * Returns a mocked version of the given callback broadcasting the callback through
   * the AngularJS event broadcasting mechanism.
   *
   * @param {function} originalCallback
   * @param {string} callbackName
   * @param {string} methodName
   * @param {string} instanceName
   * @param {string} methodArguments: the arguments of the method that setup the callback
   * @return {Function} mocked callback function broadcasting angular events on the rootScope
   */

  generateMockedVersionOfCallback(originalCallback, callbackName, methodName, instanceName, methodArguments) {
    let $rootScope = this.$rootScope;
    let service = this.service;
    const channelName = methodArguments.channel || methodArguments.channel_group;

    return function () {
      // Broadcast through the generic event name
      $rootScope.$broadcast.bind(...[$rootScope, service.getEventNameFor(methodName, callbackName, instanceName)]
                                    .concat(Array.prototype.slice.call(arguments))
                                )();

        // Call the original callback
      if (callbackName && angular.isFunction(originalCallback)) {
        originalCallback(...arguments);
      }

        // Broadcast through the message event or presence event
      if (methodName === 'subscribe') {
        switch (callbackName) {
          case 'callback':
            $rootScope.$broadcast.bind(...[$rootScope, service.getMessageEventNameFor(channelName, instanceName)]
                                          .concat(Array.prototype.slice.call(arguments))
                                      )();
            break;
          case 'presence':
            $rootScope.$broadcast.bind(...[$rootScope, service.getPresenceEventNameFor(channelName, instanceName)]
                                          .concat(Array.prototype.slice.call(arguments))
                                       )();
            break;
          default:
            break;
        }
      }
    };
  }

  /**
   * Mock passed in callbacks with callback-wrappers to invoke both original callbacks and angular events
   *
   * This method is replacing from the list of arguments {{args}} the callbacks functions
   * allowed and enabled to be mocked provided by the {{callbackList}} by new callbacks functions
   * including the Angular event broadcasting
   *
   * @param {string} instanceName
   * @param {string} methodName
   * @param {Object} methodArguments : argument list of the function
   * @param {Array} callbacksList : list of callbacks functions to be mocked
   */
  mockCallbacks(instanceName, methodName, methodArguments, callbacksList) {
    let originalCallback;
    let currentCallbackName;

    let l = callbacksList.length;
    let i;

    // Replace each callbacks allowed to be mocked.
    for (i = 0; i < l; i += 1) {
      if (!angular.isObject(methodArguments)) {
        return;
      }

      currentCallbackName = callbacksList[i];
      originalCallback = methodArguments[currentCallbackName];

      // We replace the original callback with a mocked version.
      methodArguments[currentCallbackName] = this.generateMockedVersionOfCallback(originalCallback, currentCallbackName, methodName, instanceName, methodArguments);
    }
  }

};
