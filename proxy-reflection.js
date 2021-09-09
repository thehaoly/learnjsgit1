//@@@ Chúng ta tìm hiểu về javascript proxy
// trong hướng dẫn này, bạn sẽ tìm hiểu về đối tượng JavaScript Proxy trong ES6
/*
Đối tượng javascript proxy là gì ?
Một JavaScript Proxy là một đối tượng bao bọc một đối tượng khác (đích) và chặn các hoạt động cơ bản của đối tượng đích
Các hoạt động cơ bản có thể là tra cứu thuộc tính, gán, liệt kê và gọi hàm,...
*/

//*** Tạo đối tượng ủy quyền proxy object
// Để tạo một đối tượng proxy mới, bạn sử dụng cú pháp sau:
/* 
let proxy = new Proxy(target, handler);
giải thích cho cú pháp :
=> target : ( mục tiêu ) là đối tượng để bọc lại
=> handler : ( người xử lý ) là một đối tượng chứa các phương thức để kiểm soát các hành vi của mục tiêu ( target ). Các phương thức bên trong đối tượng xử lý được gọi là bẫy ( traps : bẫy trong lập trình, sự ngắt của hệ thống ).
*/

//*** một ví dụ đơn giãn về proxy 
// Đầu tiên, xác định một đối tượng được gọi là người dùng:
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
// }
// // Thứ hai, xác định một đối tượng xử lý:
// const handler = {
//     get(target, property) {
//         console.log(`Property ${property} has been read.`);
//         return target[property];
//     }
// }
// Thứ ba, tạo một đối tượng proxy:
// const proxyUser = new Proxy(user, handler);
// Đối tượng proxyUser sử dụng đối tượng user để lưu trữ dữ liệu. Người dùng proxy có thể truy cập tất cả các thuộc tính của đối tượng user.
// Thứ tư, truy cập thuộc tính firstName và lastName của đối tượng người dùng thông qua đối tượng proxyUser:
// console.log(proxyUser.firstName);
// console.log(proxyUser.lastName);
// Thứ năm, nếu bạn sửa đổi đối tượng user gốc ( origin object user ), thay đổi được phản ánh ( reflected ) trong proxyUser:
// user.firstName = 'Jane';
// console.log(proxyUser.firstName);
// Tương tự, một thay đổi trong đối tượng proxyUser sẽ được phản ánh trong đối tượng ban đầu (người dùng):
// proxyUser.lastName = 'William';
// console.log(user.lastName);

//*** Bẩy proxy
/* 
Bẫy có get ()
Bẫy get () được kích hoạt khi một thuộc tính của đối tượng đích được truy cập thông qua đối tượng proxy.
Trong ví dụ trước, một thông báo được in ra khi một thuộc tính của đối tượng người dùng được truy cập bởi đối tượng proxyUser.
Nói chung, bạn có thể phát triển một logic tùy chỉnh trong bẫy get () khi một thuộc tính được truy cập.
Ví dụ: bạn có thể sử dụng bẫy get () để xác định các thuộc tính được tính toán cho đối tượng đích
Các thuộc tính được tính toán là các thuộc tính có giá trị được tính toán dựa trên giá trị của các thuộc tính hiện có.
Đối tượng user không có thuộc tính fullName, bạn có thể sử dụng bẫy get () để tạo thuộc tính fullName dựa trên thuộc tính firstName và lastName:
*/
// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// const handler = {
//     get(target, property) {
//         return property === 'fullName' ?
//             `${target.firstName} ${target.lastName}` :
//             target[property];
//     }
// };
// const proxyUser = new Proxy(user, handler);
// console.log(proxyUser.fullName);

//*** Bẫy đặt set ()
/*
Bẫy set () kiểm soát hành vi khi một thuộc tính của đối tượng đích được thiết lập
Giả sử rằng tuổi của người dùng phải lớn hơn 18. Để thực thi ràng buộc này, bạn phát triển một bẫy set () như sau:
*/
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 20
// }
// const handler = {
//     set(target, property, value) {
//         if (property === 'age') {
//             if (typeof value !== 'number') {
//                 throw new Error('Age must be a number.');
//             }
//             if (value < 18) {
//                 throw new Error('The user must be 18 or older.')
//             }
//         }
//         target[property] = value;
//     }
// };
// const proxyUser = new Proxy(user, handler);
// Đầu tiên, hãy đặt tuổi của người dùng thành một chuỗi:
//proxyUser.age = 'foo';
// Thứ hai, đặt độ tuổi của người dùng thành 16:
//proxyUser.age = 16;    
// Thứ ba, đặt tuổi của người dùng thành 21:
//proxyUser.age = 21;
// Không có lỗi xảy ra.

//*** Bẫy áp dụng apply() trap
// Phương thức handler.apply () là một cái bẫy cho một lời gọi hàm. Đây là cú pháp:
// let proxy = new Proxy(target, {
//     apply: function(target, thisArg, args) {
//         //...
//     }
// });
// Xem ví dụ sau:
const user = {
    firstName: 'John',
    lastName: 'Doe'
}
const getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
}
const getFullNameProxy = new Proxy(getFullName, {
    apply(target, thisArg, args) {
        return target(...args).toUpperCase();
    }
});
console.log(getFullNameProxy(user)); 

//*** Thêm những phương thức bẩy khác
/*
*** construct - bẩy việc sử dụng toán tử new
*** getProtottypeOf - bẫy một cuộc gọi nội bộ tới [[GetPrototypeOf]]
*** setPrototypeOf - bẫy một cuộc gọi đến Object.setPrototypeOf
*** isExtensible - bẫy một cuộc gọi đến Object.isExtensible
*** preventExtensions - bẫy một cuộc gọi đến Object.preventExtensions
*** getOwnPropertyDescriptor - bẫy một cuộc gọi đến Object.getOwnPropertyDescriptor
*/

/*
Tổng kết :
Trong hướng dẫn này, bạn đã học về đối tượng JavaScript Proxy được sử dụng để bọc một đối tượng khác để thay đổi các hành vi cơ bản của đối tượng đó.
 */





