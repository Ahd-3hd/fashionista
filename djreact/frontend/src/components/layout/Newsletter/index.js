import React, { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  Card,
  CardsContainer,
  TextContainer,
  TextParagraph,
  ActionButton,
  TextBorder
} from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import imageOne from "../../../img/promo.png";
import imageTwo from "../../../img/promo-blue.png";
import imageThree from "../../../img/promo5.png";
import imageFour from "../../../img/promo6.png";
import hangedImaged from "../../../img/hanged.jpg";
const Newsletter = () => {
  const [items, setItems] = useState([
    imageOne,
    imageTwo,
    imageFour,
    imageThree
  ]);
  const [colors, setColors] = useState([
    "#FABEBD",
    "#BBDFDB",
    "#BBDFDB",
    "#FABEBD"
  ]);

  return (
    <Wrapper>
      <TextContainer bg={hangedImaged}>
        <TextBorder>
          <TextParagraph>FIND YOUR FIT</TextParagraph>
          <ActionButton>
            <FontAwesomeIcon icon={faCaretRight} />
          </ActionButton>
        </TextBorder>
      </TextContainer>
      <CardsContainer>
        {items.map((item, i) => {
          return <Card key={i} bg={item} color={colors[i]} />;
        })}
      </CardsContainer>
    </Wrapper>
  );
};

export default Newsletter;
