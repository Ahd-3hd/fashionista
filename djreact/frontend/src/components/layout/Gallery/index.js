import React, { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  GalleryWrapper,
  Card,
  CardMedia,
  CardDetails,
  CardTitle,
  CardPrice,
  CardShareButton,
  TitleShareContainer,
  CategoryButton,
  CategoryButtonsContainer,
  MenuButton,
  NavWrapper,
  NavLinks,
  MenuIcon,
  NavListItem,
  NavListLink,
} from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { useSpring, config } from "react-spring";
import { useDispatch, useSelector } from "react-redux";

const Gallery = () => {
  const data = useSelector((state) => state.products.products);

  const [category, setCategory] = useState("all");
  const [toggleNav, setToggleNav] = useState(true);
  const navShow = useSpring({
    right: toggleNav ? "-100%" : "0%",
    from: { right: toggleNav ? "0%" : "-100%" },
    config: config.gentle,
  });
  return (
    <Wrapper>
      <CategoryButtonsContainer>
        <CategoryButton
          active={category === "all"}
          onClick={() => setCategory("all")}
        >
          All
        </CategoryButton>
        <CategoryButton
          active={category === "dress"}
          onClick={() => setCategory("dress")}
        >
          Dresses
        </CategoryButton>
        <CategoryButton
          active={category === "coat"}
          onClick={() => setCategory("coat")}
        >
          Coats
        </CategoryButton>
        <CategoryButton
          active={category === "abaya"}
          onClick={() => setCategory("abaya")}
        >
          Abayas
        </CategoryButton>
      </CategoryButtonsContainer>
      <GalleryWrapper>
        {data.map((item) => {
          if (category === "all") {
            return (
              <Card key={item.id}>
                <CardMedia img={item.img} />
                <CardDetails>
                  <TitleShareContainer>
                    <CardTitle>{item.name}</CardTitle>
                    <CardShareButton>
                      <FontAwesomeIcon icon={faShareAlt} />
                    </CardShareButton>
                  </TitleShareContainer>
                  <CardPrice>$98.99</CardPrice>
                </CardDetails>
              </Card>
            );
          } else if (item.product_type === category) {
            return (
              <Card key={item.id}>
                <CardMedia img={item.img} />
                <CardDetails>
                  <TitleShareContainer>
                    <CardTitle>{item.name}</CardTitle>
                    <CardShareButton>
                      <FontAwesomeIcon icon={faShareAlt} />
                    </CardShareButton>
                  </TitleShareContainer>
                  <CardPrice>$98.99</CardPrice>
                </CardDetails>
              </Card>
            );
          }
        })}
      </GalleryWrapper>
      <MenuButton onClick={() => setToggleNav(!toggleNav)}>
        <MenuIcon icon={faBars} />
      </MenuButton>
      <NavWrapper style={navShow}>
        <NavLinks>
          <NavListItem>
            <NavListLink to="/">Home Page</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink to="/gallery">Gallery</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink to="/createProduct">New Post</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink to="/">Skirts Collection</NavListLink>
          </NavListItem>
        </NavLinks>
      </NavWrapper>
    </Wrapper>
  );
};

export default Gallery;
