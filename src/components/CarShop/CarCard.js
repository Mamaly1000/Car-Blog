import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { useStateContext } from "../../context/themeContext";
import { useSelector } from "react-redux";

const numwithcomma = (num) => {
  const number = num;
  const init = Intl.NumberFormat("en-US");
  const newnum = init.format(number);
  return newnum;
};

const CarCard = ({ car }) => {
  const { currentTheme } = useStateContext();
  const currency = useSelector((state) => state.currency);
  return (
    <div
      className="card col-12 col-sm-6 col-md-4 col-lg-3  rounded-0 bg-dark p-2"
      style={{ minHeight: "350px" }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <Carousel className="w-100 h-25 overflow-hidden">
        {car.img.map((img_url, index) => (
          <Carousel.Item key={index} className="overflow-hidden">
            <img src={img_url} alt={car.model} style={{ height: "250px" }} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="row row-cols-2 justify-content-between align-items-center mt-2 ">
        <span className="col-auto col-md-8 fs-6 display-6 ">{car.model}</span>
        <span className="col-auto col-md-4 fs-6 display-6 d-flex justify-content-start justify-content-md-end">
          {!isNaN(currency) && "Price On Request"}
          {currency === "$" &&
            `${numwithcomma(car.price[0].dolor)} ${currency}`}
          {currency === "£" && `${numwithcomma(car.price[0].pond)} ${currency}`}
        </span>
      </div>
      <hr className="col-12 divider w-100 my-1 mx-0 px-0 p-0" />
      <div className="row row-cols-2 align-items-center justify-content-between mt-1 ">
        <span className="col-auto fs-6">{car.released_date}</span>
        <div className="col-auto d-flex justify-content-start justify-content-md-end">
          {car.colors.map((color, index) => (
            <button
              key={index}
              className="col-4 col-md-12 btn rounded-circle ms-1 my-1"
              style={{ background: color, height: "25px", width: "25px" }}
            ></button>
          ))}
        </div>
      </div>
      <hr className=" divider w-100 my-1" />
      <div className="row row-cols-3 mt-1 d-flex justify-content-between align-items-center px-3">
        <button
          className=" col-12 col-lg-5 mb-1 mb-lg-0 btn d-flex justify-content-center align-items-center fs-6 "
          style={{
            background: currentTheme.btnColor,
            color: currentTheme.textColor,
          }}
        >
          contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={currentTheme.textColor}
            className="ms-lg-1 bi bi-envelope-at-fill ms-1"
            viewBox="0 0 16 16"
          >
            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
          </svg>
        </button>
        <button
          className=" col-12 col-lg-6 btn d-flex justify-content-center align-items-center fs-6"
          style={{
            background: currentTheme.btnColor,
            color: currentTheme.textColor,
          }}
        >
          Add to Cart{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={currentTheme.textColor}
            className="bi bi-bag-fill ms-lg-1 ms-1"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarCard;
