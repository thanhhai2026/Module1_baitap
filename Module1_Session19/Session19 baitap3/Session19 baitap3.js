// Giả lập tài khoản đúng trong hệ thống để đối chiếu
const MOCK_USER = {
    email: "admin@gmail.com",
    password: "password123"
};

// Lấy các phần tử DOM cần thiết
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const rememberMeCheckbox = document.getElementById('rememberMe');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// 1. Logic ẩn/hiện mật khẩu dạng văn bản khi bấm vào Icon mắt
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Thay đổi biểu tượng icon (mắt mở / mắt đóng gạch chéo)
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// 2. Tự động kiểm tra và điền Email nếu người dùng đã tích chọn "Ghi nhớ" trước đó
window.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const expiryTime = localStorage.getItem('rememberExpiry');
    
    // Kiểm tra nếu có dữ liệu lưu trữ và thời hạn 24 giờ chưa kết thúc
    if (savedEmail && expiryTime && Date.now() < parseInt(expiryTime)) {
        emailInput.value = savedEmail;
        rememberMeCheckbox.checked = true;
    } else {
        // Nếu đã quá 24 giờ thì tiến hành xóa dữ liệu đã hết hạn
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberExpiry');
    }
});

// 3. Xử lý sự kiện Submit Form (Kiểm tra hợp lệ & Đối chiếu đăng nhập)
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn trình duyệt tải lại trang theo mặc định

    // Reset xóa các thông báo lỗi cũ
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    emailError.innerText = '';
    passwordError.innerText = '';

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;
    let isValid = true;

    // Kiểm tra bỏ trống trường Email
    if (emailValue === "") {
        emailError.innerText = "Email không được bỏ trống.";
        emailError.style.display = 'block';
        isValid = false;
    }

    // Kiểm tra bỏ trống trường Password
    if (passwordValue === "") {
        passwordError.innerText = "Password không được bỏ trống.";
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (!isValid) return; // Nếu form bị trống thì dừng lại không xử lý tiếp

    // Kiểm tra tính trùng khớp với tài khoản hệ thống (MOCK_USER)
    if (emailValue === MOCK_USER.email && passwordValue === MOCK_USER.password) {
        
        // Xử lý lựa chọn "Ghi nhớ tài khoản trong 24 giờ" bằng LocalStorage
        if (rememberMeCheckbox.checked) {
            const expiryDuration = 24 * 60 * 60 * 1000; // Đổi 24 giờ ra mili-giây
            const expiryTime = Date.now() + expiryDuration;
            localStorage.setItem('rememberedEmail', emailValue);
            localStorage.setItem('rememberExpiry', expiryTime);
        } else {
            // Nếu không chọn ghi nhớ thì xóa lịch sử lưu cũ (nếu có)
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberExpiry');
        }

        alert('Đăng nhập thành công!');
        // Thực hiện chuyển hướng đến trang chủ
        window.location.href = "home.html"; 

    } else {
        // Thông báo lỗi nếu sai tài khoản hoặc mật khẩu không trùng khớp
        passwordError.innerText = "Email hoặc Password không trùng khớp.";
        passwordError.style.display = 'block';
    }
});