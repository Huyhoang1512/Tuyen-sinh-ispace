import React, { useState } from 'react';

export default function Promotion() {
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
    <section className="flex flex-wrap bg-gray-900 py-12 mt-8">
      <div className="w-full md:w-1/2 px-4">
        <div className="mb-8">
          <h3 className="text-white text-2xl md:text-4xl font-bold uppercase mb-4 text-center">
          ĐĂNG KÝ XÉT TUYỂN NGAY 
          </h3>
          
        </div>
        <div className='flex justify-center'>
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2024/01/DSCF9681-1024x683.jpg"
            alt=""
            className="w-9/12 h-auto text-center"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 pt-6">
        <div className="bg-gray-800 p-8 rounded-md shadow-md">
          <h3 className="text-white text-2xl font-bold mb-4">Điền thông tin bên dưới</h3>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_wpcf7" value="13822" />
            <input type="hidden" name="_wpcf7_version" value="5.6.4" />
            <input type="hidden" name="_wpcf7_locale" value="en_US" />
            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f13822-p7083-o1" />
            <input type="hidden" name="_wpcf7_container_post" value="7083" />
            <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
            <input type="hidden" name="_wpcf7_recaptcha_response" value="" />

            <div className="hidden">
              <input type="text" name="devvn" />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400"
                placeholder="Họ Tên Bạn *"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400"
                placeholder="Email *"
                required
              />
            </div>
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
              <option value="-----Đối tượng-----">—–Đối tượng—–</option>
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
              <option value="------ Chương trình học -----">—— Chương trình học —–</option>
              <option value="An ninh mạng">An ninh mạng</option>
              <option value="Phát triển phần mềm">Phát triển phần mềm</option>
              <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
              <option value="Quản trị mạng">Quản trị mạng</option>
              <option value="Thương mại điện tử">Thương mại điện tử</option>
            </select>
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-orange-500 text-white font-bold hover:bg-orange-600 mt-4"
            >
              Gửi ngay
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
