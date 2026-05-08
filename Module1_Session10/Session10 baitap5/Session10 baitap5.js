const EXCHANGE_RATE = 25000;

let usdAmount = prompt("Mời bạn nhập số tiền Đô la Mỹ (USD):");
let vndAmount = parseFloat(usdAmount) * EXCHANGE_RATE;

if (!isNaN(vndAmount)) {
    // Sử dụng toLocaleString để định dạng số tiền cho dễ đọc (VD: 25,000)
    alert(usdAmount + " $ tương ứng với " + vndAmount.toLocaleString('vi-VN') + " đ");
    console.log(`Kết quả: ${vndAmount.toLocaleString('vi-VN')} VNĐ`);
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}