function functionOK() {
    var year = parseInt(document.getElementById("year").value);
    var hk1 = parseInt(document.getElementById("s1").value);
    var hk2 = parseInt(document.getElementById("s2").value);
    var result;
    switch (year) {
        case 1: {
            result = (hk1 + hk2 * 2) / 3;
            break;
        }
        case 2: {
            result = (hk1 + hk2 * 3) / 4;
            break;
        }
        case 3: {
            result = (hk1 + hk2 * 4) / 5;
            break;
        }
  
    }
    document.getElementById("sum").value = result;
}

function functionCancle() {
document.getElementById("s1").value = "";
document.getElementById("s2").value = "";
document.getElementById("sum").value = "";
}