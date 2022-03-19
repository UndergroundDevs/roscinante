import styled from 'styled-components'

export const HeaderStyle = styled.header<{ shadow: boolean, isOpen: boolean }>`
  height: 75px;
  width: 100%;
  padding: 0 100px;
  position: fixed;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
  transition: all 1s;
  box-shadow: ${({ shadow }) =>
    shadow
      ? 'rgba(39, 39, 39, .3) 0px 13px 27px -5px, rgba(39, 39, 39, .3) 0px 8px 16px -8px'
      : 'none'};

  a.home-link {
    display: flex;
    width: 157px;
    height: 65px;
  }

  ul {
    display: flex;
  }

  ul.navigation {
    height: 100%;
    width: 100%;
    margin-left: 100px;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    padding: 0 25px;
  }

  ul.navigation li a {
    color: #22343d;
    font-family: 'Barlow Condensed', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    transition: opacity 0.3s;
  }

  ul.navigation li a:hover {
    opacity: 0.8;
  }

  ul.navigation li + li {
    margin-left: 45px;
  }

  ul.navigation li::marker {
    color: #e23933;
  }

  ul li a {
    text-decoration: none;
  }

  ul.sign-donate {
    height: 100%;
    align-items: center;
  }

  ul.sign-donate li {
    display: flex;
    list-style: none;
  }

  ul.sign-donate li + li {
    margin-left: 20px;
  }

  ul.sign-donate li a {
    width: 158px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Barlow Condensed', sans-serif;
    font-style: normal;
    color: #ffffff;
    transition: opacity 0.5s;
  }

  ul.sign-donate li a:hover {
    opacity: 0.6;
  }

  ul.sign-donate li a.red {
    background-color: #e23933;
  }

  ul.sign-donate li a.blue {
    background-color: #164c97;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 0 25px;
    height: 75px;

    a.home-link {
      min-height: 69px;
      min-width: 150px;
    }

    ul.navigation {
      height: 100%;
      width: 100%;
      padding: 0 0 0 6vw;
      margin-left: 0;
    }

    ul.sign-donate li a {
      width: 150px;
      height: 40px;
      font-size: 15px;
    }

    ul.sign-donate li + li {
      margin-left: 15px;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 60%;
    height: 100vh;
    padding: 0 0 0 0px;
    left: ${({ isOpen }) =>
    isOpen
      ? '0%'
      : '-60%'};;
    transition: all .5s;
    flex-direction: column;
    justify-content: inherit;

    ul.navigation li + li, ul.navigation li {
      margin: 0 0 20px 20px;
    }

    ul.navigation {
      flex-direction: column;
      align-items: flex-start;

      height: auto;
      padding: 0 50px;
      margin: 0;
    }

    ul.sign-donate li + li {
      margin: 20px 0 0 0;
    }

    ul.sign-donate {
      padding: 0 50px;
      margin: 20px 0 0 0;
      width: 100%;
      height: auto;

      flex-direction: column;
      align-items: flex-start;
    }

    ul.navigation {
      flex-direction: column;
      align-items: flex-start;

      height: auto;
      padding: 50px 50px;
      margin: 0;
    }

    ul.navigation li a {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 75%;
    height: 100vh;
    padding: 0 0 0 0px;
    left: ${({ isOpen }) =>
    isOpen
      ? '0%'
      : '-80%'};;
    transition: all .5s;
    flex-direction: column;
    justify-content: inherit;
  }

  @media screen and (max-width: 424px) {
  }
`

export const HeaderMobile = styled.header`
  display: none;

  @media screen and (max-width: 1023px) {
    height: 75px;
    width: 100%;
    padding: 0 30px;
    transition: all 1s;

    position: fixed;
    background-color: #ffffff;
    border-bottom: 1px solid #dedede;
    display: flex;
    z-index: 20;
    justify-content: space-between;
    align-items: center;

    a.home-link {
      display: flex;
      width: 145px;
      height: 60px;
    }

    a.home-link img {
      display: flex;
      width: 145px;
      height: 60px;
    }

    span {
      width: 30px;
      height: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    span > div {
      width: 30px;
      height: 3px;
      border-radius: 20px;
      
      background-color: #164C97;
      position: relative;
    }

    span > div::after {
      position: absolute;
      background-color: #164C97;
      content: ' ';

      border-radius: 20px;
      width: 30px;
      height: 3px;
      top: -10px;
    }

    span > div::before {
      position: absolute;
      background-color: #164C97;
      content: ' ';

      border-radius: 20px;
      width: 30px;
      top: 10px;
      height: 3px;
    }
  }
`