import styled from "styled-components";
import Flex from "./Flex";

const Info = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;

  font-size: 1.3rem;
  font-weight: 400;
  width: 50%;
  flex-wrap: wrap;
  & > * {
    margin-right: 5rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 635px) {
    white-space: wrap;
    font-size: 1rem;
    width: 100%;
    flex-wrap: nowrap;

    & > * {
      margin-right: 0rem;
      margin-bottom: 0.5rem;
    }
    justify-content: center;
  }
`;

export default Info;
