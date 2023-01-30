import React from "react";

const BrandTitle = ({ cardata }) => {
  return (
    <h3
      className="row row-cols-2 align-items-center underline pb-2 mb-3"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="col-1 d-flex justify-content-center align-items-center">
        <img
          src={cardata.brand_img}
          alt={cardata.brand}
          className="rounded-circle"
          style={{ objectFit: "cover", width: "50px", height: "50px" }}
        />
      </div>
      <span className="col-11 m-0">{cardata.brand}</span>
    </h3>
  );
};

export default BrandTitle;
