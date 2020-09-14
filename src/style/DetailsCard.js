import styled from "styled-components";
import Flex from "./Flex";

export default styled(Flex)`
  & > ::first-child {
    margin-right: 3rem;
  }
  & img {
    width: 34vw;
    margin-right: 5rem;
    height: 40vh;
    object-fit: cover;
  }
  @media only screen and (max-width: 635px) {
    flex-direction: column;
    & img {
      width: 90vw;
    }
  }
`;
