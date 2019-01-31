# Notification

### Nó là gì?

Là một khung chứa nội dung cần thông báo xuất hiện trên các góc mà hình.

### Khi nào dùng nó?

Khi có nhu cầu hiển thị thông báo thông báo tại bất kỳ góc nào trong số bốn góc của màn hình. Thông thường nó có thể được sử dụng trong các trường hợp sau:

- Thông báo có nội dung phức tạp.
- Thông báo cung cấp phản hồi dựa trên tương tác của người dùng. Hoặc nó có thể hiển thị một số chi tiết về các bước sắp tới mà người dùng có thể phải tuân theo.
- Một thông báo được tạo ra bởi ứng dụng.

### Dùng nó như thế nào?

Để sử dụng component này ta thực hiện các bước sau:

1. Import component này vào nơi cần sử dụng, cụ thể như sau:

    ```
    import {showNotification} from 'components/ptp__notification/Notification';
    ```

2. Tại nơi diễn ra sự kiện thông báo này, bạn chèn dòng code bên dưới vào:

   ```
   showNotification("Thông báo","Đây là nội dung thông báo này","topRight","success");
   ```

3. Tiếp theo là tùy chỉnh các tham số cấu hình:

   Trong component này gồm có 4 tham số:

   a. **titleMessage**: Tham số này là tên tiêu đề của thông báo hiển thị, kiểu dữ liệu nhận vào là **string**

   b. **descriptionMessage**: Tham số này là nội dung mô tả của thông báo hiển thị, kiểu dữ liệu nhận vào là **string**

   c. **placement**: Tham số này quyết định cho nơi xuất hiện của thông báo, tham số này có 4 giá trị (`topLeft` `topRight` `bottomLeft` `bottomRight`) , kiểu dữ liệu đầu vào là **string**

   d. **typeMessage**: Tham số này  thể hiện thống báo này thuộc mức cảnh báo nào, tham số này có 4 giá trị :

   - **success**: Thể hiện cho thông báo thành công;

   - **info**: Thể hiện cho thông báo cung cấp thông tin;

   - **warning**: Thể hiện cho thông báo cảnh báo;

   - **error**: Thể hiện cho thông báo lỗi;
