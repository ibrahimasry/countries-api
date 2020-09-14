import styled from "styled-components";

export default styled.nav`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 2px -1px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.element};
  & > * {
    margin: 0 1.7rem;
  }
`;
