import styled from "styled-components";
import syled from "styled-components";

export const Wrapper = syled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);
  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export const LogoRMDB = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogo = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;

export const Text = styled.div`
  display: flex;
  color: var(--lightGrey);
  font: var(--fontSmall);
  width: 20px;
`;
