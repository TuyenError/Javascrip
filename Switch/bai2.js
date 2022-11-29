function myFunction() {
    var a = document.getElementById("text_1").value;
    a = parseInt(a);
    var b = document.getElementById("text_2").value;
    b = parseInt(b);
    var c = document.getElementById("select");
    var value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    var k;
    switch (value) {
        case 1: {
            k = (a + (b * 2)) / 3;
            k = parseFloat(k);
            document.getElementById("result").value = k;
        }
        case 2: {
            k = ((a * 2) + (b * 3)) / 5;
            k = parseFloat(k);
            document.getElementById("result").value = k;
        }
        case 3: {
            k = ((a * 3) + (b * 4)) / 7;
            k = parseFloat(k);
            document.getElementById("result").value = k;
        }
    }
    if (k >= 9) {
        document.getElementById("display").innerHTML = "Hoc sinh gioi";
        document.getElementById("display").style.color = "read";
    }
    if (k >= 7 && k < 9) {
        document.getElementById("display").innerHTML = "Hoc sinh kha";
        document.getElementById("display").style.color = "blue";
    }
    if (k >= 5 && k < 7) {
        document.getElementById("display").innerHTML = "Hoc sinh trung binh";
        document.getElementById("display").style.color = "yellow";
    }
}
function myFunction2() {
    document.getElementById("text_1").value = "";
    document.getElementById("text_2").value = "";
}
// function tinh() {
//     var num1 = document.querySelector('#val1').value;
//     var num2 = document.getElementById('val2').value;

//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);

//     var tong = (num1 + num2 * 2) / 3;

//     // document.querySelector('#kq').innerHTML = tong.toFixed(2);
//     // document.querySelector('#kq').innerText = tong.toFixed(2);
//     document.querySelector('#kq').textContent = tong.toFixed(2);
//     // alert(tong)
//     // document.write(tong.toFixed(2))
//     console.log(tong.toFixed(2))



// var loai
// if (tong < 5) {
//     loai = "Học sinh trung binh"
//     document.querySelector('#loai').style.color = 'red';
//     document.querySelector('#loai').style.backgroundColor = 'yellow';

// } else if (tong < 8) {
//     loai = "Học sinh khá"
//     document.querySelector('#loai').style.color = 'blue';

// } else {
//     loai = "Học sinh Giỏi"
//     document.querySelector('#loai').style.color = 'green';

// }

// document.querySelector('#loai').innerHTML = loai;




