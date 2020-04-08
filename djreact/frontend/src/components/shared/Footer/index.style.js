import styled from "styled-components";
const colors = {
  pink: "#D35C5E",
  blue: "#BBDFDB",
  black: "#353535"
};
const Wrapper = styled.footer`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const TopFooter = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const BottomFooter = styled.div`
  flex: 1;
  background: ${colors.black};
  clip-path: polygon(61% 20%, 100% 0, 100% 100%, 0 100%, 0 0);
  display: flex;
  position: relative;
  transition: 0.4s;
  @media (max-width: 900px) {
    clip-path: polygon(100% 0%, 100% 0, 100% 100%, 0 100%, 0 0);
    flex-direction: column;
  }
`;
const BottomFooterBackground = styled.div`
  background: url(${({ bg }) => bg}) no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  mix-blend-mode: lighten;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const TopFooterForm = styled.form`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  position: relative;
  left: -5%;
  bottom: -35%;
  z-index: 2;
  background: #fff;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 10px ${colors.black + "44"};
  padding: 1rem;
  margin: 1rem 0;
  box-sizing: border-box;
  @media (max-width: 900px) {
    position: static;
    width: 90%;
    align-self: center;
  }
`;
const FormButton = styled.button`
  background: ${colors.pink};
  border: none;
  border-radius: 0.3rem;
  padding: 0.7rem 1rem;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  cursor: pointer;
`;
const FormTitle = styled.p`
  color: ${colors.black};
  font-size: 2rem;
  font-weight: bold;
`;
const FormInput = styled.input`
  border: 1px solid ${colors.blue};
  padding: 0.7rem 1rem;
  margin: 1rem 0;
  color: ${colors.black};
  font-weight: bold;
  font-size: 1.2rem;
  &::placeholder {
    font-weight: bold;
  }
  border-radius: 0.3rem;
`;
const FormTextArea = styled.textarea`
  border: 1px solid ${colors.blue};
  padding: 0.7rem 1rem;
  margin: 1rem 0;
  color: ${colors.black};
  font-weight: bold;
  font-size: 1.2rem;
  &::placeholder {
    font-weight: bold;
  }
  border-radius: 0.3rem;
  resize: none;
`;
const TopFooterContact = styled.div`
  flex: 2;
  color: ${colors.black};
  padding: 1rem 2rem;
`;
const TopFooterTitle = styled.p`
  font-size: 3rem;
  font-weight: bolder;
`;
const TopFooterParagraph = styled.p`
  line-height: 22px;
  letter-spacing: 0.1em;
  width: 80%;
`;

const BottomLeftSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const BottomRightSection = styled.div`
  flex: 1;
`;
const BottomLogoElegant = styled.p`
  font-size: 3rem;
  margin: 0;
  font-weight: bolder;
  letter-spacing: 0.8rem;
  border-bottom: 10px solid #fff;
  color: #fff;
`;
const BottomLogoLady = styled.p`
  font-size: 3rem;
  margin: 0;
  font-weight: bolder;
  letter-spacing: 0.8rem;
  align-self: flex-end;
  color: #fff;
`;

const BottomFooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.black};
  z-index: 0;
  align-self: flex-start;
  margin: 1rem;
`;
const LogoParagraph = styled.p`
  line-height: 17px;
  letter-spacing: 0.15em;
  color: #fff;
  margin: 1rem;
`;
const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;
const ContactInfoLink = styled.a`
  font-size: 0.9rem;
  margin: 1rem 0;
  color: ${({ isFooterBottom }) => (isFooterBottom ? "#ffffff" : colors.black)};
  cursor: pointer;
  margin: ${({ isFooterBottom }) =>
    isFooterBottom ? "1rem" : "margin: 1rem 0"};
`;
const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 4;
  height: 100%;
  justify-content: space-evenly;
  padding-right: 5rem;
  @media (max-width: 900px) {
    padding-right: 0;
  }
`;
const SocialLink = styled.a`
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
export {
  ContactInfoLink,
  TopFooterParagraph,
  TopFooterTitle,
  BottomFooterBackground,
  Wrapper,
  TopFooter,
  BottomFooter,
  TopFooterForm,
  TopFooterContact,
  BottomFooterLogo,
  LogoParagraph,
  ContactInfoContainer,
  SocialLinksContainer,
  FormInput,
  FormTitle,
  FormTextArea,
  FormButton,
  BottomLogoElegant,
  BottomLogoLady,
  BottomLeftSection,
  BottomRightSection,
  SocialLink
};
