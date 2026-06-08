// Khai báo 3 mảng mẫu cho trước theo đúng dữ liệu của đề bài
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50];
const arr3 = [1, 3, 5, 7, 9];

/**
 * Hàm nhận vào một mảng và tính tổng các phần tử bằng phương thức reduce()
 * @param {number[]} array - Mảng các số nguyên cần tính tổng
 * @returns {number} - Tổng giá trị của các phần tử trong mảng
 */
function tinhTongMang(array) {
    // reduce nhận vào accumulator (biến tích lũy) và currentValue (giá trị hiện tại)
    // Giá trị khởi tạo ban đầu truyền vào ở cuối là 0
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

/**
 * Hàm điều phối xử lý sự kiện click nút bấm trên giao diện
 * @param {number} option - Số thứ tự mảng lựa chọn (1, 2 hoặc 3)
 */
function chayBaiTap(option) {
    let mangDuocChon;
    let tenMang;

    // Xác định mảng dựa trên nút được ấn
    if (option === 1) {
        mangDuocChon = arr1;
        tenMang = "arr1";
    } else if (option === 2) {
        mangDuocChon = arr2;
        tenMang = "arr2";
    } else {
        mangDuocChon = arr3;
        tenMang = "arr3";
    }

    // Gọi hàm tính tổng bằng phương thức reduce() đã định nghĩa ở trên
    let tong = tinhTongMang(mangDuocChon);

    // Hiển thị kết quả ra ngoài màn hình HTML
    let resultBox = document.getElementById('result_display');
    resultBox.style.display = "block";
    resultBox.innerHTML = `Kết quả thực thi:<br>tinhTongMang(${tenMang}) => Tổng thu được là: ${tong}`;
}