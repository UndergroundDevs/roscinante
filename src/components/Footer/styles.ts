import styled from 'styled-components'

export const FooterStyle = styled.footer`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .container-footer {
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    height: 40%;
    padding: 0 100px;
  }

  .container-footer .content-logo {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
    height: 100%;
    padding: 0 50px;
  }

  .container-footer .content-logo a.logo {
    display: block;
    width: 153px;
    height: 139px;
  }

  .container-footer .content-logo ul {
    display: flex;
    justify-content: space-between;
    list-style: none;

    width: 100%;
  }

  .container-footer .content-logo ul li {
    display: flex;
  }

  .container-footer ul.resources {
    display: flex;
    list-style: none;
    flex-direction: column;

    width: 200px;
    height: 100%;
  }

  .container-footer .resources li h1 {
    text-align: left;
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;

    font-size: 24px;
    line-height: 30px;
  }

  .container-footer .resources li a {
    text-decoration: none;
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: 500;
    color: #22343D;

    font-size: 18px;
    line-height: 35px;
  }

  .container-footer .news {
    display: flex;
    flex-direction: column;

    width: auto;
    height: 100%;
  }

  .container-footer .news h1 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;


    font-size: 24px;
    line-height: 30px;
  }

  .container-footer .news form {
    display: flex;

    margin-top: 20px;
    width: 100%;
    height: auto;
  }

  .container-footer .news form input {
    width: 380px;
    height: 40px;
    border: 1px solid #BCD0E5;
    padding-left: 15px;

    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 4px;
  }

  .container-footer .news form input::placeholder {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #BCD0E5;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 28px;
  }


  .container-footer .news form button {
    width: 117px;
    height: 40px;
    margin-left: 20px;
    border-radius: 5px;
    font-size: 18px;

    box-sizing: border-box;
    border: none;
    background: #E23933;

    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;

    text-align: center;

    color: #FFFFFF;
  }
  
  .container-bg {
    display: flex;
    width: 100%;
    height: 50%;
    background-image: url(./Wave.webp);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 100%;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .container-footer {
      padding: 0 50px;
    }

    .container-footer .content-logo {
      width: 250px;
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    min-height: calc(100vh - 75px);
    flex-direction: column;

    .container-footer {
      display: grid;
      justify-items: center;

      grid-template-columns: 1fr 1fr;
      gap: 40px;
      width: 100%;
      height: auto;
      padding: 20px 50px;
    }

    .container-footer .content-logo {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 300px;
      height: 100%;
      padding: 0 50px;
    }

    .container-footer .news {
      grid-column: 1/3;
    }
    
    .container-footer ul.resources {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }

    .container-footer ul.resources li {
      width: 100px;
      display: flex;
      justify-content: center;
      justify-self: center;
      align-self: flex-end;
    }

    .container-footer ul.resources li:nth-child(1) {
      grid-column: 1/3;
    }

    .container-footer ul.resources li:nth-child(1) > * {
      text-align: center;
    }

    .container-footer ul.resources li:nth-child(1) li {
      grid-column: 1/3;
    }

    .container-footer ul.resources li:nth-child(6) {
      grid-column: 1/3;
    }
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }
`
