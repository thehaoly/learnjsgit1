//@@@ Một lớp JavaScript là một bản thiết kế để tạo các đối tượng. Một lớp đóng gói dữ liệu và các hàm thao tác dữ liệu.
// lớp trong javascript là cú pháp đặc biệt qua kế thừa nguyên mẫu. Nói cách khác lớp trong ES6 chính là hàm đặc biệt 
// Trước ES6 javascript không có khái niệm về các lớp  
// chúng ta quay lại trước khi es6 ra đời, thì kế thừa thường được thực hiện theo phương thức nguyên mẫu như sau :
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.getName = function () {
//     return this.name;
// };
// var john = new Person("John Doe");
// console.log(john.getName()); // cho ra kết quả Jhon Doe
// Hàm getName () được gán cho nguyên mẫu để nó có thể được chia sẻ bởi tất cả các phiên bản của kiểu Person
// Sau đó, tạo một phiên bản mới của kiểu Person bằng toán tử new
// Do đó, đối tượng john là một thể hiện của Người và Đối tượng thông qua kế thừa nguyên mẫu.
// Chúng ta dùng hàm instanceof() để kiểm tra xem john có phải là một phiên bản của person và object hay không !
// console.log(typeof Person); // trả về function
// console.log(john instanceof Person); // kết quả trả về là true
// console.log(john instanceof Object); // kết quả trả về là true  

//@@@ Lớp trong ES6 đã giới thiệu một cú pháp mới để khai báo một lớp như được hiển thị trong ví dụ này
// Chúng ta có hai hình thức khởi tạo lớp 
//*** Phương thức khởi tạo lớp khai báo ( class declaration )
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }
// Lớp Person này hoạt động giống như kiểu Person trong ví dụ trước. 
// Tuy nhiên, thay vì sử dụng một phương thức khởi tạo / mẫu nguyên mẫu, nó sử dụng từ khóa class.
// Trong lớp Person, hàm tạo () là nơi bạn có thể khởi tạo các thuộc tính của một thể hiện
// JavaScript tự động gọi phương thức constructor () khi bạn khởi tạo một đối tượng của lớp.
// Sau đây chúng ta sẽ tạo một lớp mới thông qua từ khóa new
//  let john = new Person("John Doe");
// Chúng ta sẽ sử dụng phương thức gọi hàm sau objectName.methodName(args);
// console.log(john.getName()); // "John Doe"
// Để xác minh thực tế rằng các lớp là các hàm đặc biệt, bạn có thể sử dụng toán tử typeof để kiểm tra loại của lớp Person
// console.log(typeof Person); // function
// Chúng ta cũng có thể dùng phương thức instanceof cho việc kiểm tra chúng có phải là phiên bản của 1 cái gì đó không 
// console.log(john instanceof Person); // true
// console.log(john instanceof Object); // true

//*** So sánh sự khác nhau giữa lớp Class và kiểu tùy chỉnh custom type
// Mặc dù có những điểm tương đồng giữa một lớp và một kiểu tùy chỉnh được xác định thông qua một hàm khởi tạo, nhưng có một số điểm khác biệt quan trọng
// Đầu tiên sự khác nhau nằm ở chổ khai báo lớp sẽ không có hiện tượng nhảy qua ( hoisting ) như trong khai báo hàm
// Thứ hai tất cả mã bên trong một lớp sẽ tự động thực thi ở chế độ nghiêm ngặt ( strict mode ). Và bạn không thể thay đổi hành vi này.
// Thứ ba, các phương thức của lớp là không thể liệt kê được ( non-enumerable ). 
// Nếu bạn sử dụng một phương thức khởi tạo / mẫu nguyên mẫu, bạn phải sử dụng phương thức Object.defineProperty () để làm cho một thuộc tính không thể liệt kê được.
// Cuối cùng, việc gọi hàm tạo lớp mà không có toán tử mới sẽ dẫn đến lỗi như trong ví dụ sau.

//*** Phương pháp khởi tạo lớp biểu thức ( class Expressions )
// Biểu thức lớp không yêu cầu số nhận dạng sau từ khóa lớp. Và bạn có thể sử dụng một biểu thức lớp trong một khai báo biến và chuyển nó vào một hàm như một đối số.
// Ví dụ, phần sau định nghĩa một biểu thức lớp:
let Person = class {       // không có tên lớp 
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
// miêu tả hoạt động của đoạn code trên 
// Ở phía bên trái của biểu thức là biến Person. Nó được gán cho một biểu thức lớp.
// Biểu thức lớp bắt đầu với từ khóa class theo sau là định nghĩa lớp.
// Một biểu thức lớp có thể có tên hoặc không. Trong ví dụ này, chúng ta có một biểu thức lớp không được đặt tên
// Nếu một biểu thức lớp có tên, tên của nó có thể là cục bộ đối với phần thân của lớp.
// Sau đây tạo một thể hiện của biểu thức lớp Person. Cú pháp của nó giống như thể nó là một khai báo lớp.
// let person = new Person('John Doe');
// Giống như lớp khai báo, kiểu của biểu thức lớp cũng là một hàm.
// console.log(typeof Person); // function
// Tương tự như biểu thức hàm, biểu thức lớp không được nâng lên. Nó có nghĩa là bạn không thể tạo một thể hiện của lớp trước khi xác định biểu thức lớp.

//-** Độ ưu tiên cho một lớp
// Điều đó có nghĩa là bạn có thể chuyển một lớp vào một hàm, trả về nó từ một hàm và gán nó cho một biến.
// function factory(aClass) {
//     return new aClass();
// }
// let greeting = factory(class {
//     sayHi() { console.log('Hi'); }
// });
// greeting.sayHi(); // 'Hi'
// Cách đoạn mã trên hoạt động :
// Đầu tiên, hãy xác định một hàm factory () nhận một biểu thức lớp làm đối số và trả về thể hiện của lớp:
// Thứ hai, truyền một biểu thức lớp không tên vào hàm factory () và gán kết quả của nó cho biến lời chào
// Biểu thức lớp có một phương thức gọi là sayHi (). Và biến greeting là một thể hiện của biểu thức lớp.
// Thứ ba, gọi phương thức sayHi () trên đối tượng lời chào:

//-** Single-ton : thứ duy nhất, đứa con duy nhất
// Singleton là một mẫu thiết kế giới hạn việc khởi tạo một lớp trong một thể hiện duy nhất. Nó đảm bảo rằng chỉ một thể hiện của một lớp có thể được tạo trong toàn hệ thống.
// Để làm điều đó, bạn sử dụng toán tử new với một biểu thức lớp và bao gồm các dấu ngoặc đơn ở cuối khai báo lớp
let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');
app.start(); // Starting the Awesome App...
// Miêu tả đoạn mã trên làm việc như thế nào 
// Lớp có một constructor () chấp nhận một đối số. Nó có một phương thức gọi là start ().
// bạn có thể gọi hàm tạo của nó ngay lập tức bằng cách đặt dấu ngoặc đơn sau biểu thức:
// Biểu thức này trả về một thể hiện của biểu thức lớp được gán cho biến ứng dụng.
