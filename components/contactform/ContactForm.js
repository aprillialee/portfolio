import styled from "styled-components";

import { Title, Button } from "../styledcomponents/Styled";

function ContactForm() {
  return (
    <ContactFormStyled>
      <Title>Contact Me</Title>
      <ContactAreaContainer>
        <ContactArea>
          <NameArea>
            <Name />
            <Name />
          </NameArea>
          <Email />
          <Message />
          <Button>Send</Button>
        </ContactArea>
      </ContactAreaContainer>
    </ContactFormStyled>
  );
}

const ContactFormStyled = styled.div`
  top: 50px;
  padding: 40px;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ContactAreaContainer = styled.div`
  width: 95%;
  height: 95%;
`;

const ContactArea = styled.form`
  height: 500px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NameArea = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.input`
  width: 48%;
  height: 100%;
  background: rgb(255, 255, 255, 0.2);
  border: 1px solid white;
`;

const Email = styled.input`
  width: 100%;
  height: 10%;
  background: rgb(255, 255, 255, 0.2);
  border: 1px solid white;
  margin: 5px 0px 5px 0px;
`;

const Message = styled.input`
  width: 100%;
  height: 60%;
  background: rgb(255, 255, 255, 0.2);
  border: 1px solid white;
  margin-bottom: 5px;
`;
export default ContactForm;
