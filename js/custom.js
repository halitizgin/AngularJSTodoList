var app = angular.module("TodoList", []);
app.controller('TodoListController', $scope => {
    $scope.yapilacaklar = [
        { id: 1, name: 'Toplantı', okay: false },
        { id: 2, name: 'İş', okay: true }
    ];

    $scope.checkClick = id => {
        const index = $scope.yapilacaklar.findIndex(yapilacak => yapilacak.id === id);
        if (index !== -1){
            const okay = $scope.yapilacaklar[index].okay;
            $scope.yapilacaklar[index].okay = !okay;
            console.log($scope.yapilacaklar);
        }
    }
});