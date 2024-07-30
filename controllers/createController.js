window.CreateController = function($scope, $http, $location) {
    $scope.title = 'Thêm Mới ';

    let api = "http://localhost:3000/products";

    $scope.add = () => {
        let isValid = true;

        $scope.check = {
            code: false,
            name: false,
            category: false,
            price: false,
            quantity: false
        }
    
        // Kiểm tra mã
        if (!$scope.pro || !$scope.pro.code) {
            isValid = false;
            $scope.check.code = 'Mã không được bỏ trống.';
        }
        
        // Kiểm tra tên
        if (!$scope.pro || !$scope.pro.name) {
            isValid = false;
            $scope.check.name = 'Tên không được bỏ trống.';
        } else if ($scope.pro.name.length <= 10) {
            isValid = false;
            $scope.check.name = 'Tên phải có hơn 10 ký tự.';
        }
        
        // Kiểm tra danh mục
        if (!$scope.pro || !$scope.pro.category) {
            isValid = false;
            $scope.check.category = 'Danh mục không được bỏ trống.';
        }
        
        // Kiểm tra giá
        if (!$scope.pro || isNaN($scope.pro.price)) {
            isValid = false;
            $scope.check.price = 'Giá phải là số.';
        } else if ($scope.pro.price <= 10000) {
            isValid = false;
            $scope.check.price = 'Giá phải lớn hơn 10.000₫';
        }
        
        // Kiểm tra số lượng
        if (!$scope.pro || isNaN($scope.pro.quantity)) {
            isValid = false;
            $scope.check.quantity = 'Số lượng phải là số và không được bỏ trống.';
        }

        if (isValid) {
            let newItem = {
                code: $scope.pro.code,
                name: $scope.pro.name,
                category: $scope.pro.category,
                price: $scope.pro.price,
                quantity: $scope.pro.quantity
            }
    
            $http.post(api, newItem)
            .then((res) => {
                if (res.status === 201) {
                    $location.path('/list-product');
                }
            })
        }
    }
};