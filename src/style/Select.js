import styled from "styled-components";

export default styled.select`
  border: none;
  outline: none;
  flex-grow: 1;
  appearance: none;
  background: ${({ theme }) => theme.element};

  /* inherit font & color from ancestor */
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1rem;
`;

export const Option = styled.option`
  border: none;
  outline: none;
  appearance: none;
  background: ${({ theme }) => theme.element};

  /* inherit font & color from ancestor */
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1rem;
`;
