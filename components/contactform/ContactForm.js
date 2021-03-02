import styled from "styled-components";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Title, Button } from "../styledcomponents/Styled";

import Link from "next/link";

function ContactForm() {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };
      await emailjs.send(
        "service_qfg9rr3",
        "template_7ff53ae",
        templateParams,
        "user_3KNDOtg1d4XYD4P6pJZ9I"
      );
      reset();
      alert("Message Submitted");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ContactFormStyled>
      <Title>Contact Me</Title>
      <ContactAreaContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Name
            type="text"
            name="name"
            placeholder="Name"
            ref={register({
              required: { value: true, message: "Please enter your name" },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Email
            type="text"
            name="email"
            placeholder="Email"
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && <span>Please enter a valid email address</span>}
          <Message
            type="text"
            name="message"
            placeholder="Enter your message here :)"
            ref={register({
              required: { value: true, message: "Please enter a subject" },
              maxLength: {
                value: 200,
                message: "Subject cannot exceed 200 characters",
              },
            })}
          />
          {errors.subject && <span>{errors.subject.message}</span>}
          <Button type="submit">Send</Button>
        </form>
        <SocialContainer>
          <Text>
            Send me a message and say hello <br />
            or reach out on social media
          </Text>
          <IconContainer>
            <Link href="https://www.instagram.com/aprillialee/" passHref={true}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.6"
                  y="0.6"
                  width="11.8"
                  height="11.8"
                  rx="3.4"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <circle cx="6.5" cy="6.5" r="3" stroke="white" />
                <circle cx="9.75" cy="2.75" r="0.75" fill="white" />
              </svg>
            </Link>
            <Link href="https://twitter.com/prillyio" passHref={true}>
              <svg
                version="1.1"
                id="Logo"
                xmlns="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 248 204"
                width="40"
                height="40"
                fill="white"
              >
                <g id="Logo_1_">
                  <path
                    id="white_background"
                    d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                  />
                </g>
              </svg>
            </Link>
          </IconContainer>
        </SocialContainer>
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
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 95%;

  form {
    height: 550px;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Name = styled.input`
  width: 100%;
  height: 10%;
  background: rgb(255, 255, 255, 0.2);
  border: 1px solid white;
  padding: 20px;
  outline: none;
  font-family: "Coda", sans-serif;
  font-weight: 400;
  font-size: 16px;

  ::placeholder {
    color: #e5e5e5;
  }
`;

const Email = styled.input`
  width: 100%;
  height: 10%;
  background: rgb(255, 255, 255, 0.2);
  border: 1px solid white;
  margin: 10px 0px 10px 0px;
  outline: none;
  padding: 20px;
  font-family: "Coda", sans-serif;
  font-weight: 400;
  font-size: 16px;

  ::placeholder {
    color: #e5e5e5;
  }
`;

const Message = styled.textarea`
  width: 100%;
  height: 60%;
  background: rgb(255, 255, 255, 0.2);
  border: 1px solid white;
  margin-bottom: 10px;
  outline: none;
  padding: 20px;
  font-family: "Coda", sans-serif;
  font-weight: 400;
  font-size: 16px;

  ::placeholder {
    color: #e5e5e5;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Text = styled.p`
  font-family: "Coda", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: white;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  height: 50px;
  cursor: pointer;
`;

export default ContactForm;
