import React from "react";
import Slider from "react-slick";

import slide_one from "../../assets/images/mo_1.jpg";
import slide_two from "../../assets/images/mo_2.jpg";
import slide_three from "../../assets/images/mo_3.jpg";

function Carrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div
            className="carrouel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
              backgroundSize: "cover",
            }}
          />
        </div>
        <div>
          <div
            className="carrouel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`,
              backgroundSize: "cover",
            }}
          />
        </div>
        <div>
          <div
            className="carrouel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`,
              backgroundSize: "cover",
            }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carrousel;
