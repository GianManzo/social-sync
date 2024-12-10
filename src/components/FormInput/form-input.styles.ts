"use client";

import styled from "styled-components";

export const FormImputContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.regular};
`;

export const Label = styled.label`
  display: block;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

export const Input = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.2s;
  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.error};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
