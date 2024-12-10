"use client";

import styled from "styled-components";

export const Feed = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacings.regular};
  margin-bottom: ${(props) => props.theme.spacings.regular};
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Views = styled.span`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  grid-area: 1/1;
  display: none;

  &::before {
    content: "";
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: 0.25rem;
    background: url("/assets/visualizacao.svg") no-repeat center center;
  }
`;

export const FeedItem = styled.li`
  &:hover ${Views} {
    display: flex;
  }

  a {
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    grid-area: 1/1;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;
