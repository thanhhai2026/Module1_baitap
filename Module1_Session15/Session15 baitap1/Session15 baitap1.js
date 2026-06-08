// =======================================================
// HÀM TIỆN ÍCH TRỢ GIÚP (Hỗ trợ sinh dữ liệu mảng tự động)
// =======================================================
function parseInputToArray(inputId) {
    let value = document.getElementById(inputId).value.trim();
    if (value === "") return [];
    return value.split(',').map(item => parseInt(item.trim())).filter(num => !isNaN(num));
}

function autoFill(inputId, count, min, max) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    document.getElementById(inputId).value = arr.join(', ');
}

function autoFillUnique(inputId, count, min, max) {
    let set = new Set();
    while (set.size < count) {
        set.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    document.getElementById(inputId).value = Array.from(set).join(', ');
}

// =======================================================
// LOGIC CHÍNH XỬ LÝ 8 BÀI TẬP
// =======================================================

// --- BÀI 1 ---
function bai1() {
    let arr = parseInputToArray('b1_input');
    let out = document.getElementById('res_b1');
    if (arr.length !== 10) {
        out.innerText = "Lỗi: Vui lòng nhập đúng đủ 10 số nguyên!";
        return;
    }
    
    let count = 0;
    let registeredNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            count++;
            registeredNumbers.push(arr[i]);
        }
    }
    out.innerText = `Có ${count} số nguyên >= 10.\nDanh sách các số đó: [${registeredNumbers.join(', ')}]`;
}

// --- BÀI 2 ---
function bai2() {
    let arr = parseInputToArray('b2_input');
    let out = document.getElementById('res_b2');
    if (arr.length !== 10) {
        out.innerText = "Lỗi: Vui lòng nhập đúng đủ 10 số nguyên!";
        return;
    }

    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    out.innerText = `Phần tử lớn nhất trong mảng là: ${max}\nNằm ở vị trí chỉ số (index): ${index} (Vị trí thứ ${index + 1} trong mảng)`;
}

// --- BÀI 3 ---
function bai3() {
    let arr = parseInputToArray('b3_input');
    let out = document.getElementById('res_b3');
    if (arr.length === 0) {
        out.innerText = "Lỗi: Mảng không được để trống!";
        return;
    }

    let max = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    let avg = sum / arr.length;
    out.innerText = `Giá trị lớn nhất: ${max}\nGiá trị trung bình của mảng: ${avg.toFixed(2)}`;
}

// --- BÀI 4 ---
function bai4() {
    let arr = parseInputToArray('b4_input');
    let out = document.getElementById('res_b4');
    if (arr.length === 0) {
        out.innerText = "Lỗi: Vui lòng nhập mảng!";
        return;
    }

    let elementCopy = [...arr]; // Sao chép mảng gốc
    // Thuật toán đảo ngược mảng thủ công bằng vòng lặp (hoặc dùng elementCopy.reverse())
    let dau = 0;
    let cuoi = elementCopy.length - 1;
    while (dau < cuoi) {
        let temp = elementCopy[dau];
        elementCopy[dau] = elementCopy[cuoi];
        elementCopy[cuoi] = temp;
        dau++;
        cuoi--;
    }
    out.innerText = `Mảng gốc ban đầu: [${arr.join(', ')}]\nMảng sau khi đảo ngược: [${elementCopy.join(', ')}]`;
}

// --- BÀI 5 ---
function bai5() {
    let arr = parseInputToArray('b5_input');
    let out = document.getElementById('res_b5');
    if (arr.length === 0) {
        out.innerText = "Lỗi: Vui lòng nhập dữ liệu mảng chuỗi số!";
        return;
    }

    let count = 0;
    let amArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
            amArr.push(arr[i]);
        }
    }
    out.innerText = `Số lượng số nguyên âm xuất hiện: ${count} số.\nCác số âm đó là: [${amArr.join(', ')}]`;
}

// --- BÀI 6 ---
function bai6() {
    let arr = parseInputToArray('b6_input');
    let xInput = document.getElementById('b6_x').value.trim();
    let out = document.getElementById('res_b6');

    if (arr.length !== 10 || xInput === "") {
        out.innerText = "Lỗi: Vui lòng nhập đủ mảng 10 số và giá trị số X!";
        return;
    }

    let x = parseInt(xInput);
    let timThay = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            timThay = true;
            break;
        }
    }

    if (timThay) {
        out.innerText = `Number ${x} is in the array`;
    } else {
        out.innerText = `Number ${x} is not in the array`;
    }
}

// --- BÀI 7 ---
function bai7() {
    let arr = parseInputToArray('b7_input');
    let out = document.getElementById('res_b7');
    if (arr.length !== 10) {
        out.innerText = "Lỗi: Vui lòng nhập đúng đủ 10 số nguyên!";
        return;
    }

    // Thuật toán sắp xếp nổi bọt (Bubble Sort) giảm dần
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    out.innerText = `Mảng sau khi sắp xếp giảm dần:\n[${arr.join(', ')}]`;
}

// --- BÀI 8 ---
function bai8() {
    let a = parseInputToArray('b8_a');
    let b = parseInputToArray('b8_b');
    let out = document.getElementById('res_b8');

    if (a.length !== 10 || b.length !== 10) {
        out.innerText = "Lỗi: Cả hai mảng a và b đều phải nhập đủ 10 phần tử!";
        return;
    }

    let c = new Array(20);

    // Lưu các phần tử của mảng b vào c trước (từ chỉ số 0 đến 9)
    for (let i = 0; i < b.length; i++) {
        c[i] = b[i];
    }
    // Lưu nối tiếp các phần tử của mảng a vào c (từ chỉ số 10 đến 19)
    for (let i = 0; i < a.length; i++) {
        c[i + 10] = a[i];
    }

    out.innerText = `Mảng a: [${a.join(', ')}]\n` +
                    `Mảng b: [${b.join(', ')}]\n\n` +
                    `=> Mảng c sau khi gộp (b nối tiếp a):\n[${c.join(', ')}]`;
}