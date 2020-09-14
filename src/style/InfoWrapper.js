import styled from "styled-components";
import Flex from "./Flex";

const InfoWrapper = styled(Flex)`
  justify-content: flex-start;
  @media only screen and (max-width: 635px) {
    flex-direction: column;
    & > * {
      margin-bottom: 2rem;
    }
  }
`;

export default InfoWrapper;
