import styled from "styled-components";

export default styled.li`
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.element};
  /* inherit font & color from ancestor */
  text-transform: lowercase;
  text-align: center;
  padding: 0.2rem 3rem;
  margin: 0.5rem;
  @media only screen and (max-width: 635px) {
    padding: 0.3rem 3rem;
    margin: 0.4rem;
    flex-grow: 1;
  }
`;
