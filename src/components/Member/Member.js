import React from 'react';

const Member = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold">BAN CỐ VẤN - GIẢNG VIÊN</h3>
        <div className="text-lg">Trường Cao đẳng An ninh mạng iSPACE</div>
        <div className="w-24 h-1 bg-gray-800 mx-auto mt-2"></div>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">HIỆU TRƯỞNG</h2>
        <div className="flex justify-center">
          <a href="https://ispace.edu.vn/tien-si-nguyen-duy-ham-hieu-truong/">
            <img
              src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-01-1.jpg"
              alt="Hiệu Trưởng"
              className="w-full h-auto max-w-md"
            />
          </a>
        </div>
      </section>

      <section className="mb-8" style={{width:'70%', margin:'0 auto'}}>
        <h2 className="text-2xl font-semibold mb-4">GIẢNG VIÊN</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 px-4 mb-8">
            <a href="https://ispace.edu.vn/thac-si-le-hoang-binh-nguyen-gv-ispace/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-02.jpg"
                alt="Giảng Viên 1"
                className="w-full h-auto"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-8">
            <a href="https://ispace.edu.vn/thay-nguyen-the-phuong-gv-ispace/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05-04.jpg"
                alt="Giảng Viên 2"
                className="w-full h-auto"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-8">
            <a href="https://ispace.edu.vn/thay-truong-pham-hoai-thuong/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05.jpg"
                alt="Giảng Viên 3"
                className="w-full h-auto"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-8">
            <a href="https://ispace.edu.vn/co-le-kim-ngan/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-03-1.jpg"
                alt="Giảng Viên 4"
                className="w-full h-auto"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-8">
            <a href="https://ispace.edu.vn/ths-van-minh-dai/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-06.jpg"
                alt="Giảng Viên 5"
                className="w-full h-auto"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-8">
            <p>
              Cùng đội ngũ giảng viên là các thạc sĩ, kỹ sư, chuyên gia trong các lĩnh vực Công nghệ thông tin, Thiết kế đồ họa, An toàn thông tin… với nhiều năm kinh nghiệm thực hiện các dự án tại doanh nghiệp…
              <span className="text-blue-600 font-semibold">  Xem thêm về đội ngũ giảng viên.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Member;
