import styled from "styled-components";

export default styled.section`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: repeat(auto, 200px);
  grid-gap: 5rem;
  & img {
    width: 100%;
    height: 12em;
    object-fit: cover;
  }
  @media only screen and (max-width: 635px) {
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.element};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.element};
  padding: 2rem;
  & > * {
    margin-bottom: 1rem;
  }

  & > h3 {
    margin-bottom: 1.5rem;
  }
`;
