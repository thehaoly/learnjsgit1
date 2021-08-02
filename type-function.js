// *** tìm hiểu về function declaration và function expression
// còn gọi là hàm khai báo hay hàm biểu thức

// xem xét qua hàm khai báo ( function definition or function declaration or function statement )
// một hàm khai báo là loại hàm được khai báo độc lập có tên riêng
// toàn bộ những đối số được đưa vào và những thay đổi bên trong nó không làm ảnh hưởng đến toàn cục
// nếu chúng ta truyển vào cho hàm đối số không phải là kiểu dữ liệu nguyên thủy
// mà là đối tượng ( object ) hay mãng ( Array ) thì những thay đổi bên trong hàm sẽ vẩn tồn tại đến bên ngoải hàm
// // ví dụ
// function myFunc(theObject){
//     theObject.make = 'Toyota';
// }
// var mycar = {make : 'Honda',  model : "Accord" , year : 1998};
// var x, y;
//  x = mycar.make ;
//  console.log(x); // x nhận giá trị là Honda
//  myFunc(mycar); // biến mycar đã được thay đồi thành Toyota sau khi truyền vào  hàm myFunc
//  y = mycar.make ; // y không còn có giá trị giống x nữa mà chuyển thành Toyota
//  console.log(y);

// Xem xét qua hàm biểu thức hay còn gọi là hàm vô danh ( anonymous ) nên nó không cần có 1 cái tên 
// // ví dụ
// const square = function(number){ return number * number };
// var x = square(4);
// console.log(x);
// // chúng ta cũng xem xét việc cung cấp cho hàm biểu thức 1 cái tên giúp cho quá trình truy vết gở lỗi dể dàng hơn
// const factorial = function fac(n){return n < 2 ? 1 : n * fac(n-1)}
// console.log(factorial(3));
// ứng dụng của hàm biểu thức còn có việc dịnh nghĩa hàm như là 1 đối số cho một hàm khác, xem ví dụ sau
// //ví dụ
// function map(f,a){
//     let result = [];
//     let i ;
//     for( i=0 ; i != a.length ; i++)
//         result[i] = f(a[i]);
//     return result ;        
// }
// const  f = function(x){
//     return( x * x );
// }
// let numbers = [0, 1, 2, 5, 10];
// let cube = map(f,numbers);
// console.log(cube);
// Hàm biểu thức còn được ứng dụng trong việc khai báo hàm có điều kiện 
// // ví dụ 
// var myFunc ,
//     mycar = { make : 'Honda',  model : "Accord" , year : 1998 },
//     num = 0 ; // cách khai báo hàm không cần viết từ khóa var nhiều lần
// if ( num === 0 ){
//     myFunc = function(theObject){
//         theObject.make = 'Toyota'
//     }
//     myFunc(mycar);
//     console.log(mycar.make);
// } else {
//     console.log(mycar.make);
// }

// *** Tìm hiểu về cách gọi hàm ( Calling function or invoking a function)
// cách gọi hàm như nột hàm thông thường ( đây được cho là cách không tốt vì nó sẽ gây sung đột và bugs trong các đối tượng toàn cục)
// function myFunction(a,b){
//     return a * b ;
// }
// console.log(myFunction(10,2));
// khi 1 hàm được tạo thì mặc định nó thuộc về những đối tượng toàn cục trong trình duyệt đó 
// chúng ta có thể gọi chúng như sau 
// function myFunction(a,b){
//     return a * b ;
// }
// window.myFunction(10,2); // cái này chạy trong trình duyệt mới hiện được

// cách gọi hàm thông qua từ khóa " this " dùng để chỉ chính bản thân nó ( là đối tượng hay hàm)
// trong trường hợp không khai báo đới tượng thì mặc định là đối tượng toàn cục  của trang đó
// cách sử dụng hàm cho đối tượng toàn cục như sau :
// let x = myFunction();
// function myFunction(){
//     return this ;
// }

// cách gọi hàm với tư cách là một phương thức ( invoking a function as a Method )
// trong  javascript chúng ta có thể khai báo hàm như một phương thức của đối tượng
// sau đó sử dụng nó như một phương thức tự định nghĩa cho đối tượng đó như sau :
// const myObject = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(myObject.fullName());

// cách gọi hàm bằng lời gọi hàm tạo ( contructor invocation ) với từ khóa " new "
// với cách tạo này chúng ta đã biến hàm thành 1 đối tượng  và đương nhiên nó sẽ thừa kế những thuộc tính và phương thức của đối tượng hàm đó
// function myFunction( arg1, arg2 ){
//     this.firstName = arg1;
//     this.lastName = arg2;
// }
// const myObj = new myFunction("John", "Doe");  
// console.log(myObj.firstName + " " + myObj.lastName)

// // cách gọi lại hàm là chính nó ( đây được gọi là quá trình đệ qui hay hàm đệ qui )
// // điều này có thể tương đương vòng lặp, nhưng nó có khả năng tránh lặp không giới hạn ( điều thường sai phạm trong khi sử dụng hàm lặp )
// // chúng ta còn có thể áp dụng đệ qui trong DOM khi truy xuất các nút trong cây của trang
// // ví dụ :
// function factor(n){
//     if((n === 0) || (n === 1))
//         return 1;
//     else
//     return ( n * factor( n - 1 ));
// }
// console.log(factor(0));
// console.log(factor(3));

// *** tìm hiểu về nhảy lệnh và phạm vi trong một chương trình ( hoisting and scope )
// Chúng ta xem xét về vấn đề nhảy lệnh trong 1 chương trình javascript 
// Một hàm luôn có phạm vi của nó tùy vào nơi mà nó được khai báo
// tuy nhiên đối với loại hàm khai báo ( function declaration ) thì có hiện tượng nhảy lệnh 
// // ví dụ :
// console.log(square(5)); // hàm đã được gọi mà chưa khai báo
// function square(n){ return n * n ; } 
// // việc nhảy lệnh như vậy là không tốt trong quá trình code nên nó được khắc phục bằng từ khóa "strict" trên đầu chương trình

// Chúng ta xem xét phạm vi trong một hàm
// Trong javascript chúng ta có thể thực hiện hàm trồng hàm theo nhiều lớp  ( gọi là nested function )
// Nó bao gồm cả tính đóng trong đó ( gọi là closures )
// Do có tính đóng ( closure ) nên hàm bên trong sẽ được sử dụng bởi hàm bên ngoài trực tiếp nó
// hàm bên ngoài không được sử dụng đối số hay biến của hàm bên trong và với chiều ngược lại thì được
// function addSquares(a,b){
//     function square(x){
//         return x * x ;
//     }
//     return square(a) + square(b);
// }
// console.log(addSquares(2,3));
// console.log(addSquares(3,4));

// // Cách truyền đối số cho các hàm lồng nhau có tính đóng, từ hàm bên trong ta có thể nhận đối số từ bên ngoài 
// function outside(x){
//     function inside(y){
//         return x + y ;
//     }
//     return inside ;
// }
// // ta thấy trong hàm có 2 đối số x và y, nhưng ta chỉ truyền vào có 1 đối số
// console.log(outside(3)); // trả về cho ta là ham inside
// console.log(outside(3)(5)); // khi ta truyền vào đủ số lượng đối số thì hàm mới tr3 về đúng kết quả !
// các biến đã được bào tồn như trên ( Preservation of variables )

// chúng ta sẽ xem xét hàm trồng nhau trong nhiều lớp
// hàm lồng nhau thành nhiều lớp thì quyền truy cặp sẽ được tăng theo, nên hàm cuối cùng sẽ được quyền truy cặp biến và giá trị các hàm khai báo trước nó
// có nghĩa là các hàm trước không được truy cặp vào biến và giá trị của hàm khai báo sau nó 
// ví dụ :
// function A(x){
//     function B(y){
//         function C(z){       // hàm C trong chuổi hàm lồng nhau có thể sử dụng biến số truyền vào của các hàm khác như A và B 
//             console.log(x+y+z)
//         }
//         C(3);
//     }
//     B(2);
// }
// A(1);

// // chúng ta sẽ xem xét việc sung đột tên trong trường hợp hàm lồng nhau có tính đóng
// function outside() {
//     var x = 5 ;
//     function inside(x) { // sự sung đột diễn ra tại nơi biến truyền vào trùng tên với biến nằm trong hàm bao
//         return x * 2 ;
//     }
//     return inside ;
// }
// // từ những nguyên tắc nói trên chúng ta sẽ sắp xếp độ ưu tiên và quyền hạn truy cập như sau [inside,outside,global odject]
// console.log(outside()(10)); // do đó x bên trong sẽ được ưu tiên hơn x bên ngoài

// *** ( Closures ) Chúng ta xem xét tính đóng trong hàm của javascript
// tính đóng là 1 trong những đặc tính mạnh trong javascript nó giúp cho những hàm bên trong có thể sử dụng biến và giá trị của những hàm bọc bên ngoài
// ví dụ minh họa :
// var pet = function( name ){
//     var getName = function(){
//         return name ;
//     }
//     return getName ;
// }
// myPet = pet('Vivie');
// console.log(myPet());

// Tính đóng trong js còn phức tạp hơn khi chúng ta chuyển hàm thành đối tượng, trong đối tượng đó lại có những phương thức bên trong
// Các biến bên trong của các hàm bên trong hoạt động như các kho lưu trữ an toàn cho các đối số và biến bên ngoài.
// ví dụ minh họa 
// var createPet = function(name){
//     var sex;
//     return {
//         setName : function(newName){ // hàm này xem đối số của hàm bao như một biến cùa mỉnh dùng để truyền dữ liẹu
//             name = newName ;
//         },
//         getName : function(){ // hàm này sử dụng đối số của hàm bao làm giá trị trả về của mình  mà không cần truyền qua đối số của mình
//             return name ;
//         },
//         getSex : function(){ // hàm này sử dụng biến sex mà không cần khai báo đối số đầu vào
//             return sex ;
//         },
//         setSex : function(newSex){ // Đối số của hàm bên trong có thể dùng để truyền đối số bên ngoài vào cho biến của hàm bao
//             if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')){
//                 sex = newSex ;
//             }
//         }
//     }
// }
// var pet = createPet('Vivie');
// console.log(pet.getName());

// pet.setName('Oliver');
// pet.setSex('male');
// console.log(pet.getSex());
// console.log(pet.getName());

// Chúng ta xem xét mặt khuyết điểm của tính đóng trong js
// khi mà đối số của hàm bao trùng tên vói đối số của hàm bên trong thì sao ? 
// Biến phạm vi bên trong sẽ ghi đè biến phạm vi bên ngoài cho đến khi hàm bên trong đó thực hiện xong nhiệm vụ của mình
// ví dụ minh họa 
// var createPet = function(name){
//     return {
//         setName : function(name){
//             name = name ;
//         }
//     }
// }
// var pet = createPet();
// pet.setName('Dog');
// console.log(pet); // cho ra kết quả { setName: [Function: setName] }

// *** sử dụng đối số là đối tượng 
// đối số là đối tượng ( arguments object ) được đưa vào hàm như một loại dữ liệu được gọi là đối tượng giống mãng ( array-like object )
// Vì là đối tượng giống mãng nên phương pháp truy cập cũng giống mãng " arguments[i] " trong đó i là số thứ tự của đối số
// số lượng hay chiều dài của đối số được truy cập bằng lệnh " arguments.length "
// Bạn có thể truyền bất kỳ số lượng đối số nào cho hàm này và nó nối mỗi đối số vào một chuỗi "danh sách"
// vì đây chỉ là kiểu dữ liệu giống mãng ( array-like ) nên có không phải là mãng hoàn toàn, nên nó sẽ không thừa hưởng những phương thức từ đối tượng mãng
//ví dụ minh họa
// function myConcat( separator ) { 
//     var result = '';
//     var i ;
//     for ( i=1 ; i<arguments.length ; i++ ){
//         result += arguments[i] + separator ; // separator là tên của đối số đầu tiên của dãy đối số truyển vào, những đối số còn lại sẽ tạo thành đối tượng giống mãng và được truy xuất bằng từ khóa arguments
//     }
//     return result ;
// }
// console.log(myConcat(',','red','orange','blue')); // ký tự đầu tiên dùng làm vách ngăn giữa các đối số khác trong dãy ( đây là đấu hiệu nhận diện cho đối số là đối tượng arguments)
// console.log(myConcat(' - ','elephant','giraffe','lion','cheetah'));
// console.log(myConcat(' | ','sage','basil','aregano','pepper','parsley'));
// function mytest(se){ 
//     return arguments[1]; // lấy giá trị trong chuổi đối số truyền vào 
// }
// console.log(mytest('một','hai','ba','bốn')); // truyển nhiều đối số nhưng không cần khai báo tên quá nhiều chỉ một là được

// *** Chúng ta xem xét đối số ( tham số ) truyền cho 1 hàm 
// Trong javascript có 2 loại đối số ( default parameters and rest parameters ) là đối số mặc định và đối số chờ chúng ta truyền vào
// Trong JavaScript, các tham số của hàm mặc định là không xác định ( undefined ). Tuy nhiên, trong một số trường hợp, có thể hữu ích khi đặt một giá trị mặc định khác. Đây chính xác là những gì các tham số mặc định làm.
// ví dụ minh họa :
// function multiply( a , b ) {
//     b = typeof b !== 'undefined' ? b : 1 ; // qua câu lệnh này ta thấy ta không truyển đối số cho b thì b mặc định là kiều dữ liệu " undefined " 
//     return a * b ;
// }
// console.log(multiply(5));

// Với đối số mặc định
// trong đoạn mã trên chúng ta có thể viếc theo 1 cách khác là truyền vào đối số mặc định trước cho hàm luôn
// function multiply(a, b = 1) {
//     return a * b ;
// }
// console.log(multiply(5)); // khi chúng ta không truyển tham số vào trong hàm thỉ hàm mặc định giá trị b là 1
// console.log(multiply(5,3)); // khi chúng ta truyển tham số vào trong hàm thì hàm sẽ sử dụng tham số truyền vào 
// console.log(multiply(5, undefined)); // khi chúng ta truyền vào một đối số có dạng dữ liệu là undefined thì nó sẽ sử dụng đối sô mặt định

// Với đối số chờ truyền vào ( Rest parameter )
// Trong trường hợp này chúng ta có thể sử dụng ký hiệu ... ở trước đối số để truyền vào nhiếu đối số như một mãng
// ví dụ minh họa
// function multiply1(multiplyer, ...theArgs){ // trường hợp truyền nhiều đối số mà bắt đầu từ số thứ 2 trở đi là một mãng
//     return theArgs.map(x => multiplyer * x );
// }
// function multiply2(multiplyer1,multiplyer2,...theArgs){ // trường hợp truyền nhiều đối số mà bắt đầu từ số thứ 3 trở đi là một mãng
//     return theArgs.map(x => ( multiplyer1 + multiplyer2) * x);
// }
// var arr1 = multiply1(2, 1, 2, 3);
// var arr2 = multiply2( 1,2,3,4,5);
// console.log(arr1);
// console.log(arr2);

