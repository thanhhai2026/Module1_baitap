document.addEventListener('DOMContentLoaded', () => {
    // 1. Khởi tạo mảng chứa danh sách Object sinh viên (Dữ liệu mẫu ban đầu giống trong ảnh)
    let students = [
        { id: 1, name: 'Huấn', age: 18, class: 'A1' },
        { id: 2, name: 'Cường', age: 22, class: 'A1' }
    ];

    // Biến dùng để kiểm tra xem đang ở trạng thái "Thêm mới" hay "Sửa"
    let editId = null;

    // 2. Lấy các phần tử DOM từ HTML
    const nameInput = document.getElementById('studentName');
    const ageInput = document.getElementById('studentAge');
    const classInput = document.getElementById('studentClass');
    const btnSubmit = document.getElementById('btnSubmit');
    const searchInput = document.getElementById('searchName');
    const tableBody = document.getElementById('studentTableBody');

    // 3. Hàm hiển thị (Render) danh sách sinh viên ra bảng dữ liệu
    function renderStudents(data = students) {
        tableBody.innerHTML = ''; // Xóa sạch bảng trước khi render lại

        data.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.class}</td>
                <td>
                    <button class="btn-action btn-edit" onclick="editStudent(${student.id})">Sửa</button>
                    <button class="btn-action btn-delete" onclick="deleteStudent(${student.id})">Xóa</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // 4. Chức năng Thêm mới hoặc Cập nhật sinh viên khi bấm nút
    btnSubmit.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const className = classInput.value.trim();

        // Kiểm tra validation cơ bản xem người dùng điền đủ form chưa
        if (!name || !age || !className) {
            alert('Vui lòng nhập đầy đủ thông tin sinh viên!');
            return;
        }

        if (editId !== null) {
            // Nếu editId có giá trị -> Đang trong trạng thái SỬA thông tin
            students = students.map(student => {
                if (student.id === editId) {
                    return { ...student, name: name, age: parseInt(age), class: className };
                }
                return student;
            });
            // Reset lại trạng thái ban đầu sau khi sửa xong
            editId = null;
            btnSubmit.innerText = 'Thêm sinh viên';
            btnSubmit.style.backgroundColor = '#007bff';
        } else {
            // Ngược lại -> Đang trong trạng thái THÊM SINH VIÊN MỚI
            const newStudent = {
                id: Date.now(), // Sử dụng timestamp làm ID duy nhất không trùng lặp
                name: name,
                age: parseInt(age),
                class: className
            };
            students.push(newStudent);
        }

        // Reset trống các ô nhập liệu sau khi xử lý xong dữ liệu
        clearInputs();
        // Cập nhật lại giao diện hiển thị và tìm kiếm (nếu có)
        handleSearch(); 
    });

    // 5. Chức năng Xóa sinh viên
    window.deleteStudent = function(id) {
        if(confirm('Bạn có chắc chắn muốn xóa sinh viên này không?')) {
            students = students.filter(student => student.id !== id);
            handleSearch();
        }
    };

    // 6. Chức năng Đổ dữ liệu lên Form để Sửa thông tin
    window.editStudent = function(id) {
        const targetStudent = students.find(student => student.id === id);
        if (targetStudent) {
            nameInput.value = targetStudent.name;
            ageInput.value = targetStudent.age;
            classInput.value = targetStudent.class;

            // Chuyển nút bấm sang trạng thái "Cập nhật"
            editId = id;
            btnSubmit.innerText = 'Cập nhật';
            btnSubmit.style.backgroundColor = '#28a745'; // Đổi nút sang màu xanh lá khi sửa
        }
    };

    // 7. Chức năng Tìm kiếm sinh viên theo tên (Không phân biệt chữ hoa / chữ thường)
    function handleSearch() {
        const keyword = searchInput.value.toLowerCase().trim();
        const filteredStudents = students.filter(student => 
            student.name.toLowerCase().includes(keyword)
        );
        renderStudents(filteredStudents);
    }

    searchInput.addEventListener('input', handleSearch);

    // Hàm phụ: dùng để xóa sạch text trong các ô input
    function clearInputs() {
        nameInput.value = '';
        ageInput.value = '';
        classInput.value = '';
    }

    // Lần đầu chạy ứng dụng, render danh sách mẫu ra màn hình
    renderStudents();
});