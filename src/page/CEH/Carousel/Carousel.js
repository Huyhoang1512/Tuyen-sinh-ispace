import React from "react";

export default function Carousel() {
  return (
    <div className="">
      <div className="img-ech">
        <span className="bg-opacity-50"></span>
        <div className="container">
          <h1 className="text-white p-20 text-2xl">KHÓA HỌC CEH</h1>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6"
        style={{ width: "80%", margin: "0 auto" }}
      >
        <div className="p-8 rounded-lg md:col-span-4/6 md:border md:border-gray-300">
          <h1 className="text-3xl font-bold pb-4" style={{color:'#f57e25'}}>THÔNG TIN KHÓA HỌC</h1>
          <ul className="list-disc ml-6 text-xl">
            <li>
              Tên khóa học: <b>CEH (V12) Certified Ethical Hacker</b>
            </li>
            <li>
              Giảng viên: thầy <b>Trương Phạm Hoài Thương</b>
            </li>
            <li>Thời lượng: 40h, mỗi buổi 2h</li>
            <li>Lịch học: Tối 2 – 4 – 6 từ 18h30 đến 20h30</li>
            <li>Hình thức: offline</li>
          </ul>
        </div>
        <div className="p-8 rounded-lg md:col-span-2/6 md:border md:border-gray-300">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-91-2048x1774.jpg"
            alt="khoa-hoc-ceh"
            className={`object-cover ${
              window.innerWidth > 1024 ? "w-2/6" : "md:w-full"
            } h-auto`}
          />
        </div>
      </div>
    </div>
  );
}
