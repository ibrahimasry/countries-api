import styled from "styled-components";

export default styled.button`
  border-radius: 0.6rem;
  border: none;
  background: ${({ theme }) => theme.element};
  outline: none;
  display: flex;
  /* inherit font & color from ancestor */
  color: inherit;
  cursor: pointer;
  font-size: 1.3rem;
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
