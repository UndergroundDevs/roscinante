import styled from 'styled-components';

export const KnowProjects = styled.section`
  width: 100%;
  min-height: 120vh;
  padding: 100px 50px 0 50px;

  background-image: url(./Shape-red.webp);
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  .content-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }

  .content-info h1 {
    width: 100%;
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;

    font-size: 40px;
    line-height: 60px;
  }

  .content-info p {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;

    margin-top: 50px;
    font-size: 20px;
    line-height: 28px;
  }

  .content-info a {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;
    background: #164C97;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 60px;
    border-radius: 4px;
    width: 300px;
    height: 60px;
    font-size: 16px;
    line-height: 24px;
    transition: opacity 0.3s;
  }

  .content-info a:hover {
    opacity: 0.8;
  }

  .picture {
    display: block;

    width: 600px;
    height: 573.94px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 110px 50px 0 50px;

    .content-info {
      margin-top: 60px;
    }

    .content-info p {
      margin-top: 50px;
    }

    .content-info a {
      height: 55px;
      margin-top: 60px;
    }

    .picture {
      display: block;

      width: 500px;
      height: 478.28px;
    }
  }

  @media screen and (max-width: 1023px) {
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }
`