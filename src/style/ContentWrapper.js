import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  & > * + * {
    margin-top: 2rem;
  }

  flex-wrap: wrap;

  @media only screen and (max-width: 635px) {
    margin-top: 1rem;

    & > * + * {
      margin-top: 1rem;
    }
  }
`;
