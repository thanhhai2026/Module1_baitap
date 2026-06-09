// Lấy các phần tử DOM cần thiết
const todoInput = document.getElementById('todoInput');
const btnAdd = document.getElementById('btnAdd');
const todoList = document.getElementById('todoList');
const pendingCount = document.getElementById('pendingCount');
const btnClearAll = document.getElementById('btnClearAll');

// Khởi tạo mảng lưu danh sách công việc (Lấy từ Local Storage nếu có)
let todos = JSON.parse(localStorage.getItem('todo_apps_tasks')) || [];

// Hàm hiển thị danh sách ra màn hình (Read)
function renderTodos() {
    todoList.innerHTML = ''; // Xóa sạch danh sách cũ trước khi vẽ lại

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';

        // Tạo cấu trúc hiển thị text công việc hoặc ô input nếu đang sửa
        li.innerHTML = `
            <span class="todo-text" onclick="editTodo(${index})">${todo}</span>
            <button class="btn-delete" onclick="deleteTodo(event, ${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        todoList.appendChild(li);
    });

    // Cập nhật số lượng công việc còn tồn đọng
    pendingCount.innerText = `You have ${todos.length} pending tasks`;

    // Đồng bộ lưu mảng dữ liệu mới nhất vào Local Storage
    localStorage.setItem('todo_apps_tasks', JSON.stringify(todos));
}

// 1. Tính năng THÊM mới Todo (Create)
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') {
        alert('Vui lòng nhập nội dung công việc!');
        return;
    }
    
    todos.push(todoText); // Thêm phần tử mới vào mảng
    todoInput.value = ''; // Reset ô nhập
    renderTodos();        // Vẽ lại giao diện
}

// Bắt sự kiện Click nút "+" hoặc bấm phím Enter
btnAdd.addEventListener('click', addTodo);
todoInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') addTodo();
});

// 2. Tính năng XÓA một phần tử (Delete)
function deleteTodo(event, index) {
    event.stopPropagation(); // Ngăn sự kiện click lan ra thẻ cha (li)
    todos.splice(index, 1);  // Xóa 1 phần tử tại vị trí index
    renderTodos();           // Cập nhật lại giao diện
}

// 3. Tính năng SỬA đổi nội dung (Update)
function editTodo(index) {
    const todoItems = document.querySelectorAll('.todo-item');
    const currentItem = todoItems[index];
    const textSpan = currentItem.querySelector('.todo-text');
    const currentText = todos[index];

    // Thay thế text bằng một thẻ input để người dùng nhập nội dung mới
    textSpan.innerHTML = `<input type="text" class="edit-input" value="${currentText}">`;
    const editInput = textSpan.querySelector('.edit-input');
    editInput.focus();

    // Lưu lại khi bấm Enter hoặc click ra ngoài (blur)
    editInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') saveEdit(index, editInput.value);
    });
    editInput.addEventListener('blur', () => {
        saveEdit(index, editInput.value);
    });
}

function saveEdit(index, newValue) {
    const updatedValue = newValue.trim();
    if (updatedValue !== '') {
        todos[index] = updatedValue; // Thay đổi giá trị cũ bằng giá trị mới
    }
    renderTodos(); // Cập nhật lại danh sách và lưu Local Storage
}

// 4. Tính năng XÓA SẠCH tất cả (Clear All)
btnClearAll.addEventListener('click', () => {
    if (todos.length === 0) return;
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách không?')) {
        todos = [];
        renderTodos();
    }
});

// Chạy hàm hiển thị danh sách ngay khi tải/tải lại trang
document.addEventListener('DOMContentLoaded', renderTodos);