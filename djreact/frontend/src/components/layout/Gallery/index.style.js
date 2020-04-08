import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated } from "react-spring";
import { Link } from "react-router-dom";

const colors = {
  pink: "#D35C5E",
  blue: "#BBDFDB",
  black: "#353535",
};
const MenuButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
  cursor: pointer;
  background: transparent;
  border: none;
  z-index: 999;
`;
const NavWrapper = styled(animated.nav)`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: flex-end;
  top: 0;
`;
const NavListItem = styled.li`
  cursor: pointer;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
  transition: 0.4s;
  &:hover {
    border-bottom: 3px solid ${colors.pink};
  }
`;
const NavListLink = styled(Link)`
  color: ${colors.black};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;
const NavLinks = styled.ul`
  background: ${colors.blue + "aa"};
  filter: grayscale(100%);
  width: 50%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style-type: none;
  z-index: 10;
  @media (max-width: 900px) {
    width: 100%;
    background: ${colors.blue};
  }
`;
const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${colors.black};
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const CategoryButton = styled.button`
  margin: 0.5rem 1rem;
  background: transparent;
  color: ${({ active }) => (active ? colors.black : "#55555555")};
  font-size: 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-right: 1px solid
    ${({ active }) => (active ? colors.black : "#55555555")};
  border-left: 1px solid
    ${({ active }) => (active ? colors.black : "#55555555")};
  transition: 0.3s;
`;
const CategoryButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 2rem;
  padding: 3rem;
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
const CardMedia = styled.div`
  flex: 3;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 300px;
`;
const CardDetails = styled.div`
  flex: 1;
  padding: 0.5rem;
`;
const TitleShareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardTitle = styled.p`
  margin: 0.5rem 0;
  font-weight: bold;
  color: ${colors.black};
`;
const CardPrice = styled.p`
  margin: 0.5rem 0;
  font-weight: bold;
  font-size: 0.85rem;
  color: ${colors.pink};
`;
const CardShareButton = styled.button`
  background: transparent;
  color: ${colors.black};
  border: none;
  cursor: pointer;
`;
export {
  Wrapper,
  GalleryWrapper,
  Card,
  CardMedia,
  CardDetails,
  TitleShareContainer,
  CardTitle,
  CardPrice,
  CardShareButton,
  CategoryButton,
  CategoryButtonsContainer,
  MenuButton,
  NavWrapper,
  NavLinks,
  MenuIcon,
  NavListItem,
  NavListLink,
};
