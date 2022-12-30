var productS = [{
    id: 'SP1',
    name: 'Áo dài thêu họa tiết 111111',
    img: 'https://quyennguyen.vn/wp-content/uploads/2020/11/ao-dai-ban-san-dep-nhat-ho-chi-minh-2.jpg',
    price: 122000,
},
{
    id: 'SP2',
    name: 'Áo dài truyền thống',
    img: 'https://quyennguyen.vn/wp-content/uploads/2020/11/ao-dai-ban-san-dep-nhat-hcm-768x1151.jpg',
    price: 400000,
},
{
    id: 'SP3',
    name: 'Áo dài',
    img: 'https://quyennguyen.vn/wp-content/uploads/2020/11/ao-dai-ban-san-dep-nhat-hcm-1-768x1151.jpg',
    price: 350000,
},
{
    id: 'SP4',
    name: 'Áo dài hiện đại',
    img: 'https://quyennguyen.vn/wp-content/uploads/2020/11/ao-dai-ban-san-dep-nhat-ho-chi-minh-1-768x1151.jpg',
    price: 564000,
},
{
    id: 'SP5',
    name: 'Áo dài hiện đại',
    img: 'https://quyennguyen.vn/wp-content/uploads/2022/10/ADT147-3.jpg',
    price: 654000,
},
{
    id: 'SP6',
    name: 'Áo dài hiện đại',
    img: 'https://quyennguyen.vn/wp-content/uploads/2019/07/Ao-dai-trang-ADT79-1.jpg',
    price: 123000,
},
{
    id: 'SP7',
    name: 'Áo dài hiện đại',
    img: 'https://quyennguyen.vn/wp-content/uploads/2022/10/ADT153-5.jpg',
    price: 345000,
},
{
    id: 'SP8',
    name: 'Áo dài hiện đại',
    img: 'https://quyennguyen.vn/wp-content/uploads/2019/03/QuyenNguyen-AD-D41.11.jpg',
    price: 258000,
},
];


// Đẩy mảng product vào local storage
function Save() {
    localStorage.setItem('listProduct', JSON.stringify(productS));
}
// Lấy sản phẩm từ local storage
function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}
// Xuất sản phẩm ra html
if (localStorage.getItem('listProduct') != null) {
    load();
}
var listLocal = function () {
    var listproduct = '';
    for (var i in productS) {
        var data = JSON.parse(JSON.stringify(product[i]));

        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" styte="width:auto">';
        listproduct += '<img class="card-img-top" src="' + data.img + '" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5" >' +
            data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + '₫</div>';
        listproduct += '<buton class="btn btn-secondary" data-toggle="modal" data-target="#proDetails" onclick="proDetail"('+i+')">Detail</butoon>'
        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + " data-name=" + data.name + " data-img=" + data.img + " data-price=" + data.price + 'onclick="tks()">';
        listproduct += '<a>';
        listproduct += '<i class="fas fa-cart-plus"></i>';
        listproduct += '</a>';
        listproduct += '</span>';
        listproduct += '</div>';
        listproduct += '</div>';

        document.getElementById('banchay').innerHTML += listproduct;
    }

    Save();
};

listLocal();
localStorage.clear();