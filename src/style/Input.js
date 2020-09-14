import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.text};
  position: relative;
  width: 70%;
  @media only screen and (max-width: 635px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  padding-left: 3rem;
  outline: none;
  border: none;
  width: 50%;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.input};
  @media only screen and (max-width: 635px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  padding: 0.8rem 1rem;
  position: absolute;
  top: 0.4rem;
  left: 0;
  margin-left: 0;
`;
