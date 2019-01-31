# Language provider

### Nó là gì?

Đây là thư mục hỗ trợ cho chức năng đa ngôn ngữ xuyến xuất cho ứng dụng.

### Khi nào sử dụng nó?

1. Khi cần phải khai báo thêm các từ ngữ sử dụng trong hệ thống, mà muốn chúng hiển thị với nhiều thứ ngôn ngữ khác nhau.

2. Khi cần phải thêm một ngôn ngữ mới mà hệ thông muốn cung cấp đến cho người dùng.

### Sử dụng nó như thế nào?

Để sử dụng chức năng này chúng ta cần thực hiện các bước sau:

1. Cấu hình để chức năng này chạy được:

   Ở phần này hệ thống đã cấu hình sẳn, bạn chỉ cần thực hiện từ bước 2 trở đi.

2. Tạo các file hỗ trợ ngôn ngữ phục vụ cho người dùng:

   - Tại thư mục entries bạn tạo một file js với tên file tuân thủ quy tắc của mã ngoại ngữ ví dụ ở Việt Name là vi_VN.js

   Trong đây bạn khai báo nội dung như dưới:

   > import antdVi from 'antd/lib/locale-provider/**vi_VN**';
   > import appLocaleData from 'react-intl/locale-data/**vi**';
   > import viMessages from '../locales/**vi_VN.json**';
   >
   > const **VNLang** = {
   >   messages: {
   > ​    ...viMessages,
   >   },
   >   antd: antdVi,
   >   locale: '**vi**',
   >   data: appLocaleData,
   > };
   > export default **VNLang**;
   >
   > **Trong đó các thành phần in đậm bạn phải thay đổi cho phù hợp với ngôn ngữ của từng quốc gia**

   - Tại thư mục locales bạn tạo các file json cấu hình các keyword mà hệ thống sử dụng. file này có định dạng như sau:

     > ```
     > {
     >     "category.category": "Category",
     >     "category.all_category": "All Category",
     >     "category.add_category": "Add New",
     >     "tag.tag": "Tag",
     >     "tag.add_tag": "Add New",
     > }
     > ```
     >
     > Trong đó: các giá trị bên trái dấu : là các keyword mà hệ thống sử dụng để parse ra các ngôn ngữ khác nhau. Do đó, các key này ở các file đa ngôn ngữ đều phải giống nhau. Còn các giá trị bên phải dấu : là các giá trị sẽ hiển thị theo một ngôn ngữ.

Hệ thống đã xấy dựng trước 5 ngôn ngữ khác nhau rồi, bạn vào thư mục này và tham khảo các cấu hình sẽ biết cách sử dụng được tính năng này.