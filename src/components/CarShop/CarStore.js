import React from "react";
import { useSelector } from "react-redux";
import { useStateContext } from "../../context/themeContext";
import { carsdata } from "../../data/CarData";
import BrandTitle from "./BrandTitle";
import CarCard from "./CarCard";
import CarSearchsection from "./CarSearchsection";

const CarStore = () => {
  const { currentTheme, disabled, DarkMode } = useStateContext();
  const { cars } = useSelector((state) => state);
  return (
    <div
      className={`row row-cols-1 rounded-3 
      bg-${DarkMode && "transparent"}  mx-1 mt-2 p-3`}
      style={{
        color: currentTheme.textColor,
      }}
    >
      <CarSearchsection />
      {disabled ? (
        carsdata.map((cardata, index) => (
          <div key={index} className="row mx-0 mt-5">
            <BrandTitle cardata={cardata} />
            <div className="row d-flex justify-content-center align-items-start g-2 ">
              {cardata.cars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="d-flex justify-content-center justify-content-md-start align-items-center flex-wrap g-1 m-0 p-0 mt-2">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarStore;
