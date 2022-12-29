var chay = [
    {
        id: 1,
        name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai (8 Gói x 25g)",
        price: "19.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/9-2ae7523d-fdb0-4caf-bc36-12c51b43f1fc.png?v=1568946112757"
    },
    {
        id: 2,
        name: "Hộp 10 Gói Bánh Kinh Đô Mini Oreo Vị Chocolate (230g)",
        price: "54.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
    },
    {
        id: 3,
        name: "Bánh Trứng Tik-Tok Sầu Riêng (120g)",
        price: "50.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/12-305c5dfc-8a9a-4fe5-ba33-c4b04e154a8c.png?v=1568944752707"
    },
    {
        id: 4,
        name: "Bánh gấu chùm ngây (nhân kem) Morice - Thơm ngon bổ dưỡng (200g)",
        price: "28.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/8.png?v=1568944624590"
    },
    {
        id: 5,
        name: "Bánh gấu chùm ngây (nhân kem) Morice - Thơm ngon bổ dưỡng (200g)",
        price: "28.000",
        image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/378/products/7.png?v=1568944398257"
    },
];
function Products() {
    for (let i = 0; i <= chay.length - 1; i++) {
        var demo = '<div class="col-2">';
        demo += '<div class="card" style="width: 13rem;">';
        demo += '<img class="card-img-top" src="' + chay[i].image + ' " alt="Card image cap">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + chay[i].name + '</h5>';
        demo += '<p class="card-text">' + chay[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="hienthi()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        document.getElementById('chay').innerHTML += demo;
    }
}