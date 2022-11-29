function Tinhtuoi() {
    var D = new Date();
    var DateOfBirth = prompt("Nhap ngay sinh cuar ban: ", 0);
    var MonThOfBirth = prompt("Nhap ngay sinh cuar ban: ", 0);
    var YearOfBirth = prompt("Nhap ngay sinh cuar ban: ", 0);
    var ngay_thu = D.getDay();
    var SoTuoi = D.getFullYear() - YearOfBirth;
    alert("Hien tai ban " + SoTuoi + "tuoi va ban sinh vao ngay thu " + ngay_thu);
}