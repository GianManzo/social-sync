"use client";

import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  padding: 3rem 1rem 0 1rem;
  height: 10rem;
  text-align: center;
  color: #764701;

  p {
    margin-top: ${(props) => props.theme.spacings.regular};
  }

  img {
    margin: 0 auto;
  }
`;
