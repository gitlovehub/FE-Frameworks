var app = angular.module('myApp', ['ngRoute']);
// ngRoute cung cấp các tính năng định tuyến
app.config(($routeProvider) => {
    // config() để cấu hình tham số trc khi chạy ứng dụng
    // $routeProvider là tham số mặc định đc định nghĩa sẵn
    $routeProvider
        .when('/add-product', {
            templateUrl: 'views/add.html',
            controller: CreateController
        })
        .when('/view-product/:id', {
            templateUrl: 'views/view.html',
            controller: ReadController
        })
        .when('/edit-product/:id', {
            templateUrl: 'views/edit.html',
            controller: UpdateController
        })
        .when('/list-product', {
            templateUrl: 'views/list.html',
            controller: DeleteController
        })
        .otherwise({
            redirectTo: '/list-product'
        });
});