//@@@ Tìm hiểu về kế thừa trong javascript sử dụng từ khóa extends và super
// Trong nội dung này, bạn sẽ học cách triển khai kế thừa JavaScript bằng cách sử dụng extension và super trong ES6
// Trước ES6, việc triển khai kế thừa thích hợp yêu cầu nhiều bước. Một trong những chiến lược được sử dụng phổ biến nhất là kế thừa nguyên mẫu.
// Trước tiên chúng ta minh họa cách Bird kế thừa các thuộc tính từ Animal bằng cách sử dụng kỹ thuật kế thừa nguyên mẫu:
// function Animal(legs) {
//     this.legs = legs;
// }
// Animal.prototype.walk = function() {
//     console.log('walking on ' + this.legs + ' legs');
// }
// function Bird(legs) {
//     Animal.call(this, legs);
// }
// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Animal;
// Bird.prototype.fly = function() {
//     console.log('flying');
// }
// var pigeon = new Bird(2);
// pigeon.walk(); // walking on 2 legs
// pigeon.fly(); // flying
// ES6 đã đơn giản hóa các bước này bằng cách sử dụng các từ khóa extends và super.
// Ví dụ sau đây xác định các lớp Animal, Bird và thiết lập sự kế thừa thông qua các từ khóa extends và super.
// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log('walking on ' + this.legs + ' legs');
//     }
// }
// class Bird extends Animal {
//     constructor(legs,legen) {
//         super(legs);
//         this.legen = legen ;
//     }
//     fly() {
//         console.log('flying');
//     }
// }
// let bird = new Bird(2, "male");
// console.log(bird.legen);
// bird.walk();
// bird.fly();
// Quá trình thực hiện được diễn giải như sau :
// Chúng ta khai báo 1 lớp là Animal gồm thuộc tính legs và phương thức walk
// Dùng từ khóa extends làm cho lớp Bird kế thừa từ lớp Animal   
// Lớp động vật ( Animal ) được gọi là lớp cơ bản hay là lớp cha mẹ trong khi lớp chim ( Bird ) được biết như lớp được suy ra hay là lớp con
// Từ việc này lớp chim ( Bird ) được thừa kế những phương thức hay thuộc tính từ lớp động vật ( Animal ).
// Thứ hai hàm tạo Bird dùng từ khóa super() để gọi khởi tạo Animal với đối số legs
// JavaScript yêu cầu lớp con gọi super () nếu nó có hàm tạo, Như bạn thấy trong lớp Bird, super( legs ) tương đương với câu lệnh sau trong ES5
// Animal.call(this, legs);
// Nếu lớp Bird không có hàm tạo, bạn không cần phải làm gì khác:
// class Bird extends Animal {
//     fly() {
//         console.log('flying');
//     }
// }
// Nó tương đương với lớp sau:
// class Bird extends Animal {
//     constructor(...args) {
//         super(...args);
//     }
//     fly() {
//         console.log('flying');
//     }
// }
// Nếu lớp con có hàm tạo thì nhất thiết phải sử dụng từ khóa super() nếu không sẽ bị quăn ra 1 lỗi như sau :
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// Vì super () khởi tạo đối tượng này, bạn cần gọi super () trước khi truy cập đối tượng này. Cố gắng truy cập điều này trước khi gọi super () cũng dẫn đến lỗi.
// Ví dụ, nếu bạn muốn khởi tạo thuộc tính màu của lớp Bird, bạn có thể thực hiện như sau
// class Bird extends Animal {
// 	constructor(legs, color) {
// 		super(legs);
// 		this.color = color;
// 	}
// 	fly() {
// 		console.log("flying");
// 	}
// 	getColor() {
// 		return this.color;
// 	}
// }
// let pegion = new Bird(2, "white");
// console.log(pegion.getColor());

//*** Phương pháp đỗ bóng ( Shadowing methods )
// ES6 cho phép lớp con và lớp cha có các phương thức trùng tên,
// Trong trường hợp này, khi bạn gọi phương thức của một đối tượng của lớp con, phương thức trong lớp con sẽ đỗ bóng phương thức trong lớp cha mẹ
// ví dụ sau sẽ thực hiện Lớp Dog sau mở rộng lớp Animal và định nghĩa lại phương thức walk ():
// class Dog extends Animal {
//     constructor() {
//         super(4);
//     }
//     walk() {
//         console.log(`go walking`);
//     }
// }
// let bingo = new Dog();
// bingo.walk(); // go walking
// Để gọi phương thức của lớp cha trong lớp con, bạn sử dụng super.method (các đối số) như thế này
// class Dog extends Animal {
//     constructor() {
//         super(4);
//     }
//     walk() {
//         super.walk();
//         console.log(`go walking`);
//     }
// }

// let bingo = new Dog();
// bingo.walk();
// walking on 4 legs
// go walking

//*** Kế thừa các thành viên tĩnh ( inheritance static members )
// Bên cạnh các thuộc tính và phương thức, lớp con còn kế thừa tất cả các thuộc tính và phương thức tĩnh của lớp cha. Ví dụ:
// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log('walking on ' + this.legs + ' legs');
//     }
//     static helloWorld() {
//         console.log('Hello World');
//     }
// }
// class Bird extends Animal {
//     fly() {
//         console.log('flying');
//     }
// }
// Trong ví dụ này, lớp Animal có phương thức tĩnh helloWorld () và phương thức này có sẵn dưới dạng Bird.helloWorld () và hoạt động giống như phương thức Animal.helloWorld ():
// Bird.helloWorld(); // Hello World

//*** Kế thừa từ các loại có sẵn ( inheritance from buit-in types )
// Trong javascript cho phép ta mở rộng kiểu nguyên thủy như Array, String, Map và Set thông qua kế thừa.
// Sau đây lớp Queue được mở rộng theo kiểu tham chiếu mãng Array. 
// Cú pháp gọn gàng hơn nhiều so với việc Queue được triển khai bằng cách sử dụng phương thức khởi tạo ( constructor ) /( prototype pattern ) mẫu nguyên mẫu.
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}
var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');
while (!customers.empty()) {
    console.log(customers.dequeue());
}

//*** Tổng kết :
// Sử dụng từ khóa extends để triển khai kế thừa trong ES6. Lớp được mở rộng được gọi là lớp cơ sở hoặc lớp cha. Lớp mở rộng lớp cơ sở hoặc lớp cha được gọi là lớp dẫn xuất hoặc lớp con.
// Gọi super (đối số) trong phương thức khởi tạo của lớp con để gọi phương thức khởi tạo của lớp cha.
// Sử dụng từ khóa super để gọi các phương thức của lớp cha trong các phương thức của lớp con.
