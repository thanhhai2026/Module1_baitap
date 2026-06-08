// --- BÀI 1: In dãy Fibonacci ---
function bai1() {
    let n = parseInt(document.getElementById('b1_n').value);
    let out = document.getElementById('res_b1');

    if (isNaN(n) || n <= 0) {
        out.innerText = "Vui lòng nhập một số lượng phần tử lớn hơn 0!";
        return;
    }

    let f0 = 0, f1 = 1;
    let result = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(f0);
        } else if (i === 1) {
            result.push(f1);
        } else {
            let fn = f0 + f1;
            result.push(fn);
            f0 = f1;
            f1 = fn;
        }
    }

    out.innerText = `Dãy số gồm ${n} phần tử:\n` + result.join(', ');
}

// --- BÀI 2: Tính giai thừa (n!) ---
function bai2() {
    let n = parseInt(document.getElementById('b2_n').value);
    let out = document.getElementById('res_b2');

    if (isNaN(n) || n < 0) {
        out.innerText = "Vui lòng nhập số nguyên dương hoặc bằng 0!";
        return;
    }

    let giaiThua = 1;
    let bieuThuc = "";

    if (n === 0 || n === 1) {
        giaiThua = 1;
        bieuThuc = "1";
    } else {
        for (let i = 1; i <= n; i++) {
            giaiThua *= i;
            bieuThuc += (i === 1 ? "" : " * ") + i;
        }
    }

    out.innerText = `${n}! = ${bieuThuc} = ${giaiThua}`;
}

// --- BÀI 3: In 4 kiểu tam giác vuông ---
function bai3() {
    let h = parseInt(document.getElementById('b3_h').value);

    if (isNaN(h) || h <= 0) {
        alert("Vui lòng nhập chiều cao hợp lệ!");
        return;
    }

    // Kiểu 1: Góc vuông dưới - trái
    // *
    // **
    // ***
    let t1 = "";
    for (let i = 1; i <= h; i++) {
        t1 += "*".repeat(i) + "\n";
    }
    document.getElementById('tg_1').innerText = t1;

    // Kiểu 2: Góc vuông trên - trái
    // ***
    // **
    // *
    let t2 = "";
    for (let i = h; i >= 1; i--) {
        t2 += "*".repeat(i) + "\n";
    }
    document.getElementById('tg_2').innerText = t2;

    // Kiểu 3: Góc vuông dưới - phải
    //   *
    //  **
    // ***
    let t3 = "";
    for (let i = 1; i <= h; i++) {
        let spaces = " ".repeat(h - i);
        let stars = "*".repeat(i);
        t3 += spaces + stars + "\n";
    }
    document.getElementById('tg_3').innerText = t3;

    // Kiểu 4: Góc vuông trên - phải
    // ***
    //  **
    //   *
    let t4 = "";
    for (let i = h; i >= 1; i--) {
        let spaces = " ".repeat(h - i);
        let stars = "*".repeat(i);
        t4 += spaces + stars + "\n";
    }
    document.getElementById('tg_4').innerText = t4;
}