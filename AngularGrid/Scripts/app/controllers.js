var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]
    );

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
function ($scope, $routeParams, Phone) {
    Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
        $scope.mainImageUrl = phone.images[0];
    })
    $http.get('/phones/' + $routeParams.phoneId + '.html').success(function (data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);