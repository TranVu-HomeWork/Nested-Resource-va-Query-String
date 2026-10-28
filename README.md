# Bài tập: Nested Resource và Query String

Dự án này mô phỏng API chuẩn REST để lấy danh sách đơn hàng của một người dùng thông qua Nested Resource (`/users/:userId/orders`) kết hợp Query String để lọc dữ liệu.

## Kết quả Test (3 Kịch bản URL)

### Kịch bản 1: Có đủ tham số (status và limit)
- **Method:** GET
- **URL:** `http://localhost:3000/api/v1/users/2/orders?status=paid&limit=1`
- **Kết quả (Status 200):**
```json
{
    "success": true,
    "data": [
        {
            "id": 104,
            "userId": 2,
            "status": "paid",
            "total": 450000
        }
    ],
    "meta": {
        "total": 2
    }
}