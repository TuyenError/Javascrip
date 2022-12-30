var data = new Array();
function savedata() {
    var a, b, c, d, e;
    a = document.getElementById('fn_c').value;
    if (a == "") {
        alert("Full name must not blank! ")
    }
    b = document.getElementById('id').value;
    if (b == "") {
        alert("ID_Pro must not blank!")
    }
    c = document.getElementById('n_p').value;
    if (c == "") {
        alert("Name_Pro must not blank!")
    }
    d = document.getElementById('q_p').value;
    if (d == "") {
        alert("Quantity_Pro must not blank!")
    }
    e = document.getElementById('price').value;
    if (e == "") {
        alert("Price_Pro must not blank!")
    }
    if (checkError() == 0)
        {
        data.push({ Fullname_cus: a, ID_Pro: b, Name_Pro: c, Quantity_Pro: d, Price_Pro: e });
        
        }
   
}