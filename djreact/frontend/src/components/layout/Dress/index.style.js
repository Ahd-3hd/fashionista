import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated } from "react-spring";
const colors = {
  pink: "#FABEBD",
  blue: "#BBDFDB",
  black: "#353535"
};
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const CarouselWrapper = styled(animated.div)`
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;
const BigImageContainer = styled(animated.div)`
  flex: 1;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.5s ease-in-out;
`;

const Circle = styled.div`
  width: 50vh;
  height: 50vh;
  border: 20vh solid #fabebd;
  border-radius: 50%;
  position: absolute;
  left: -50%;
  top: 0;
`;

const TitleContainer = styled.div`
  position: relative;
  z-index: 2;
  font-size: 6rem;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 4rem;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    flex-direction: row;
    padding: 0;
    z-index: 0;
    font-size: 10vw;
  }
`;
const ChiqueText = styled.p`
  margin: 0;
  align-self: flex-start;
  color: #353535;
`;
const DressesText = styled.p`
  margin: 0;
  align-self: flex-end;
  color: #cd5459;
`;
const SlidesContainer = styled.div`
  position: absolute;
  width: 90%;
  bottom: 5rem;
  right: 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  @media (max-width: 1024px) {
    width: 100%;
    bottom: 2rem;
  }
`;
const SlidesInnerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  display: flex;
`;
const SingleSlideSmall = styled(animated.div)`
  flex: 1;
  min-width: 50%;
  min-height: 300px;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  margin: 1rem;
`;
const ArrowLeft = styled.button`
  position: absolute;
  height: 100%;
  background: ${colors.black}55;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: ${colors.black}ff;
    > * {
      color: #ffffff;
    }
  }
`;
const ArrowLeftIcon = styled(FontAwesomeIcon)`
  color: #ffffff55;
  font-size: 2.5rem;
`;
export {
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
  ArrowLeftIcon
};
