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
