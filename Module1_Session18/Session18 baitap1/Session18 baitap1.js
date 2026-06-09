// ==========================================
// BÀI 1: TẠO VÀ TRUY XUẤT THUỘC TÍNH ĐỐI TƯỢNG
// ==========================================
console.log("--- BÀI 1: THÔNG TIN NGƯỜI DÙNG ---");

// 1. Tạo một đối tượng chứa thông tin về một người
const person = {
    name: "Trần Thị B",
    age: 22,
    address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
    phone: "0901234567"
};

// 2. Truy xuất các thuộc tính của đối tượng trên ra màn hình console
console.log("Tên nhân vật:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);
console.log("Số điện thoại:", person.phone);


// ==========================================
// BÀI 2: THAO TÁC VỚI MẢNG ĐỐI TƯỢNG SINH VIÊN
// ==========================================
console.log("\n--- BÀI 2: TRUY XUẤT NEWSTUDENT TỪ MẢNG ---");

// 1. Khởi tạo đối tượng student theo bảng mẫu
const student = {
    id: 1,
    name: "Nguyễn Văn A",
    gender: "nam",
    age: 20,
    mark: 8
};

// 2. Khởi tạo đối tượng newStudent với các thuộc tính tương tự
const newStudent = {
    id: 2,
    name: "Lê Văn C",
    gender: "nam",
    age: 21,
    mark: 9.5
};

// 3. Tạo mảng "students" để chứa danh sách sinh viên
const students = [];
students.push(student);
students.push(newStudent);

// 4. Truy xuất các thuộc tính của "newStudent" thông qua mảng "students"
// (Vì newStudent nằm ở vị trí thứ 2 trong mảng nên chỉ số index truy cập là 1)
console.log("Mã số sinh viên (ID):", students[1].id);
console.log("Tên sinh viên mới:", students[1].name);
console.log("Giới tính:", students[1].gender);
console.log("Tuổi đời:", students[1].age);
console.log("Điểm số tích lũy:", students[1].mark);


// ==========================================
// BÀI 3: TÌM HỌC SINH CÓ ĐIỂM CAO NHẤT
// ==========================================
console.log("\n--- BÀI 3: TÌM HỌC SINH CÓ ĐIỂM CAO NHẤT ---");

// Bước 1: Giả định học sinh đầu tiên (vị trí index 0) tạm thời có điểm cao nhất
let topStudent = students[0];

// Bước 2: Vòng lặp duyệt qua mảng để so sánh điểm số thực tế
for (let i = 1; i < students.length; i++) {
    if (students[i].mark > topStudent.mark) {
        topStudent = students[i]; // Ghi đè cập nhật nếu tìm thấy học sinh điểm cao hơn
    }
}

// Bước 3: Xuất kết quả toàn bộ object học sinh giỏi nhất
console.log("Thông tin chi tiết học sinh xuất sắc nhất:");
console.log(topStudent); 
console.log(`=> Kết luận: Sinh viên ${topStudent.name} dẫn đầu danh sách với mức điểm là ${topStudent.mark}`);