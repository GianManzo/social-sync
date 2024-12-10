"use client";

import { Button } from "@/components/FormButton/form-button.styles";
import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 2rem;
  max-width: 50%;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;

export const LoginSubtitle = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;

  &:after {
    content: "";
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

export const ForgetPassword = styled.a`
  display: inline-block;
  color: #666;
  padding: 0.5rem;
  line-height: 1;
  &:after {
    content: "";
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

export const Cadaster = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  p {
    margin-block: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  line-height: 1;
  font-size: 2rem;
  &:after {
    content: "";
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

export const LinkButton = styled(Button).attrs({ as: "a" })``;
