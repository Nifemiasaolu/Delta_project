import styled from "styled-components";
import { motion } from "framer-motion";

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 8vw, 3rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;

  @media screen and (max-width: 778px) {
    font-size: clamp(1.3rem, 7vw, 3rem);
  }
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  padding: 10px;
  box-shadow: 0 0 32px 8px #d0d0d0;
  border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 2px solid #000;
  padding: 30px;
`;

export const FeatureName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;

  @media screen and (max-width: 760px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;

export const FeatureText = styled.p`
  margin: 1rem auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626861;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/////
