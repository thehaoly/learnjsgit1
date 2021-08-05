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

// Những cách khởi tạo hàm trong javascript
// Sử dụng trình khởi tạo đối tượng với cú pháp như sau :
// var obj = { property_1:   value_1,   // property_# may be an identifier...
//                      2:   value_2,   // or a number...
//                      ...,
//             'property n': value_n }; // or a string
// Trình khởi tạo đối tượng trong javascript là biểu thức expression
// Câu lệnh sau tạo một đối tượng và gán nó cho biến x nếu và chỉ khi biểu thức cond đúng:
// if (cond) var x = {greeting: 'hi there'};
// Ví dụ sau tạo myHonda với ba thuộc tính. Lưu ý rằng thuộc tính engine cũng là một đối tượng có các thuộc tính riêng của nó
// var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};

// Sử dụng một hàm khởi tạo, để khởi tạo đối tượng bằng hai bước như sau như sau :
// Bước 1 : Xác định kiểu đối tượng bằng cách viết một hàm khởi tạo. Dùng cách đặc tên theo qui tắc con lạc đà 
// Bước 2 : Tạo 1 phiên bản với với từ khóa new 
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
// var mycar = new Car('Eagle', 'Talon TSi', 1993);
// chúng ta có thể tạo những phiên bản khác từ cấu trú gốc như sau
// var kenscar = new Car('Nissan', '300ZX', 1992);
// var vpgscar = new Car('Mazda', 'Miata', 1990);

// Tuy nhiên nếu bạn muốn tất cả các đối tượng cùng có 1 thuộc tính với 1 giá trị nào đó thì bạn nên khai báo ngay từ lần đầu khởi tạo nó

// Sử dụng phương thức Object.create để khởi tạo đối tượng
// Phương thức này có thể rất hữu ích, vì nó cho phép bạn chọn đối tượng nguyên mẫu cho đối tượng bạn muốn tạo mà không cần phải xác định một hàm khởi tạo.
//Animal properties and method encapsulation
// var Animal = {
//     type: 'Invertebrates', // Default value of properties
//     displayType: function() {  // Method which will display type of Animal
//       console.log(this.type);
//     }
//   };
//   // Create new animal type called animal1
//   var animal1 = Object.create(Animal);
//   animal1.displayType(); // Output:Invertebrates 
//   // Create new animal type called Fishes
//   var fish = Object.create(Animal);
//   fish.type = 'Fishes';
//   fish.displayType(); // Output:Fishes

// Một số tính chất của đối tượng
// Tính kế thừa : inheritance
// Khi chúng ta tạo một đối tượng từ một nguyên mẫu thì đối tượng mới được tạo sẽ kế thừa mọi phương thức cũng như thuộc tính của đối tượng đó

// Lập chỉ mục cho thuộc tính đối tượng 
// Bạn có thể tham chiếu đến một thuộc tính của một đối tượng bằng tên thuộc tính của nó hoặc theo chỉ mục thứ tự của nó
// Nếu ban đầu bạn xác định một thuộc tính đối tượng với một chỉ mục, 
// chẳng hạn như myCar [5] = "25 mpg", sau đó bạn chỉ tham chiếu đến thuộc tính là myCar [5].

// Xác định thuộc tính cho một loại đối tượng
// Bạn có thể thêm một thuộc tính vào một kiểu đối tượng đã xác định trước đó bằng cách sử dụng thuộc tính nguyên mẫu.
// Đây là cách gắn thêm 1 thuộc tính vào đối tượng gốc bằng từ từ khóa prototype
// Car.prototype.color = null; // thêm thuộc tính color vào bảng gốc Car
// car1.color = 'black'; // Bản sao car1 sẽ được kế thừa và được sữa đổi bằng cách gắn lại giá trị "black"

// Xác định phương thức cho đối tượng 
// Phương thức là một hàm được liên kết với một đối tượng, hay nói cách khác, một phương thức là một thuộc tính của một đối tượng là một hàm
// objectName.methodname = functionName;
// var myObj = {
//   myMethod: function(params) {
//     // ...do something
//   }
//   // OR THIS WORKS TOO
//   myOtherMethod(params) {
//     // ...do something else
//   }
// };
// Cách gọi 1 phương thức trong đối tượng 
// object.methodname(params);
// Bạn có thể xác định các phương thức cho một kiểu đối tượng bằng cách đưa vào một định nghĩa phương thức trong hàm tạo đối tượng.
// function displayCar() {
//     var result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
//     pretty_print(result);
//   }

// Chúng ta có thể đưa một hàm từ bên ngoài thành một phương thức bên trong của một đối tượng bằng phương pháp sau ;
// this.displayCar = displayCar; // thông qua từ khóa this
// Trong đó displayCar chính lá một hàm có tên trùng với tên của phuong thức

// Sử dụng từ khóa đặc biệt ' this ' cho việc tham chiếu trong đối tượng
// Chúng ta sử dụng this để trỏ tới chính đôí tượng của phương thức đó
// const Manager = {
//     name: "John",
//     age: 27,
//     job: "Software Engineer"
//   }
//   const Intern= {
//     name: "Ben",
//     age: 21,
//     job: "Software Engineer Intern"
//   }
//   function sayHi() {
//       console.log('Hello, my name is', this.name)
//   }
//   // add sayHi function to both objects
//   Manager.sayHi = sayHi; // cách khởi tạo hàm chưa được khởi tạo từ trước
//   Intern.sayHi = sayHi;
//   Manager.sayHi() // Hello, my name is John'
//   Intern.sayHi() // Hello, my name is Ben'

// Phương pháp xác định getters và setters trong  object
// Chúng ta có thể khởi tạo getters và setter trong quá trình khởi tạo đối tượng ngay từ đầu
// var o = {
//     a: 7,
//     get b() {
//       return this.a + 1;
//     },
//     set c(x) { // phương thức set bao giờ cũng có ít nhất 1 tham biến để truyền giá trị cấn thay đổi vào
//       this.a = x / 2;
//     }
//   };
//   console.log(o.a); // 7
//   console.log(o.b); // 8 <-- At this point the get b() method is initiated.
//   o.c = 50;         //   <-- At this point the set c(x) method is initiated
//   console.log(o.a); // 25

// Hay chúng ta dùng phương thức object.defineProperties để khởi tạo phương thức setter và getter 
// var o = { a: 0 };
// Object.defineProperties(o, {
//     'b': { get: function() { return this.a + 1; } },
//     'c': { set: function(x) { this.a = x / 2; } }
// });
// o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
// console.log(o.b); // Runs the getter, which yields a + 1 or 6
// phương pháp này thể hiện được tính động trong javascript, nhưng điểu này sẽ làm cho mã trở nên khó đọc và khó hiểu

// Phương thức xóa thuộc tính trong đối tượng 
// Chúng ta có thể xóa 1 thuộc tính không phải là thuộc tính kế thừa trong một đối tượng
// Creates a new object, myobj, with two properties, a and b.
// var myobj = new Object;
// myobj.a = 5;
// myobj.b = 12;
// // Removes the a property, leaving myobj with only the b property.
// delete myobj.a;
// console.log ('a' in myobj); // output: "false"

// Phương thức so sánh đối tượng 
// Trong JavaScript, các đối tượng là một kiểu tham chiếu. Hai đối tượng khác biệt không bao giờ bằng nhau, ngay cả khi chúng có cùng tính chất. 
// Chỉ so sánh cùng một tham chiếu đối tượng với chính nó mới cho kết quả đúng.
// Two variables, two distinct objects with the same properties
// var fruit = {name: 'apple'};
// var fruitbear = {name: 'apple'};
// console.log(fruit == fruitbear); // return false không bằng nhau về giá trị
// console.log(fruit === fruitbear); // return false không bằng nhau về kiểu dữ liệu
// Two variables, a single object
// var fruit = {name: 'apple'};
// var fruitbear = fruit;  // Assign fruit object reference to fruitbear
// // Here fruit and fruitbear are pointing to same object
// console.log(fruit == fruitbear); // return true
// console.log(fruit === fruitbear); // return true
// fruit.name = 'grape';
// console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }
// console.log(fruit == fruitbear); // sau khi đổi tên rồi vẫn đúng 
// console.log(fruit === fruitbear); // sau khi đổi tên rồi vẫn đúng 
// console.log(fruitbear);
  
  
  




  

  