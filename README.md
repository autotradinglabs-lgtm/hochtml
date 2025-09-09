# Basic Web Starter (HTML + CSS + JS)

Bộ khởi đầu tối giản để tạo website cơ bản: semantic HTML5, CSS responsive, JS nhẹ.

## Cấu trúc
```
basic-web-starter/
├─ index.html
├─ styles.css
└─ script.js
```

## Cách chạy tại máy
1. Mở thư mục và **double‑click `index.html`** (hoặc dùng VS Code + extension *Live Server*).
2. Sửa nội dung trong `index.html`, giao diện trong `styles.css`, tương tác trong `script.js`.
3. Reload trang để thấy thay đổi (Live Server tự reload khi lưu).

## Triển khai miễn phí
### GitHub Pages
1. Tạo repo mới, kéo thả toàn bộ file vào.
2. Vào **Settings → Pages** → chọn **Deploy from branch** (branch `main`, thư mục root `/`).
3. Chờ vài phút, site sẽ có link `https://<tên‑tài‑khoản>.github.io/<tên‑repo>/`.

### Netlify (kéo‑thả)
1. Vào https://app.netlify.com/drop và kéo cả thư mục vào.
2. Netlify tạo site và cấp domain miễn phí, có HTTPS tự động.

## Tùy biến nhanh
- Đổi màu chủ đạo trong `:root` (biến `--primary`).
- Thay tên thương hiệu trong phần header (`<a class="brand">`).
- Sửa bố cục lưới trong `.grid` (CSS Grid).
- Thêm mục menu, section mới → thêm thẻ `<section id="...">...</section>` và liên kết trong nav.

## Góp ý
Mọi góp ý/issue xin tạo ở phần *Issues* của repo (nếu bạn đưa lên GitHub).
