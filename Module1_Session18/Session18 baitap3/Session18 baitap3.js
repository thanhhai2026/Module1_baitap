// 1. Khởi tạo mảng chứa dữ liệu ban đầu giống hệt như ảnh mẫu yêu cầu
let todoData = [
    { id: 1, title: "Xin việc ở Google", completed: true },
    { id: 2, title: "Mua biệt thự", completed: true },
    { id: 3, title: "Cưới vợ", completed: false },
    { id: 4, title: "Mua xe hơi", completed: false },
    { id: 5, title: "Sinh con", completed: false },
    { id: 6, title: "Đi du lịch vòng quanh thế giới", completed: false }
];

// Lấy các phần tử DOM từ giao diện HTML
const todoListElement = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

// 2. Hàm READ: Render (Hiển thị) dữ liệu từ mảng ra giao diện HTML
function renderTodo() {
    // Xóa sạch danh sách cũ để vẽ lại danh sách mới cập nhật
    todoListElement.innerHTML = "";

    // Duyệt qua từng công việc trong mảng dữ liệu
    todoData.forEach((item) => {
        // Tạo thẻ hàng <li>
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerText = item.title;

        // Nếu công việc đã hoàn thành, thêm class "checked" để đổi màu xám và gạch ngang
        if (item.completed) {
            li.classList.add("checked");
        }

        // Tạo nút Xóa (X) cho từng dòng công việc
        const span = document.createElement("span");
        span.className = "delete-btn";
        span.innerText = "×";
        
        // Gắn sự kiện DELETE (Xóa) khi click vào nút x
        span.addEventListener("click", (e) => {
            e.stopPropagation(); // Ngăn sự kiện click bị lan sang thẻ li (gây đổi trạng thái checked)
            deleteTodo(item.id);
        });

        // Gắn sự kiện UPDATE (Thay đổi trạng thái hoàn thành) khi bấm vào dòng công việc
        li.addEventListener("click", () => {
            toggleTodoStatus(item.id);
        });

        // Đưa nút xóa vào trong thẻ li, rồi đưa thẻ li vào danh sách ul
        li.appendChild(span);
        todoListElement.appendChild(li);
    });
}

// 3. Hàm CREATE: Thêm mới một công việc vào danh sách
function addTodo() {
    const titleText = todoInput.value.trim();

    // Kiểm tra nếu người dùng để trống ô nhập
    if (titleText === "") {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    // Thiết lập đối tượng công việc mới với ID tự tăng
    const newTodo = {
        id: todoData.length > 0 ? Math.max(...todoData.map(t => t.id)) + 1 : 1,
        title: titleText,
        completed: false // Mặc định công việc mới là chưa hoàn thành
    };

    // Đẩy vào mảng và cập nhật lại màn hình
    todoData.push(newTodo);
    renderTodo();

    // Xóa chữ trong ô input sau khi thêm xong
    todoInput.value = "";
}

// 4. Hàm UPDATE: Đảo ngược trạng thái hoàn thành (True <-> False)
function toggleTodoStatus(id) {
    todoData = todoData.map(item => {
        if (item.id === id) {
            return { ...item, completed: !item.completed };
        }
        return item;
    });
    renderTodo(); // Vẽ lại giao diện
}

// 5. Hàm DELETE: Xóa bỏ một công việc ra khỏi danh sách
function deleteTodo(id) {
    if (confirm("Bạn có chắc chắn muốn xóa việc này không?")) {
        todoData = todoData.filter(item => item.id !== id);
        renderTodo(); // Vẽ lại giao diện sau khi xóa
    }
}

// --- ĐĂNG KÝ SỰ KIỆN KHI NGƯỜI DÙNG THAO TÁC ---

// Bấm nút "Thêm"
addBtn.addEventListener("click", addTodo);

// Hoặc Nhấn phím Enter khi đang ở trong ô nhập liệu
todoInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
});

// Chạy hiển thị danh sách lần đầu tiên khi tải trang
renderTodo();