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
  return (
    <Section>
      <Container>
        <FeatureTextWrapper>
          {featuresData.map((feature, index) => (
            <FeatureList feature={feature} key={index} />
          ))}
        </FeatureTextWrapper>
      </Container>
    </Section>
  );
}

export default Features;


function FeatureList() {
  return <FeatureColumn>
    <FeatureImageWrapper>
      Gift
    </FeatureImageWrapper>
  </FeatureColumn>
}