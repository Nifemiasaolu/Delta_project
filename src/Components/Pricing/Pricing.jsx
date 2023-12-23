import { Button, Heading, TextWrapper } from "../../GlobalStyles";
import { IconContext } from "react-icons";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardText,
  PricingCardFeature,
  PricingCard,
} from "./PricingStyle";
import { pricingData } from "../../data/PricingData";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading mb="1rem">Pick Your Best Option</PricingHeading>

          <TextWrapper
            mb="2rem"
            weight="600"
            size="1rem"
            color="white"
            align="center"
          >
            Create, maintain and store your data with Delta
          </TextWrapper>

          <PricingContainer>
            {pricingData.map((card, index) => (
              <PricingList key={index} card={card} />
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;

function PricingList({ card }) {
  return (
    <PricingCard>
      <PricingCardInfo>
        <PricingCardPlan>{card.title}</PricingCardPlan>
        <PricingCardCost>{card.price}</PricingCardCost>
        <PricingCardText>{card.description}</PricingCardText>
        <PricingCardFeatures>
          {card.features.map((feature, index) => (
            <PricingCardFeature key={index}>{feature}</PricingCardFeature>
          ))}
        </PricingCardFeatures>
      </PricingCardInfo>
    </PricingCard>
  );
}
