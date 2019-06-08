var app = angular.module("TodoList", []);
app.controller('TodoListController', $scope => {
    $scope.yapilacaklar = [
        { name: 'Toplantı', okay: false },
        { name: 'İş', okay: true }
    ];
});