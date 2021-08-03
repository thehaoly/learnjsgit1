// javascript được thiết kế dựa trên một mô hình đối tượng đơn giản
// Một đối tượng là một tập hợp những thuộc tính, mỗi thuộc tính là sự liên kết giữa tên ( hay khóa) với 1 giá trị
// Thuộc tính trong đối tượng có thể là một giá trị hay là một hàm mà theo mối quan hệ tài sản thỉ nó được gọi là phương thức
// Đối tượng trong javascript cũng giống như những đối tượng bình thường trong đời sống hằng ngày
// ví dụ như đối tượng cái ly nó có những thuộc tính như màu sắc, thiết kế, cân nặng, chất liệu ,..
// thuộc tính của đối tượng đơn giản là một biến bình thường trong javascript ngoại trừ phẩn đính kèm vào các đối tượng 
// Chúng ta có thể truy suất thông tin thuộc tính của đối tượng bằng dấu chấm .
//       objectName.propertyName

// Tên của thuộc tính
// Tên thuộc tính là chuỗi hoặc ký hiệu. Bất kỳ giá trị nào khác, bao gồm một số, đều bị ép buộc thành một chuỗi.
// let object = {};
// object['1'] = 'value';
// console.log(object[1]);
// let foo = {unique_prop: 1}, bar = {unique_prop: 2}, objectt = {};
// objectt[foo] = 'value';
// console.log(objectt[bar]);

// Những phương thức khởi tạo đối tượng 
// phương thức 1 : khởi tạo bằng từ khóa new và sau đó gắn thuôc tính cho nó 
// var myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969 ;

// phương thức 1 còn được viếc theo cách khác là dùng dấu , ngăn cách trong việc khai báo liển mạch
// tất cả các khóa trong ký hiệu dấu ngoặc vuông được chuyển đổi thành chuỗi bằng phương thức ( object.toString ) trừ khi chúng là Ký hiệu (symbol)
// var myObj = new Object(),
//     str = 'myString',
//     rand = Math.random(),
//     obj = new Object();
// myObj.type              = 'Dot syntax';
// myObj['date created']   = 'String with space';
// myObj[str]              = 'String value';
// myObj[rand]             = 'Random Number';
// myObj[obj]              = 'Object';
// myObj['']               = 'Even an empty string';
// console.log(myObj);

// phương thức 2 : khai báo như 1 biến bình thường và dùng dấu ngoặc nhọn
// var myCar = {
//     make : 'Ford',
//     model : 'Mustang',
//     year : 1969 
// };

// Người ta có thể nghĩ về một đối tượng như một mảng kết hợp, Các khóa trong mảng này là tên của các thuộc tính của đối tượng.
// Có hai cách để truy cập vào thuộc tính của đối tượng

// Cách truy cập bằng dấu chấm động áp dụng trong trường hợp
// Trong cú pháp object.property, thuộc tính phải là một mã định danh JavaScript hợp lệ. 
//(Trong tiêu chuẩn ECMAScript, tên của các thuộc tính về mặt kỹ thuật là "Tên định danh -identifierName", không phải "Số nhận dạng - indentifier", vì vậy có thể sử dụng các từ dành riêng nhưng không được khuyến khích). Ví dụ, object.$1 là hợp lệ, trong khi object.1 thì không.
// const object = {};
// object.$1 = 'foo';
// console.log(object.$1);  // 'foo'
// object.1 = 'bar';        // SyntaxError
// console.log(object.1);   // SyntaxError

// Cách truy cập vào dấu ngoặc vuông áp dụng trong trường hợp
//Trong cú pháp object [property_name], property_name chỉ là một chuỗi hoặc Ký hiệu. Vì vậy, nó có thể là bất kỳ chuỗi nào, bao gồm '1foo', '! Bar!', Hoặc thậm chí '' (dấu cách).


// Trong trường hợp mà chúng ta truy cập vào một thuộc tính chưa khai báo thì nó sè trả về giá trị undefined ( và không là null )
// console.log(myCar.color) ; // trả về giá trị undefined 

//Chúng ta có 3 phương pháp cụ thể để liệt kê các thuộc tính trong 1 đối tượng
// dùng lệnh for ... in lặp, Phương thức này duyệt qua tất cả các thuộc tính có thể liệt kê của một đối tượng và chuỗi nguyên mẫu của nó.
//  function showProps(obj, objName) {
//     for (var i in obj) {
//       // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//       if (obj.hasOwnProperty(i)) {
//         console.log(objName + "." + i + " = " + obj[i]) ; // không dùng cách truy cập bằng dấu chấm được, nểu như vậy nó sẽ trả về giá trị undefined
//       }
//     }
//   }
//   showProps(myCar, "myCar");

// Dùng lệnh Object.keys(o),Phương thức này trả về một mảng có tất cả các tên thuộc tính riêng (không nằm trong chuỗi nguyên mẫu) ("khóa") của một đối tượng
// console.log(Object.keys(myCar));

// Dùng lệnh Object.getOwnPropertyNames (o) Phương thức này trả về một mảng chứa tất cả các tên thuộc tính riêng (có thể liệt kê hoặc không) của một đối tượng
//console.log(Object.getOwnPropertyNames(myCar));

