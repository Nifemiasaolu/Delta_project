import styled from "styled-components";
import { Button } from "../../GlobalStyles";
import { Container } from "../../GlobalStyles";

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
  /* background: black; */
  /* opacity: 0.8; */
`;

export const HeroContainer = styled(Container)`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */

  ${Container}
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
  opacity: 1;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled.button`
  color: black;
  transition: 200ms ease-in-out;
  background: rgb(251, 192, 0);
  border: solid rgb(251, 192, 0);
  border-radius: 4px;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  position: relative;

  &:hover {
    color: white;
    background: orange;
    border: solid orange;
  }

  /* ${Button} */
`;
