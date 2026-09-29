# CẨM NANG CHUNG TAY PHÒNG, CHỐNG MA TÚY

Ứng dụng web tuyên truyền, nâng cao nhận thức và trang bị kỹ năng phòng, chống ma túy dành cho học sinh, sinh viên và cộng đồng.

> **Khẩu hiệu:** *“Chung tay phòng, chống tác hại của ma túy – Vì cuộc sống bình yên, hạnh phúc”*

---

## 🌟 Tính Năng Nổi Bật

1. **Giao diện hiện đại, tối ưu di động (Mobile First)**:
   - Tông màu xanh dương (hy vọng, bình yên), xanh lá (an toàn) phối hợp sắc đỏ/cam cảnh báo nguy cơ.
   - Thẻ hiển thị trực quan (cards), phong cách kính mờ (glassmorphism), biểu tượng minh họa sinh động.
   - Thanh điều hướng ngón tay cái phía dưới (Mobile Bottom Nav) giúp thao tác trên điện thoại cực kỳ tiện lợi.

2. **5 Chuyên mục cốt lõi**:
   - **01. MA TÚY LÀ GÌ?**: Định nghĩa, phân loại và nhận diện các loại ma túy mới "núp bóng" (nước vui, cỏ Mỹ, bóng cười N2O, bánh cần sa, tem giấy LSD, pod chill...).
   - **02. TÁC HẠI CỦA MA TÚY**: Hủy hoại não bộ, hội chứng "ngáo đá", kiệt quệ kinh tế gia đình và mức án phạt nghiêm khắc theo Bộ luật Hình sự Việt Nam.
   - **03. CÁCH PHÒNG, CHỐNG**: Kỹ năng "4 Bước từ chối vàng", nhận diện cạm bẫy tâm lý và nguyên tắc an toàn nơi công cộng.
   - **04. XỬ LÝ KHI GẶP NGUY CƠ**: Kịch bản thoát hiểm khi bị ép buộc, kỹ năng ứng phó khi gặp người ngáo đá và danh bạ Hotline bấm gọi khẩn cấp (113, 111, 115).
   - **05. VIDEO TUYÊN TRUYỀN**: Tuyển chọn các phóng sự thời sự, phim ngắn tuyên truyền từ VTV, Bộ Công an và truyền hình CAND.

3. **5 Thông điệp nhớ**:
   - *Không thử ma túy dù chỉ một lần.*
   - *Không nhận chất không rõ nguồn gốc.*
   - *Không nghe lời dụ dỗ, lôi kéo.*
   - *Chủ động bảo vệ bản thân và gia đình.*
   - *Khi phát hiện nguy cơ, hãy tìm kiếm sự giúp đỡ.*
   - Kèm tính năng đánh dấu cam kết tương tác và lưu trạng thái ghi nhớ.

4. **Quiz trắc nghiệm tình huống (5 câu hỏi)**:
   - Kiểm tra kiến thức và kỹ năng thực tế.
   - Phản hồi giải thích chi tiết cho từng câu hỏi.
   - Chấm điểm (0 - 100) và cấp danh hiệu "Hiệp sĩ tuyên truyền" kèm hiệu ứng pháo hoa chúc mừng.

5. **Chia sẻ & Tạo mã QR Code tự động**:
   - Tự động sinh mã QR Code để quét nhanh bằng Camera điện thoại hoặc Zalo.
   - Nút "Tải mã QR" dạng ảnh để in ấn bảng tin trường học/khu phố.
   - Hỗ trợ Web Share API và sao chép liên kết vào bộ nhớ tạm.

---

## 🚀 Cách Mở Và Sử Dụng

### Cách 1: Mở trực tiếp bằng trình duyệt
- Bạn chỉ cần nhấp đúp (double-click) vào tệp `index.html` trong thư mục này để mở ngay trên bất kỳ trình duyệt nào (Chrome, Edge, Cốc Cốc, Safari...).

### Cách 2: Chạy qua máy chủ cục bộ (Local Server)
Nếu bạn có cài đặt Python:
```bash
python -m http.server 8000
```
Sau đó truy cập: `http://localhost:8000`

---

## 📁 Cấu Trúc Tệp

- `index.html`: Cấu trúc trang web chính và các modal tương tác.
- `styles.css`: Định kiểu CSS, font chữ tiếng Việt Be Vietnam Pro, hiệu ứng animation mượt mà.
- `app.js`: Toàn bộ dữ liệu kiến thức, logic câu hỏi trắc nghiệm, tạo mã QR và xử lý sự kiện.
- `README.md`: Tài liệu hướng dẫn sử dụng.

---

*Lưu ý: Ứng dụng mang mục đích tuyên truyền giáo dục phi lợi nhuận. Tuyệt đối không chứa bất kỳ nội dung nào hướng dẫn sản xuất, mua bán hoặc sử dụng trái phép chất ma túy.*
