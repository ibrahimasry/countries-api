import styled from "styled-components";
import Flex from "./Flex";

export default styled(Flex)`
  & img {
    width: 35vw;
    margin-right: 5rem;
    height: 40vh;
    object-fit: cover;
  }
  & h2 {
    font-size: 2rem;
  }
  @media only screen and (max-width: 680px) {
    flex-direction: column;

    & img {
      width: 90vw;
      margin-right: 0;
    }
  }
`;
