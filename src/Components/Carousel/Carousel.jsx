import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data/CarouselData";
import { Row, Heading, Section, TextWrapper } from "../../GlobalStyles";
import {
  CarouselImage,
  ImageWrapper,
  ButtonContainer,
  ReviewSlider,
  CardButton,
} from "./CarouselStyle";
import { useState } from "react";

function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" smpadding="0 0 70px" inverse>
      <Row>
        <Heading inverse>
          Find More About Us
        </Heading>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <SliderList key={index} el={el} />
        ))}
      </ReviewSlider>

      <ButtonContainer>
        <IconContext.Provider value={{ size: "2rem", color: "#1d609c" }}>
          <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
          <FaArrowCircleRight onClick={sliderRef?.slickNext} />
        </IconContext.Provider>
      </ButtonContainer>
    </Section>
  );
}

export default Carousel;

function SliderList({ el }) {
  return (
    <ImageWrapper>
      <CarouselImage src={el.image} />
      <TextWrapper
        size="1.1rem"
        margin="0.4rem 0 0"
        weight="bold"
        // color="lightGray"
      >
        {el.title}
      </TextWrapper>
      <TextWrapper size="0.8rem" margin="0.4rem 0 0" color="#4f4f4f">
        {el.description}
      </TextWrapper>
      <CardButton>Learn More</CardButton>
    </ImageWrapper>
  );
}

// /