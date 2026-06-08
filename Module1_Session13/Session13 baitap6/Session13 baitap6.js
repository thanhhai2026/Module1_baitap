// Khai báo mảng số nguyên toàn cục
let mangSoNguyen = [];

// Hàm tự động khởi tạo mảng từ 10 đến 20 phần tử với các giá trị ngẫu nhiên từ 1 đến 20
function khoiTaoMang() {
    // Tạo ngẫu nhiên độ dài mảng trong khoảng [10, 20]
    let doDaiMang = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    
    // Reset lại mảng
    mangSoNguyen = [];
    
    for (let i = 0; i < doDaiMang; i++) {
        // Sinh số ngẫu nhiên từ 1 đến 20 để tăng tỉ lệ trùng lặp, giúp dễ test tính năng đếm
        let giaTri = Math.floor(Math.random() * 20) + 1;
        mangSoNguyen.push(giaTri);
    }
    
    // Hiển thị mảng lên giao diện người dùng
    document.getElementById('array_container').innerHTML = 
        `<strong>Mảng hiện tại (${doDaiMang} phần tử):</strong><br>[ ${mangSoNguyen.join(', ')} ]`;
        
    // Ẩn vùng kết quả cũ khi đổi mảng mới
    document.getElementById('result_container').style.display = "none";
}

// Hàm đếm số lần xuất hiện của số nguyên k
function demGiaTriK() {
    let inputVal = document.getElementById('input_k').value;
    let resBox = document.getElementById('result_container');
    
    // Kiểm tra dữ liệu đầu vào
    if (inputVal === "") {
        alert("Vui lòng nhập một số nguyên k trước!");
        return;
    }
    
    let k = parseInt(inputVal);
    let count = 0;
    
    // Sử dụng vòng lặp (for cơ bản hoặc for...of) để duyệt qua mảng và đếm
    for (let i = 0; i < mangSoNguyen.length; i++) {
        // Sử dụng câu lệnh điều kiện if để kiểm tra
        if (mangSoNguyen[i] === k) {
            count++;
        }
    }
    
    // Hiển thị kết quả ra màn hình web
    resBox.style.display = "block";
    if (count > 0) {
        resBox.style.backgroundColor = "#f0fdf4";
        resBox.style.borderColor = "#bbf7d0";
        resBox.style.color = "#16a34a";
        resBox.innerHTML = `Số nguyên k = ${k} xuất hiện <span style="font-size: 1.2rem;">${count}</span> lần trong mảng.`;
    } else {
        resBox.style.backgroundColor = "#fef2f2";
        resBox.style.borderColor = "#fca5a5";
        resBox.style.color = "#dc2626";
        resBox.innerHTML = `Số nguyên k = ${k} KHÔNG xuất hiện lần nào trong mảng.`;
    }
}

// Tự động chạy tạo mảng ngay khi tải trang xong
window.onload = khoiTaoMang;