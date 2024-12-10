"use client";
import styled from "styled-components";

export const SectionLogin = styled.section`
  @media (max-width: 40rem) {
    padding: 2rem;
  }
`;

export const ContainerLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: ${(props) => props.theme.spacings.extraLarge};

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &:before {
      display: none;
    }
  }
`;

export const ImageContainer = styled.div`
  background: url("/assets/login.jpg") no-repeat center center;
  background-size: cover;

  @media (max-width: 40rem) {
    display: none;
  }
`;

export const LoginForm = styled.div`
  margin-bottom: 2rem;
`;

export const CadasterForm = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-block: 2rem;
  }
`;
