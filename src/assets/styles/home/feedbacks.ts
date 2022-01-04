import styled from 'styled-components';

export const Feedbacks = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
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

  .content {
    display: flex;
    justify-content: space-between;
  }

  .content-e101 {
    background: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    border-radius: 5px;
    width: 31%;
    height: 278px;
    max-width: 500px;
  }

  .content .content-e101 h2 {
    display: flex;
    align-items: center;
    height: 50%;
    padding: 20px 40px;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
  }

  .content .content-e101 .content-user {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 50%;
    padding: 20px 40px;
  }

  .content .content-e101 .content-user .container-img {
    display: block;
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  .content .content-e101 .content-user .content-data h3 {
    margin-bottom: 16px;
    font-size: 16px;
    color: #164c97;
  }

  .content .content-e101 .content-user .content-data p {
    font-size: 13px;
  }


  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    p {
      margin: 15px 0 15px 0;
    }

    .content-e101 {
      padding: 20px;
    }

    .content-e101 h2 {
      height: 50%;
      padding: 0;
    }

    .content-e101 .content-user {
      display: flex;
      align-items: center;
      flex-direction: row;
      height: 50%;
      padding: 20px 0;
    }

    .content-e101 .content-user .container-img {
      display: block;
      width: 80px;
      height: 80px;
      margin-right: 20px;
    }

    .content-e101 .content-user .content-data h3 {
      margin-bottom: 16px;
      font-size: 16px;
      color: #164c97;
    }

    .content-e101 .content-user .content-data p {
      font-size: 13px;
    }
    
    .content .content-e101 h2 {
      padding: 10px 10px;
    }

    .content .content-e101 .content-user {
      padding: 10px 10px;
    }
  }

  @media screen and (max-width: 1023px) {
    height: auto;
    padding: 50px;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .content-e101 {
      width: 400px;
      margin: 0 0 30px 0;
    }
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }

  @media screen and (max-width: 374px) {
  }

`