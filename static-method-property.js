//@@@ Chúng ta sẽ nói đến vấn đề phương thức tỉnh ( static method ) hay hàm tỉnh ( static function ) và cách sử dụng chúng như thế nào cho hiệu quả
//*** Giới thiệu về phương thức tỉnh trong javascript 
// Theo định nghĩa, các phương thức tĩnh được liên kết với một lớp, không phải các trường hợp của lớp đó
// Do đó, các phương thức tĩnh rất hữu ích để xác định các phương thức trợ giúp hoặc tiện ích.
// Trước ES6, để xác định một phương thức tĩnh, bạn thêm phương thức trực tiếp vào hàm khởi tạo.
// Ví dụ: giả sử rằng bạn có kiểu Người như sau :
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.getName = function () {
//     return this.name;
// };
// Phần sau thêm một phương thức tĩnh được gọi là createAnonymous() vào kiểu Person
// Person.createAnonymous = function (gender) {
//     let name = gender == "male" ? "John Doe" : "Jane Doe";
//     return new Person(name);
// };
// Phương thức createAnonymous () được coi là một phương thức tĩnh vì nó không phụ thuộc vào bất kỳ trường hợp nào của kiểu Person cho các giá trị thuộc tính của nó.
// Để gọi phương thức createAnonymous (), bạn sử dụng kiểu Person thay vì các thể hiện của nó
// var anonymous  = Person.createAnonymous();
// console.log(anonymous);

//*** Xem xét phương thức tỉnh trong javascript của ES6
// Trong ES6, bạn xác định các phương thức tĩnh bằng cách sử dụng từ khóa static.
// Đoạn mã định nghỉa phương thức tỉnh ở trên được viếc lại như sau :
// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	getName() {
// 		return this.name;
// 	}
// 	static createAnonymous(gender) {
// 		let name = gender == "male" ? "John Doe" : "Jane Doe";
// 		return new Person(name);
// 	}
// }
// Để gọi phương thức tĩnh, bạn sử dụng cú pháp sau:
//let anonymous = Person.createAnonymous("male");
// Nếu bạn cố gắng gọi phương thức tĩnh từ một phiên bản của lớp, bạn sẽ gặp lỗi
// let person = new Person('James Doe');
// let anonymous = person.createAnonymous("male");
// Chúng ta sẽ gặp một lổi như sau : TypeError: person.createAnonymous is not a function

//*** Gọi phương thức tỉnh từ lớp khai báo hoặc một phiên bản phương thức, bạn sử dụng tên lớp, theo sau là dấu chấm . và phương thức tĩnh
//className.staticMethodName();
// Ngoài ra, bạn có thể sử dụng cú pháp sau:
// this.constructor.staticMethodName();

//@@@ Chúng ta đề cập đến thuộc tính tĩnh ( Static Properties )
// Trong phần này chúng ta sẽ học cách sử dụng và cách truy cập thuộc tính tĩnh trong phương thức tĩnh, khởi tạo lớp, và trong trường hợp của những phương thức khác
// Giống như một phương thức tĩnh, một thuộc tính tĩnh được chia sẻ bởi tất cả các phiên bản của một lớp
// Để xác định thuộc tính tĩnh, bạn sử dụng từ khóa static theo sau là tên thuộc tính
// class Item {
// 	static count = 0;
// }
// Chúng ta truy cập phương thức tĩnh bằng cách sử dụng dấu chấm như trong việc truy cập thành phần của đối tượng 
// console.log(Item.count); 
// Để truy cập thuộc tính tĩnh trong một phương thức tĩnh, bạn sử dụng tên lớp theo sau là dầu chấm . và tên thuộc tính tĩnh
// class Item {
// 	static count = 0;
// 	static getCount() {
// 		return Item.count;
// 	}
// }
// console.log(Item.getCount()); // 0
// Để truy cập một thuộc tính tĩnh trong một phương thức khởi tạo lớp hoặc các phương thức cá thể, bạn sử dụng cú pháp sau
// className.staticPropertyName;
// this.constructor.staticPropertyName;
// ví dụ :
class Item {
	constructor(name, quantity) {
		this.name = name;
		this.quantity = quantity;
		this.constructor.count++;
	}
	static count = 0;
	static getCount() {
		return Item.count++;
	}
}
// Item class ...
// thuộc tính tĩnh count được khởi tạo trong hàm khởi tạo lớp item
// khi ta tạo một lớp mới từ lớp item, nó tự động tăng lên một theo dòng lệnh this.constructor.count++;
console.log(Item.count); // count bằng 0 khi chưa gán hoặc gọi hàm getCount
let pen = new Item("Pen", 5); // count tăng 1
console.log(Item.count);
let notebook = new Item("notebook", 10); // count tăng 2
// Điều này cho ta biết lớp item đã được khởi tạo 2 lần 
console.log(Item.getCount()); // cuối cùng in ra kết quả là 2 