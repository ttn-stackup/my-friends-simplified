(function () {
    var app = angular.module('friendsApp');

    app.controller('showUserController', [ 'close','title', function ( close,title) {
        var self=this;
        self.friendDetail = title;
        self.close = function (result) {
            close(result, 500); // close, but give 500ms for bootstrap to animate
        };

    }]);
}());