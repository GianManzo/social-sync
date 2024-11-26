"use client";

import styled from "styled-components";

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #fff;
  top: 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  a.logo {
    padding: 0.5rem 0;
  }
  a.login {
    display: flex;
    align-items: center;
  }
  a.login::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url("/assets/usuario.svg") no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
