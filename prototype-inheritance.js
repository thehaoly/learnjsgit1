//@@@ Chúng ta sẽ tìm hiểu về chuổi nguyên mẫu và kế thừa trong javascript
// Gần như tất cả các đối tượng trong JavaScript đều là các thể hiện của Đối tượng nằm trên cùng của chuỗi nguyên mẫu.
// So sánh và nhận biết sự khác nhau giữa nguyên mẫu hàm và nguyên mẫu đối tượng 
// trong thực tế thì hai loại này điều có nguyên mẫu, chúng sẽ làm cho ta dể nhằm lẩn giửa nguyên mẫu của hai đối tượng này.
// chính vì thế chúng ta tạm goi nguyên mẫu của hàm là prototype và nguyên mẫu của đối tượng là _proto_
// cho ví dụ sau và phân tích
// //Example A
// var catA = {name: "Fluffy", color: "White", age: 0};

// //Example B
// var catB = Object.create(new Object());
// catB.name = "Fluffy";
// catB.color = "White";
// catB.age = 0;

// //Example C
// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }
// Cat.prototype.age = 0;
// var catC = new Cat("Fluffy", "White");

// trong ví dụ trên ví dụ A và B tạo ra kết quả như nhau riêng ví dụ C thì không
// Tại sao trong ví dụ hàm khởi tạo ( cat ) lại được xem như tương đương với lớp ( Class ) trong các ngôn ngữ lập trình khác
// Thật tế thì hàm khởi tạo không khác gì hàm khác, đó chính là danh pháp ( phương pháp ứng định tên gọi ) đại diện bởi this
// Trong ví dụ C ta thấy cat.prototype.age không thực sự là 1 phần của hàm cat 
// Hàm Cat đang được tạo và sau đó thuộc tính age đang được tạo (với giá trị 0) trên nguyên mẫu của hàm Cat.
// Nguyên mẫu của 1 hàm, Nó thực sự là một thể hiện của một đối tượng và mọi hàm trong JavaScript đều có một hàm cho dù bạn có sử dụng nó hay không
// Mọi hàm (hàm khởi tạo hay không) đều có một đối tượng nguyên mẫu bị treo trên đó

// Các đối tượng không có thuộc tính nguyên mẫu, nhưng chúng có nguyên mẫu
// Vì vậy, các hàm có các nguyên mẫu và các đối tượng có các protos. Trên thực tế, chúng rất giống nhau, nguyên mẫu của một hàm và proto của một đối tượng thường (trên thực tế, thường là) trỏ đến cùng một đối tượng trong bộ nhớ.
// Proto của một đối tượng là đối tượng mà nó đang kế thừa các thuộc tính
// Lưu ý là đối tượng mà từ đó nó đang kế thừa các thuộc tính, không phải là hàm hay lớp, nó thực sự là một thể hiện đối tượng trong bộ nhớ.
// Trên thực tế, chúng rất giống nhau, nguyên mẫu của một hàm và proto của một đối tượng thường (trên thực tế, thường là) trỏ đến cùng một đối tượng trong bộ nhớ.
// Proto của một đối tượng là đối tượng mà nó đang kế thừa các thuộc tính
// Điều này khác với nguyên mẫu của một hàm được sử dụng làm đối tượng được chỉ định làm proto cho các đối tượng mới 'được tạo bằng cách sử dụng hàm này như một hàm khởi tạo

// console.log(catA.__proto__);// kết quả trả về {} do bản thân catA được khai báo dạng đối tượng
// console.log(catC.__proto__);// kết quả trả về Cat{ age: 0 } vì catC là hàm khởi tạo và được gán giá trị age vào, nên nguyên mẫu có thêm thuộc tính age  

// phương thức kiểm tra cho hàm khởi tạo catC
// nguyên mẫu của một đối tượng không phải là hàm tạo ra nó mà là một thể hiện của một đối tượng. Vì điều này quan trọng, hãy cùng khám phá thêm một chút
//console.log(catC.__proto__); // trả về cat {age: 0} là nguyên mẫu của hàm
//console.log(catC.__proto__.__proto__); // trả về Oject { } là nguyên mẫu của đối tượng
//console.log(catC.__proto__.__proto__.__proto__); // trả về null cuối cùng là null

// Điều quan trọng cần nhớ khi nghĩ về nguyên mẫu - nguyên mẫu của một đối tượng không phải là hàm tạo ra nó mà là một thể hiện của một đối tượng
// ta có quá trình kiểm tra như sau :
//console.log(Cat.prototype);// trả về Cat { age: 0 }
//console.log(catC);// trả về Cat { name:'Fluffy', color:'White' , age: 0 } trong vsc không in ra như vậy !!
// Điều này cho thấy Cat là một hàm nhưng Cat.prototype và catC là các đối tượng.

//@@@ Thuộc tính kế thừa so với thuộc tính gốc
// Qua kết quả in ra cho ta thấy catC có 3 thuộc tính, tên, màu, tuổi, nhưng Tuổi thực sự không phải là tài sản trực tiếp của catC. Bạn có thể thấy điều này bằng cách thực hiện các câu lệnh này
// console.log(catC.hasOwnProperty("name"));
// console.log(catC.hasOwnProperty("color"));
// console.log(catC.hasOwnProperty("age"));
// đã nói age không phải là thuộc tính của catC tại sao khi in lại xuất hiện, vì nó sẽ thực hiện các bước sau khi được gọi như sau :
// nó sẽ kiểm tra xem catC có thuộc tính tên là age hay không và nếu có thì nó sẽ trả về nó, nếu không, nó sẽ hỏi nguyên mẫu của catC xem nó có thuộc tính age hay không.

// @@@ Chuổi nguyên mẫu là gì ?
// Chuỗi nguyên mẫu về cơ bản là một danh sách các đối tượng được liên kết trỏ ngược lại đối tượng mà mỗi đối tượng kế thừa từ đó.
// Thay đổi nguyên mẫu của một chức năng
// Hãy nhớ rằng nguyên mẫu của một hàm chỉ là một đối tượng,
// vậy điều gì sẽ xảy ra nếu chúng ta bắt đầu thay đổi các thuộc tính của nguyên mẫu của một hàm sau khi chúng ta tạo các đối tượng từ nó? Hãy xem xét các ví dụ sau:
// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   Cat.prototype.age = 3;
//   var fluffy = new Cat("Fluffy", "White");
//   var scratchy = new Cat("Scratchy", "Black");
//   console.log(fluffy.age); // trả về giá trị 3
//   console.log(scratchy.age); // trả về giá trị 3
//   Cat.prototype.age = 4;
//   console.log(fluffy.age); // trả về giá trị 4
//   console.log(scratchy.age); // trả về giá trị 4

// lưu ý rằng ta không chỉ thay đổi giá trị của thuộc tính prototype.age thành 4,
// Tôi thực sự đã thay đổi nguyên mẫu của hàm Cat để trỏ đến một đối tượng mới
//   function Cat(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   Cat.prototype.age = 3;
//   var fluffy = new Cat("Fluffy", "White");
//   var scratchy = new Cat("Scratchy", "Black");
//   console.log(fluffy.age); // trả về giá trị 3
//   console.log(scratchy.age); // trả về giá trị 3
//   Cat.prototype = {age: 4};
//   console.log(fluffy.age); // trả về giá trị 3
//   console.log(scratchy.age); // trả về giá trị 3
//   var muffin = new Cat("Muffin", "Brown");
//   console.log(muffin.age); // trả về giá trị 4
// Điều này minh họa quan điểm rằng thuộc tính nguyên mẫu của một hàm "là cá thể đối tượng sẽ trở thành nguyên mẫu (hoặc __proto__) cho các đối tượng được tạo bằng cách sử dụng hàm này như một phương thức khởi tạo."
// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   Cat.prototype.age = 3;
//   var fluffy = new Cat("Fluffy", "White");
//   var scratchy = new Cat("Scratchy", "Black");

//   //Compare this example:
//   fluffy.age = 4; // chỉ thay đổi giá trị thuộc tính tuổi của đối tượng fluffy
//   console.log(fluffy.age); // trả kết quả 4
//   console.log(scratchy.age); // trả kết quả 3

//   //To this example:
//   fluffy.__proto__.age = 4; // thay đổi giá trị thuộc tính tuổi của nguyên mẫu mà 2 đối tượng fluffy và scratchy thừa kế 
//   console.log(fluffy.age); // trả kết quả 4
//   console.log(scratchy.age); // trả kết quả 4

//@@@ kế thừa nhiều cấp độ
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.age=1;
  function Cat(name, color) {
    Animal.call(this, name);
    this.color = color;
  }
  Cat.prototype = new Animal(null);
  var catC = new Cat("Fluffy", "White");
  console.log(catC.name);
  console.log(catC.color);
  console.log(catC.age);
  console.log(catC.hasOwnProperty("name"));
  console.log(catC.hasOwnProperty("color"));
  console.log(catC.hasOwnProperty("age"));
  // Lưu ý rằng tuổi là tài sản duy nhất không phải là tài sản trực tiếp của catC
  
  //@@@ kế thừ hàm
  // Trong tất cả các ví dụ ở trên, tôi đã sử dụng các thuộc tính như tên, màu và tuổi để minh họa các đối tượng và kế thừa. 
  // Tuy nhiên, mọi thứ mà tôi đã làm ở trên với các thuộc tính đều có thể được thực hiện với các hàm. 
  // Nếu chúng ta tạo một hàm speak () trên Hàm Cat như sau: Cat.prototype.speak = function () {alert ('meo'); } ;, 
  // hàm đó sẽ được kế thừa bởi tất cả các đối tượng có Cat làm nguyên mẫu của chúng, giống như với các thuộc tính tên, màu và tuổi.