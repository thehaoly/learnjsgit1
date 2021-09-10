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
// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// const getFullName = function (user) {
//     return `${user.firstName} ${user.lastName}`;
// }
// const getFullNameProxy = new Proxy(getFullName, {
//     apply(target, thisArg, args) {
//         return target(...args).toUpperCase();
//     }
// });
// console.log(getFullNameProxy(user)); 

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

//@@@ Phản ánh trong javascript ( javascript reflection )
// trong hướng dẫn này, bạn sẽ tìm hiểu về phản chiếu JavaScript và API phản ánh trong ES6
// Phản chiếu là gì ( what is reflection )
/*
Trong lập trình máy tính, phản chiếu là khả năng của một chương trình để thao tác các biến, thuộc tính và phương thức của các đối tượng trong thời gian chạy.
Trước ES6, JavaScript đã có các tính năng phản chiếu mặc dù chúng không được cộng đồng hoặc đặc tả chính thức cho tính năng đó.
Ví dụ, các phương thức như Object.keys (), Object.getOwnPropertyDescriptor () và Array.isArray () là các tính năng phản chiếu cổ điển.
ES6 giới thiệu một đối tượng toàn cầu mới có tên là Reflect cho phép bạn gọi các phương thức, xây dựng đối tượng, lấy và đặt thuộc tính, thao tác và mở rộng thuộc tính.
API Reflect rất quan trọng vì nó cho phép bạn phát triển các chương trình và khuôn khổ có khả năng xử lý mã động.
*/

//*** Reflect API ( giao thức ứng dụng trong reflect )
/*
Không giống như hầu hết các đối tượng toàn cục, Reflect không phải là một phương thức khởi tạo.
Có nghĩa là bạn không thể sử dụng Reflect với toán tử mới hoặc gọi Reflect dưới dạng một hàm
Nó tương tự với các đối tượng Math và JSON. Tất cả các phương thức của đối tượng Reflect là tĩnh.
* Reflect.apply () - gọi một hàm với các đối số được chỉ định.
* Reflect.construct () - hoạt động giống như toán tử new, nhưng dưới dạng một hàm function. Nó tương đương với việc gọi new target(... args)
* Reflect.defineProperty () - tương tự như Object.defineProperty (), nhưng trả về giá trị Boolean cho biết thuộc tính có được xác định thành công trên đối tượng hay không.
* Reflect.deleteProperty () - hoạt động giống như toán tử delete, nhưng dưới dạng một hàm. Nó tương đương với việc gọi delete objectName [propertyName].
* Reflect.get () - trả về giá trị của một thuộc tính.
* Reflect.getOwnPropertyDescriptor () - tương tự như Object.getOwnPropertyDescriptor (). Nó trả về một bộ mô tả thuộc tính của một thuộc tính nếu thuộc tính đó tồn tại trên đối tượng hoặc undefined theo cách khác.
* Reflect.getPrototypeOf () - giống như Object.getPrototypeOf ().
* Reflect.has () - hoạt động giống như toán tử in, nhưng dưới dạng một hàm function. Nó trả về một boolean cho biết liệu một thuộc tính (thuộc sở hữu hoặc được thừa kế) có tồn tại hay không.
* Reflect.isExtensible () - giống như Object.isExtensible ()
* Reflect.ownKeys () - trả về một mảng các khóa thuộc tính sở hữu (không được kế thừa) của một đối tượng.
* Reflect.preventExtensions () - tương tự như Object.preventExtensions (). Nó trả về một Boolean.
* Reflect.set () - gán giá trị cho thuộc tính và trả về giá trị Boolean là true nếu thuộc tính được đặt thành công.
* Reflect.setPrototypeOf () - thiết lập nguyên mẫu của một đối tượng.
Hãy lấy một số ví dụ về việc sử dụng API phản ánh:
*/

//*** Tạo đối tượng: Reflect.construct ()
// Phương thức Reflect.construct () hoạt động giống như toán tử new, nhưng dưới dạng một hàm. 
// Nó tương đương với việc gọi new target (... args) với khả năng chỉ định một nguyên mẫu khác:
// Reflect.construct(target, args [, newTarget])
// Reflect.construct () trả về phiên bản mới của target hoặc newTarget nếu được chỉ định, được khởi tạo bởi target dưới dạng một phương thức khởi tạo với đối tượng giống mảng đã cho args. Xem ví dụ sau:
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
// let args = ['John', 'Doe'];
// let john = Reflect.construct(
//     Person,
//     args
// );
// console.log(john instanceof Person);
// console.log(john.fullName); // John Doe
/*
Trong ví dụ này :
* Đầu tiên, xác định một lớp được gọi là Person.
* Thứ hai, khai báo một mảng args có chứa hai chuỗi.
* Thứ ba, tạo một thể hiện mới của lớp Person bằng phương thức Reflect.construct (). Đối tượng john là một thể hiện của lớp Person nên nó có thuộc tính fullName.
*/

//*** Gọi một hàm  Reflect.apply()
// Trước ES6, bạn gọi một hàm với một giá trị this và đối số arguments được chỉ định bằng cách sử dụng phương thức Function.prototype.apply (). Ví dụ:
// let result = Function.prototype.apply.call(Math.max, Math, [10, 20, 30]);
// console.log(result);
// Cú pháp này khá dài dòng.
// Reflect.apply () cung cấp tính năng tương tự như Function.prototype.apply () nhưng ít dài dòng hơn và dễ hiểu hơn
// let result = Reflect.apply(Math.max, Math, [10, 20, 30]);
// console.log(result);
// Đây là cú pháp của phương thức Reflect.apply ():
// Reflect.apply(target, thisArg, args)

//*** Định nghĩa một thuộc tính: Reflect.defineProperty ()
// Reflect.defineProperty () giống như Object.defineProperty (). Tuy nhiên, nó trả về một Boolean cho biết thuộc tính có được xác định thành công hay không thay vì đưa ra một ngoại lệ:
// Reflect.defineProperty(target, propertyName, propertyDescriptor)
// Xem ví dụ sau:
let person = {
    name: 'John Doe'
};
if (Reflect.defineProperty(person, 'age', {
        writable: true,
        configurable: true,
        enumerable: false,
        value: 25,
    })) {
    console.log(person.age);
} else {
    console.log('Cannot define the age property on the person object.');

}
// Trong hướng dẫn này, bạn đã tìm hiểu về phản chiếu JavaScript và API phản chiếu có chứa một số phương thức phản chiếu.




