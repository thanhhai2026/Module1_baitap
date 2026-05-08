
let a = parseFloat(prompt("Mời bạn nhập vào số a"));
let b = parseFloat(prompt("Mời bạn nhập vào số b"));


let phepTinh = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");

let ketQua;

// Sử dụng cấu trúc switch-case để xử lý từng phép tính
switch (phepTinh) {
    case "+":
        ketQua = a + b;
        break;
    case "-":
        ketQua = a - b;
        break;
    case "*":
        ketQua = a * b;
        break;
    case "/":
        // Kiểm tra trường hợp chia cho số 0
        if (b === 0) {
            ketQua = "Không thể chia cho 0";
        } else {
            ketQua = a / b;
        }
        break;
    default:
        ketQua = "Phép tính không hợp lệ";
}

// Hiển thị kết quả ra màn hình bằng alert
if (typeof ketQua === "number") {
    alert("Kết quả của phép tính trên: " + a + " " + phepTinh + " " + b + " = " + ketQua);
} else {
    alert(ketQua);
}