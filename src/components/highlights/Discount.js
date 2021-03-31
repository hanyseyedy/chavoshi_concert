import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-reveal";

function Discount() {
  const [isInitial, setIsIinitial] = useState(true);
  const [discountStart, setDiscountStart] = useState(0);
  const discountEnd = 30;

  const percentage = () => {
    setIsIinitial(false);
    if (discountStart < discountEnd) {
      setDiscountStart((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (!isInitial) {
      setTimeout(() => {
        percentage();
      }, 30);
    }
  });
  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade onReveal={percentage}>
          <div className="discount_porcentage">
            <span>{discountStart}%</span>
            <span>تخفیف</span>
          </div>
        </Fade>
        <Slide left>
          <div className="discount_description">
            <h3>خرید قبل از 1 تیر</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
        </Slide>
      </div>
      <button>خرید</button>
    </div>
  );
}

export default Discount;
