import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.5rem;
  color: ${({ theme }) => theme.text};
  flex-grow: 4;
  position: relative;
`;

export const Input = styled.input`
  padding: 1rem;
  padding-left: 3rem;
  outline: none;
  border: none;
  width: 50%;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.input};
`;

export const Icon = styled.div`
  padding: 0.8rem 1rem;
  position: absolute;
  top: 0.5rem;
  left: 0;
`;
