import styled from "styled-components";

export default styled.section`
  padding: 1rem;
  display: flex;
  margin: 2rem 0;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 635px) {
    flex-direction: column;
    align-items: flex-start;
    & > * {
      margin: 1rem 0;
    }
  }
`;
