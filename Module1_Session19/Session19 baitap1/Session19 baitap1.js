// Lấy các phần tử DOM từ form đăng ký
const registerForm = document.getElementById('registerForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Lắng nghe sự kiện submit khi người dùng nhấn nút Register
registerForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn hành vi tải lại trang mặc định của form

    // Reset ẩn toàn bộ thông báo lỗi cũ trước đó
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    
    emailError.innerText = '';
    passwordError.innerText = '';
    confirmPasswordError.innerText = '';

    // Lấy giá trị đầu vào loại bỏ khoảng trắng thừa ở Email
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    let isValid = true;

    // 1. Kiểm tra sự hợp lệ: Email không được bỏ trống
    if (emailValue === "") {
        emailError.innerText = "Email không được bỏ trống.";
        emailError.style.display = 'block';
        isValid = false;
    }

    // 2. Kiểm tra sự hợp lệ: Mật khẩu không được bỏ trống
    if (passwordValue === "") {
        passwordError.innerText = "Mật khẩu không được bỏ trống.";
        passwordError.style.display = 'block';
        isValid = false;
    }

    // 3. Kiểm tra sự hợp lệ: Xác nhận mật khẩu phải trùng khớp
    if (passwordValue !== confirmPasswordValue) {
        confirmPasswordError.innerText = "Xác nhận mật khẩu không trùng khớp.";
        confirmPasswordError.style.display = 'block';
        isValid = false;
    }

    // Nếu có bất kỳ trường nào không hợp lệ thì dừng xử lý
    if (!isValid) return;

    // 4. Kiểm tra sự tồn tại của email đăng ký trong Local Storage
    // Lấy danh sách tài khoản cũ về, nếu chưa có thì mặc định mảng rỗng []
    let accountList = JSON.parse(localStorage.getItem('users_database')) || [];

    // Tìm xem email vừa nhập đã tồn tại trong mảng chưa
    const isEmailExist = accountList.some(user => user.email === emailValue);

    if (isEmailExist) {
        emailError.innerText = "Email này đã được đăng ký. Vui lòng sử dụng email khác.";
        emailError.style.display = 'block';
        return;
    }

    // 5. Lưu tài khoản vừa tạo thành công vào Local Storage
    const newAccount = {
        email: emailValue,
        password: passwordValue
    };

    accountList.push(newAccount); // Đẩy tài khoản mới vào mảng
    localStorage.setItem('users_database', JSON.stringify(accountList)); // Lưu đè mảng mới cập nhật vào bộ nhớ

    // Thông báo thành công và làm sạch Form nhập liệu
    alert('Đăng ký tài khoản thành công!');
    registerForm.reset();
});