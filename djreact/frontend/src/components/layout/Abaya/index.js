import React, { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  BigImageContainer,
  CarouselWrapper,
  Circle,
  TitleContainer,
  ChiqueText,
  DressesText,
  SlidesContainer,
  SingleSlideSmall,
  SlidesInnerContainer,
  ArrowLeft,
  ArrowLeftIcon,
} from "./index.style";

import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useSpring, config } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../../../actions/products";

const Abaya = () => {
  const data = useSelector((state) => state.products.products).filter(
    (item) => item.product_type === "abaya"
  );

  const [translateBy, setTranslateBy] = useState(0);
  const [numOfChildren, setNumOfChildren] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [isVisible, setVisible] = useState(false);

  const animateSlides = useSpring({
    transform: `translateX(-${translateBy}px)`,
    config: config.gentle,
  });
  let slideWrap = useRef(null);
  const handleCarouselSlide = () => {
    if (Math.abs(translateBy) <= numOfChildren * 300 - 300 - 300) {
      setTranslateBy(translateBy - 300);
      setSlideCount(slideCount + 1);
    } else {
      setTranslateBy(0);
      setSlideCount(0);
    }
  };
  useEffect(() => {
    setNumOfChildren(slideWrap.current.childNodes.length - 1);
    let observer = new IntersectionObserver((el) => {
      el[0].isIntersecting ? setVisible(true) : setVisible(false);
    });
    observer.observe(containerRef.current);
  }, [data]);
  const containerRef = useRef();
  const animateBig = useSpring({
    transform: isVisible ? "translateX(0%)" : "translateX(100%)",
    config: config.gentle,
  });
  const animateSmall = useSpring({
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    config: config.gentle,
  });

  return (
    <Wrapper ref={containerRef}>
      <CarouselWrapper style={animateSmall}>
        <Circle />
        <TitleContainer>
          <ChiqueText>Stunning</ChiqueText>
          <DressesText>Abaya</DressesText>
        </TitleContainer>
        <SlidesContainer>
          <SlidesInnerContainer ref={slideWrap}>
            {data.map((item, i) => {
              return (
                <SingleSlideSmall
                  key={i}
                  img={item.img}
                  style={animateSlides}
                />
              );
            })}
            <ArrowLeft onClick={handleCarouselSlide}>
              <ArrowLeftIcon icon={faCaretLeft} />
            </ArrowLeft>
          </SlidesInnerContainer>
        </SlidesContainer>
      </CarouselWrapper>
      <BigImageContainer
        img={data.length > 1 ? data[slideCount].img : null}
        style={animateBig}
      ></BigImageContainer>
    </Wrapper>
  );
};

export default Abaya;
