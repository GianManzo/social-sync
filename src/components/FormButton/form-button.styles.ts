"use client";

import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: ${(props) => props.theme.colors.primary};
  color: #764701;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  min-width: 8rem;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea,
      0 0 0 4px ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
