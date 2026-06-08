function kichHoatMenu() {
    let logBox = document.getElementById('system_log');
    logBox.innerText = "--- Hệ thống bắt đầu chạy ---\n";

    // Khởi tạo các biến lưu trữ thông tin người dùng xuyên suốt phiên chạy
    let userName = "Chưa cập nhật";
    let userAge = "Chưa cập nhật";

    // Vòng lặp vô hạn hiển thị menu cho đến khi chọn 10 hoặc nhấn Cancel
    while (true) {
        let menuText = "--- CHỌN CHỨC NĂNG TỪ 1 ĐẾN 10 ---\n\n" +
                       "1. Nhập tên của người dùng\n" +
                       "2. Nhập tuổi của người dùng\n" +
                       "3. In tên và tuổi của người dùng\n" +
                       "4. In bảng cửu chương của một số\n" +
                       "5. Kiểm tra số nhập vào là số chẵn hay lẻ\n" +
                       "6. Tính tổng các số từ 1 đến N\n" +
                       "7. In các số trong một dãy số\n" +
                       "8. Kiểm tra một số có phải số nguyên tố hay không\n" +
                       "9. In chuỗi đảo ngược của một chuỗi\n" +
                       "10. Thoát khỏi chương trình\n\n" +
                       "Vui lòng nhập số tương ứng với lựa chọn của bạn:";

        let luaChonInput = prompt(menuText);

        // Trường hợp người dùng bấm Cancel (Hủy bỏ) trên hộp thoại prompt
        if (luaChonInput === null) {
            let msg = "Bạn đã hủy bỏ menu. Đóng chương trình.\n";
            logBox.innerText += msg;
            alert(msg);
            break;
        }

        let luaChon = parseInt(luaChonInput.trim());

        // Kiểm tra lựa chọn hợp lệ từ 1-10
        if (isNaN(luaChon) || luaChon < 1 || luaChon > 10) {
            alert("Lựa chọn không hợp lệ! Vui lòng chỉ nhập số từ 1 đến 10.");
            continue;
        }

        // Xử lý thoát sớm trước khi vào các logic tính toán phức tạp
        if (luaChon === 10) {
            let msg = "Cảm ơn bạn đã sử dụng chương trình. Hệ thống đã dừng.\n";
            logBox.innerText += msg;
            alert(msg);
            break;
        }

        // Cấu trúc switch-case xử lý từng tính năng theo yêu cầu đề bài
        switch (luaChon) {
            case 1: {
                let ten = prompt("Nhập tên của bạn:");
                if (ten !== null && ten.trim() !== "") {
                    userName = ten.trim();
                    logBox.innerText += `[Chức năng 1]: Đã cập nhật tên thành công.\n`;
                }
                break;
            }
            case 2: {
                let tuoi = prompt("Nhập tuổi của bạn:");
                if (tuoi !== null && tuoi.trim() !== "") {
                    userAge = tuoi.trim();
                    logBox.innerText += `[Chức năng 2]: Đã cập nhật tuổi thành công.\n`;
                }
                break;
            }
            case 3: {
                let info = `Tên người dùng: ${userName} | Tuổi: ${userAge}\n`;
                alert(info);
                logBox.innerText += `[Chức năng 3]: ${info}`;
                break;
            }
            case 4: {
                let queryNum = prompt("Nhập số muốn in bảng cửu chương:");
                let n = parseInt(queryNum);
                if (!isNaN(n)) {
                    let bcc = `--- BẢNG CỬU CHƯƠNG SỐ ${n} ---\n`;
                    for (let i = 1; i <= 10; i++) {
                        bcc += `${n} x ${i} = ${n * i}\n`;
                    }
                    alert(bcc);
                    logBox.innerText += `[Chức năng 4]: Đã in bảng cửu chương số ${n}.\n`;
                } else {
                    alert("Dữ liệu nhập vào phải là một số!");
                }
                break;
            }
            case 5: {
                let queryNum = prompt("Nhập một số cần kiểm tra chẵn/lẻ:");
                let n = parseInt(queryNum);
                if (!isNaN(n)) {
                    let text = (n % 2 === 0) ? `Số ${n} là số CHẴN` : `Số ${n} là số LẺ`;
                    alert(text);
                    logBox.innerText += `[Chức năng 5]: ${text}\n`;
                } else {
                    alert("Dữ liệu nhập vào phải là một số!");
                }
                break;
            }
            case 6: {
                let queryNum = prompt("Nhập số N để tính tổng từ 1 đến N:");
                let n = parseInt(queryNum);
                if (!isNaN(n) && n > 0) {
                    let sum = 0;
                    for (let i = 1; i <= n; i++) {
                        sum += i;
                    }
                    let text = `Tổng các số từ 1 đến ${n} là: ${sum}`;
                    alert(text);
                    logBox.innerText += `[Chức năng 6]: ${text}\n`;
                } else {
                    alert("Vui lòng nhập số nguyên dương lớn hơn 0!");
                }
                break;
            }
            case 7: {
                let daySoInput = prompt("Nhập các số trong dãy, cách nhau bằng dấu phẩy (Ví dụ: 3,5,8,12):");
                if (daySoInput !== null && daySoInput.trim() !== "") {
                    // Tách chuỗi bằng dấu phẩy và loại bỏ khoảng trắng dư thừa
                    let mangSo = daySoInput.split(',').map(item => item.trim());
                    let text = `Dãy số vừa nhập có các phần tử là: ${mangSo.join(' ; ')}`;
                    alert(text);
                    logBox.innerText += `[Chức năng 7]: ${text}\n`;
                }
                break;
            }
            case 8: {
                let queryNum = prompt("Nhập số cần kiểm tra số nguyên tố:");
                let n = parseInt(queryNum);
                if (!isNaN(n)) {
                    let laSNT = true;
                    if (n < 2) laSNT = false;
                    for (let i = 2; i <= Math.sqrt(n); i++) {
                        if (n % i === 0) {
                            laSNT = false;
                            break;
                        }
                    }
                    let text = laSNT ? `Số ${n} LÀ số nguyên tố.` : `Số ${n} KHÔNG PHẢI số nguyên tố.`;
                    alert(text);
                    logBox.innerText += `[Chức năng 8]: ${text}\n`;
                } else {
                    alert("Dữ liệu nhập vào phải là một số!");
                }
                break;
            }
            case 9: {
                let chuoiGoc = prompt("Nhập vào chuỗi kí tự bất kỳ:");
                if (chuoiGoc !== null) {
                    // Thuật toán đảo ngược chuỗi: chuyển sang mảng -> đảo ngược -> gộp lại chuỗi ban đầu
                    let chuoiDao = chuoiGoc.split('').reverse().join('');
                    let text = `Chuỗi gốc: "${chuoiGoc}"\nChuỗi đảo ngược: "${chuoiDao}"`;
                    alert(text);
                    logBox.innerText += `[Chức năng 9]: Đã đảo ngược chuỗi thành công.\n`;
                }
                break;
            }
        }
    }
}