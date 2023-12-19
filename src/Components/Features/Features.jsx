import { Container, Section } from "../../GlobalStyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureTextWrapper,
  FeatureName,
} from "./FeaturesStyle";

import { featuresData } from "../../data/FeaturesData";

function Features() {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>What We Offer</FeatureTitle>
        </FeatureTextWrapper>

        <FeatureWrapper>
          {featuresData.map((feature, index) => (
            <FeatureList
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5 + index * 0.1 }}
              feature={feature}
              key={index}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
}


function FeatureList({ initial, animate, transition, feature }) {
  return (
    <FeatureColumn initial={initial} animate={animate} transition={transition}>
      <FeatureImageWrapper className={feature.imgClass}>
        {feature.icon}
      </FeatureImageWrapper>
      <FeatureName>{feature.name}</FeatureName>
      <FeatureText>{feature.description}</FeatureText>
    </FeatureColumn>
  );
}
// console.log(Response)

export default Features;