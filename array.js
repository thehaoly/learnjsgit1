
// *** Chúng ta sẽ tỉm hiểu về mãng
// Mãng là các đối tượng giống như danh sách mà nguyên mẫu của nó có các phương thức để thực hiện duyệt qua và thay đổi giá trị
// không chỉ chiều dài của mảng mà những thành phần của nó cũng được thay đổi 
// mỗi phần tử trong mảng được sát định bằng một chỉ mục " index ", chỉ mục này chỉ là số nguyên tố .

// cách khởi tạo 1 mảng
let arr1 = ["không","một","hai","ba","bốn","năm","sáu","bảy","tám","chín"];
let arr2 = [0,1,2,3,4,5,6,7,8,9];
let arr3 = [12,45,96,32,16,27,38,10];
//let arr4 = [ 0, "chín", 6, 4, "hai", "ba", "ba", 8, "một", "một"]
// ___________________________________________________________________________________________________________

// chúng ta dùng vòng lặp " forEach " để duyệt qua dãy các phần tử trong mảng
// arr2.forEach(feFunction); // hàm forEach duyệt từng phần tử trong mãn, dùng thay cho vòng lặp for
// function feFunction(value){
// 	console.log(value * 2) ;
// }
// __________________________________________________________________________________________________________

// chúng ta dùng hàm " push "" để đưa một phần tử mới vào cuối mảng
// let arrlength = arr1.push("mười"); 
// console.log(arrlength); // làm như vậy thì ta thấy ham2m trả về số lượng phần tử trong mảng arr1 sau khi thêm đuôi
// arr1.forEach( value => console.log( value )); // để in được chúng ta dùng vòng lặp forEach
// console.log(arr1); // hay phương pháp in trực tiếp như vậy cũng được
//____________________________________________________________________________________________________________

// chúng ta dùng hàm " pop " để xóa đối tượng cuối trong một mảng
// let last = arr1.pop(); // hàm trả về giá trị của phần tử bị xóa
// console.log(last);
//____________________________________________________________________________________________________________

// Chúng ta dùng hàm " shift " để xóa phần tử đầu tiên trong mảng
// let arrrmfirst = arr1.shift(); // hàm trả về giá trị của phần tử đầu tiên 
// console.log(arrrmfirst); 
//____________________________________________________________________________________________________________

// chúng ta dủng hàm " unshift " dùng thêm 1 giá trị lên vị trí đấu tiên trong mảng
// let arraddfirst = arr1.unshift("không"); // hàm trà vế giá trị là số lượng phần tử trong mảng 
// console.log(arraddfirst);
//____________________________________________________________________________________________________________

// chúng ta dùng hàm " indexOf " để lấy chỉ số một giá trị nào đó trong mảng
// let pos = arr4.indexOf("ba"); // trả về giá trị là chỉ số của giá trị đó trong mảng
// console.log(pos);
//____________________________________________________________________________________________________________

// chúng ta sử dụng hàm " lastIndexOf " để lấy chỉ số index của một giá trị nào đó được truyền vào
// trong trường hợp có nhiều hơn 1 giá trị trùng nhau thì nó sẽ lấy chỉ số của giá trị cuối cùng 
// let arrLastIndex = arr4.lastIndexOf("ba");
// console.log(arrLastIndex);
//________________________________________________________________________________________________________________


// chúng ta dùng hàm " splice " để cắt từ trong mảng ra 1 số phẩn tử từ vị trí bắt đầu đến vị trí kết thúc
// let arrsplice = arr1.splice(2,3); // hàm trả về dãy nhữmg giá trị đã cắt trong mảng
// console.log(arrsplice);
// console.log(arr1); // mảng nguyên thủy sẽ mất dãy giá trị bị cắt
//____________________________________________________________________________________________________________

// chúng ta dùng hàm " concat " nối 2 mãng bất kỳ thành một mảng
// let arrConcat = arr1.concat(arr2); // nối 2 mảng
// let muntiConcat = arr1.concat(arr2,arr3); // nối nhiều mảng
// console.log(arrConcat); // kết quả trả về là một mảng mới nên cần có một biến chứa
// console.log(muntiConcat);
//________________________________________________________________________________________________________________

// chúng ta dùng hàm " slice " để sao chép một mảng sang một biến khác
// let arrslice = arr1.slice();
// console.log(arrslice);
//____________________________________________________________________________________________________________

// Chúng ta dùng hàm " copywithin " sao chép và di chuyển đoạn sao chép đến 1 vị trí nào đó trên cùng một mảng và ghi đè lên đó
// console.log(arr1.copyWithin(0,8,9)); // copy chuỗi giá trị từ vị trí thứ 8 đến 9 và chép đè lên vị trí thứ 0 trong cùng 1 mảng
// console.log(arr1.copyWithin(0,8)); // nếu chúng ta bỏ trống vị trí đối số cuối cùng thì nó mặt định là copy đến hết mảng
// console.log(arr1.copywithin()); // nếu chúng ta gỏ hàm như vậy là sai, sẽ báo lỗi không phải là hàm
//________________________________________________________________________________________________________________



// chúng ta sử dụng hàm " jion " để nối các phần tử trong một mảng bằng một kí tự bất kỳ
// let arrjion = arr4.join(' = '); // giá trị trả về là một chuỗi gồm những giá trị trong mảng và một ký tự trong hàm jion
// console.log(arrjion);
//________________________________________________________________________________________________________________

// Ngược với hàm jion ta có hàm " split " sẽ bâm một chuỗi các ký tự thành một mảng những ký tự riêng biệt
// let arrstring = " không có gỉ quí hơn độc lập tự do hạnh phúc ";
// let arrsplit = arrstring.split(" "); // do những ký tự cách nhau bằng khoản trắng nên ta tách nó bằng khoản trắng,  trong những trường hợp khác thì ta sử dụng ký tự khác 
// console.log(arrsplit[3]);
//________________________________________________________________________________________________________________

// chúng ta dủng hàm " reduce " để cộng dồn các giá trị trong mảng 
// let sum = arr2.reduce(eFunction);
// function eFunction(total, value, index, array){
// 	return total + value;
// }
// console.log(sum);
//________________________________________________________________________________________________________________

// chúng ta dùng hàm " fill " để đưa một giá trị tỉnh thay thế cho các giá trị từ điểm bắt đầu đến điểm kết thúc
// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0,2,4)); // thay giá trị từ vị trí số 3 có index=2 đến vị trí số 4 có index=3 bằng giá trị 0
// console.log(array1.fill(5,1)); // thay giá trị từ vị trí có index=1 đến hết mảng bằng giá trị 5
// console.log(array1.fill(6)); // thay toàn bộ giá trị trong mảng bằng giá trị 6
// _______________________________________________________________________________________________________________

// chúng ta dùng hàm " filter "  và lòng bên trong dùng hàm callback để tạo ra điều kiện lọc 1 mảng 
// let arr4 = [];
// arr4 = arr3.filter(flFunction); // hàm trả về là một mảng mới đã đáp ứng điều kiện lọc
// function flFunction(value,index,array){
// 	return value > 18 ;
// };
// console.log(arr4);
// _______________________________________________________________________________________________________________

// duyệt qua toàn bộ mảng và trả về kết quả true nếu thỏa điều kiện và trả về false khi ngược lại
// let over = arr3.every(evFunction); 
// function evFunction(value){
// 	return value > 10 ;
// }
// console.log(over);
// hàm some thì ngược lại so với hàm every, chỉ cần 1 phần tử đạt điều kiện là trả về true và ngược lạo là false
//_______________________________________________________________________________________________________________

// chúng ta dùng hàm " find " trong việc tìm kiếm hoặc kiểm tra xem có tồn tại giá trị nào thỏa điều kiện cho trước không
// Hàm này có thể đọc cả những giá trị rổng trong mảng ( giá trị để trống )
// let arrfind = arr2.find(element => element > 6);
// console.log(arrfind);
// let arrTestFind = [1, 2, , , , 5, 6];
// arrTestFind.find((value,index) => console.log("Visited index : ", index, "with value : ", value));
// Ngược với hàm " find " hàm " findIndex " trả về chỉ số của giá trị trong mảng gọi là index
//_______________________________________________________________________________________________________________

// Chúng ta dùng hàm " sort " để sắp xếp lại các giá trị trong 1 mảng
// console.log(arr3.sort());
// console.log(arr3.reverse()); // Hàm reverse có tác động đảo ngược vị trí các giá trị trong mảng
// console.log(arr1.sort());
// console.log(arr1.reverse());
// _______________________________________________________________________________________________________________

// Chúng ta dùng hàm " flat " để làm phẳng một mảng mà các phẩn tử là các mảng lỏng nhau thành nhiều cấp
// let arr4 = [1,2,[3,4,[5,6]]];
// console.log(arr4);
// let arr5 = arr4.flat(); // làm phẳng theo mức độ giảm 1 cấp là mặc định 
// console.log(arr5);
// let arr6 = arr4.flat(2); // làm phẳng theo mức độ bằng đối số truyền vào
// console.log(arr6);
// _______________________________________________________________________________________________________________

// Chúng ta dùng hàm " isArray " để kiểm tra giá trị của một biến có phải là màng hay không
// chúng ta dùng hàm " from " để chuyển các đối số trong hàm thành các phần tử trong 1 mảng
// console.log(Array.from("không")); // hàm Array.from có 1 số trình duyệt không hỗ trợ nên tham khảo mdn
// function f(){ // do hàm f được khai báo không có đối số, khi ta truyền một dãy các đối số vô tình biến nó thành arguments object
// 	return Array.from(Array.from(arguments),x=>x+x); // dùng hàm from để chuyển thành array
// }
// console.log(f(1,2,3)); // khi truyển đối số dạng arguments object là dạng array-like object
// __________________________________________________________________________________________________________

// Chúng ta dùng hàm " map " dể tạo một mãn mới là ánh sạ của mảng gốc nào đó 
// ví dụ dưới đây làm nhiệm vụ tạo ra 1 mảng mới bằng cách nhân từng phần tử trong mảng gốc cho 2 
// arr3 = arr2.map(myFunction); // hàm map duyệt toàn bộ mãn, trả về kết quả là 1 mảng
// function myFunction(value,index,array){
// 	return value * 2;
// }
// console.log(arr2);
// console.log(arr3);
// __________________________________________________________________________________________________________

