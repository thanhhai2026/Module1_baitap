/**
 * Hàm kiểm tra xem một chuỗi kí tự có phải là chuỗi đối xứng hay không
 * @param {string} str - Chuỗi kí tự cần kiểm tra
 * @returns {boolean} - Trả về true nếu đối xứng, ngược lại trả về false
 */
function isPalindrome(str) {
    // Để việc kiểm tra chính xác (ví dụ: "Radar" vẫn tính là đối xứng), 
    // chúng ta nên chuyển toàn bộ chuỗi về dạng chữ thường bằng .toLowerCase()
    let chuoiChuan = str.toLowerCase();

    let dau = 0;
    let cuoi = chuoiChuan.length - 1;

    // Sử dụng vòng lặp duyệt từ hai đầu chuỗi tiến về giữa
    while (dau < cuoi) {
        // Nếu hai kí tự ở vị trí đối xứng không bằng nhau thì không phải Palindrome
        if (chuoiChuan[dau] !== chuoiChuan[cuoi]) {
            return false;
        }
        dau++;
        cuoi--;
    }
    
    return true; // Nếu duyệt hết vòng lặp không thấy cặp nào lệch thì chuỗi đối xứng
}

// Hàm điều khiển chính khi người dùng click vào nút bấm trên giao diện
function chayChuongTrinh() {
    // 1. Cho người dùng nhập chuỗi bằng hàm prompt()
    let textInput = prompt("Nhập vào chuỗi kí tự bạn muốn kiểm tra:");

    // Trường hợp bấm Cancel (Hủy) không nhập
    if (textInput === null) {
        return;
    }

    // Trường hợp nhập chuỗi rỗng
    if (textInput.trim() === "") {
        alert("Bạn chưa nhập kí tự nào!");
        return;
    }

    // 2. Gọi hàm isPalindrome() để kiểm tra chuỗi vừa nhập
    let ketQua = isPalindrome(textInput);

    // 3. Thực hiện thông báo cho người dùng bằng hàm alert() theo yêu cầu
    if (ketQua === true) {
        alert(`Chuỗi "${textInput}" LÀ chuỗi đối xứng (Palindrome).`);
    } else {
        alert(`Chuỗi "${textInput}" KHÔNG PHẢI là chuỗi đối xứng.`);
    }
}