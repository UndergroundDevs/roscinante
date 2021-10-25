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
    padding: 180px 0 0 0;
    justify-content: flex-start;
    align-items: center;
    background-image: url(./Bg.png);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
  }

  .about-our-project a {
    width: 233px;
    height: 62px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #ffffff;
    background: #164c97;
    transition: opacity 0.4s;
  }

  .about-our-project a:hover {
    opacity: 0.8;
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
    height: calc(100vh - 100px);
    padding: 50px;
  }

  .feedbacks p {
    font-family: 'Poppins' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.2px;
    margin: 25px 0 25px 0;
    text-align: center;

    color: #22343d;
  }

  .feedbacks .content {
    background: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    border-radius: 5px;
    width: 31%;
    height: 278px;
  }

  .feedbacks .content h2 {
    display: flex;
    align-items: center;
    height: 50%;
    padding: 20px 40px;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
  }

  .feedbacks .content .content-user {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 50%;
    padding: 20px 40px;
  }

  .feedbacks .content .content-user .container-img {
    display: block;
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  .feedbacks .content .content-user .content-data h3 {
    margin-bottom: 16px;
    font-size: 16px;
    color: #164c97;
  }

  .feedbacks .content .content-user .content-data p {
    font-size: 13px;
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
  }

  @media screen and (max-width: 1023px) {
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }
`
