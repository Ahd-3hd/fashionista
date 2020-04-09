import React, { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  HeaderLeftTitleContainer,
  HeaderLeftTitleElegant,
  HeaderLeftTitleLady,
  PromoPinkContainer,
  PromoBlueContainer,
  Circle,
} from "./index.style";
import duaImage from "../../../img/promo.png";
import promoPink from "../../../img/promo-pink.jpg";
import promoBlue from "../../../img/promo-blue.png";
import { useSpring } from "react-spring";
const Promotion = () => {
  const [isVisible, setVisible] = useState(false);
  const animatePromoPink = useSpring({
    transform: isVisible ? "translate(-50%,-50%)" : "translate(-10%,50%)",
  });
  const animatePromoBlue = useSpring({
    transform: isVisible ? "translate(-30%, -10%)" : "translate(-10%,50%)",
  });

  const animateCircle = useSpring({
    to: {
      top: isVisible ? "50%" : "0%",
      left: isVisible ? "50%" : "0%",
      transform: isVisible ? "translate(-50%,-50%)" : "translate(0%,0%)",
    },
    from: {
      top: "0%",
      left: "0%",
      transform: "translate(0%,0%)",
    },
    config: {
      mass: 1,
      tension: 220,
      friction: 200,
    },
  });

  useEffect(() => {
    let observer = new IntersectionObserver((el) => {
      el[0].isIntersecting ? setVisible(true) : null;
    });
    observer.observe(pinkRef.current);
    console.log(isVisible);
  }, [isVisible]);
  const pinkRef = useRef();
  return (
    <Wrapper bg={duaImage}>
      <HeaderLeftTitleContainer ref={pinkRef}>
        <HeaderLeftTitleElegant>ELEGANT</HeaderLeftTitleElegant>
        <HeaderLeftTitleLady>LADY</HeaderLeftTitleLady>
      </HeaderLeftTitleContainer>
      <Circle style={animateCircle} />
      <PromoPinkContainer style={animatePromoPink} bg={promoPink} />
      <PromoBlueContainer style={animatePromoBlue} bg={promoBlue} />
    </Wrapper>
  );
};

export default Promotion;
