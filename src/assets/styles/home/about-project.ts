import styled from 'styled-components'

export const AboutProject = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 900px;
  padding: 120px 0 0 0;
  justify-content: flex-start;
  align-items: center;
  background-image: url(./bg.webp);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  a {
    width: 233px;
    height: 62px;
    font-size: 15px;
    line-height: 24px;
    border-radius: 5px;
    margin-top: 50px;
  
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

  a:hover {
    opacity: 0.8;
  }

  .content-about {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .content-about > div + div {
    margin-left: 50px;
  }

  div.content {
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  div.content span.mark-point {
    width: 50px;
    height: 50px;
    border-radius: 19px;
    display: flex;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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


  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 100px 0 0 0;

    a {
      margin: 0;
    }

    div.content {
      width: 20%;
      height: 380px;
      display: flex;
      flex-direction: column;
    }

    div.content h1 {
      margin: 20px 0 15px 0;
    }

    .content-about {
      margin-top: 20px;
      padding: 0 25px;
      height: 380px;
      justify-content: space-between;
    }

    .content-about > div + div{
      margin-left: 0;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    height: auto;
    padding: 50px 80px;
    max-height: none;

    .content-about {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .content-about > div + div {
      margin: 50px 0 0 0;
    }

    div.content {
      width: 100%;

      justify-content: center;
      align-items: center;
    }

    div.content h1 {
      margin: 0;
      width: 100%;
    }

    div.content p {
      display: flex;
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }

  @media screen and (max-width: 374px) {
  }
`