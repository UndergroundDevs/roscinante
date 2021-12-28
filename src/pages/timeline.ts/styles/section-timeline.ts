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

    margin-top: 20px;
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

  .line {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
  }

  .blue {
    background: #164C97;
    border-radius: 20px 0 0 25px;
  }

  .red {
    background: #E23933;
  }

  .yellow {
    background: #F5C55FFA;
  }

  .black {
    background: #272727;
    border-radius: 0 25px 25px 0;
  }

  
  .timeline .point {
    width: 25%;
    height: 100%;

    display: flex;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .timeline .point p {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    text-align: center;

    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
  }

  .timeline .point .balloon.up {
    top: -250px;
  }
  
  .timeline .point .balloon.down {
    bottom: -250px;
  }

  .timeline .point .balloon {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .timeline .point .balloon.reverse {
    flex-direction: column-reverse;
  }

  .timeline .point .balloon .vertical-line.reverse-margin {
    margin: 0 0 20px 0;
  }

  .timeline .point .balloon .vertical-line {
    display: flex;
    background: #164C97;

    margin: 20px 0 0 0;
    width: 2px;
    height: 84px;
  }

  .timeline .point .balloon span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lora;
    color: #FFF2F2;

    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 61px;
    width: 150px;
    height: 124px;
    border-radius: 50%;
  }

  .timeline .point .balloon span.blue-bolo {
    background: #164C97;
  }

  .timeline .point .balloon span.red-bolo {
    background: #E23933;
  }

  .timeline .point .triangle {
    width: 0; 
    height: 0;
    position: absolute;

    bottom: -20px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #164C97;
  }

  .timeline .point .reverse-triangle {
    position: absolute;
    width: 0; 
    height: 0; 
    top: -20px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #E23933;
  }

  .timeline .point .text-info {
    position: absolute;
    bottom: -100px;
  }

  .point .text-info.reverse {
    top: -100px;
  }

  .point .text-info p {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #888888;

    font-size: 16px;
    line-height: 19px;
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