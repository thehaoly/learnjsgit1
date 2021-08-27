//@@@ Trình tạo javascript ( javascript generators )
// Trong javascript một hàm thông thường khi nó chạy thì sẽ chạy đến cuối, không ngừng giữa chừng hay chạy tiếp và không ngừng trong bất cứ điều kiện nào
// function foo() {
//     console.log('I');
//     console.log('cannot');
//     console.log('pause');
// }
// foo();
// ES6 giới thiệu một loại hàm mới khác với một hàm thông thường: function generator or generator
// Trình tạo có thể tạm dừng giữa chừng và sau đó tiếp tục từ nơi nó đã tạm dừng
// function* generate() {
//     console.log('invoked 1st time');
//     yield 1;
//     console.log('invoked 2nd time');
//     yield 2;
// }
// chúng ta hãy nghiên cứu chi tiết hàm generate(): 
// Đầu tiên, bạn nhìn thấy dấu sao (*) sau từ khóa hàm, biểu thị rằng generate() là một trình tạo, không phải là một hàm bình thường
// Thứ hai, câu lệnh yield trả về một giá trị và tạm dừng việc thực thi hàm
// Chúng ta thực thi câu lệnh :
// let gen = generate();
// console.log(gen);
// một trình tạo trả về một đối tượng Generator mà không thực thi phần thân của nó khi nó được gọi
// Đối tượng Generator trả về một đối tượng khác có hai thuộc tính: done và value. Nói cách khác, một đối tượng Generator có thể lặp lại.
// Sau đây gọi phương thức next () trên đối tượng Generator:
// let result = gen.next();
// console.log(result); // kết quả trả về 'invoked 1st time' và 1 ;
// Chúng ta thấy thân hàm có 2 dòng lênh, nhưng mới có  1 dòng kết quả được xuất
// Điều này có ý nghĩa rằng hàm có thể ngưng trong khi chạy
// vậy muốn thực hiện tiếp hàm này thì sao, ta hãy thực hiện dòng lệnh sau :
// result = gen.next();
// console.log(result); // kết quả trả về 'invoked 2nd time' và 2
// đã hết 2 dòng lệnh trong hàm vậy nếu thực hiện tiếp hàm sẽ ra sao ?
// result = gen.next();
// console.log(result); // kết quả xuất ra { value: undefined, done: true }
// cũng giống như giao thức trình lặp khi giá trị done = true có nghĩa là kết thúc trình lặp đó
// vì tính chất của trình tạo cũng giống như trình lặp nên chúng ta cũng có thể áp dụng vòng lặp for...of
// for (const g of gen) {
//     console.log(g);
// }

//*** Thêm các ví dụ về trình tạo
// Ví dụ sau minh họa cách sử dụng trình tạo để tạo chuỗi không bao giờ kết thúc
// function* forever() {
//     let index = 0;
//     while (true) {
//         yield index++;
//     }
// }
// let f = forever();
// console.log(f.next()); // 0
// console.log(f.next()); // 1
// console.log(f.next()); // 2

//*** Sử dụng trình tạo để triển khai trình vòng lặp
// Khi bạn triển khai một trình lặp, bạn phải xác định thủ công phương thức next (). Trong phương thức next (), bạn cũng phải lưu trạng thái của phần tử hiện tại theo cách thủ công.
// Vì trình tạo có thể lặp lại, chúng có thể giúp bạn đơn giản hóa mã để triển khai trình lặp
// Chúng ta so sánh 2 trường hợp tạo lớp theo phương pháp giao thức trình lặp và theo phương pháp trình tạo

// Theo Phương pháp trình lặp
// class Sequence {
//     constructor( start = 0, end = Infinity, interval = 1 ) {
//         this.start = start;
//         this.end = end;
//         this.interval = interval;
//     }
//     [Symbol.iterator]() {
//         let counter = 0;
//         let nextIndex = this.start;
//         return  {
//             next: () => {
//                 if ( nextIndex < this.end ) {
//                     let result = { value: nextIndex,  done: false }
//                     nextIndex += this.interval;
//                     counter++;
//                     return result;
//                 }
//                 return { value: counter, done: true };
//             }
//         }
//     }
// }

// Theo phương pháp trình tạo 
// class Sequence {
//     constructor( start = 0, end = Infinity, interval = 1 ) {
//         this.start = start;
//         this.end = end;
//         this.interval = interval;
//     }
//     * [Symbol.iterator]() {
//         for( let index = this.start; index <= this.end; index += this.interval ) {
//             yield index;
//         }
//     }
// }
// Như bạn thấy, phương thức Symbol.iterator đơn giản hơn nhiều bằng cách sử dụng trình tạo.
// Tập lệnh sau sử dụng trình lặp trình tự để tạo ra một chuỗi các số lẻ từ 1 đến 10:
// let oddNumbers = new Sequence(1, 10, 2);
// for (const num of oddNumbers) {
//     console.log(num);
// }

//*** Sử dụng trình tạo để triển khai cấu trúc dữ liệu Túi
// Túi là một cấu trúc dữ liệu có khả năng thu thập các phần tử và lặp lại qua các phần tử. Nó không hỗ trợ xóa các mục.
// class Bag {
//     constructor() {
//         this.elements = [];
//     }
//     isEmpty() {
//         return this.elements.length === 0;
//     }
//     add(element) {
//         this.elements.push(element);
//     }
//     * [Symbol.iterator]() {
//         for (let element of this.elements) {
//             yield element;
//         }
//     }
// }
// let bag = new Bag();
// bag.add(1);
// bag.add(2);
// bag.add(3);
// for (let e of bag) {
//     console.log(e);
// }

//@@@ Chúng ta nói về từ khóa yield và học cách làm sao sử dụng chúng trong trình khởi tạo ( Generator Function )
// *** Giới thiệu về Yield keyword
// Từ khóa yield cho phép bạn tạm dừng và tiếp tục một hàm của trình tạo ( generator function ) hay hàm* ( function* ).
// Cú pháp cho quá trình sử dụng 
// [variable_name] = yield [expression];
// giải thích cú pháp :
// Biểu thức chỉ định giá trị trả về từ một hàm trình tạo thông qua giao thức lặp. Nếu bạn bỏ qua biểu thức, yield sẽ trả về không xác định.
// Tên_biến lưu trữ giá trị tùy chọn được truyền cho phương thức next () của đối tượng trình vòng lặp.
//*** ví dụ : 
//-** Trả về giá trị khi ứng dụng vào hàm generator function
// function* foo() { 
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let f = foo();
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// chúng ta thấy hàm đã được sử dụng 3 từ khóa yield và khi chúng ta gọi 3 lần, thì kết quả trả về cũng 3 lần với cập khóa gồm giá trị và hiện trạng
// trong cặp khóa trả về có 1 đối số là value tất là giá trị, và một đối số done mang giá trị boolean là false, khi giải trị done = false thì có nghĩa là vòng lặp vẫn còn và ngược lại khi done = true thì không còn gí trị mặc dù ta có thể tiếp tục gọi hàm

//-** Trả về giá trị undefinded
// function* bar() {
//     yield;
// }
// let b = bar();
// console.log(b.next()); 

//-** Truyền một giá trị cho phương thức next ()
// Trong ví dụ sau, từ khóa lợi nhuận là một biểu thức đánh giá đối số được truyền đến phương thức next ():
// function* generate() {
//     let result = yield;
//     console.log(`result is ${result}`);
// }
// let g = generate();
// console.log(g.next()); 
// console.log(g.next(1000)); 
// Ta thấy câu lệnh đầu tiên trả về đối tượng { value: undefined, done: false }
// Câu lệnh thứ hai nhận đối số là 1000 và thực hiện câu lệnh, sau khi thực hiện câu lệnh thì trả về đối tượng { value: undefined, done: true }
// khi đối tượng trả về có cặp khóa giá trị done = true ; thì có nghĩa là vòng lập đã hết và không còn giá trị trả về

//-** Sử dụng từ khóa yield trong một mảng
// Ví dụ sau sử dụng từ khóa yield làm các phần tử của một mảng:
// function* baz() {
//     let arr = [yield, yield];
//     console.log(arr);
// }
// var z = baz();
// console.log(z.next());  
// console.log(z.next(1)); 
// console.log(z.next(2));
// Lệnh gọi đầu tiên z.next () đặt phần tử đầu tiên của mảng arr thành 1 và trả về đối tượng { value: undefined, done: false }
// Lệnh gọi thứ hai z.next () đặt thứ hai của mảng arr thành 2 và trả về đối tượng { value: undefined, done: false }
// Lệnh gọi thứ ba z.next () hiển thị nội dung của mảng arr và trả về đối tượng [ 1, 2 ] { value: undefined, done: true }

//-** Sử dụng yield để trả về một mảng
// function* yieldArray() {
//     yield 1;
//     yield [ 20, 30, 40 ];
// }
// let y = yieldArray();
// console.log(y.next()); 
// console.log(y.next()); 
// console.log(y.next());

// //-** Sử dụng lợi nhuận để trả về các phần tử riêng lẻ của một mảng
// function* yieldArrayElements() {
//     yield 1;
//     yield* [ 20, 30, 40 ];
// }
// let a = yieldArrayElements();
// console.log(a.next()); // { value: 1, done: false }
// console.log(a.next()); // { value: 20, done: false }
// console.log(a.next()); // { value: 30, done: false }
// console.log(a.next()); // { value: 40, done: false }
// Trong ví dụ này,  yield* là cú pháp mới. Biểu thức yield* được sử dụng để ủy quyền cho một đối tượng hoặc trình tạo có thể lặp lại khác.
// Kết quả là, biểu thức sau trả về các phần tử riêng lẻ của mảng [20, 30, 40]
