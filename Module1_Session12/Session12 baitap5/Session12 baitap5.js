
let weight = parseFloat(prompt("Nhập cân nặng của bạn (kg):"));
let height = parseFloat(prompt("Nhập chiều cao của bạn (m) - Ví dụ 1.65:"));

if (isNaN(weight) || isNaN(height) || height <= 0) {
    alert("Vui lòng nhập số hợp lệ!");
} else {
    // .Tính toán BMI theo công thức: BMI = cân nặng / (chiều cao * chiều cao)
    let bmi = weight / (height * height);
    
    // Làm tròn kết quả đến 2 chữ số thập phân để dễ nhìn
    bmi = bmi.toFixed(2);

    // Phân loại theo bảng IDI & WPRO (Dành cho người châu Á)
    let classification = "";

    if (bmi < 18.5) {
        classification = "Cân nặng thấp (Gầy)";
    } else if (bmi >= 18.5 && bmi <= 22.9) {
        classification = "Bình thường";
    } else if (bmi >= 23 && bmi <= 24.9) {
        classification = "Tiền béo phì";
    } else if (bmi >= 25 && bmi <= 29.9) {
        classification = "Béo phì độ I";
    } else {
        classification = "Béo phì độ II";
    }
    alert("Chỉ số BMI của bạn là: " + bmi + "\nPhân loại: " + classification);
}