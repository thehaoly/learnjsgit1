// @@@ Chúng ta sẽ tìm hiểu về new.target Metaproperty trong javascript
// trong hướng dẫn này, bạn tìm hiểu về siêu dữ liệu JavaScript new.target để phát hiện xem một hàm hoặc hàm tạo có được gọi bằng cách sử dụng toán tử mới hay không.
// *** Giới thiệu về new.target trong javascript
// Trong javascript ES6 cung cấp cho chúng ta một sia6u dữ liệu gọi là new.target, nó cho phép bạn phát hiện một hàm hay một hàm tạo có được sử dụng toán tử new để gọi hay không 
// từ khóa new.target là biến trong tất cả các hàm
// Tuy nhiên, trong arrow function, new.target là hàm thuộc về hàm xung quanh
// New.target rất hữu ích để kiểm tra trong thời gian chạy xem một hàm đang được thực thi như một hàm hay một hàm tạo.
// Nó cũng hữu ích để xác định một lớp dẫn xuất cụ thể đã được gọi bằng cách sử dụng toán tử mới từ bên trong một lớp cha.

//*** javascript new.target trong hàm ( function )
// Hãy xem hàm tạo Person sau:
// function Person(name) {
//     this.name = name;
// }
// Bạn có thể tạo một đối tượng mới từ hàm Person bằng cách sử dụng toán tử new như sau:
// let john = new Person('John');
// console.log(john.name); // john
// Hoặc bạn có thể gọi Người dưới dạng một hàm
// Person('Lily');
// Bởi vì từ khóa this trong hàm khởi tạo person là thuộc về đối tượng toàn cục window, khi ta chạy đoạn code trên trình duyệt web thì thuộc tính name được đưa vào đối tượng window như sau :
// console.log(window.name); //Lily
// console.log(name); // chạy trên dòng lệnh thì ta sử dụng như sau 
// Trong một lệnh gọi hàm thông thường, new.target trả về undefined. Nếu hàm được gọi bằng toán tử new, new.target trả về một tham chiếu đến hàm.
// Giả sử bạn không muốn Person được gọi dưới dạng một hàm, bạn có thể sử dụng new.target như sau
// function Person(name) {
//     if (!new.target) {
//         throw "must use new operator with Person";
//     }
//     this.name = name;
// }
// Person('john'); // Nếu chúng ta khai báo đối tượng nhưng lại không dùng từ khóa new thì nó sẽ quăn ra lỗi như điều kiện trong khi tạo

//*** javascript new.target trong khởi tạo ( constructor )
// Trong một hàm tạo lớp, new.target đề cập đến hàm tạo được gọi trực tiếp bởi toán tử new.
// Đúng ( True ) nếu hàm tạo nằm trong lớp cha và được ủy quyền từ hàm tạo của lớp con:
class Person {
    constructor(named) {
        this.name = named;
        console.log(new.target.name);
    }
}
class Employee extends Person {
    constructor(named, title) {
        super(named);
        this.title = title;
    }
}
let john = new Person('John Doe'); // Person
let lily = new Employee('Lily Bush', 'Programmer'); // Employee
// Trong ví dụ này, new.target.name là tên thân thiện với con người của tham chiếu phương thức khởi tạo của new.target