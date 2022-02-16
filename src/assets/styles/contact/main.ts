import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #164C97;

  section {
    padding: 75px 0 0 0;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 460px;
    height: 530px;
    border-radius: 20px;
    padding: 30px 30px;
  }

  form h1 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;
    text-align: center;
    text-transform: uppercase;
    
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 30px;
  }

  form input, form textarea {
    background: #F5F5F5;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 0 20px;
  }

  form input::placeholder, form textarea::placeholder {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;

    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.1px;
  }

  form input {
    width: 100%;
    height: 54px;
    margin-bottom: 20px;
  }

  form textarea {
    width: 100%;
    height: 193px;
    padding-top: 20px;
    margin-bottom: 20px;
  }

  form button {
    color: #FFFFFF;
    background: #E23933;
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    border: none;
    cursor: pointer;

    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
    width: 200px;
    height: 52px;
    left: 50px;
    top: 566px;
    border-radius: 10px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  @media screen and (max-width: 1023px) {
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }

  @media screen and (max-width: 374px) {
  }
`