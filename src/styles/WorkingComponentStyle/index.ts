import styled from 'styled-components'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--highlight);
  color: var(--highlight);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 1s;
  }

  div:hover {
    transform: scale(1.1);
  }

  h1 {
    font-size: 40px;
    color: var(--white);
  }

  img {
    width: 200px;
    height: auto;
    z-index: 10000;
  }
`
