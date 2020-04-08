import React from "react";
import {
  Wrapper,
  TopFooter,
  BottomFooter,
  TopFooterForm,
  TopFooterContact,
  BottomFooterLogo,
  LogoParagraph,
  ContactInfoContainer,
  SocialLinksContainer,
  BottomFooterBackground,
  TopFooterTitle,
  TopFooterParagraph,
  ContactInfoLink,
  FormInput,
  FormTitle,
  FormTextArea,
  FormButton,
  BottomLogoElegant,
  BottomLogoLady,
  BottomLeftSection,
  BottomRightSection,
  SocialLink
} from "./index.style";
import hangedImage from "../../../img/hanged.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Wrapper>
      <TopFooter>
        <TopFooterContact>
          <TopFooterTitle>GET IN TOUCH</TopFooterTitle>
          <TopFooterParagraph>
            Lorem ipsum dolor sit amet, consectetu radipiscing elit.
            Pellentesque vulputate lobortis risus et molestie. Vestibulum
            blandit dictum nunc, vitae ullamcorper erat.
          </TopFooterParagraph>
          <ContactInfoContainer>
            <ContactInfoLink>
              <FontAwesomeIcon icon={faEnvelope} />
              {"  "} email@email.com
            </ContactInfoLink>
            <ContactInfoLink>
              <FontAwesomeIcon icon={faPhone} />
              {"  "} +90 985 321 45 87
            </ContactInfoLink>
            <ContactInfoLink>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {"  "} Realm st. Downtown
            </ContactInfoLink>
          </ContactInfoContainer>
        </TopFooterContact>
        <TopFooterForm>
          <FormTitle>Leave a message...</FormTitle>
          <FormInput placeholder="Your Name.." />
          <FormInput placeholder="Your E-mail.." />
          <FormTextArea placeholder="Enter a messege .." rows="4" />
          <FormButton>SEND</FormButton>
        </TopFooterForm>
      </TopFooter>
      <BottomFooter>
        <BottomLeftSection>
          <BottomFooterLogo>
            <BottomLogoElegant>ELEGANT</BottomLogoElegant>
            <BottomLogoLady>LADY</BottomLogoLady>
          </BottomFooterLogo>
          <LogoParagraph>
            Lorem ipsum dolor sit amet, consectetu radipiscing elit.
            Pellentesque vulputate lobortis risus et molestie. Vestibulum
            blandit dictum nunc, vitae ullamcorper erat.
          </LogoParagraph>
          <ContactInfoContainer>
            <ContactInfoLink isFooterBottom>
              <FontAwesomeIcon icon={faEnvelope} />
              {"  "} email@email.com
            </ContactInfoLink>
            <ContactInfoLink isFooterBottom>
              <FontAwesomeIcon icon={faPhone} />
              {"  "} +90 985 321 45 87
            </ContactInfoLink>
            <ContactInfoLink isFooterBottom>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {"  "} Realm st. Downtown
            </ContactInfoLink>
          </ContactInfoContainer>
        </BottomLeftSection>
        <BottomRightSection>
          <SocialLinksContainer>
            <SocialLink>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </SocialLink>
            <SocialLink>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </SocialLink>
            <SocialLink>
              <FontAwesomeIcon icon={faInstagramSquare} />
            </SocialLink>
            <SocialLink>
              <FontAwesomeIcon icon={faPinterestSquare} />
            </SocialLink>
          </SocialLinksContainer>
        </BottomRightSection>
        <BottomFooterBackground bg={hangedImage} />
      </BottomFooter>
    </Wrapper>
  );
};

export default Footer;
