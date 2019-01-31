# Intl Message

### Nó là gì?

​	Đây là một thành phần giúp chúng ta trong việc hiển thị đa ngôn ngữ. Với tham số truyền vào là một keyword đã được khai báo trong danh sách message của đa ngôn ngữ, thì thành phần này sẽ render ra đúng phần giá trị tương ứng với keyword đó của ngôn ngữ hiện tại.

### Khi nào sử dụng nó?

​	Tại nơi nào bạn muốn hiển thị nội dung mà phụ thuộc vào ngôn ngữ. Nghĩa là nếu người dùng chọn ngôn ngữ là Việt Nam thì văn bản đó sẽ hiển thị theo ngôn ngữ Việt, nếu người dùng chọn ngôn ngữ là English thì văn bản đó sẽ hiển thị theo ngôn ngữ là tiếng anh.

### Sử dụng nó như thế nào?

​	Để sử dụng được thành phần này chúng ta làm theo các bước sau:

1. Import thành phần này vào trong file bạn cần sử dụng:

   ```
   import IntlMessages from 'components/intl-message/intlMessages;
   ```

2. Khai báo thành phần tại ví trí muốn xuất hiện ra văn bản:

   ```
    <IntlMessages id={label} />
   ```

3. Cấu hình tham số đầu vào:

   Ở bước 2, ta thấy có props truyền vào là id, tham số này nhận vào một chuổi, nó là keyword được khai báo trong file locales với nhiều ngôn ngữ khác nhau. Nghĩa là tại đây cần khai báo keyword muốn lấy ra giá trị văn bản để hiển thị.

4. Insert giá trị đầu vào và đầu ra vào trong file locales tương ứng với các ngôn ngữ:

   Ở bước này thật ra là bước cấu hình để cho bước 3 chạy, vậy chúng ta cần vạo thư mục locales thư đường dẫn sau:

   ```
   src/language-provider/locales
   ```

   Trong thư mục này sẽ định nghĩa tất cả các file định dạng đa ngôn ngữ, mỗi file tương ứng với một ngôn ngữ mà hệ thống hỗ trợ. Chúng ta cần khai báo keyword sử dụng ở tất cả các file (vì khi đổi ngôn ngữ thì hệ thống dựa vào các file này để load lên đúng ngôn ngữ cần hiển thị).

   Tới đây, chúng ta copy keyword mà đã khai báo ở bước 3, bỏ vào trong từng file. và điền vào values mà bạn muốn hiển thị tương ứng với keyword này.

   ví dụ: Chúng ta muốn sử dụng các keyword như bảng dưới đây:

   | keyword | values tiếng việt | Values tiếng anh |
   | ------- | ----------------- | ---------------- |
   | menu    | Danh mục          | Menu             |
   | company | Công ty           | Company          |
   | user    | Người dùng        | User             |

   Với các key muốn dùng như trên thì ở file vi_VN.js trong thư mục locales ta khai báo như sau:

   `{`

   ​	`"menu":"Danh mục",`

   ​	`company":"Công ty",`

   ​	`"user":"Người dùng"`

   `}`

   Tương tự, file en_US.js trong thư mục locales ta khai báo như sau:

   `{`

   ​	`"menu":"Menu",`

   ​	`company":"Company",`

   ​	`"user":"Users"`

   `}`

