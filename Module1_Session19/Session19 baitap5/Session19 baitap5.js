// Lấy các phần tử DOM giao diện cần tương tác
const btnOpenModal = document.getElementById('btnOpenModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const modalOverlay = document.getElementById('modalOverlay');
const bookmarkForm = document.getElementById('bookmarkForm');
const websiteNameInput = document.getElementById('websiteName');
const websiteUrlInput = document.getElementById('websiteUrl');
const bookmarksContainer = document.getElementById('bookmarksContainer');

// Lấy danh sách Bookmark từ bộ nhớ Local Storage (Nếu chưa có thì khởi tạo mảng rỗng)
let bookmarks = JSON.parse(localStorage.getItem('my_bookmark_list')) || [];

// --- CHỨC NĂNG 1: ĐÓNG / MỞ KHUNG POPUP MODAL ---
function toggleModal(show) {
    if (show) {
        modalOverlay.classList.add('show');
        websiteNameInput.focus();
    } else {
        modalOverlay.classList.remove('show');
        bookmarkForm.reset(); // Xóa sạch dữ liệu đã gõ dở trong các ô Input
    }
}

btnOpenModal.addEventListener('click', () => toggleModal(true));
btnCloseModal.addEventListener('click', () => toggleModal(false));

// Đóng modal khi người dùng bấm click ra vùng ngoài hộp thoại trắng
window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) toggleModal(false);
});


// --- CHỨC NĂNG 2: HIỂN THỊ DANH SÁCH CHÈN VÀO GIAO DIỆN (Read) ---
function renderBookmarks() {
    // Xóa trắng danh sách cũ để cập nhật mảng mới
    bookmarksContainer.innerHTML = '';

    bookmarks.forEach((bookmark, index) => {
        const card = document.createElement('div');
        card.className = 'bookmark-card';

        // Tạo đường dẫn ảnh Favicon tự động dựa vào URL của trang web để giao diện đẹp hơn
        const faviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain=${bookmark.url}`;

        card.innerHTML = `
            <a class="bookmark-link" href="${bookmark.url}" target="_blank">
                <img src="${faviconUrl}" onerror="this.src='https://i.imgur.com/v8tT9D7.png';this.onerror=null;" alt="icon">
                <span>${bookmark.name}</span>
            </a>
            <button class="btn-delete" onclick="deleteBookmark(${index})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        bookmarksContainer.appendChild(card);
    });

    // Đồng bộ sao lưu dữ liệu mới nhất vào trong Local Storage định dạng JSON text
    localStorage.setItem('my_bookmark_list', JSON.stringify(bookmarks));
}


// --- CHỨC NĂNG 3: THÊM MỚI WEBSITE (Create) ---
bookmarkForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn trình duyệt tải lại trang

    const nameValue = websiteNameInput.value.trim();
    let urlValue = websiteUrlInput.value.trim();

    // Kiểm tra dữ liệu rỗng đầu vào
    if (!nameValue || !urlValue) {
        alert('Vui lòng điền đầy đủ cả tên Website và đường dẫn URL!');
        return;
    }

    // Tự động thêm tiền tố "https://" hoặc "http://" nếu người dùng quên nhập để link hoạt động chuẩn
    if (!/^https?:\/\//i.test(urlValue)) {
        urlValue = `https://${urlValue}`;
    }

    // Đẩy đối tượng mới vào mảng quản lý chung
    bookmarks.push({
        name: nameValue,
        url: urlValue
    });

    // Cập nhật giao diện, đóng modal form
    renderBookmarks();
    toggleModal(false);
});


// --- CHỨC NĂNG 4: XÓA WEBSITE (Delete) ---
function deleteBookmark(index) {
    // Xóa phần tử khỏi mảng tại vị trí index chỉ định
    bookmarks.splice(index, 1);
    // Vẽ lại danh sách và cập nhật Local Storage
    renderBookmarks();
}


// Tự động kích hoạt hiển thị danh sách ngay khi mở trang web lên
document.addEventListener('DOMContentLoaded', renderBookmarks);