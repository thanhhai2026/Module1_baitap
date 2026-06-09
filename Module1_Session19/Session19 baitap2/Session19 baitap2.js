// Mảng dữ liệu mẫu ban đầu theo mô tả trong đề bài của bạn
const INITIAL_COURSES = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách'
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm thầ` '
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci ớt ớt'
    }
];

// Khởi tạo mảng bằng cách đọc từ Local Storage, nếu trống thì gán mảng mẫu ban đầu vào
let taskList = JSON.parse(localStorage.getItem('task_management_list')) || INITIAL_COURSES;

// Lấy các thành phần DOM form nhập liệu
const taskForm = document.getElementById('taskForm');
const taskIdInput = document.getElementById('taskId');
const taskContentInput = document.getElementById('taskContent');
const taskDueDateInput = document.getElementById('taskDueDate');
const taskStatusInput = document.getElementById('taskStatus');
const taskAssignedToInput = document.getElementById('taskAssignedTo');
const btnSubmit = document.getElementById('btnSubmit');
const taskTableBody = document.getElementById('taskTableBody');

// --- HÀM RENDER ĐỌC VÀ HIỂN THỊ DỮ LIỆU (Read) ---
function renderTasks() {
    taskTableBody.innerHTML = ''; // Làm sạch bảng cũ

    taskList.forEach((task, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td class="text-center">${index + 1}</td>
            <td>${task.content}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td>${task.assignedTo}</td>
            <td class="column-action">
                <button class="btn-action" onclick="loadTaskToForm(${task.id})">Sửa</button>
                <button class="btn-action" onclick="deleteTask(${task.id})">Xóa</button>
            </td>
        `;
        taskTableBody.appendChild(tr);
    });

    // Đồng bộ sao lưu vào Local Storage định dạng chuỗi JSON
    localStorage.setItem('task_management_list', JSON.stringify(taskList));
}

// --- CHỨC NĂNG THÊM MỚI (Create) HOẶC CẬP NHẬT (Update) ---
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const content = taskContentInput.value.trim();
    const dueDate = taskDueDateInput.value;
    const status = taskStatusInput.value;
    const assignedTo = taskAssignedToInput.value.trim();
    const editId = taskIdInput.value; // Lấy ID ẩn xem có đang ở chế độ sửa không

    // Kiểm tra tính hợp lệ bắt buộc điền đầy đủ các thông tin
    if (!content || !dueDate || !status || !assignedTo) {
        alert('Vui lòng điền và chọn đầy đủ tất cả các trường thông tin!');
        return;
    }

    if (editId) {
        // ĐANG TRONG CHẾ ĐỘ SỬA: Tìm và cập nhật lại đầu việc có ID trùng khớp
        taskList = taskList.map(task => {
            if (task.id === parseInt(editId)) {
                return { ...task, content, dueDate, status, assignedTo };
            }
            return task;
        });
        taskIdInput.value = ''; // Xóa ID ẩn khôi phục trạng thái ban đầu
        btnSubmit.innerText = 'Submit';
    } else {
        // ĐANG TRONG CHẾ ĐỘ THÊM MỚI: Tạo object dữ liệu mới với id tự tăng sinh ngẫu nhiên
        const newTask = {
            id: Date.now(), // Sử dụng timestamp làm ID duy nhất không trùng lặp
            content,
            dueDate,
            status,
            assignedTo
        };
        taskList.push(newTask);
    }

    taskForm.reset(); // Làm sạch toàn bộ form nhập
    taskStatusInput.value = ""; // Đặt lại trạng thái placeholder cho ô select
    renderTasks(); // Vẽ lại bảng dữ liệu mới
});

// --- CHỨC NĂNG ĐỔ DỮ LIỆU LÊN FORM ĐỂ CHUẨN BỊ SỬA (Update - Bước 1) ---
function loadTaskToForm(id) {
    const task = taskList.find(t => t.id === id);
    if (!task) return;

    // Gán dữ liệu của dòng được chọn lên các ô input tương ứng
    taskIdInput.value = task.id;
    taskContentInput.value = task.content;
    taskDueDateInput.value = task.dueDate;
    taskStatusInput.value = task.status;
    taskAssignedToInput.value = task.assignedTo;

    // Đổi tên nhãn nút bấm thành Update hoặc giữ Submit tùy ý thích của bạn
    btnSubmit.innerText = 'Update';
}

// --- CHỨC NĂNG XÓA ĐẦU VIỆC (Delete) ---
function deleteTask(id) {
    if (confirm('Bạn có chắc chắn muốn xóa đầu việc quản lý này không?')) {
        // Lọc giữ lại các đầu việc có ID khác với ID cần xóa
        taskList = taskList.filter(task => task.id !== id);
        
        // Nếu đang sửa dòng đó mà bấm xóa thì hủy trạng thái sửa của form
        if (parseInt(taskIdInput.value) === id) {
            taskForm.reset();
            taskIdInput.value = '';
            btnSubmit.innerText = 'Submit';
        }
        
        renderTasks(); // Cập nhật lại giao diện
    }
}

// Tự động tải và kết xuất dữ liệu ngay khi mở ứng dụng web lên
document.addEventListener('DOMContentLoaded', renderTasks);