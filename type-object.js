// javascript được thiết kế dựa trên một mô hình đối tượng đơn giản
// Một đối tượng là một tập hợp những thuộc tính, mỗi thuộc tính là sự liên kết giữa tên ( hay khóa) với 1 giá trị
// Thuộc tính trong đối tượng có thể là một giá trị hay là một hàm mà theo mối quan hệ tài sản thỉ nó được gọi là phương thức
// Đối tượng trong javascript cũng giống như những đối tượng bình thường trong đời sống hằng ngày
// ví dụ như đối tượng cái ly nó có những thuộc tính như màu sắc, thiết kế, cân nặng, chất liệu ,..
// thuộc tính của đối tượng đơn giản là một biến bình thường trong javascript ngoại trừ phẩn đính kèm vào các đối tượng 
// Chúng ta có thể truy suất thông tin thuộc tính của đối tượng bằng dấu chấm .
//       objectName.propertyName

// Những phương thức khởi tạo đối tượng 
// phương thức 1 : khởi tạo bằng từ khóa new và sau đó gắn thuôc tính cho nó 
// var myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969 ;

// phương thức 1.1 dùng dấu , ngăn cách trong việc khai báo liển mạch
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
var myCar = {
    make : 'Ford',
    model : 'Mustang',
    year : 1969 
};
// Trong trường hợp mà chúng ta truy cập vào một thuộc tính chưa khai báo thì nó sè trả về giá trị undefined ( và không là null )
// console.log(myCar.color) ; // trả về giá trị undefined 

//Chúng ta có 3 phương pháp cụ thể để liệt kê các thuộc tính trong 1 đối tượng
 // dùng lệnh for ... in lặp, Phương thức này duyệt qua tất cả các thuộc tính có thể liệt kê của một đối tượng và chuỗi nguyên mẫu của nó.
 function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }
  showProps(myCar, "myCar");