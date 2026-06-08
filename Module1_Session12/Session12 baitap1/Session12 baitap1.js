// --- BÀI 1: Kiểm tra a chia hết cho b ---
function bai1() {
    let a = parseInt(document.getElementById('b1_a').value);
    let b = parseInt(document.getElementById('b1_b').value);
    let output = document.getElementById('res_b1');

    if (isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập đầy đủ cả hai số a và b!");
        return;
    }
    if (b === 0) {
        alert("Số b phải khác 0 để thực hiện phép chia!");
        return;
    }

    if (a % b === 0) {
        let msg = `${a} chia hết cho ${b}`;
        alert(msg);            // Hiển thị dạng alert theo đề bài
        console.log(msg);      // Xuất ra console log
        output.innerText = msg; // Hiển thị lên màn hình web
    } else {
        let msg = `${a} KHÔNG chia hết cho ${b}`;
        alert(msg);
        console.log(msg);
        output.innerText = msg;
    }
}

// --- BÀI 2: Kiểm tra tuổi vào lớp 10 ---
// Quy chuẩn tuổi vào lớp 10 hiện hành thông thường là 15 tuổi
function bai2() {
    let tuoi = parseInt(document.getElementById('b2_tuoi').value);
    let output = document.getElementById('res_b2');

    if (isNaN(tuoi) || tuoi <= 0) {
        alert("Vui lòng nhập số tuổi hợp lệ!");
        return;
    }

    if (tuoi < 15) {
        let msg = `Học sinh ${tuoi} tuổi: Không đủ điều kiện vào học lớp 10 (Dưới 15 tuổi).`;
        alert(msg);
        console.log(msg);
        output.innerText = msg;
        output.style.color = "#e74c3c"; // Đổi màu đỏ thông báo không đủ điều kiện
    } else {
        let msg = `Học sinh ${tuoi} tuổi: Đủ điều kiện vào học lớp 10.`;
        console.log(msg);
        output.innerText = msg;
        output.style.color = "#27ae60";
    }
}

// --- BÀI 3: Kiểm tra số nguyên lớn hơn hay nhỏ hơn 0 ---
function bai3() {
    let so = parseInt(document.getElementById('b3_so').value);
    let output = document.getElementById('res_b3');

    if (isNaN(so)) {
        alert("Vui lòng nhập một số nguyên!");
        return;
    }

    if (so > 0) {
        output.innerText = `Số ${so} lớn hơn 0`;
    } else if (so < 0) {
        output.innerText = `Số ${so} nhỏ hơn 0`;
    } else {
        output.innerText = `Số bạn nhập bằng 0`;
    }
}

// --- BÀI 4: Tìm giá trị lớn nhất của 3 số nguyên ---
function bai4() {
    let n1 = parseInt(document.getElementById('b4_so1').value);
    let n2 = parseInt(document.getElementById('b4_so2').value);
    let n3 = parseInt(document.getElementById('b4_so3').value);
    let output = document.getElementById('res_b4');

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Vui lòng nhập đủ cả 3 số nguyên!");
        return;
    }

    let max = n1;
    if (n2 > max) {
        max = n2;
    }
    if (n3 > max) {
        max = n3;
    }

    output.innerText = `Giá trị lớn nhất trong 3 số là: ${max}`;
}

// --- BÀI 5: Xếp hạng học lực học sinh ---
function bai5() {
    let kt = parseFloat(document.getElementById('b5_kt').value);
    let gk = parseFloat(document.getElementById('b5_gk').value);
    let ck = parseFloat(document.getElementById('b5_ck').value);
    let output = document.getElementById('res_b5');

    if (isNaN(kt) || isNaN(gk) || isNaN(ck) || 
        kt < 0 || kt > 10 || gk < 0 || gk > 10 || ck < 0 || ck > 10) {
        alert("Vui lòng nhập đúng điểm số trong khoảng từ 0 đến 10!");
        return;
    }

    // Tính điểm trung bình theo trọng số thông thường (hệ số 1, 2, 3)
    let diemTB = (kt + gk * 2 + ck * 3) / 6;
    let xepHang = "";

    // Thang xếp hạng dựa trên tiêu chuẩn điểm học lực cơ bản
    if (diemTB >= 9.0) {
        xepHang = "Xuất Sắc";
    } else if (diemTB >= 8.0) {
        xepHang = "Giỏi";
    } else if (diemTB >= 6.5) {
        xepHang = "Khá";
    } else if (diemTB >= 5.0) {
        xepHang = "Trung Bình";
    } else {
        xepHang = "Yếu";
    }

    output.innerText = `Điểm trung bình: ${diemTB.toFixed(2)} => Xếp loại học lực: ${xepHang}`;
}