import styled from 'styled-components'

export const Links = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100vh - 75px);
  padding: 20px;

  .content-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
    padding: 40px;
    width: 709px;
    height: 293px;
    border-radius: 20px;
  } 
  
  .text {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
  }

  .text h1 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 30px;
    line-height: 30px;
  }

  .text p {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: 600;
    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 22px;
    line-height: 151.4%;
  }

  .text a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E23933;
    background: #FFFFFF;
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: 600;

    font-size: 23px;
    line-height: 28px;
    width: 150px;
    height: 50px;
    border-radius: 8px;
  }

  .logo {
    display: flex;

    width: 270px;
    height: 250px;
  }

  .bg-color-blue {
    background: #164C97;
  }

  .bg-color-yellow {
    background: rgba(245, 197, 95, 0.98);
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .content-box {
      padding: 40px;
      width: 669px;
      height: 253px;
    } 
    
    .text h1 {
      font-size: 26px;
    }

    .text p {
      font-size: 14px;
    }

    .text a {
      font-size: 16px;
    }

    .logo {
      display: flex;

      width: 250px;
      height: 231px;
    }

    .bg-color-blue {
      background: #164C97;
    }

    .bg-color-yellow {
      background: rgba(245, 197, 95, 0.98);
    }
  }

  @media screen and (max-width: 1023px) {
    .content-box {
      padding: 40px;
      width: 560px;
      height: 253px;
    }
    
    .text h1 {
      font-size: 20px;
    }

    .text p {
      font-size: 14px;
    }

    .logo {
      display: flex;

      width: 220px;
      height: 203px;
    }
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }

  @media screen and (max-width: 374px) {
  }
`;