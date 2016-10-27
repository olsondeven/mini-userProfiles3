angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var dererred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response){

      var people = response.data.data;

      for (var i = 0; i < array.length; i++) {
        var element = array[i];
        element.first_name = 'Ralph';
      }

      defer.resolve(people);

    })

    return defer.promise;
  }

});//closing bracket
