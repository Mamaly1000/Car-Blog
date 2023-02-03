import Carousel from "react-bootstrap/Carousel";
import React from "react";
import styles from "styled-components";

const Div = styles.div`
div a{
 background:rgba(255 255 255 /.4);
 border-radius:50%;
 width:60px;
 height:60px;
 display:flex;
 align-items:center
 justify-content:center;
}
div a:nth-child(3){
  margin-left:10px
}
div a:last-child{
 margin-right:10px
}
`;

const cars = [
  {
    name: "Ford Mustang Boss 302 1969",
    shortdesc: "IT TAKES TIME TO BECOME TIMELESS",
    carpic:
      "https://s3-prod.autonews.com/s3fs-public/TOKYO_AUTO_SHOW_102709999_PH_1_RHNVSGJGOBLL.jpg",
  },
  {
    name: "The Cayenne Platinum Edition",
    shortdesc: "Composed with passion",
    carpic:
      "https://imageio.forbes.com/specials-images/imageserve/5f96264beb18c1b658aaabf5/The-McLaren-720s---/960x0.jpg?format=jpg&width=960",
  },
  {
    name: "AVENTADOR LP 780-4 ULTIMATE",
    shortdesc: "IT TAKES TIME TO BECOME TIMELESS",
    carpic:
      "https://img3.wallspic.com/crops/8/2/7/7/3/137728/137728-sports_car-bugatti-supercar-concept_car-bugatti_automobiles-5000x2813.jpg",
  },
];

const ImgCarousel = () => {
  return (
    <Div className="mx-1 rounded-3 overflow-hidden">
      <Carousel fade touch={true}>
        {cars.map((car, index) => (
          <Carousel.Item key={index}>
            <img
              src={car.carpic}
              alt={car.name}
              style={{ position: "relative" }}
            />
            <Carousel.Caption>
              <h3 className="fs-1">{car.name}</h3>
              <p>{car.shortdesc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Div>
  );
};

export default ImgCarousel;
