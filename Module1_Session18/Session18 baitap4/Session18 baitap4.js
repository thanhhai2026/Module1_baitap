// Đợi cho cấu trúc HTML được tải xong hoàn toàn
document.addEventListener('DOMContentLoaded', () => {
    // Lấy phần tử ô nhập liệu và toàn bộ các nút bấm
    const outputInput = document.getElementById('output');
    const keys = document.querySelectorAll('.key');

    // Lặp qua từng nút bấm để lắng nghe sự kiện click
    keys.forEach(key => {
        key.addEventListener('click', () => {
            // Kiểm tra xem nút được bấm có phải là nút "Xóa" không
            if (key.classList.contains('delete')) {
                // Sử dụng slice(0, -1) để cắt bỏ ký tự cuối cùng trong chuỗi
                outputInput.value = outputInput.value.slice(0, -1);
            } else {
                // Nếu là các phím chữ cái thường, tiến hành nối chữ vào ô input
                outputInput.value += key.innerText;
            }
        });
    });
});