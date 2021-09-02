//@@@ Trong phần này chúng ta đề cập đến thuộc tính tính toán ( computed property )
// Giới thiệu về Thuộc tính tính toán JavaScript
// ES6 cho phép bạn sử dụng một biểu thức trong ngoặc vuông []. Sau đó, nó sẽ sử dụng kết quả của biểu thức làm tên thuộc tính của một đối tượng.
// let propName = "c";
// const rank = {
//     a: 1,
//     b: 2,
//     [propName]: 3,
// };
// console.log(rank.c); // 3
// Trong ví dụ này, [propName] là một thuộc tính được tính toán của đối tượng rank. Tên thuộc tính được lấy từ giá trị của biến propName.
// Khi bạn truy cập thuộc tính c của đối tượng xếp hạng, JavaScript sẽ đánh giá propName và trả về giá trị của thuộc tính.
// Giống như một đối tượng theo nghĩa đen ( object literal ), bạn có thể sử dụng các thuộc tính được tính toán cho getters và setters của một lớp
let name = 'fullName';
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get[name]() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('John', 'Doe');
console.log(person.fullName);
// Get [name] là một thuộc tính được tính toán của một getter của lớp Person
// Trong thời gian chạy, khi bạn truy cập thuộc tính fullName, đối tượng person sẽ gọi getter và trả về tên đầy đủ.

