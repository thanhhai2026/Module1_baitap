// Khai báo cấu trúc mảng đối tượng (Object Array) chứa dữ liệu sách mẫu ban đầu
let danhSachSach = [
    { id: "B01", title: "Đắc Nhân Tâm", author: "Dale Carnegie", year: 1936 },
    { id: "B02", title: "Nhà Giả Kim", author: "Paulo Coelho", year: 1988 }
];

// --- 2. HIỂN THỊ DANH SÁCH SÁCH ---
// Duyệt qua danh sách mảng đối tượng và hiển thị thông tin ra màn hình dưới dạng bảng
function hienThiDanhSach(danhSachHienThi = danhSachSach) {
    let container = document.getElementById('table_container');

    if (danhSachHienThi.length === 0) {
        container.innerHTML = `<div class="empty-message">Không có dữ liệu sách nào được hiển thị.</div>`;
        return;
    }

    let htmlTable = `
        <table>
            <thead>
                <tr>
                    <th>Mã sách (ID)</th>
                    <th>Tên sách</th>
                    <th>Tác giả</th>
                    <th>Năm xuất bản</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Vòng lặp duyệt qua danh sách sách
    for (let i = 0; i < danhSachHienThi.length; i++) {
        let sach = danhSachHienThi[i];
        htmlTable += `
            <tr>
                <td><strong>${sach.id}</strong></td>
                <td>${sach.title}</td>
                <td>${sach.author}</td>
                <td>${sach.year}</td>
            </tr>
        `;
    }

    htmlTable += `
            </tbody>
        </table>
    `;

    container.innerHTML = htmlTable;
}

// --- 1. THÊM SÁCH MỚI ---
function themSachMoi() {
    let idInput = document.getElementById('book_id').value.trim();
    let titleInput = document.getElementById('book_title').value.trim();
    let authorInput = document.getElementById('book_author').value.trim();
    let yearInput = document.getElementById('book_year').value.trim();

    // Kiểm tra dữ liệu rỗng
    if (idInput === "" || titleInput === "" || authorInput === "" || yearInput === "") {
        alert("Vui lòng nhập đầy đủ các trường thông tin của sách!");
        return;
    }

    // Kiểm tra trùng lặp ID sách bằng câu lệnh điều kiện lặp
    for (let i = 0; i < danhSachSach.length; i++) {
        if (danhSachSach[i].id.toUpperCase() === idInput.toUpperCase()) {
            alert(`Lỗi: Mã sách (ID) "${idInput}" đã tồn tại!`);
            return;
        }
    }

    // Tạo đối tượng sách mới
    let sachMoi = {
        id: idInput,
        title: titleInput,
        author: authorInput,
        year: parseInt(yearInput)
    };

    // Thêm sách mới vào mảng danh sách sách
    danhSachSach.push(sachMoi);

    // Xóa trắng dữ liệu form nhập
    document.getElementById('book_id').value = "";
    document.getElementById('book_title').value = "";
    document.getElementById('book_author').value = "";
    document.getElementById('book_year').value = "";

    // Cập nhật hiển thị và thông báo
    hienThiDanhSach();
    alert("Đã thêm sách mới vào danh sách thành công!");
}

// --- 3. TÌM KIẾM SÁCH THEO TÊN ---
function timKiemSachTheoTen() {
    let keyword = document.getElementById('search_title').value.trim().toLowerCase();

    if (keyword === "") {
        // Nếu ô tìm kiếm trống, hiển thị lại toàn bộ danh sách gốc
        hienThiDanhSach(danhSachSach);
        return;
    }

    let ketQuaTimKiem = [];

    // Duyệt qua mảng tìm phần tử chứa từ khóa (không phân biệt hoa thường)
    for (let i = 0; i < danhSachSach.length; i++) {
        if (danhSachSach[i].title.toLowerCase().includes(keyword)) {
            ketQuaTimKiem.push(danhSachSach[i]);
        }
    }

    // Nếu không tìm thấy, thông báo cho người dùng biết
    if (ketQuaTimKiem.length === 0) {
        alert(`Không tìm thấy cuốn sách nào chứa từ khóa: "${keyword}"`);
        hienThiDanhSach(danhSachSach); // Trả lại bảng đầy đủ ban đầu
    } else {
        // Nếu tìm thấy, hiển thị riêng danh sách kết quả lọc được lên màn hình
        hienThiDanhSach(ketQuaTimKiem);
    }
}

// --- 4. XÓA SÁCH THEO ID ---
function xoaSachTheoID() {
    let idXoa = document.getElementById('delete_id').value.trim();

    if (idXoa === "") {
        alert("Vui lòng nhập ID sách cần xóa!");
        return;
    }

    let indexCanXoa = -1;

    // Vòng lặp tìm kiếm xem ID cần xóa có tồn tại hay không
    for (let i = 0; i < danhSachSach.length; i++) {
        if (danhSachSach[i].id.toUpperCase() === idXoa.toUpperCase()) {
            indexCanXoa = i;
            break;
        }
    }

    // Cấu trúc điều kiện xử lý xóa hoặc báo lỗi
    if (indexCanXoa !== -1) {
        // Nếu tìm thấy -> Thực hiện xóa khỏi mảng
        danhSachSach.splice(indexCanXoa, 1);
        
        // Reset ô input xóa
        document.getElementById('delete_id').value = "";
        
        // Render lại danh sách cập nhật mới
        hienThiDanhSach();
        alert(`Đã xóa thành công sách có ID: ${idXoa}`);
    } else {
        // Nếu không tồn tại -> Thông báo lỗi
        alert(`Lỗi: Không tìm thấy sách nào có ID là "${idXoa}"!`);
    }
}

// --- 5. THOÁT CHƯƠNG TRÌNH ---
function thoatChuongTrinh() {
    let xacNhan = confirm("Bạn có chắc chắn muốn thoát khỏi chương trình quản lý không?");
    if (xacNhan) {
        // Làm trống vùng hiển thị giao diện danh sách như một hành động đóng chương trình
        document.body.innerHTML = `
            <div style="text-align: center; margin-top: 100px; font-family: sans-serif;">
                <h2>Chương trình quản lý đã dừng.</h2>
                <p>Cảm ơn bạn đã sử dụng hệ thống! Tải lại trang (F5) nếu muốn mở lại chương trình.</p>
            </div>
        `;
    }
}

// Tự động gọi hiển thị danh sách sách mẫu ban đầu khi trang web tải xong
window.onload = function() {
    hienThiDanhSach();
};