var phonecatServices = angular.module('phonecatServices', ['ngResource']);
phonecatServices.factory('Phone', ['$resource',
  function($resource) {
    return $resource('static/phones/:phoneId.json', {}, {
      query: {method: 'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
