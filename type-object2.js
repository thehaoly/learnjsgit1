// chúng ta sẽ quan tâm một số phương thức nguyên mẫu trong đối tượng 

// @@@ phương thức Object.assign() : công dụng của phương thức này là sao chép thuộc tính từ những đối tượng nguồn về cho đối tượng đích
// nếu trong đối tượng đích tồn tại tên thuộc tính ( keys ) giống đối tượng nguồn thì sẽ sử dụng gía trị trong đối tượng nguồn để ghi đè.
// đối tượng nguồn có thể là một hay nhiều 
// ví dụ :
// const target = { a: 1, b: 2 };
// const source1 = { b: 4, c: 5 };
// const source2 = {d: 3, e: 6};
// const returnedTarget = Object.assign(target, source1, source2);
// console.log(target); // expected output: Object { a: 1, b: 4, c: 5, d: 3, e: 6 }
// console.log(returnedTarget); // expected output: Object { a: 1, b: 4, c: 5, d: 3, e: 6 }

// Ứng dụng của phương thức này trong thực tế 
//** Ứng dụng trong nhân bản một đối tượng 
// 'use strict';
// let obj = { a: 1 };
// let copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 }
// copy.a = 2 ;
// console.log(copy); 
// console.log(obj); 
// khi chúng ta ứng dụng vào đối tượng có độ sâu ( có nghĩa là trong đối tượng lại có đối tượng ) thì không nên dùng phương thức này
// let obj1 = { a: 0 , b: { c: 0}};
// let obj2 = Object.assign({}, obj1);
// console.log(obj2);
// obj1.a = 1;
// console.log(obj1); //{ "a": 1, "b": { "c": 0}}
// console.log(obj2); //{ "a": 0, "b": { "c": 0}}
// obj2.a = 2;
// console.log(obj1); //{ "a": 1, "b": { "c": 0}}
// console.log(obj2); //{ "a": 2, "b": { "c": 0}}
// obj2.b.c = 3;
// console.log(obj1); //{ "a": 1, "b": { "c": 3}}
// console.log(obj2); //{ "a": 2, "b": { "c": 3}}

//** Ứng dụng cho việc chộn ( merging ) các đối tượng với nhau 

//** Ứng dụng trong việc sao chép thuộc tính kiểu biểu tượng ( symbol typed ) trong đối tượng

//** Đặc tính Không thể sao chép các thuộc tính trên chuỗi nguyên mẫu và các thuộc tính không liệt kê
// const obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
//     bar: {
//       value: 2  // bar is a non-enumerable property.
//     },
//     baz: {
//       value: 3,
//       enumerable: true  // baz is an own enumerable property.
//     }
//   });
//   const copy = Object.assign({}, obj);
//   console.log(copy); // { baz: 3 }

//** Đặc tính kiểu Nguyên thủy sẽ được bọc vào các đối tượng
// const v1 = 'abc';
// const v2 = true;
// const v3 = 10;
// const v4 = Symbol('foo');
// const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// // Primitives will be wrapped, null and undefined will be ignored.
// // Note, only string wrappers can have own enumerable properties.
// console.log(obj); // { "0": "a", "1": "b", "2": "c" }

//** Đặc tính Các ngoại lệ sẽ làm gián đoạn tác vụ sao chép đang diễn ra
// const target = Object.defineProperty({}, 'foo', {
//     value: 1,
//     writable: false
//   }); // target.foo is a read-only property
//   Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
//   // TypeError: "foo" is read-only
//   // The Exception is thrown when assigning target.foo
//   console.log(target.bar);  // 2, the first source was copied successfully.
//   console.log(target.foo2); // 3, the first property of the second source was copied successfully.
//   console.log(target.foo);  // 1, exception is thrown here.
//   console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
//   console.log(target.baz);  // undefined, the third source will not be copied either.

//@@@ Phương thức object.create() : dùng để tạo một đối tượng mới dựa trên mẫu của đối tượng đã tồn tại ( nguyên mẫu) 
// cú pháp : 
// Object.create(proto)
// Object.create(proto, propertiesObject)
// tham số propertiesObject tạo ra những thuộc tính của riêng đối tượng được tạo mà những thuộc tính này sẽ được liệt kê bằng phương thức Object.defineProperties()
// những thuộc tính được liệt kê không bao gồm những thuộc tính của nguyên mẫu.
// Chúng ta tìm hiểu về một sô đặc tính trong phương thức này
 
//*** tính kế thừa cổ điển trong phương thứd
// Shape - superclass
// function Shape() {
//     this.x = 0;
//     this.y = 0;
//   }
//   // thiết lập phương thức của lớp ông nội
//   Shape.prototype.move = function(x, y) {
//     this.x += x;
//     this.y += y;
//     console.info('Shape moved.');
//   };
//   // Rectangle - là lớp con của lớp shape
//   function Rectangle() {
//     Shape.call(this); // gọi phương thức của lớp cha ( ông nội ).
//   }
//   // subclass extends superclass ( lớp con mở rộng lớp cha )
//   Rectangle.prototype = Object.create(Shape.prototype);
//   // Nếu chúng ta không đặt cấu trúc nguyên mẫu ( Rectangle.prototype.constructor ) cho Rectangle,
//   //nó sẽ lấy cấu trúc nguyên mẫu ( prototype.constructor ) of Shape (parent) cha.
//   //Để tránh điều đó, chúng ta nên đặt cấu trúc nguyên mẫu ( prototype.constructor ) cho Rectangle (child) con.
//   Rectangle.prototype.constructor = Rectangle;
//   var rect = new Rectangle(); // khởi tạo đối tượng cháu rect 
//   console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
//   console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
//   rect.move(1, 1); // Outputs, 'Shape moved.'

//*** sử dụng đối số thuộc tính của đối tượng 
// var o;
// // tạo một đối tượng với nguyên mẫu là null
// o = Object.create(null);
// o = {};
// // chúng ta có thể tạo bằng phương pháp tương đương 
// o = Object.create(Object.prototype);
// // Chúng ta tạo một đối tượng với hai thuộc tính như sau 
// // lưu ý tham số thứ hai ánh xạ các khóa tới bộ mô tả thuộc tính 
// o = Object.create(Object.prototype, {
//   // foo là một giá trị thuộc tính thông thường 
//   foo: {
//     writable: true,
//     configurable: true,
//     value: 'hello'
//   },
//   // bar là một getter-and-setter người truy cập (accessor) property
//   bar: {
//     configurable: false,
//     get: function() { return 10; },
//     set: function(value) {
//       console.log('Setting `o.bar` to', value);
//     }
// /* trong es2015 người truy cập sẽ nhìn thấy như dạng dưới đây    
//     get() { return 10; },
//     set(value) {
//     console.log('Setting `o.bar` to', value);
//     } */
//   }
// });
// function Constructor() {}
// o = new Constructor();
// // có thể dùng phương pháp tương đương 
// o = Object.create(Constructor.prototype);
// // Tất nhiên, nếu có mã khởi tạo thực tế trong hàm Constructor, Object.create () không thể phản ánh nó
// // Tạo một đối tượng mới có nguyên mẫu là một đối tượng mới, đối tượng rổng và thêm một thuộc tính duy nhất 'p', với giá trị 42.
// o = Object.create({}, { p: { value: 42 } });
// // Theo mặt định thuộc tính không thể ghi, liệt kê, định cấu hỉnh 
// o.p = 24;
// console.log(o.p); // in 42 mà không phải 24 vì mặc định chúng ta không thể ghi giá trị mới vào thuộc tính ban đầu
// o.q = 12;
// console.log(o.q);
// for (var prop in o) {
//   console.log(prop);
// } // kết quả liệt kê chỉ là 'q' mà không có thêm 'p' là vì mặc định trong khởi tạo không cho liệt kê thuộc tính p
// delete o.p; // false sai là vì không cho ghi và cấu hình xóa thêm sữa
// // để chỉ định thuộc tính es3
// o2 = Object.create({}, {
//   p: {
//     value: 42,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// });
// for (var prop in o2) {
//     console.log(prop);
//   } // khi bậc các chế độ như ghi, liệt kê, cấu hình là true thì chúng ta mới có thể thao tác toàn quyển trên đối tượng  
// // điều này tương đương đây sẽ tạo 1 đối tượng với nguyên mẫu: {p: 42 }, o2 = Object.create({p: 42})

//@@@ phương thức Object.defineProperty() : phương thức tĩnh dùng trong trường hợp định nghĩa một thuộc tính mới trực tiếp trên một đối tượng hoặc sửa đổi một thuộc tính hiện có trên một đối tượng và trả về đối tượng.
// var o = {}; // Creates a new object
// // Example of an object property added
// // with defineProperty with a data property descriptor
// Object.defineProperty(o, 'a', {
//   value: 37,
//   writable: true,
//   enumerable: true,
//   configurable: true
// });
// // 'a' property exists in the o object and its value is 37
// // Example of an object property added
// // with defineProperty with an accessor property descriptor
// var bValue = 38;
// Object.defineProperty(o, 'b', {
//   // Using shorthand method names (ES2015 feature).
//   // This is equivalent to:
//   // get: function() { return bValue; },
//   // set: function(newValue) { bValue = newValue; },
//   get() { return bValue; },
//   set(newValue) { bValue = newValue; },
//   enumerable: true,
//   configurable: true
// });
// o.b; // 38
// // 'b' property exists in the o object and its value is 38
// // The value of o.b is now always identical to bValue,
// // unless o.b is redefined

// // You cannot try to mix both:
// Object.defineProperty(o, 'conflict', {
//   value: 0x9f91102,
//   get() { return 0xdeadbeef; }
// });
// // throws a TypeError: value appears
// // only in data descriptors,
// // get appears only in accessor descriptors

// trong quá trỉnh tạo chúng ta cần lưu ý một số thuộc tính sau

//*** thuộc tính ghi đè ( Writable ) giá trị mặc định là false còn muốn mở thì ta đặc giá trị là true
// đây là thuộc tính bậc tắc chế độ cho phép true hay không cho phép false bạn thay đổi giá trị của thuộc tính 

//*** thuộc tính liệt kê ( enumerable ) giá trị mặc định là false còn muốn mở thì ta đặt giá trị là true
// đây là thuộc tính bậc tắc chế độ cho phép true hay không cho phép false bạn liệt kê thuộc tính trong đối tượng đó

//*** thuộc tính cấu hình ( configurable ) giá trị mặc định là false còn muốn mở thì ta đặt giá trị là true
// đây là thuộc tính bậc tắc chế độ cho phép true hay không cho phép false xóa hay thay đổi giá trị thuộc tính 
// var o = {};
// Object.defineProperty(o, 'a', {
//   get() { return 1; },
//   configurable: false
// });
// // Object.defineProperty(o, 'a', {
// //   configurable: true
// // }); // xuất 1 lỗi do không được định nghĩa lại
// // Object.defineProperty(o, 'a', {
// //   enumerable: true
// // }); // xuất 1 lỗi do không được cấu hình lại
// // Object.defineProperty(o, 'a', {
// //   set() {}
// // }); // throws a TypeError (set was undefined previously)
// // Object.defineProperty(o, 'a', {
// //   get() { return 1; }
// // }); // throws a TypeError
// // // (even though the new get does exactly the same thing)
// // Object.defineProperty(o, 'a', {
// //   value: 12
// // }); // một lổi xuất hiện khi không thể gán giá trị khi thuộc tính configurable là false ( mà không phải do phương thức get ảnh hưởng )
// console.log(o.a); // xuất ra giá trị là 1
// delete o.a; // không có gì diễn ra vì không thể xóa
// console.log(o.a); // xuất ra giá trị là 1

// //*** khi ta gắn giá trị cho thuộc tính của đối tượng theo phương thức sau :
// var o = {} ;
// o.a = 1 ;
// // điều này có nghĩa là các thuộc tính như writable, enumerale, configurale đều là true . 

<<<<<<< HEAD
//@@@ phương thức Object.entries() : Phương thức Object.entries () trả về một mảng gồm các cặp thuộc tính chuỗi khóa [khóa, giá trị] có thể liệt kê của riêng một đối tượng nhất định
//Điều này cũng giống như lặp với vòng lặp for ... in, ngoại trừ việc vòng lặp for ... in cũng liệt kê các thuộc tính trong chuỗi nguyên mẫu
=======
//@@@ phương thức Object.retries() : phương thức trả về một mảng của đối tượng cụ thể có thể liệt kê được 
// mảng trả về chưa sắp xếp, nếu chúng ta muốn nó thể hiện như ý cá nhân thì nên sử dụng kết hợp với phương thức sort như biểu thức sau :
// Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));
// ví dụ :
// const object1 = {
//     a : 'somestring',
//     b : 42 
// };
// for(const [key, value] of Object.entries(object1)){
//     console.log( key + " : " + value );
// }
// hay :
// const obj1 = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj1)); // [ ['foo', 'bar'], ['baz', 42] ]

//*** mảng giống đối tượng với khóa được sắp xếp theo thứ tự 
// const obj2 = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.entries(obj2)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

//*** mảng giống đối tượng với khóa key ngẫu nhiên đặt trước 
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

//*** getFoo là thuộc tính mà nó không thể liệt kê 
// const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
// myObj.foo = 'bar';
// console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

//*** nếu đối số không phải là đối tượng thì nó sẽ bị ép kiểu cho nó thành đối tượng 
// console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

//*** phương thức sẽ trả về mãng rổng khi ta truyển vào kiểu nguyên thủy primitive ngoại trừ kiểu chuổi như ví dụ trên 
// // vì nguyên thủy không có thuộc tính riêng
// console.log(Object.entries(100)); // [ ]

//*** lặp suốt cặp khóa và giá trị khi kết hợp vòng lặp for ... of
// const obj = { a: 5, b: 7, c: 9 };
// for (const [key, value] of Object.entries(obj)) {
//   console.log( key + ' '+value ); // "a 5", "b 7", "c 9"
// }

//*** ứng dụng phương thức trong tính năng lặp cho đối tượng như lặp duyệt trên mảng 
// Object.entries(obj).forEach(([key, value]) => {
//   console.log( key + ' ' +value ); // "a 5", "b 7", "c 9"
// });

//*** áp dụng phương thức cho quá trình chuyển đối kiểu đối tượng object sang kiểu ánh xạ map
// ví dụ :
// const obj = { foo: 'bar', baz: 42 };
// const map = new Map(Object.entries(obj));
// console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}


>>>>>>> 9d2960d0665ae1b0b701871c37da5516236da000
