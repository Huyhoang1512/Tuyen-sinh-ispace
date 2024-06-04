import axios from "axios";
import React, { useState } from "react";

export default function Carousel() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Target: "",
    Program: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycby1kPe-aoysg5Kj9HZ6J7o9maO_Y18VSNt1vxwYOZL3FbkrlrMZb_JJF59V7ovpEw9DVg/exec";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });
      const result = await response.text();
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="">
      <div className="img-ech">
        <span className="bg-opacity-50"></span>
        <div className="container">
          <h1 className="text-white p-20 text-2xl">ĐĂNG KÝ NGAY</h1>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6"
        style={{
          width: `${window.innerWidth > 1024 ? "80%":"100%"}`, 
          margin: "0 auto",
        }}
      >
        <div className="p-8 rounded-lg md:col-span-4/6 md:border md:border-gray-300">
          <h1 className="text-3xl font-bold pb-4" style={{ color: "#f57e25" }}>
            LIÊN HỆ VỚI CHÚNG TÔI
          </h1>
          <ul className="list-disc ml-6 text-xl" style={{ listStyle: "none" }}>
            <li>
              <img
                fetchpriority="high"
                decoding="async"
                width="640"
                height="152"
                src="https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-1024x243.png"
                class="attachment-large size-large wp-image-8936"
                alt=""
                srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-1024x243.png 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-600x143.png 600w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-e1661395790159.png 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-768x183.png 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-1536x365.png 1536w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-2048x487.png 2048w"
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </li>
            <li>
              <section className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-3">
                      <i className="fa fa-phone text-yellow-500 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Điện thoại</h3>
                      <div className="text-base">0938 205 966 (Ms. Chinh)</div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-3">
                      <i className="fa fa-envelope text-yellow-500 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <div className="text-base">quangcao@ispace.edu.vn</div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
            <li>
              <div className="w-full md:w-full p-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3">
                    <i className="fa fa-envelope text-yellow-500 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Địa chỉ</h3>
                    <div className="text-base">
                      240 Võ Văn Ngân, Phường Bình TP. Thủ Đức, TP. Hồ Chí Minh
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="p-8 rounded-lg md:col-span-2/6 md:border md:border-gray-300">
          <div className="w-full md:w-full px-4 pt-6">
            <div className="bg-gray-800 p-8 rounded-md shadow-md">
              <h3 className="text-white text-2xl font-bold mb-4">
                Điền thông tin bên dưới
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Họ Tên Bạn *"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 mt-4"
                  placeholder="Email *"
                  required
                />
                <input
                  type="text"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 mt-4"
                  placeholder="Số điện thoại *"
                  required
                />
                <select
                  name="Target"
                  value={formData.Target}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white mt-4"
                  required
                >
                  <option value="">--- Đối tượng ---</option>
                  <option value="HS đang học lớp 12 (đăng ký giữ chỗ)">
                    HS đang học lớp 12 (đăng ký giữ chỗ)
                  </option>
                  <option value="HS tốt nghiệp THPT/hoàn thành chương trình lớp 12">
                    HS tốt nghiệp THPT/hoàn thành chương trình lớp 12
                  </option>
                  <option value="Sinh Viên">Sinh Viên</option>
                  <option value="Người đi làm">Người đi làm</option>
                </select>
                <select
                  name="Program"
                  value={formData.Program}
                  className="w-full p-3 rounded-md bg-gray-700 text-white mt-4"
                  onChange={handleChange}
                  required
                >
                  <option value="">--- Chương trình học ---</option>
                  <option value="An ninh mạng">An ninh mạng</option>
                  <option value="Phát triển phần mềm">
                    Phát triển phần mềm
                  </option>
                  <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
                  <option value="Quản trị mạng">Quản trị mạng</option>
                  <option value="Thương mại điện tử">Thương mại điện tử</option>
                </select>
                <button type="submit" className="w-full p-3 rounded-md bg-orange-500 text-white font-bold hover:bg-orange-600 mt-3">Gửi ngay</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
