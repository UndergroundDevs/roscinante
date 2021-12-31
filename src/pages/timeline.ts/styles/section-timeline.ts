import styled from 'styled-components'

export const TimeLine = styled.section`
  width: 100%;
  height: 100vh;
  padding: 75px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;

    font-size: 26px;
    line-height: 43px;
  }

  .timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;

    width: 100%;
    height: 100%;
  }

  ul {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  ul li {
    width: 25%;
    height: 100%;

    display: flex;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
  ul li:first-child {
    border-radius: 20px 0 0 25px;
  }

  ul li:last-child {
    border-radius: 0 25px 25px 0;
  }

  ul li span {
    position: absolute;
  }

  ul li span.arrow-up {
    width: 0; 
    height: 0;
    top: -20px;
    border-right-width: 20px;
    border-left-width: 20px;
    border-bottom-width: 20px;

    border-left-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
  }

  ul li span.arrow-down {
    width: 0; 
    height: 0; 
    bottom: -20px;
    border-left-width: 20px;
    border-top-width: 20px;
    border-right-width: 20px;

    border-left-color: transparent;
    border-right-color: transparent;
    border-right-style: solid;
    border-left-style: solid;
    border-top-style: solid;
  }

  ul li span.blue-border {
    border-top-color: #164C97;
  }

  ul li span.red-border {
    border-bottom-color: #E23933;
  }
  
  ul li span.yellow-border {
    border-top-color: #F5C55FFA;
  }
  
  ul li span.black-border {
    border-bottom-color: #272727;
  }

  ul li h1  {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;

    font-size: 26px;
    line-height: 0;
  }

  ul li h2 {
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: Lora;
    color: #FFF2F2;
    font-style: normal;
    font-weight: bold;
    
    width: 150px;
    height: 124px;
    font-size: 48px;
    border-radius: 50%;
  }

  
  ul li h2 div.vertical-line {
    width: 2px;
    height: 84px;
    position: absolute;
  }

  ul li div.vertical-line.normal {
    bottom: -100px;
  }

  ul li div.vertical-line.reverse {
    top: -100px;
  }

  ul li h2.normal-position {
    top: -250px;
  }

  ul li h2.reverse-position {
    bottom: -250px;
  }

  ul li p {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #888888;
    position: absolute;

    width: 193px;
    font-size: 14px;
    line-height: 19px;
  }

  ul li p.normal-paragraph {
    bottom: -150px;
  }
  ul li p.reverse-paragraph {
    top: -150px;
  }

  .blue {
    background: #164C97;
  }

  .red {
    background: #E23933;
  }

  .yellow {
    background: #F5C55FFA;
  }

  .black {
    background: #272727;
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