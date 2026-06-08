// Biến lưu trữ biểu thức tính toán hiện tại dưới dạng chuỗi (Đã xóa khoảng trắng lỗi)
let bieuThucHienTai = "";

/**
 * Hàm cập nhật lại nội dung hiển thị trên màn hình máy tính
 */
function capNhatManHinh(value) {
    let display = document.getElementById('calc_display');
    if (value === "") {
        display.innerText = "0";
    } else {
        // Thay thế ký tự nhân '*' thành 'x' để người dùng dễ quan sát hơn
        display.innerText = value.replace(/\*/g, 'x');
    }
}

/**
 * Hàm xử lý khi người dùng nhấn nút số hoặc dấu chấm thập phân
 */
function nhapSo(so) {
    // Ngăn chặn trường hợp nhập nhiều dấu chấm thập phân liên tiếp lỗi cú pháp
    if (so === '.' && bieuThucHienTai.endsWith('.')) {
        return;
    }
    bieuThucHienTai += so;
    capNhatManHinh(bieuThucHienTai);
}

/**
 * Hàm xử lý khi người dùng nhấn nút chọn toán tử (+, -, *, /)
 */
function nhapToanTu(toanTu) {
    if (bieuThucHienTai === "") {
        // Nếu chưa nhập số nào mà ấn dấu trừ, cho phép nhập số âm
        if (toanTu === '-') {
            bieuThucHienTai += toanTu;
            capNhatManHinh(bieuThucHienTai);
        }
        return;
    }
    
    // Kiểm tra xem ký tự cuối cùng có phải toán tử không, nếu phải thì thay thế bằng toán tử mới
    let kyTuCuoi = bieuThucHienTai.slice(-1);
    if (['+', '-', '*', '/'].includes(kyTuCuoi)) {
        bieuThucHienTai = bieuThucHienTai.slice(0, -1) + toanTu;
    } else {
        bieuThucHienTai += toanTu;
    }
    capNhatManHinh(bieuThucHienTai);
}

/**
 * Hàm xóa toàn bộ biểu thức dữ liệu về trạng thái ban đầu (Nút C)
 */
function xoaTatCa() {
    bieuThucHienTai = "";
    capNhatManHinh(bieuThucHienTai);
}

/**
 * Hàm tính toán kết quả của biểu thức khi nhấn nút Bằng (=)
 */
function tinhKetQua() {
    if (bieuThucHienTai === "") return;
    
    try {
        // Sử dụng hàm Function() an toàn thay thế cho eval() để tính toán kết quả
        let ketQua = new Function(`return ${bieuThucHienTai}`)();
        
        // Kiểm tra lỗi chia cho số 0
        if (ketQua === Infinity || ketQua === -Infinity) {
            alert("Lỗi: Không thể thực hiện phép chia cho số 0!");
            xoaTatCa();
            return;
        }
        
        // Làm tròn số thập phân (nếu có) tối đa 4 chữ số cho gọn màn hình
        if (Number(ketQua) === ketQua && ketQua % 1 !== 0) {
            let decimalLength = ketQua.toString().split('.')[1]?.length || 0;
            if (decimalLength > 4) {
                ketQua = parseFloat(ketQua.toFixed(4));
            }
        }
        
        bieuThucHienTai = ketQua.toString();
        capNhatManHinh(bieuThucHienTai);
    } catch (error) {
        alert("Lỗi: Biểu thức toán học không hợp lệ!");
        xoaTatCa();
    }
}