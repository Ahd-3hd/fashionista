import styled from "styled-components";
const colors = {
  pink: "#FABEBD",
  blue: "#BBDFDB",
  black: "#353535"
};
const Wrapper = styled.div`
  display: flex;
`;
const CardsContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Card = styled.div`
  min-height: 450px;
  background: ${({ color }) => color} url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center top;
  background-blend-mode: multiply;
`;
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
`;
const TextParagraph = styled.p`
  width: 250px;
  font-size: 5rem;
  font-weight: bolder;
  color: ${colors.black};
  text-align: center;
  margin: 0;
  text-shadow: 0px 0px 2px ${colors.black};
  transform: translateX(-50%);
  mix-blend-mode: soft-light;
  @media (max-width: 900px) {
    width: 100%;
    transform: translateX(0);
  }
`;
const ActionButton = styled.button`
  font-size: 5rem;
  background: transparent;
  border: none;
  color: ${colors.black};
  cursor: pointer;
`;
const TextBorder = styled.div`
  border: 3rem solid ${colors.black + "99"};
  mix-blend-mode: hard-light;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    transform: translateX(0);
  }
`;
export {
  Wrapper,
  Card,
  CardsContainer,
  TextContainer,
  TextParagraph,
  ActionButton,
  TextBorder
};
