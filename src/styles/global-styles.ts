import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }) => theme.typography.sizes.regular};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }


body {
  margin: 0;
  color: #333;
  --type-first: Helvetica, Arial, sans-serif;
  --type-second: var(--second-font-spectral), Georgia;
  font-family: var(--type-first);
  padding-top: 4rem;
}

a {
  text-decoration: none;
  color: #333;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  display: block;
  font-size: 1rem;
  font-family: var(--type-first);
  color: #333;
}

.App {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
}

.AppBody {
  flex: 1;
}

.container {
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
}

.mainContainer {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.title {
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
}

.title::after {
  content: "";
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background: #fb1;
  position: absolute;
  bottom: 5px;
  left: -5px;
  border-radius: 0.2rem;
  z-index: -1;
}

.animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animeleft 0.3s forwards;
}

@keyframes animeleft {
  to {
    opacity: 1;
    transform: initial;
  }
}

`;
