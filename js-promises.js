//@@@ Chúng ta tìm hiểu về promises trong javascript,chúng là gì và ta sử dụng chúng ntn
/* 
Hiểu về promises trong javascript
    Promises : sự hứa hẹn, lừa hứa
    Trong javascript promises là một đối tượng trả về giá trị mà bạn hy vọng sẽ nhận được trong tương lai, nhưng không phải bây giờ
    Vì Promises là lời hứa trong tương lai nên nó phù hợp ứng dụng trong việc xử lý các hoạt động không đồng bộ
    Một Promises có 3 trạng thái :
    1- Pending ( Chưa giải quyết, chờ đợi ): Bạn không biết những gì mình hứa sẽ diễn ra trong tương lai hay không 
    2- Fulfilled ( Hoàn thành ): Bạn đã hoàn thành theo lời hứa trước đó 
    3- Rejected ( Đã từ chối, không thực hiện ): bạn hoàn toàn không thực hiện công việc đã hứa
 */

//*** Cách tạo ra Promises, hay khởi tạo promises ( the promises constructor )
// Để tạo một promises trong JavaScript, bạn sử dụng hàm tạo Promise:
// let completed = true;
// let learnJS = new Promise(function (resolve, reject) {
//     if (completed) {
//         resolve("I have completed learning JS.");
//     } else {
//         reject("I haven't completed learning JS yet.");
//     }
// });
/*
Diễn giải đoạn mã :
Trong hàm khởi tạo Promises nó chấp nhận một hàm như là một đối số và hàm này sẽ được gọi bởi người thực hiện - executor
Người thực hiện - executor - chấp nhận 2 hàm theo tên qui ước là resolve() và rejejct(), kkhi bạn gọi lệnh new Promises(executor), hảm executor được tự đông gọi 
Bên trong hàm thực hiện executor, Bạn gọi hàm resolve() theo cách thủ công, nếu hàm thực hiện executor thực hiện hoàn thành thành công và gọi hàm reject() trong trường hợp xảy ra lỗi 
Nếu bạn nhúng đoạn mã trên vào trong một tài liệu HTML thì nó sẽ thực hiện hoàn thành vì đoạn mã có đặt biến compleled là true 
*/
// Để xem trạng thái đang chờ xử lý của lời hứa, chúng tôi bọc mã của trình thực thi trong hàm setTimeout ():
// let completed = true;
// let learnJS = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (completed) {
//             resolve("I have completed learning JS.");
//         } else {
//             reject("I haven't completed learning JS yet.");
//         }
//     }, 3 * 1000);
// });
/*
Khi Promises đạt đến trạng thái được thực hiện resolved() hoặc trạng thái bị từ chối rejected(), Promises sẽ ở trạng thái đó và không thể chuyển đổi.
Nói cách khác, một Promises không thể đi từ trạng thái đã hoàn thành resolved() sang trạng thái bị bác bỏ rejected() và ngược lại, Nó cũng không thể quay trở lại từ trạng thái đã hoàn thành resolved() hoặc trạng thái bị từ chối rejected() về trạng thái đang chờ xử lý pending ( tình trạng mới khởi tạo )
Nếu Promises đạt đến trạng thái hoàn thành hoặc trạng thái bị từ chối, thì lời hứa đã được giải quyết.
Khi một đối tượng Promise mới được tạo, nó sẽ ở trạng thái chờ xử lý cho đến khi nó được giải quyết
Để lên lịch gọi lại khi Promises được giải quyết hoặc bị từ chối, bạn gọi các phương thức của đối tượng Promise
then() ; catch() ; finally()
*/

//*** Thực hiện một Promises bằng phương thức của nó như then, catch, finally
// Phương thức then () được sử dụng để lên lịch thực thi một cuộc gọi lại khi promises được giải quyết thành công
// Phương thức then () nhận hai hàm gọi lại:
//promiseObject.then(onFulfilled, onRejected);
// Lệnh gọi lại onFulfilled được gọi nếu Promises được thực hiện. Gọi lại onRejected được gọi khi Promises bị từ chối.
// Hàm sau trả về một đối tượng Promise:
// function makePromise(completed) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (completed) {
//                 resolve("I have completed learning JS.");
//             } else {
//                 reject("I haven't completed learning JS yet.");
//             }
//         }, 3 * 1000);
//     });
// }
// Và phần sau gọi hàm makePromise () và gọi phương thức then ():
// let learnJS = makePromise(true);
// learnJS.then(
//     success => console.log(success),
//     reason => console.log(reason)
// );
// Có thể lên lịch gọi lại để xử lý trường hợp đã hoàn thành hoặc bị từ chối. Sau đây chạy trường hợp hoàn thành:
// learnJS.then(
//     value => console.log(value)
// );
// Và sau đây lên lịch gọi lại để xử lý trường hợp bị từ chối:
// let masterJS = makePromise(false);
// masterJS.then(
//     undefined,
//     reason => console.log(reason)
// );
// Lưu ý rằng bạn phải truyền undefined cho phương thức then () làm đối số đầu tiên.

//*** Phương thức catch() : 
// Nếu bạn muốn lên lịch thực hiện một cuộc gọi lại khi Promises bị từ chối, bạn có thể sử dụng phương thức catch () của đối tượng Promise:
// learnJS.catch(
//     reason => console.log(reason)
// );
// Bên trong, phương thức catch () gọi phương thức then (undefined, onRejected).

//*** Phương thức finally() :
// Đôi khi, bạn muốn thực thi cùng một đoạn mã cho dù lời hứa được thực hiện hay bị từ chối.
// function createApp() {
//     // ...
// }
// learnJS
//     .then(
//         (success) => {
//             console.log(success);
//             createApp();
//         }
//     ).catch(
//         (reason) => {
//             console.log(reason);
//             createApp();
//         }
//     );
// Như bạn có thể thấy, lệnh gọi hàm createApp () được sao chép trong cả hai phương thức then () và catch ().
// Để xóa bản sao này và thực thi createApp () cho dù lời hứa được thực hiện hay bị từ chối, bạn sử dụng phương thức finally(), như sau:
// learnJS
//     .then(success => console.log(success))
//     .catch(reason => console.log(reason))
//     .finally(() => createApp());

//*** Ví dụ thực tế về JavaScript Promise
// cái này nên tìm cách chạy sau này
/*
Chúng tôi sẽ hướng dẫn bạn cách tải tệp JSON từ máy chủ và hiển thị thông báo trên trang web.
Giả sử rằng chúng ta có tệp JSON sau: https://www.javascripttutorial.net/sample/promise/api.json

Đây là nội dung của tệp api.json:
{
    "message": "JavaScript Promise Demo"
}

Phần sau hiển thị trang HTML có chứa một nút. Khi bạn nhấp vào nút, trang sẽ tải dữ liệu từ tệp JSON và hiển thị thông báo:
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JavaScript Promise Demo</title>
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <div id="container">
        <div id="message"></div>
        <button id="btnGet">Get Message</button>
    </div>
    <script src="js/promise-demo.js">
    </script>
</body>
</html>

Để tải tệp JSON, chúng tôi sẽ sử dụng đối tượng XMLHttpRequest. Sau đó, bạn sẽ học cách sử dụng phương thức fetch ().
Hàm sau đây trả về một đối tượng Promise tải dữ liệu từ một tệp từ xa:
function load(url) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();

        request.onreadystatechange = function (e) {
            if (this.readyState === 4) {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    reject(this.status);
                }
            }
        }
        request.open('GET', url, true);
        request.send();
    });
}

Bên trong trình thực thi, chúng tôi gọi hàm giải quyết resolve() và chuyển vào phản hồi nếu mã trạng thái HTTP là 200, nếu không, chúng tôi gọi hàm từ chối reject() và chuyển vào mã trạng thái HTTP.
Đăng ký trình nghe sự kiện nhấp vào nút và gọi phương thức then () trên Lời hứa
Nếu quá trình tải thành công, thì chúng tôi sẽ hiển thị thông báo trả về từ máy chủ.
Nếu không, chúng tôi hiển thị thông báo lỗi với mã trạng thái HTTP.
const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');
btn.onclick = function () {
    load('https://www.javascripttutorial.net/sample/promise/api.json')
        .then(
            response => {
                const result = JSON.parse(response);
                msg.innerHTML = result.message;
            },
            error => msg.innerHTML = `Error getting the message, HTTP status: ${error}`
        );
}
*/

/*
Tổng kết:
- Một Promises là một đối tượng trả về giá trị trong tương lai
- Một Promises bắt đầu ở trạng thái đang chờ xử lý pending và kết thúc ở trạng thái đã hoàn thành fulfilled hoặc trạng thái bị từ chối rejected
- Sử dụng phương thức then () để lên lịch thực thi một cuộc gọi lại khi Promises được thực hiện hoàn thành
- Và sử dụng phương thức catch () để lên lịch gọi lại được gọi khi lời hứa bị từ chối rejected.
- Đặt mã mà bạn muốn thực thi trong phương thức cuối cùng finally() cho dù lời hứa được thực hiện hay bị từ chối.
*/

//@@@ Chuổi Promises trong javascript
// trong hướng dẫn này, bạn sẽ tìm hiểu về mô hình chuỗi Promises của JavaScript mà ở đó chuỗi Promises thực thi các hoạt động không đồng bộ theo trình tự.

//*** Giới thiệu về chuỗi promises tron g javascript
/* 
Phương thức thể hiện của đối tượng Promise như then (), catch () hoặc last () trả về một đối tượng promises riêng biệt
Do đó, bạn có thể gọi phương thức phiên bản của Promise trên Promise trả về
Các phương thức gọi liên tiếp theo cách này được gọi là chuỗi lời hứa ( promises chaining ).
Hãy xem xét ví dụ sau:
*/
// Đầu tiên, hãy tạo một promises mới sẽ chuyển thành giá trị 10 sau 3 giây:
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });
// Lưu ý rằng chúng tôi sử dụng phương thức setTimeout () để mô phỏng một hoạt động không đồng bộ.
// Sau đó, gọi phương thức then () trên promises:
// p.then((result) => {
//     console.log(result);
//     return result * 2;
// });
/*
Lệnh gọi lại callback ( hay hàm gọi lại ) được truyền cho phương thức then () thực thi sau khi Promises được giải quyết ( thực thi resolved )
Trong lệnh gọi lại callback, chúng tôi đã hiển thị kết quả của lời hứa và trả về một giá trị mới: result * 2
Vì phương thức then () trả về một Promise mới có giá trị được phân giải ( resolved )thành giá trị trả về, nên bạn có thể gọi phương thức then () trên phương thức trả về Promise, như sau:
*/
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });
// p.then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 3;
// }).then((result) => {
//     console.log(result);
// });
// Trong ví dụ này, giá trị trả về trong phương thức then () đầu tiên được chuyển cho phương thức then () thứ hai, rồi đến phương thức then () thứ ba. Bạn có thể tiếp tục gọi phương thức then () liên tiếp như thế cho đến hết

//*** Nhiều người xử lý cho một lời hứa (  Promises )
//Khi bạn gọi phương thức then () nhiều lần trên một lời hứa, nó không phải là chuỗi hứa hẹn ( promises chaining ). Ví dụ:
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});
p.then((result) => {
    console.log(result); // 10
    return result * 2;
})
p.then((result) => {
    console.log(result); // 10
    return result * 3;
})
p.then((result) => {
    console.log(result); // 10
    return result * 4;
});
/*
Trong ví dụ này, bạn có nhiều trình xử lý cho một lời hứa. Những người xử lý này không có mối quan hệ
Chúng thực thi độc lập và cũng không chuyển kết quả từ kết quả này sang kết quả khác như chuỗi lời hứa ở trên.
Trong thực tế, bạn sẽ hiếm khi sử dụng nhiều trình xử lý cho một lời hứa.
*/
