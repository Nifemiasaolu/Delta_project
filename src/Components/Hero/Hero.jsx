import { Link } from "react-router-dom";
import { Button, MainHeading } from "../../GlobalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
  HeroContainer
} from "./HeroStyle";

function Hero() {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay loop muted/>
      <HeroContainer>
        <MainHeading>Your data is secured with us</MainHeading>

        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>

        <ButtonWrapper>
          <Link to="signup">
            <HeroButton>Get Started</HeroButton>
          </Link>
          <Button>Find More</Button>
        </ButtonWrapper>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;

///
