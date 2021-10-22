import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  height: auto;

  .know-our-project {
    width: 100%;
    min-height: 120vh;
    padding-top: 100px;
    background-image: url(./Shape-red.svg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about-our-project {
    width: 100%;
    height: 100vh;
    background-image: url(./Bg.png);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .feedbacks {
    width: 100%;
    height: 70vh;
  }

  .our-members {
    width: 100%;
    min-height: 100vh;
    background-image: url(./Bg_two.png);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  @media screen and (max-width: 1023px) {
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }
`
