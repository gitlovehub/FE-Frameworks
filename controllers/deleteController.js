window.DeleteController = function($scope, $http) {
    $scope.title = 'Danh Sách Sản Phẩm';

    // Gán link API vào biến
    let api = "http://localhost:3000/products";

    // Sử dụng $http để gọi API
    $http.get(api)
    .then((res) => {
        // Kiểm tra dữ liệu trả về từ API
        if (res.status === 200) {
            // Gán dữ liệu vào $scope.listProduct để hiển thị trong view
            $scope.listProduct = res.data;
        }
    })

    $scope.del = (id) => {
        let cf = window.confirm('Are you sure?');
        if (cf) {
            // Logic xóa
            $http.delete(`${api}/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    alert('Thao tác thành công ✔️');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Xoá thất bại ❌');
            })
        }
    }
};