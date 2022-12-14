const { default: axios } = require("axios");

const API_URL = "https://5f871d4b49ccbb0016176fe1.mockapi.io/ai/hotels";

function callAPI(endpoint, method = "Get", body) {
    return axops ({
      method: method,
      url: '$(API_URL)/$(endpoint)',
      data: body,
    }).catch((err) =>{
      console.log(err);
    });
}
var id;
function save (){
    document.getElementById("huy").style.display="none";
    document.getElementById("themoi").style.display="block";
    document.getElementById("divAddHotel").style.display= "none";
    localStorage.setItem("hotels",JSON.stringify(hotels));
    var hotels = JSON.parse(localStorage.getItem("hotels") ) || [];
    for (i =0; i <= hotels.lenght; i++){
        id = i;
    }

    var name = document.getElementById("nameproduct").value;
    var price = document.getElementById("priceproduct").value | 0;
    var note = document.getElementById("noteproduct").value;
    var detail = document.getElementById("detailproduct").value;
    let img = document.getElementById("imgproduct").value;
    let image=img.split("\\")[2];
    if (name |detail|note|(price != "")){
        var oneProduct ={
            id: id,
            name: name,
            price: price,
            note: note,
            detail: detail,
            img: "images/" + image,
        };
        hotels.push(oneProduct);
        callAPI("hotels","POST", oneProduct). then((response) => {
            show();
            alert("Thêm phòng thành công!");
        });

        }else{
            resent();
        }
    }
function show (){
    var hotels = [];
    callAPI ("hotels","GET",null).then((res)=>{
        hotelscaihungve = res.data;
        let row ="";
        for (i in hotels){
            row += "<tr>";
            row += "<tr>" + hotels[i].id+"<td>";
            row += "<tr>" + hotels[i].name+"<td>";
            row +=
            " <td>"+
            "<img src='>"+
            hotels[i].img+
            "' style ='width: 80px; height: 80px;'>"  +
        "</td>";
        row +="<td>"+ hotels[i].price+"</td>";
        row +="<td>"+ hotels[i].note+"</td>";
        row+=
        "<td>"+
        '<button type="button" onclick=editsp(${i}" class="btn btn-success">Edit</button>'+"</td>";
        row +=
        "<td>"+
        '<button type="button" onclick="deletesp(${i}" class="btn btn-danger">Delete</button>'+"<td>";
        row +="</tr>";
        
   }
   document.getElementById("tab").innerHTML=row;
    });
}
function editsp(id){
    document.getElementById("huy").style.display="block";
    document.getElementById("themmoi").style.display="none";
    document.getElementById("divAddHotel").style.display="block";
    callAPI('hotels/${id}',"GET",null).then((res) => {
        let hotels;
        hotels = res.data;
        console.log(hotel);
        document.getElementById("nameproduct").value = hotel.name;
        document.getElementById("priceproduct").value = hotel.price;
        document.getElementById("noteproduct").value = hotel.note;
        document.getElementById("detailproduct").value = hotel.detail;
    });
    document.getElementById("ok").style.display="none";
    document.getElementById("edit").style.display="block";

    document.getElementById(
        "edit"
    ).innerHTML = '<button type="button" onclick="edittok(${id})" class="btn btn-success">save</button>';
}
function editok(id){
    document.getElementById("huy").style.display = "none";
    document.getElementById("themmoi").style.display ="block";
    document.getElementById("divAddHotel").style.display = "none";
    var nameproduct = document.getElementById("nameproduct").value;
    var price = document.getElementById("priceproduct").value;
    var note = document.getElementById("noteproduct").value;
    var detail = document.getElementById ("detailproduct").value;
    let img = document.getElementById("imgproduct").value;
    var image = img.split("\\")[2];

    var oneProduct = {
        id: id,
        name: nameproduct,
        price: price,
        note: note,
        detail: detail,
        img: "images/" + image
    }

    callAPI('hotels/${id}', "PUT", oneProduct).then((response) => {
        alert("Cập nhật thành công!");
        show();
    });
    if (document.getElementById("edit").style.display == "block") {
        document.getElementById("edit").style.display = "none";
        document.getElementById("ok").style.display = "block";
    } else {
        document.getElementById("edit").style.display = "block";
        document.getElementById("ok").style.display = "none";
    }

    reset();
}
function deletesp(id) {
    var r = confirm("Bạn có chắc muốn xóa sản phẩm?");
    if (r === true) {
        callAPI('hotels/${id}', "DELETE", null).then((response) => {
            show();
            alert("Xóa thành công!");
        })
    } else {
        window.location.href = "admin.html";
    }
}
function resent() {
    document.getElementById("nameproduct").value = " ";
    document.getElementById("priceproduct").value = " ";
    document.getElementById("noteproduct").value = " ";
    document.getElementById("detailproduct").value = " ";
    document.getElementById("imgproduct").value = " ";
}