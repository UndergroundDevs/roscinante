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
    max-height: 900px;
    padding: 150px 0 0 0;
    justify-content: center;
    background-image: url(./Bg.png);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }

  div.content {
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .about-our-project div.content span.mark-point {
    width: 50px;
    height: 50px;
    border-radius: 19px;
    display: flex;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .blue-span {
    background: #164c97;
  }

  .yellow-span {
    background: #f5c55f;
  }

  .red-span {
    background: #e23933;
  }

  .black-span {
    background: #272727;
  }

  div.content h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #22343d;
    font-size: 22px;
    line-height: 48px;
    margin: 50px 0 25px 0;
  }

  div.content p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #22343d;
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
    .about-our-project {
      width: 100%;
      height: 100vh;
      max-height: 900px;
      padding: 120px 0 0 0;
      justify-content: center;
      background-image: url(./Bg.png);
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  @media screen and (max-width: 1023px) {
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }
`
