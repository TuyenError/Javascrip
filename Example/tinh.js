function TinhTuoi(){
var d = new Date();
var DateofBirth = prompt("Nhập ngày sinh của bạn: ", " ");
var MonthOfBirth = prompt("Nhập tháng sinh của bạn: ", " ");
var YearOfBirth = prompt("Nhập năm sinh của bạn: ", " ");
var ngay_thu = d.getDate();
var SoTuoi = d.getFullYear( ) - YearOfBirth;
alert("Hiện tại bạn  " + SoTuoi + " tuổi và bạn sinh vào ngày thứ " + ngay_thu );
}