// Biến toàn cục để lưu trữ mảng số nguyên
let mangSoNguyen = [];

// Hàm tạo ngẫu nhiên một mảng có từ 10 đến 20 phần tử
function taoMangNgauNhien() {
    // Sinh số lượng phần tử ngẫu nhiên trong khoảng [10, 20]
    let soPhanTu = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    
    // Reset lại mảng cũ
    mangSoNguyen = [];
    
    for (let i = 0; i < soPhanTu; i++) {
        // Tạo số nguyên ngẫu nhiên bất kỳ từ 1 đến 100
        let giaTriNgauNhien = Math.floor(Math.random() * 100) + 1;
        mangSoNguyen.push(giaTriNgauNhien);
    }
    
    // Hiển thị mảng vừa tạo lên giao diện
    let displayBox = document.getElementById('array_display');
    displayBox.innerHTML = `Đã tạo mảng thành công với <span class="bold-text">${soPhanTu}</span> phần tử:<br><span class="bold-text">[${mangSoNguyen.join(', ')}]</span>`;
    
    // Ẩn hộp kết quả cũ đi nếu có
    document.getElementById('result_display').style.display = "none";
}

// Hàm tính tổng chẵn, tổng lẻ và đưa ra thông báo alert() theo yêu cầu đề bài
function tinhTongChanLe() {
    if (mangSoNguyen.length === 0) {
        alert("Vui lòng bấm nút 'Tạo mảng ngẫu nhiên' trước khi tính toán!");
        return;
    }

    let tongLe = 0;
    let tongChan = 0;

    // Sử dụng vòng lặp for...of (hoặc for cơ bản) kết hợp điều kiện if...else
    for (let so of mangSoNguyen) {
        if (so % 2 !== 0) {
            tongLe += so; // Nếu chia 2 dư khác 0 thì là số lẻ
        } else {
            tongChan += so; // Ngược lại là số chẵn
        }
    }

    // Hiển thị kết quả bằng alert() đúng như yêu cầu của bài tập
    alert(`Tổng các số LẺ trong mảng là: ${tongLe}`);
    alert(`Tổng các số CHẴN trong mảng là: ${tongChan}`);

    // Đồng thời hiển thị trực quan ra màn hình bên dưới để dễ nhìn lại kết quả
    let resBox = document.getElementById('result_display');
    resBox.style.display = "block";
    resBox.innerHTML = `✨ <span class="bold-text">Kết quả tính toán:</span><br>
                        - Tổng các số lẻ: <span class="bold-text" style="color: #e11d48;">${tongLe}</span><br>
                        - Tổng các số chẵn: <span class="bold-text" style="color: #16a34a;">${tongChan}</span>`;
}