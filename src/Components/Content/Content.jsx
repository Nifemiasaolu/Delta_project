import { Container, Section } from "../../GlobalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  Heading,
  ContentColumn,
} from "./ContentStyle";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

function Content({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
}) {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                animate={animation}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                animate={animation}
                transition={{ delay: 0.5, duration: 0.6 }}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                animate={animation}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {description}
              </Subtitle>
              <ContentButton
                initial={initial}
                animate={animation}
                transition={{ delay: 1, duration: 0.6 }}
                inverse={inverse}
                primary={primary}
              >
                {buttonLabel}
              </ContentButton>
            </TextWrapper>
          </ContentColumn>

          <ContentColumn
            initial={initial}
            animate={animation}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
}

export default Content;
