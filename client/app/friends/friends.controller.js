(function () {
    var app = angular.module("friendsApp");

    app.controller("friendsCtrl", [function () {
        var self = this;

        self.friendObject = {
            id: null,
            friendName: '',
            contactNo: '',
            email: '',
            gender: 'male',
            saved: 0

        };
        self.friendsArray = [];

        self.submit = function () {
            if (self.friendObject.id === null) {
                self.friendObject.id = self.id++;
            }
            if (self.friendObject.gender === 'female') {
                self.friendObject.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/07/Avatar_girl_face.png'
            } else {
                self.friendObject.imageUrl = 'http://i.imgur.com/1o1zEDM.png';
            }

            self.friendsArray.push(self.friendObject);
            self.friendObject = {};

        };
    }]);
}());