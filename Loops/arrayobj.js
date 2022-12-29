var men = [
    {
        id: 1,
        name: "ÁO NỈ DÀI TAY CỔ BẺ 3 MÀU MANDO SWT022",
        price: "250.000",
        image: "https://product.hstatic.net/1000401164/product/sht005_web_501812b727d145918538496f06e0cdc7_master.png"
    },
    {
        id: 2,
        name: "ÁO SWEATER BASIC SIMPLE LOVE MANDO SWT006",
        price: "269.000",
        image: "https://product.hstatic.net/1000401164/product/sht005_web__18__b4c08d58f5e54d4093c78435e66c6a3b_master.jpg"
    },
    {
        id: 3,
        name: "QUẦN ÂU NAM ỐNG XUÔNG CẠP SAU CHUN - TRS007",
        price: "250.000",
        image: "https://product.hstatic.net/1000401164/product/pdn131__1____qkn054_accc9de7a2124ab78229f55e7d359476_master.png"
    },
    {
        id: 4,
        name: "QUẦN JEAN NAM ỐNG XUÔNG MANDO - QJN057",
        price: "350.000",
        image: "https://product.hstatic.net/1000401164/product/qjn057__5__ade699cd27624430b2be8fe844699eee_master.jpg"
    },
];
var woment = [
    {
        id: 1,
        name: "Áo 2 dây coundownt ATC12047",
        price: "199.000",
        image: "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/ATC12047/2-KEM-ATC12047.jpg"
    },
    {
        id: 2,
        name: "Đầm len body DC12085",
        price: "499.000",
        image: "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC12085/2-DEN-DC12085.jpg"
    },
    {
        id: 3,
        name: "Áo blazer 2 lớp AC12035",
        price: "500.000",
        image: "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/AC12035/2-DEN-AC12035.jpg"
    },
    {
        id: 4,
        name: "Đầm sơ mi không tay DC08097",
        price: "250.000",
        image: "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/dc08097/1-den-dc08097-1.jpg"
    },
];
function listProducts() {
    for (let i = 0; i <= men.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img class="card-img-top" src="' + men[i].image + '" alt="Card image cap">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + men[i].name + '</h5>';
        demo += '<p class="card-text">' + men[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="hienthi()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        document.getElementById('men').innerHTML += demo;
    }
    for (let i = 0; i <= woment.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img class="card-img-top" src="' + woment[i].image + '" alt="Card image cap">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
        demo += '<p class="card-text">' + woment[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="hienthi()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        document.getElementById('woment').innerHTML += demo;
    }
}



