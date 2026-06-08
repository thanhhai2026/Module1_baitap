// --- BÀI 1: Chuyển độ C sang độ F ---
function bai1() {
    let c = parseFloat(document.getElementById('b1_c').value);
    let out = document.getElementById('res_b1');
    
    if (isNaN(c)) {
        out.innerText = "Vui lòng nhập giá trị độ C!";
        return;
    }
    // Công thức: F = C * 9/5 + 32
    let f = c * 9 / 5 + 32;
    out.innerText = `${c}°C bằng ${f.toFixed(2)}°F`;
}

// --- BÀI 2: Chuyển mét sang feet ---
function bai2() {
    let m = parseFloat(document.getElementById('b2_m').value);
    let out = document.getElementById('res_b2');
    
    if (isNaN(m) || m < 0) {
        out.innerText = "Vui lòng nhập số mét hợp lệ (>= 0)!";
        return;
    }
    // Công thức: ft = m * 3.2808
    let ft = m * 3.2808;
    out.innerText = `${m} m bằng ${ft.toFixed(4)} feet`;
}

// --- BÀI 3: Diện tích hình vuông ---
function bai3() {
    let a = parseFloat(document.getElementById('b3_a').value);
    let out = document.getElementById('res_b3');
    
    if (isNaN(a) || a <= 0) {
        out.innerText = "Cạnh hình vuông phải lớn hơn 0!";
        return;
    }
    let dt = a * a;
    out.innerText = `Diện tích hình vuông cạnh ${a} là: ${dt}`;
}

// --- BÀI 4: Diện tích hình chữ nhật ---
function bai4() {
    let a = parseFloat(document.getElementById('b4_a').value);
    let b = parseFloat(document.getElementById('b4_b').value);
    let out = document.getElementById('res_b4');
    
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        out.innerText = "Các cạnh hình chữ nhật phải lớn hơn 0!";
        return;
    }
    let dt = a * b;
    out.innerText = `Diện tích hình chữ nhật là: ${dt}`;
}

// --- BÀI 5: Diện tích tam giác vuông ---
function bai5() {
    let a = parseFloat(document.getElementById('b5_a').value);
    let b = parseFloat(document.getElementById('b5_b').value);
    let out = document.getElementById('res_b5');
    
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        out.innerText = "Các cạnh kề tam giác vuông phải lớn hơn 0!";
        return;
    }
    let dt = 0.5 * a * b;
    out.innerText = `Diện tích tam giác vuông là: ${dt}`;
}

// --- BÀI 6: Giải phương trình bậc 1 (ax + b = 0) ---
function bai6() {
    let a = parseFloat(document.getElementById('b6_a').value);
    let b = parseFloat(document.getElementById('b6_b').value);
    let out = document.getElementById('res_b6');
    
    if (isNaN(a) || isNaN(b)) {
        out.innerText = "Vui lòng nhập đầy đủ hệ số a và b!";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            out.innerText = "Phương trình vô số nghiệm.";
        } else {
            out.innerText = "Phương trình vô nghiệm.";
        }
    } else {
        let x = -b / a;
        out.innerText = `Phương trình có nghiệm duy nhất x = ${x}`;
    }
}

// --- BÀI 7: Giải phương trình bậc 2 (ax² + bx + c = 0) ---
function bai7() {
    let a = parseFloat(document.getElementById('b7_a').value);
    let b = parseFloat(document.getElementById('b7_b').value);
    let c = parseFloat(document.getElementById('b7_c').value);
    let out = document.getElementById('res_b7');
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        out.innerText = "Vui lòng nhập đầy đủ hệ số a, b và c!";
        return;
    }

    // Nếu a = 0, bài toán trở thành phương trình bậc 1 bx + c = 0
    if (a === 0) {
        if (b === 0) {
            out.innerText = (c === 0) ? "Phương trình vô số nghiệm (a=0, b=0, c=0)" : "Phương trình vô nghiệm (a=0, b=0)";
        } else {
            out.innerText = `Hệ số a = 0. Phương trình có 1 nghiệm x = ${-c / b}`;
        }
        return;
    }

    // Tính Delta
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        out.innerText = `Delta = ${delta} < 0. Phương trình vô nghiệm.`;
    } else if (delta === 0) {
        let x = -b / (2 * a);
        out.innerText = `Delta = 0. Phương trình có nghiệm kép: x1 = x2 = ${x}`;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        out.innerText = `Delta = ${delta} > 0. Phương trình có 2 nghiệm phân biệt:\n x1 = ${x1.toFixed(2)}\n x2 = ${x2.toFixed(2)}`;
    }
}

// --- BÀI 8: Kiểm tra xem có phải là tuổi của một người không ---
function bai8() {
    let inputVal = document.getElementById('b8_tuoi').value;
    let out = document.getElementById('res_b8');
    
    // Kiểm tra xem có nhập hay không và có phải số nguyên không
    let tuoi = parseInt(inputVal);
    
    if (inputVal === "" || isNaN(tuoi) || Number(inputVal) !== tuoi) {
        out.innerText = "Vui lòng nhập vào một số NGUYÊN hợp lệ!";
        return;
    }

    // Một số nguyên là tuổi người khi: 0 < tuoi < 120
    if (tuoi > 0 && tuoi < 120) {
        out.innerText = `Hợp lệ! Số ${tuoi} LÀ tuổi của một người.`;
    } else {
        out.innerText = `Không hợp lệ! Số ${tuoi} KHÔNG PHẢI tuổi của một người (Phải lớn hơn 0 và nhỏ hơn 120).`;
    }
}