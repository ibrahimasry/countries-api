import styled from "styled-components";

export default styled.nav`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.element};
  & > * {
    margin: 0 4rem;
  }
`;
