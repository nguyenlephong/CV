# Async Component 

### Nó là gì?

Đây là một function giúp mình có thể tải một component đồng bộ các prop truyền từ component cha xuống, cho chúng ta biểu tường load, nếu tải chưa xong thì sẽ có icon xoay vòng, khi tải hoàn tất thì nó sẽ mất.

### Khi nào dùng nó?

Khi chúng ta muốn load một component đồng bộ các prop từ trên truyền xuống, có hiển thị icon load xoay xoay.

### Dùng nó như thế nào?

Để sử dụng function này chúng ta thực hiện 2 bước sau:

1. Import function này vào file bạn muốn sử dụng

   ```
   import asyncComponent from 'helpers/ui/async-function/AsyncFunc';
   ```

2. Gọi function này với arrow function con là tham số:

   ```
   asyncComponent(() => import("containers/page/admin/dashboard"))
   ```

   Trong đó, đường dẫn bên trong import là đường dẫn đến file js chứa component cần load

