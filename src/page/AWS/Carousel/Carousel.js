import React from "react";

export default function Carousel() {
  return (
    <div className="">
      <div className="img-ech">
        <span className="bg-opacity-50"></span>
        <div className="container">
          <h1 className="text-white p-20 text-2xl">KHÓA HỌC AWS</h1>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6"
        style={{ width: "80%", margin: "0 auto" }}
      >
        <div className="p-8 rounded-lg md:col-span-4/6 md:border md:border-gray-300">
          <h1 className="text-3xl font-bold pb-4" style={{color:'#f57e25'}}>THÔNG TIN KHÓA HỌC AWS CLOUD FOUNDATION</h1>
          <ul className="list-disc ml-6 text-xl">
            <li>
              Tên khóa học: <b> AWS Cloud Foundation</b>
            </li>
            <li>
              Giảng viên:  <b>Ths. Lê Hoàng Bình Nguyên</b>
            </li>
            <li>Thời lượng: 20h, mỗi buổi 2h</li>
            <li>Lịch học: Tối 2 – 4 – 6 từ 18h30 đến 20h30</li>
            <li>Yêu cầu học viên: Có kiến thức CNTT cơ bản, có máy tính hoặc laptop</li>
            <li>Hình thức: online/offline </li>
          </ul>
        </div>
        <div className="p-8 rounded-lg md:col-span-2/6 md:border md:border-gray-300">
        <img fetchpriority="high" decoding="async" width="640" height="473" src="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-1024x757.jpg" class="attachment-large size-large wp-image-12991" alt="thong-tin-khoa-ngan-han" srcset="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-1024x757.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-300x222.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-768x568.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-1536x1136.jpg 1536w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-2048x1515.jpg 2048w" sizes="(max-width: 640px) 100vw, 640px" />
        </div>
      </div>
    </div>
  );
}
