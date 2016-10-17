(function () {
    angular.module('friendsApp')
        .factory('serverData', ['$http', '$q', function ($http, $q) {
            var obj = {};


            obj.getData = function () {
                var deffered = $q.defer();
                $http.get('/getData').success(function (response) {
                    deffered.resolve(response);
                });
                return deffered.promise;
            };

            obj.saveData = function (data) {
                var deffered = $q.defer();
                $http.post('/saveData', data).success(function (response) {
                    deffered.resolve(response);
                });
                return deffered.promise;
            };


            obj.deleteData = function (id) {
                var deffered = $q.defer();
                $http.delete('/deleteData?id=' + id).success(function (response) {
                    deffered.resolve(response);
                });
                return deffered.promise;
            };

            return obj;
        }])

}());
