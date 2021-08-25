// @@@ Chúng ta xem xét trình lặp trong javascript 
// chúng ta sẽ tìm hiểu về trình vòng lặp JavaScript và cách sử dụng trình vòng lặp để xử lý chuỗi dữ liệu hiệu quả hơn.
// Trước đây chúng ta thường dùng vòng lặp for để duyệt qua mảng và các thành phần trong đối tượng 
// Mã này rất đơn giản. Tuy nhiên, độ phức tạp của nó tăng lên khi bạn lồng một vòng lặp vào bên trong một vòng lặp khác. Ngoài ra, việc theo dõi nhiều biến bên trong vòng lặp rất dễ xảy ra lỗi.
// Trong ES6 cung cấp cho chúng ta một một phương thức lặp khác for..of để loại bỏ độ phức tạp của vòng lặp tiêu chuẩn và tránh các lỗi do theo dõi các chỉ mục của vòng lặp.
// let ranks = ['A', 'B', 'C'];
// for (let i = 0; i < ranks.length; i++) {
//     console.log(ranks[i]);
// }
// chúng ta dùng cấu trúc for...of cho vòng lặp này, kết quả không thay đổi
// for(let rank of ranks) {
//     console.log(rank);
// }
//*** Có hai giao thức lặp: giao thức có thể lặp lại và giao thức trình lặp.

//-** Giao thức trình lặp lại iterator protocol
// Một đối tượng là một trình lặp khi nó triển khai một giao diện (hoặc API) trả lời hai câu hỏi
// 1. Có phần tử nào còn lại không?
// 2. Nếu có, phần tử là gì?

// Về mặt kỹ thuật, một đối tượng đủ điều kiện là một trình lặp khi nó có phương thức next () trả về một đối tượng có hai thuộc tính
// 1. done: một giá trị boolean cho biết có hay không có bất kỳ phần tử nào nữa có thể được lặp lại
// 2. value: phần tử hiện tại.
// Mỗi lần bạn gọi next (), nó sẽ trả về giá trị tiếp theo trong bộ sưu tập
// { value: 'next value', done: false }
//Nếu bạn gọi phương thức next () sau khi giá trị cuối cùng đã được trả về, thì next () trả về đối tượng kết quả như sau:
//{done: true: value: undefined}
// Giá trị của thuộc tính done = true cho biết rằng không còn giá trị nào nữa để trả về và giá trị của thuộc tính được đặt thành không xác định.

//--* Những trình lặp lại trong javacript
// Vì ES6 cung cấp các trình vòng lặp tích hợp sẵn cho các loại tập hợp Array, Set và Map bạn không phải tạo trình vòng lặp cho các đối tượng này
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
//                 if ( nextIndex <= this.end ) {
//                     let result = { value: nextIndex,  done: false }
//                     nextIndex += this.interval;
//                     counter++;
//                     return result;
//                 }
//                 return { value: counter, done: true };
//             }
//         }
//     }
// };
// sau khi khai báo lớp theo dạng giao thức lặp, chúng ta thực hiện ví dụ sau :
//* Đoạn mã sau sử dụng trình lặp Trình tự trong vòng lặp for ... of
// let evenNumbers = new Sequence(2, 10, 2);
// for (const num of evenNumbers) {
//     console.log(num);
// }

//-** giao thức có thể lặp lại iterable protocol
// Một đối tượng có thể lặp lại khi nó chứa một phương thức được gọi là [Symbol.iterator] không nhận đối số và trả về một đối tượng tuân theo giao thức trình lặp.
//* Bạn có thể truy cập rõ ràng vào phương thức [Symbol.iterator] () như được hiển thị trong tập lệnh sau
// let evenNumbers = new Sequence(2, 10, 2);
// let iterator = evenNumbers[Symbol.iterator]();
// let result = iterator.next();
// while( !result.done ) {
//     console.log(result.value);
//     result = iterator.next();
// }

// *** dọn dẹp Cleaning Up
// Ngoài phương thức next (), [Symbol.iterator] () có thể tùy chọn trả về một phương thức được gọi là return ().
// Phương thức return () được gọi tự động khi quá trình lặp bị dừng sớm. Đó là nơi bạn có thể đặt mã để dọn dẹp tài nguyên.
// Ví dụ sau thực hiện phương thức return () cho đối tượng Sequence
class Sequence {
    constructor( start = 0, end = Infinity, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;
        return  {
            next: () => {
                if ( nextIndex <= this.end ) {
                    let result = { value: nextIndex,  done: false }
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            },
            return: () => {
                console.log('cleaning up...');
                return { value: undefined, done: true };
            }
        }
    }
}
let oddNumbers = new Sequence(1, 10, 2);
for (const num of oddNumbers) {
    if( num > 7 ) {
        break;
    }
    console.log(num);
}
