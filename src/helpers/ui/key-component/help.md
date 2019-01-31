# Key component

### Nó là gì?

Đây là một function hỗ trợ cho việc render ra các component không bị trùng key, không bị cảnh báo bởi console của trình duyệt

### Khi nào dùng nó?

Khi chúng ta dùng vòng lặp để render ra nhiều component mà cần có key để các component không trùng nhau

### Dùng nó như thế nào?

Thực hiện 2 bước sau để sử dụng function này:

1. Import function này vào file bạn muốn sử dụng:

   ```
   import {updateIndex} from 'helpers/ui/key-component/setting_key_antd';
   ```

2. Truyền giá trị của key cần phân biệt giữa các component là hàm này

   ```
   <component key={updateIndex()} />
   ```
