// Hàm kiểm tra một số có phải số nguyên tố hay không
function laSoNguyenTo(n) {
    if (n < 2) return false;
    
    // Sử dụng vòng lặp for kiểm tra ước số từ 2 đến căn bậc hai của n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Nếu chia hết cho số nào khác thì không phải số nguyên tố
        }
    }
    return true;
}

// Hàm chính để tìm và hiển thị 20 số nguyên tố đầu tiên
function hienThiSoNguyenTo() {
    let count = 0;       // Biến đếm số lượng số nguyên tố đã tìm thấy
    let N = 2;           // Số nguyên bắt đầu kiểm tra từ số 2
    let htmlResult = ""; // Chuỗi lưu trữ mã HTML để in ra màn hình
    
    // Sử dụng vòng lặp while để chạy cho đến khi tìm đủ 20 số
    while (count < 20) {
        if (laSoNguyenTo(N)) {
            // Nếu đúng là SNT, bọc số đó bằng thẻ span để giao diện đẹp hơn
            htmlResult += `<span class="prime-number">${N}</span>`;
            count++; // Tăng biến đếm lên 1
        }
        N++; // Tăng N để kiểm tra số tiếp theo
    }
    
    // Xuất kết quả ra vùng hiển thị trên HTML
    document.getElementById('result').innerHTML = htmlResult;
}