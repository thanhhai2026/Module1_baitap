console.log("================ BÀI 1: QUẢN LÝ SẢN PHẨM ================");

// Mảng dữ liệu ban đầu
let products = [
    { id: 1, name: 'Milk', count: 100 },
    { id: 2, name: 'Orange', count: 100 },
    { id: 3, name: 'Butter', count: 100 },
];
console.log("Mảng sản phẩm ban đầu:", JSON.parse(JSON.stringify(products)));

// 1. Thêm đối tượng mới có các thuộc tính tương tự vào mảng "products"
let newProduct = { id: 4, name: 'Apple', count: 50 };
products.push(newProduct);
console.log("1. Mảng sau khi thêm sản phẩm 'Apple':", JSON.parse(JSON.stringify(products)));

// 2. Xóa đối tượng có id là 2
products = products.filter(product => product.id !== 2);
console.log("2. Mảng sau khi xóa đối tượng ID = 2:", JSON.parse(JSON.stringify(products)));

// 3. Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
let productToUpdate = products.find(product => product.id === 3);
if (productToUpdate) {
    productToUpdate.count = 0;
}
console.log("3. Mảng sau khi sửa count sản phẩm ID = 3 thành 0:", JSON.parse(JSON.stringify(products)));

// 4. Cho từ khóa "Butter". Kiểm tra từ khóa có trong mảng hay không?
let keyword = "Butter";
let foundProduct = products.find(product => product.name.toLowerCase() === keyword.toLowerCase());

console.log(`4. Kết quả tìm kiếm cho từ khóa "${keyword}":`);
if (foundProduct) {
    console.log("   -> Tìm thấy sản phẩm thành công! Chi tiết:", foundProduct);
} else {
    console.log("   -> Không có dữ liệu bạn tìm kiếm");
}