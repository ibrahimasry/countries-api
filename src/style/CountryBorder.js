import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 400;

  font-size: 1.5rem;
  @media only screen and (max-width: 635px) {
    & strong {
      width: 100%;
    }

    justify-content: stretch;
  }
`;
