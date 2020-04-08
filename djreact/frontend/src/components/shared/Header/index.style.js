import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated } from "react-spring";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap");
  body {
    margin: 0;
    font-family: "Montserrat", "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;
const colors = {
  pink: "#FABEBD",
  blue: "#BBDFDB",
  black: "#353535",
};
const HeaderContainer = styled.header`
  height: 100vh;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const HeaderRight = styled.div`
  flex: 1;
  background: ${colors.blue} url(${({ background }) => background}) no-repeat;
  background-size: auto 100%;
  background-blend-mode: multiply;
  background-position: right bottom;
  @media (max-width: 900px) {
    background-size: contain;
  }
`;
const HeaderLeft = styled.div`
  flex: 1;
  background: ${colors.pink} url(${({ background }) => background}) no-repeat;
  background-blend-mode: multiply;
  background-size: 80% auto;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeaderLeftTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.black};
  z-index: 0;
`;
const HeaderLeftTitleElegant = styled.p`
  font-size: 3rem;
  margin: 0;
  font-weight: bolder;
  letter-spacing: 0.8rem;
  border-bottom: 10px solid rgba(53, 53, 53, 1);
`;
const HeaderLeftTitleLady = styled.p`
  font-size: 3rem;
  margin: 0;
  font-weight: bolder;
  letter-spacing: 0.8rem;
  align-self: flex-end;
  color: ${colors.blue};
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`;
const HeaderLeftLinksList = styled.ul`
  align-self: flex-start;
  bottom: 2rem;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const HeaderLeftLinkListItem = styled.li`
  margin: 1rem;
  font-weight: bold;
  &:before {
    content: "- ";
    color: ${colors.black};
  }
`;
const HeaderLeftLink = styled.a`
  color: ${colors.black};
  cursor: pointer;
  border-bottom: 1px solid rgba(187, 223, 219, 0);
  transition: 0.4s;
  &:hover {
    border-bottom: 1px solid rgba(187, 223, 219, 1);
    color: ${colors.blue};
    font-size: 1.5rem;
  }
`;
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
const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${colors.black};
`;
const NavWrapper = styled(animated.nav)`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: flex-end;
  top: 0;
  z-index: 99;
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
export {
  HeaderContainer,
  HeaderRight,
  HeaderLeft,
  HeaderLeftTitleContainer,
  HeaderLeftTitleElegant,
  HeaderLeftTitleLady,
  HeaderLeftLinksList,
  HeaderLeftLinkListItem,
  HeaderLeftLink,
  MenuButton,
  MenuIcon,
  NavWrapper,
  NavLinks,
  NavListItem,
  NavListLink,
  GlobalStyle,
};
