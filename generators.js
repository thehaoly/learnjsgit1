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
class Bag {
    constructor() {
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    add(element) {
        this.elements.push(element);
    }
    * [Symbol.iterator]() {
        for (let element of this.elements) {
            yield element;
        }
    }
}
let bag = new Bag();
bag.add(1);
bag.add(2);
bag.add(3);
for (let e of bag) {
    console.log(e);
}

