import React from "react";
import Intro from "./Intro";
import vector1 from "./../../pics/svg/undraw_electric_car_b-7-hl.svg";
import vector2 from "./../../pics/svg/undraw_navigator_a479.svg";
const Introduction = () => {
  return (
    <div className="mx-1 my-4 p-0" >
      <Intro
        h1={"Grow your business with StarCar.com"}
        p1={
          "StarCar.com is Europe’s largest wholesale platform for used cars. We support your business growth with our digital buying and selling dedicated account managers."
        }
        p2={
          "More than 60,000 partners in over 30 European countries already use StarCar.com for the efficient purchase and sale of used cars. Benefit as well from a constant stock of over 30,000 inspected used cars as well as fast and easy B2B Remarketing."
        }
        pic={vector1}
      />
      <Intro
        h1={"Chalenges and StarCars Solutions"}
        p1={
          "One of the main tasks for fleet managers is to keep their vehicles in a proper technical condition because any failure may cause financial losses and weakening customer loyalty. Usually, car dealers have a large car fleet. According to Autonews.com reports, an average European car dealer has 279 new vehicles and 317 used vehicles. It is mandatory to monitor the condition of every car, even if it is parked for a longer time."
        }
        p2={
          "          StarCar Telematics FMM001 (LTE CAT M1 with fallback to 2G) is Plug & Play OBD device with GNSS and Bluetooth connectivity. It is perfectly suitable for the management of light vehicle fleets in such industries as auto dealers, rental and leasing services, and so on ."
        }
        pic={vector2}
        order={"order-0 order-md-2"}
      />
    </div>
  );
};

export default Introduction;
