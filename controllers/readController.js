window.ReadController = function($scope, $http, $routeParams) {
    $scope.title = 'Chi Tiết Sản Phẩm';

    let api = "http://localhost:3000/products";

    let productId = $routeParams.id;

    $http.get(`${api}/${productId}`)
    .then((res) => {
        if (res.status === 200) {
            $scope.pro = {
                code: res.data.code,
                name: res.data.name,
                category: res.data.category,
                price: res.data.price,
                quantity: res.data.quantity
            }
        }
    })
};