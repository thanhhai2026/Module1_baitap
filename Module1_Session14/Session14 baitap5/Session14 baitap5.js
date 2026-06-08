// Khai báo mảng chứa danh sách sinh viên ban đầu (dạng mảng các đối tượng)
let danhSachSinhVien = [
    { id: "SV001", name: "Nguyễn Văn Thắng", age: 20 },
    { id: "SV002", name: "Trần Thị Mai", age: 21 }
];

// --- CHỨC NĂNG 2: HIỂN THỊ DANH SÁCH SÌNH VIÊN ---
// Hàm thực hiện duyệt qua mảng và render cấu trúc bảng ra màn hình HTML
function hienThiDanhSach() {
    let container = document.getElementById('table_container');
    
    // Nếu danh sách trống
    if (danhSachSinhVien.length === 0) {
        container.innerHTML = `<div class="empty-message">Danh sách đang trống. Vui lòng thêm sinh viên mới!</div>`;
        return;
    }

    // Tạo cấu trúc bảng HTML
    let htmlTable = `
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã SV (ID)</th>
                    <th>Họ và Tên</th>
                    <th>Tuổi</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Sử dụng vòng lặp để duyệt qua danh sách và in thông tin từng sinh viên
    for (let i = 0; i < danhSachSinhVien.length; i++) {
        let sv = danhSachSinhVien[i];
        htmlTable += `
            <tr>
                <td>${i + 1}</td>
                <td><strong>${sv.id}</strong></td>
                <td>${sv.name}</td>
                <td>${sv.age}</td>
            </tr>
        `;
    }

    htmlTable += `
            </tbody>
        </table>
    `;

    // Xuất dữ liệu ra màn hình
    container.innerHTML = htmlTable;
}

// --- CHỨC NĂNG 1: THÊM SINH VIÊN MỚI ---
function themSinhVien() {
    let idInput = document.getElementById('sv_id').value.trim();
    let nameInput = document.getElementById('sv_name').value.trim();
    let ageInput = document.getElementById('sv_age').value.trim();

    // Kiểm tra dữ liệu đầu vào không được để trống
    if (idInput === "" || nameInput === "" || ageInput === "") {
        alert("Vui lòng điền đầy đủ thông tin Tên, Tuổi và ID sinh viên!");
        return;
    }

    // Kiểm tra ID trùng lặp bằng cấu trúc điều kiện lặp
    for (let i = 0; i < danhSachSinhVien.length; i++) {
        if (danhSachSinhVien[i].id.toUpperCase() === idInput.toUpperCase()) {
            alert(`Lỗi: Mã sinh viên (ID) "${idInput}" đã tồn tại trong hệ thống!`);
            return;
        }
    }

    // Tạo một đối tượng sinh viên mới
    let sinhVienMoi = {
        id: idInput,
        name: nameInput,
        age: parseInt(ageInput)
    };

    // Thêm sinh viên vào mảng danh sách
    danhSachSinhVien.push(sinhVienMoi);

    // Làm sạch (reset) các ô nhập liệu sau khi thêm thành công
    document.getElementById('sv_id').value = "";
    document.getElementById('sv_name').value = "";
    document.getElementById('sv_age').value = "";

    // Cập nhật lại giao diện hiển thị
    hienThiDanhSach();
    alert("Đã thêm sinh viên vào danh sách thành công!");
}

// --- CHỨC NĂNG 3: XÓA SINH VIÊN THEO ID ---
function xoaSinhVienTheoID() {
    let idXoa = document.getElementById('delete_id').value.trim();
    
    if (idXoa === "") {
        alert("Vui lòng nhập ID sinh viên cần xóa!");
        return;
    }

    let viTriTimThay = -1;

    // Duyệt qua danh sách bằng vòng lặp để tìm vị trí phần tử trùng ID
    for (let i = 0; i < danhSachSinhVien.length; i++) {
        if (danhSachSinhVien[i].id.toUpperCase() === idXoa.toUpperCase()) {
            viTriTimThay = i; // Lưu lại chỉ mục (index) nếu tìm thấy
            break;
        }
    }

    // Câu lệnh điều kiện kiểm tra sự tồn tại của ID
    if (viTriTimThay !== -1) {
        // Nếu ID tồn tại, xóa 1 phần tử tại vị trí index tìm thấy
        danhSachSinhVien.splice(viTriTimThay, 1);
        
        // Làm sạch ô nhập liệu xóa
        document.getElementById('delete_id').value = "";
        
        // Cập nhật lại bảng hiển thị
        hienThiDanhSach();
        alert(`Đã xóa thành công sinh viên có ID: ${idXoa}`);
    } else {
        // Nếu ID không tồn tại, hiển thị thông báo lỗi đúng theo mô tả
        alert(`Lỗi: Không tìm thấy sinh viên nào có ID là "${idXoa}"!`);
    }
}

// Gọi hàm hiển thị lần đầu ngay khi tải trang web để load dữ liệu mẫu
window.onload = hienThiDanhSach;