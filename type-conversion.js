//những trường hợp mà kiểu dữ liệu sẽ tự chuyển đổi trong quá trình thực hiện
// var congchuoichuoi = '5' + '6' ;
// console.log(congchuoichuoi); // kết quả là chuổi 56 đây là phương pháp công chuổi đơn giản nhất
// var congsochuoi = 2 + '4';
// console.log(i); // kết quả sẽ cho ra là 24 dạng chuổi điều này chỉ đúng với phép cộng
// đối với những phép tính khác thỉ ưu tiên chuyển đổi chuổi thành số vá tính toán như số bình thường
// var tru  = 5 - '8' ;
// var nhan = 3 * '4' ;
// var chia = 15 / '3' ;
// console.log(tru); 
// console.log(nhan);
// console.log(chia);

//chúng ta có thể dùng hàm chuyển đổi giữa các kiểu dữ liệu
// var chuoiThanhSo1 = Number('25');
// console.log(chuoiThanhSo1);
// console.log(typeof(chuoiThanhSo1));
// var chuoiThanhSo2 = Number('abc'); // cho ra kết quả NaN vì chuổi cần chuyển đồi không phải chuổi số 
// console.log(chuoiThanhSo2);
// console.log(typeof(chuoiThanhSo2));

// chuyển đổi dữ liệu kết hợp với boolean
// var ketBoolean = 1 + true ; // trong javascript thì true có giá trị là số dương bất kỳ
// console.log(ketBoolean);
// console.log(typeof(ketBoolean));
// var ketBoolean2 = 1 + false ; // trong javascript thì false có giá trị là không
// console.log(ketBoolean2);
// console.log(typeof(ketBoolean2));
// ví dụ cho giá trỉ boolean và dùng hàm chuyển kiểu để kiểm tra
// var ktraBoolean = 123 ;
// console.log(Boolean(ktraBoolean));
// var ktraBoolean1 = 0 ;
// console.log(Boolean(ktraBoolean1));
// áp dụng trong câu điều kiện if else 
// var kiemThu = 0 ;
// if(kiemThu){
//     console.log('đạt điều kiện'); 
// } else {
//     console.log('không đạt điều kiện'); // điều này chứng minh 0 tương đương giá trị false của boolean trong javascript
// }

// chuyển đổi dữ liệu với kiểu null
// var testtype = null ;
// console.log(Number(testtype)); // trong javascript có giá trị bằng 0

// chuyển đổi dữ liệu tử kiểu Date thành kiểu String
// var converDateToString = new Date();
// console.log(converDateToString.length); // cho ra kết quả undefined so kiểu dữ liệu thời gian không phải là kiểu string
// console.log(typeof(String(converDateToString)));
// console.log(String(converDateToString).length);

// chuyển đổi kểu boolean thành string
// var converBoolToString = true ;
// console.log(typeof(converBoolToString));
// console.log(converBoolToString);
// console.log(String(converBoolToString));
// console.log(String(converBoolToString).length);
