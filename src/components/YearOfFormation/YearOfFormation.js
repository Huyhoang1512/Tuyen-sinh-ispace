import React from "react";

export default function YearOfFormation({ isDarkMode }) {
  return (
    <div className="mt-5">
      <h6
        className="text-2xl xl:text-3xl text-center pt-7 md:leading-none xl:leading-tight"
        style={{ color: "#ffb606", fontWeight: "bold" }}
      >
        18 NĂM HÌNH THÀNH VÀ PHÁT TRIỂN
      </h6>
      <section className={`flex justify-center py-8 `}>
        <div className=" max-w-6xl">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="149"
            src="https://ispace.edu.vn/wp-content/uploads/2024/02/18-NAM-HINH-THANH-VA-PHAT-TRIEN-01-1-1024x238.jpg"
            class="attachment-large size-large wp-image-13889"
            alt=""
            srcset="https://ispace.edu.vn/wp-content/uploads/2024/02/18-NAM-HINH-THANH-VA-PHAT-TRIEN-01-1-1024x238.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2024/02/18-NAM-HINH-THANH-VA-PHAT-TRIEN-01-1-300x70.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2024/02/18-NAM-HINH-THANH-VA-PHAT-TRIEN-01-1-768x178.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2024/02/18-NAM-HINH-THANH-VA-PHAT-TRIEN-01-1.jpg 1149w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
      </section>
    </div>
  );
}
