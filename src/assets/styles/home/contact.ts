import styled from "styled-components";

export const Contact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 0;
  width: 100%;
  height: calc(100vh - 75px);

  form {
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    max-width: 450px;
    height: 100%;
    max-height: 500px;
    border-radius: 20px;
    padding: 20px 30px;
  }

  form h1 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;
    text-align: center;
    
    font-size: 26px;
    line-height: 30px;
  }

  form input, form textarea {
    background: #F5F5F5;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 15px;
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
    height: 44px;
  }

  form textarea {
    width: 100%;
    height: 150px;
    padding-top: 20px;
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
    height: 44px;
    left: 50px;
    top: 566px;
    border-radius: 15px;
  }

  @media screen and (max-width: 1023px) {
    form {
      width: 100%;
      max-width: 370px;
      height: 100%;
      max-height: 500px;
    }
  }

  @media screen and (max-width: 424px) {
    padding: 30px 10px;

    form {
      width: 100%;
      max-width: 370px;
      height: 100%;
      max-height: 500px;
      padding: 20px;
    }
  }
`