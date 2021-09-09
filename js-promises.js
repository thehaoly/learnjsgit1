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
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });
// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// })
// p.then((result) => {
//     console.log(result); // 10
//     return result * 3;
// })
// p.then((result) => {
//     console.log(result); // 10
//     return result * 4;
// });
/*
Trong ví dụ này, bạn có nhiều trình xử lý cho một lời hứa. Những người xử lý này không có mối quan hệ
Chúng thực thi độc lập và cũng không chuyển kết quả từ kết quả này sang kết quả khác như chuỗi lời hứa ở trên.
Trong thực tế, bạn sẽ hiếm khi sử dụng nhiều trình xử lý cho một lời hứa.
*/

//*** Trả về một promises
// Khi bạn trả về một giá trị trong phương thức then (), phương thức then () trả về một promises mới ngay lập tức phân giải ( resolves ) thành giá trị trả về.
// Ngoài ra, bạn có thể trả về một promises mới trong phương thức then (), như sau:
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 2);
//         }, 3 * 1000);
//     });
// }).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 3);
//         }, 3 * 1000);
//     });
// }).then(result => console.log(result));
// Ví dụ trên hiển thị 10, 20 và 60 sau mỗi 3 giây. Mẫu mã này cho phép bạn thực hiện một số tác vụ theo trình tự.
// Chúng ta cấu trúc lại ví dụ trên như sau :
// function generateNumber(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num);
//         }, 3 * 1000);
//     });
// }
// generateNumber(10)
//     .then(result => {
//         console.log(result);
//         return generateNumber(result * 2);
//     })
//     .then((result) => {
//         console.log(result);
//         return generateNumber(result * 3);
//     })
//     .then(result => console.log(result));

//*** Cú pháp chuỗi lời hứa ( Promise chaining syntax )
/*
Đôi khi, bạn có nhiều tác vụ không đồng bộ mà bạn muốn thực hiện theo trình tự
Ngoài ra, bạn cần chuyển kết quả của bước trước cho bước tiếp theo
Trong trường hợp này, bạn có thể sử dụng cú pháp sau:
step1()
    .then(result => step2(result))
    .then(result => step3(result))
    ...
 Nếu bạn cần chuyển kết quả từ tác vụ trước sang tác vụ tiếp theo mà không chuyển kết quả, bạn sử dụng cú pháp này:
step1()
    .then(step2)
    .then(step3)
    ...
    step1()
    .then(step2)
    .then(step3)
    ...
Giả sử rằng bạn muốn thực hiện các hoạt động không đồng bộ sau theo trình tự
1- Lấy người dùng từ cơ sở dữ liệu.
2- Nhận các dịch vụ của người dùng đã chọn
3- Tính toán chi phí dịch vụ từ các dịch vụ của người dùng
Các hàm sau minh họa ba hoạt động không đồng bộ:
*/
// function getUser(userId) {
//     return new Promise((resolve, reject) => {
//         console.log('Get the user from the database.');
//         setTimeout(() => {
//             resolve({
//                 userId: userId,
//                 username: 'admin'
//             });
//         }, 1000);
//     })
// }

// function getServices(user) {
//     return new Promise((resolve, reject) => {
//         console.log(`Get the services of ${user.username} from the API.`);
//         setTimeout(() => {
//             resolve(['Email', 'VPN', 'CDN']);
//         }, 3 * 1000);
//     });
// }

// function getServiceCost(services) {
//     return new Promise((resolve, reject) => {
//         console.log(`Calculate the service cost of ${services}.`);
//         setTimeout(() => {
//             resolve(services.length * 100);
//         }, 2 * 1000);
//     });
// }
// Phần sau sử dụng các hứa hẹn để tuần tự hóa các chuỗi
// getUser(100)
//     .then(getServices)
//     .then(getServiceCost)
//     .then(console.log);
// Lưu ý rằng ES2017 đã giới thiệu các từ khóa async / await giúp bạn viết mã rõ ràng hơn so với việc sử dụng kỹ thuật chuỗi hứa hẹn này ( promises chaning )
// Trong hướng dẫn này, bạn đã học về chuỗi hứa thực thi nhiều tác vụ không đồng bộ theo trình tự.

//@@@ Phương thức Promises.all() trong javascript
/* 
Trong hướng dẫn này, bạn sẽ học cách sử dụng phương thức tĩnh Promise.all () để tổng hợp kết quả từ nhiều hoạt động không đồng bộ
Phương thức static Promise.all () chấp nhận một danh sách các Promise và trả về một Promise mà
giải quyết ( resolves ) khi mọi Lời hứa ( Promises ) đầu vào đã được giải quyết ( resolves ) hoặc
bị từ chối ( rejected ) khi bất kỳ Lời hứa ( Promises ) đầu vào nào bị từ chối ( rejectes )
Sau đây là cú pháp của phương thức Promise.all ():
Promise.all(iterable);
Đối số có thể lặp là danh sách các hứa hẹn ( promises ) được truyền vào Promise.all () như một đối tượng có thể lặp lại.
Nếu tất cả các lời hứa đầu vào được giải quyết, phương thức tĩnh Promise.all () trả về một Lời hứa mới phân giải thành một mảng các giá trị đã phân giải từ các lời hứa đầu vào, theo thứ tự trình lặp.
Nếu một trong những lời hứa đầu vào bị từ chối, Promise.all () trả về một Lời hứa mới sẽ từ chối với lý do từ chối từ lời hứa bị từ chối đầu tiên
Những lần từ chối tiếp theo sẽ không ảnh hưởng đến lý do từ chối. Promise trở lại cũng xử lý những lời từ chối một cách âm thầm.
Promise.all () hữu ích khi bạn muốn tổng hợp các kết quả từ nhiều hoạt động không đồng bộ.
*/
// ví dụ minh họa cho nội dung trên, một số ví dụ để hiểu cách hoạt động của Promise.all ().
// *** Promises giải quyết ( resolves promises )
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');

//         resolve(10);
//     }, 1 * 1000);

// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20);
//     }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The third promise has resolved');
//         resolve(30);
//     }, 3 * 1000);
// });
// Để đợi cả ba lời hứa giải quyết, bạn sử dụng phương thức Promise.all ():
// Promise.all([p1, p2, p3])
//     .then(results => {
//         const total = results.reduce((p, c) => p + c);

//         console.log(`Results: ${results}`);
//         console.log(`Total: ${total}`);
//     });

//*** Promises  từ chối ( rejected promises )
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 1 * 1000);

// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has rejected');
//         reject('Failed');
//     }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The third promise has resolved');
//         resolve(30);
//     }, 3 * 1000);
// });

// Promise.all([p1, p2, p3])
//     .then(console.log) // never execute
//     .catch(console.log);
/*
Trong ví dụ trên, chúng ta có ba lời hứa: lời hứa đầu tiên được giải quyết sau 1 giây, lời hứa thứ hai bị từ chối sau 2 giây và lời hứa thứ ba được giải quyết sau 3 giây.
Kết quả là, lời hứa trở lại bị từ chối vì lời hứa thứ hai bị từ chối. Phương thức catch () được thực thi để hiển thị lý do cho lời hứa bị từ chối.
Trong hướng dẫn này, bạn đã học cách sử dụng phương thức JavaScript Promise.all () để tổng hợp kết quả từ nhiều hoạt động không đồng bộ.
*/

//@@@ Phương thức Promises.race()
/* 
trong hướng dẫn này, bạn sẽ học cách sử dụng phương thức JavaScript Promise.race () static.
Phương thức tĩnh Promise.race () chấp nhận một danh sách các promises và trả về một promises thực hiện hoặc từ chối ngay khi có một promises thực hiện hoặc từ chối, với giá trị hoặc lý do từ promises đó.
Đây là cú pháp của phương thức Promise.race ():
Promise.race(iterable)
Trong cú pháp này, đối tượng có thể lặp lại là một đối tượng có thể lặp lại chứa danh sách các hứa hẹn
Tên của Promise.race () ngụ ý rằng tất cả các lời hứa chạy đua với nhau với một người chiến thắng duy nhất, được giải quyết hoặc bị từ chối.
*/
/* 
Sự khác nhau giữa Promise.race() và Promise.all()
Một số ví dụ về việc sử dụng phương thức tĩnh Promise.race ().
*/
// Điều sau tạo ra hai lời hứa: một giải quyết trong 1 giây và một giải quyết trong 2 giây.
// Bởi vì lời hứa đầu tiên giải quyết nhanh hơn lời hứa thứ hai, lời hứa trả về sẽ phân giải với giá trị từ lời hứa đầu tiên:
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 1 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20);
//     }, 2 * 1000);
// });
// Promise.race([p1, p2])
//     .then(value => console.log(`Resolved: ${value}`))
//     .catch(reason => console.log(`Rejected: ${reason}`));

// Ví dụ sau đây tạo ra hai lời hứa. Cái đầu tiên giải quyết trong 1 giây trong khi cái thứ hai từ chối trong 2 giây.
// Bởi vì lời hứa đầu tiên nhanh hơn lời hứa thứ hai, lời hứa trả về phân giải thành giá trị từ lời hứa đầu tiên
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 1 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has rejected');
//         reject(20);
//     }, 2 * 1000);
// });

// Promise.race([p1, p2])
//     .then(value => console.log(`Resolved: ${value}`))
//     .catch(reason => console.log(`Rejected: ${reason}`));

// Lưu ý rằng nếu lời hứa thứ hai nhanh hơn lời hứa đầu tiên, thì lời hứa quay lại sẽ bị từ chối với lý do của lời hứa thứ hai
// Trong ví dụ này cho chúng ta thấy phương thức promises.race() ưu tiên cho phương thức nào có thời gian thực hiện ngắn trước và dài sau
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 2 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has rejected');
//         reject(20);
//     }, 1 * 1000);
// });

// Promise.race([p1, p2])
//     .then(value => console.log(`Resolved: ${value}`))
//     .catch(reason => console.log(`Rejected: ${reason}`));

//*** Ứng dụng thực tế phương thức promises.race()
/*
Giả sử rằng bạn phải hiển thị chỉ báo tải nếu quá trình tải dữ liệu từ máy chủ diễn ra lâu hơn một số giây.
Để đạt được điều này, bạn có thể sử dụng phương thức tĩnh Promise.race (). Nếu thời gian chờ xảy ra, bạn sẽ hiển thị chỉ báo tải, nếu không, bạn sẽ hiển thị thông báo.
Sau đây minh họa mã HTML:
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JavaScript Promise.race() Demo</title>
    <link href="css/promise-race.css" rel="stylesheet">
</head>

<body>
    <div id="container">
        <button id="btnGet">Get Message</button>
        <div id="message"></div>
        <div id="loader"></div>
    </div>
    <script src="js/promise-race.js"></script>
</body>
</html>
Để tạo chỉ báo tải, chúng tôi sử dụng tính năng hoạt ảnh CSS
Xem promises-race.css để biết thêm thông tin
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
body {
    font-family: 'Open Sans', sans-serif;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
}
#container {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    margin: 10px auto;
    padding: 16px;
    width: 300px;
    text-align: center;
}
#message {
    margin-bottom: 10px;
    padding: 10px 5px 10px;
    text-align: left;
}
button {
    box-sizing: border-box;
    width: 100%;
    padding: 3%;
    background: #007bff;
    border-bottom: 2px solid #007bff;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    color: #fff;
}
button:hover {
    background: #0069d9;
    cursor: pointer;
}
.loader {
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #F9DC5C;
    width: 25px;
    height: 25px;
    margin: 0 auto;
    text-align: center;
    -webkit-animation: spin 2s linear infinite;
    // Safari 
    animation: spin 2s linear infinite;
}
//Safari 
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
Về mặt kỹ thuật, nếu một phần tử có lớp .loader, nó sẽ hiển thị chỉ báo tải.
*/

/*
Đầu tiên, xác định một chức năng mới tải dữ liệu. Nó sử dụng setTimeout () để mô phỏng một hoạt động không đồng bộ:
const DATA_LOAD_TIME = 5000;

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = 'Promise.race() Demo';
            resolve(message);
        }, DATA_LOAD_TIME);
    });
}

Thứ hai, phát triển một chức năng hiển thị một số nội dung:
function showContent(message) {
    document.querySelector('#message').textContent = message;
}
Chức năng này cũng có thể được sử dụng để đặt tin nhắn thành trống.

Thứ ba, định nghĩa hàm timeout () trả về một lời hứa sẽ từ chối khi TIMEOUT được truyền.
const TIMEOUT = 500;

function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(), TIMEOUT);
    });
}

Thứ tư, phát triển một số chức năng hiển thị và ẩn chỉ báo tải:
function showLoadingIndicator() {
    document.querySelector('#loader').className = 'loader';
}

function hideLoadingIndicator() {
    document.querySelector('#loader').className = '';
}

Thứ năm, đính kèm trình nghe sự kiện nhấp chuột vào nút Nhận tin nhắn. Bên trong trình xử lý nhấp chuột, sử dụng phương thức tĩnh Promise.race ():
// handle button click event
const btn = document.querySelector('#btnGet');

btn.addEventListener('click', () => {
    // reset UI if users click the 2nd, 3rd, ... time
    reset();
    
    // show content or loading indicator
    Promise.race([getData()
            .then(showContent)
            .then(hideLoadingIndicator), timeout()
        ])
        .catch(showLoadingIndicator);
});

Chúng tôi chuyển hai lời hứa cho phương thức Promise.race ():
Promise.race([getData()
            .then(showContent)
            .then(hideLoadingIndicator), timeout()
        ])
        .catch(showLoadingIndicator);

Lời hứa đầu tiên lấy dữ liệu từ máy chủ, hiển thị nội dung và ẩn chỉ báo tải. Lời hứa thứ hai thiết lập thời gian chờ.
Nếu lời hứa đầu tiên mất hơn 500 ms để giải quyết, hàm catch () được gọi để hiển thị chỉ báo tải. Khi lời hứa đầu tiên được giải quyết, nó sẽ ẩn chỉ báo tải.
Cuối cùng, phát triển một hàm reset () để ẩn thông báo và chỉ báo tải nếu nút được nhấp từ lần thứ hai.
// reset UI
function reset() {
    hideLoadingIndicator();
    showContent('');
}

Đặt nó tất cả cùng nhau.
// after 0.5 seconds, if the getData() has not resolved, then show 
// the Loading indicator
const TIMEOUT = 500;
const DATA_LOAD_TIME = 5000;

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = 'Promise.race() Demo';
            resolve(message);
        }, DATA_LOAD_TIME);
    });
}

function showContent(message) {
    document.querySelector('#message').textContent = message;
}

function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(), TIMEOUT);
    });
}

function showLoadingIndicator() {
    document.querySelector('#loader').className = 'loader';
}

function hideLoadingIndicator() {
    document.querySelector('#loader').className = '';
}


// handle button click event
const btn = document.querySelector('#btnGet');

btn.addEventListener('click', () => {
    // reset UI if users click the second time
    reset();

    // show content or loading indicator
    Promise.race([getData()
            .then(showContent)
            .then(hideLoadingIndicator), timeout()
        ])
        .catch(showLoadingIndicator);
});

// reset UI
function reset() {
    hideLoadingIndicator();
    showContent('');
}
Trong hướng dẫn này, bạn đã học cách sử dụng phương thức JavaScript Promise.race () static.
*/

//@@@ xử lý lỗi trong Promises
// trong hướng dẫn này, bạn sẽ học cách đối phó với việc xử lý lỗi trong các Promises.
// Giả sử rằng bạn có một hàm được gọi là getUserById () trả về một Promise:
// function getUserById(id) {
//     return new Promise((resolve, reject) => {
//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

//*** Lỗi bình thường
// Đầu tiên, hãy thay đổi hàm getUserById () để tạo ra một lỗi bên ngoài Promises :
// function getUserById(id) {
//     if (typeof id !== 'number' || id <= 0) {
//         throw new Error('Invalid id argument');
//     }

//     return new Promise((resolve, reject) => {
//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }
// Thứ hai, xử lý lời hứa bằng cách sử dụng cả hai phương thức then () và catch ():
// getUserById('a')
//     .then(user => console.log(user.username))
//     .catch(err => console.log(err));
// Khi bạn nêu ra một ngoại lệ ngoài promises, bạn phải nắm bắt nó bằng try / catch.
// try {
//     getUserById('a')
//         .then(user => console.log(user.username))
//         .catch(err => console.log(`Caught by .catch ${error}`));
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }

//*** Lỗi bên trong một Promises
// Chúng tôi thay đổi hàm getUserById () để tạo ra một lỗi bên trong promises:
// let authorized = false;

// function getUserById(id) {
//     return new Promise((resolve, reject) => {
//         if (!authorized) {
//             throw new Error('Unauthorized access to the user data');
//         }

//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }
// Và thực hiện lời hứa
// try {
//     getUserById(10)
//         .then(user => console.log(user.username))
//         .catch(err => console.log(`Caught by .catch ${err}`));
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }
// Nếu bạn gặp lỗi bên trong Promises, phương thức catch () sẽ bắt lỗi, không phải phương thức try / catch
// Nếu bạn xâu chuỗi các promises, phương thức catch () sẽ bắt các lỗi xảy ra trong bất kỳ lời hứa nào. Ví dụ:
// promise1
//     .then(promise2)
//     .then(promise3)
//     .then(promise4)
//     .catch(err => console.log(err));
// Trong ví dụ này, nếu có bất kỳ lỗi nào trong promise1, promise2, promises3 hoặc promise4, phương thức catch () sẽ xử lý nó.

//*** Gọi hàm reject()
// Việc ném lỗi có tác dụng tương tự như gọi hàm từ chối () như được minh họa trong ví dụ sau
// let authorized = false;

// function getUserById(id) {
//     return new Promise((resolve, reject) => {
//         if (!authorized) {
//             reject('Unauthorized access to the user data');
//         }

//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

// try {
//     getUserById(10)
//         .then(user => console.log(user.username))
//         .catch(err => console.log(`Caught by .catch ${err}`));
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }
// Trong ví dụ này, thay vì đưa ra một lỗi bên trong promises, chúng ta đã gọi hàm reject () một cách rõ ràng. Phương thức catch () cũng xử lý lỗi trong trường hợp này

//*** Thiếu phương thức catch ()
// Ví dụ sau không cung cấp phương thức catch () để xử lý lỗi bên trong promises. Nó sẽ gây ra lỗi thời gian chạy và chấm dứt chương trình:
let authorized = false;

function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (!authorized) {
            reject('Unauthorized access to the user data');
        }
        resolve({
            id: id,
            username: 'admin'
        });
    });
}

try {
    getUserById(10)
        .then(user => console.log(user.username));
    // the following code will not execute
    console.log('next');

} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}
// Nếu lời hứa được giải quyết, bạn có thể bỏ qua phương thức catch (). Trong tương lai, một lỗi tiềm ẩn có thể khiến chương trình dừng đột ngột
//*** Tổng kết :
// Bên trong lời hứa, phương thức catch () sẽ bắt lỗi do câu lệnh throw và reject () gây ra.
// Nếu lỗi xảy ra và bạn không có phương thức catch (), công cụ JavaScript sẽ gây ra lỗi thời gian chạy và dừng chương trình.
