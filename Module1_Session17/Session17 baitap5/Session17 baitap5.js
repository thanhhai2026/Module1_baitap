// Khai báo thông tin tài khoản cố định (fix cứng) theo yêu cầu đề bài
const ACCOUNT_CONFIG = {
    username: "huanrose@gmail.com",
    password: "123" // Chú ý: Đề bài ghi 123456 nhưng ảnh ghi 123, mình để 123 theo mẫu nhé
};

/**
 * Hàm xử lý sự kiện khi người dùng nhấn nút Đăng nhập (Submit)
 * @param {Event} event - Sự kiện submit của form
 */
function xuLyDangNhap(event) {
    // Ngăn chặn hành động reload trang mặc định của form
    event.preventDefault();

    // Lấy giá trị từ 2 ô nhập liệu
    let usernameInput = document.getElementById('username').value.trim();
    let passwordInput = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập bằng câu lệnh điều kiện if...else
    if (usernameInput === ACCOUNT_CONFIG.username && passwordInput === ACCOUNT_CONFIG.password) {
        // Nhập đúng: Thông báo đăng nhập thành công bằng alert()
        alert("Đăng nhập thành công!");
    } else {
        // Nhập sai: Thông báo đăng nhập thất bại bằng alert()
        alert("Đăng nhập thất bại!");
    }
}