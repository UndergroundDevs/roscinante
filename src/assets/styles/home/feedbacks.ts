import styled from 'styled-components';

export const Feedbacks = styled.section`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p.text {
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
    width: 100%;
    max-width: 1500px;
    display: grid;
    grid-template-columns: repeat(4, 320px);
    gap: 0px;
    justify-content: space-between;
  }

  .content .content-e101 {
    background: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    border-radius: 5px;
    width: auto;
    min-width: 320px;
    height: auto;
    max-width: 500px;
    padding: 20px;
  }

  .content .content-e101 h2 {
    display: flex;
    align-items: center;
    height: 50%;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
  }

  .content .content-e101 .content-user {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 25px;
  }

  .content .content-e101 .content-user .container-img {
    display: flex;
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  .content .content-e101 .content-user .container-img img {
    display: flex;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
  }

  .content .content-e101 .content-user .content-data h3 {
    font-size: 16px;
    color: #164c97;
  }

  .content .content-e101 .content-user .content-data p {
    font-family: 'Barlow Semi Condensed';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #252B42;
  }


  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .content {
      grid-template-columns: 300px 300px 300px;
      gap: 20px;
      max-width: 1024px;
    }

    .content .content-e101 {
      width: 300px;
      padding: 30px;
    }
  }

  @media screen and (max-width: 1023px) {
    height: auto;
    padding: 25px;

    .content {
      grid-template-columns: 300px;
      gap: 20px;
      justify-content: center;
    }

    .content .content-e101 {
      width: 300px;
      padding: 30px;
    }
  }

  @media screen and (max-width: 374px) {
    padding: 10px;

    
    .content {
      max-width: 300px;
      grid-template-columns: 300px;
      gap: 20px;
      justify-content: center;
    }

    .content .content-e101 {
      padding: 10px;
      width: 300px;
      min-width: 300px;
    }
  }
`