import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../GlobalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyle";

function Hero() {
  return (
    <HeroSection>
      <HeroVideo src="../../../public/assets/hero.mp4" autoPlay muted/>
      <Container>
        <MainHeading>Your data is secure with us</MainHeading>

        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>

        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
}

export default Hero;
