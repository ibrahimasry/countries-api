import styled from "styled-components";

export default styled.button`
  border-radius: 0.6rem;
  border: none;
  box-shadow: 0 4px 2px -1px rgba(0, 0, 0, 0.1);

  background: ${({ theme }) => theme.element};
  outline: none;
  display: flex;
  /* inherit font & color from ancestor */
  color: inherit;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 200;
  padding: 0.8rem 3rem;
  /* text-align: center; */
  align-items: center;
  margin: 4rem;
  margin-left: 0;
  & > * + * {
    margin-left: 1rem;
  }
  & > .back {
    margin-bottom: 0.3rem;
  }
`;
