import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  height: auto;

  .our-members {
    width: 100%;
    min-height: calc(100vh - 100px);
    padding: 60px 0 0 0;
    background-image: url(./Bg_two.png);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .our-members p {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #22343d;
    margin: 20px 0 50px 0;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .about-our-project {
      padding: 130px 0 0 0;
    }

    div.content {
      width: 22%;
    }

    .about-our-project div.content span.mark-point {
      width: 40px;
      height: 40px;
      border-radius: 11px;
    }

    div.content h1 {
      font-size: 22px;
      margin: 25px 0 15px 0;
    }

    div.content p {
      font-size: 16px;
      line-height: 26px;
      color: #22343d;
    }

    .feedbacks {
      padding: 20px;
    }

    .feedbacks p {
      margin: 10px 0 50px;
      font-size: 15px;
    }

    .feedbacks .content {
      width: 31%;
    }

    .feedbacks .content h2 {
      padding: 20px 30px;
      font-size: 15px;
    }

    .feedbacks .content .content-user {
      padding: 20px 30px;
    }

    .our-members {
      width: 100%;
      min-height: calc(100vh - 75px);
      padding: 30px 0 0 0;
    }

    .our-members p {
      margin: 10px 0 50px 0;
    }
  }

  @media screen and (max-width: 1023px) {
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }
`
