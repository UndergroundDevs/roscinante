import styled from 'styled-components'

export const HeaderStyle = styled.header`
  height: 100px;
  width: 100%;
  padding: 0 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a.home-link {
    width: auto;
    height: auto;
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
    width: 168px;
    height: 50px;
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
`
