import styled from 'styled-components';

export const KnowProjects = styled.section`
  width: 100%;
  min-height: 120vh;
  padding: 100px 50px 0 50px;

  background-image: url(./Shape-red.webp);
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  .content-info {
    display: flex;
    max-width: 670px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -280px;
  }

  .content-info h1 {
    width: 100%;
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;

    font-size: 40px;
    line-height: 60px;
  }

  .content-info p {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;

    margin-top: 50px;
    font-size: 20px;
    line-height: 28px;
  }

  .content-info a {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;
    background: #164C97;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 60px;
    border-radius: 4px;
    width: 300px;
    height: 60px;
    font-size: 16px;
    line-height: 24px;
    transition: opacity 0.3s;
  }

  .content-info a:hover {
    opacity: 0.8;
  }

  .picture {
    display: block;

    width: 600px;
    height: 573.94px;
    margin-top: -280px;
  }
  
  div.content-graph {
    display: none;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 110px 50px 0 50px;

    .content-info {
      margin-top: -280px;
    }

    .content-info p {
      margin-top: 50px;
    }

    .content-info a {
      height: 55px;
      margin-top: 60px;
    }

    .picture {
      display: block;

      width: 500px;
      height: 478.28px;
    }
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    padding: 75px 100px 100px;
    
    .content-info {
      width: 100%;
      justify-content: center;
      align-items: flex-start;

      padding: 0;
    }

    .content-info h1 {
      display: none;
    }

    .content-info h1 + p {
      display: none;
    }

    .picture {
      display: none;
    }

    div.content-graph {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0 100px 0 0;
      width: 100%;
    }

    div.content-graph ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      list-style: none;
    }

    ul li {
      position: relative;
      height: 25px;
    }

    ul li.width-1 {
      width: 120px;
    }

    ul li.width-2 {
      width: 146px;
    }

    ul li.width-3 {
      width: 192px;
    }

    ul li.width-4 {
      width: 169px;
    }

    ul li.width-5 {
      width: 179px;
    }

    ul li.width-6 {
      width: 198px;
    }

    ul li.width-7 {
      width: 219px;
    }

    ul li.width-8 {
      width: 199px;
    }

    ul li.width-9 {
      width: 174px;
    }

    ul li.width-10 {
      width: 135px;
    }

    ul li.bg-color-1 {
      background: #E23933;
    }
    
    ul li.bg-color-2 {
      background: #FE5244;
    }
    
    ul li.bg-color-3 {
      background: #164C97;
    }
    
    ul li.bg-color-4 {
      background: #66B0F0;
    }
    
    ul li.bg-color-5 {
      background: #FFCF2D;
    }
    
    ul li.bg-color-6 {
      background: rgba(245, 197, 95, 0.98);
    }
    
    ul li.bg-color-7 {
      background: #22343D;
    }
    
    ul li.bg-color-8 {
      background: #888888;
    }
    
    ul li.bg-color-9 {
      background: #A5B4B4;
    }
    
    ul li.bg-color-10 {
      background: #BFCFCC;
    }

    ul li.border-white {
      border: 2px solid #FFFFFF;
      border-left: none;
    }

    ul li span.triangle {
      width: 0 !important; 
      height: 0 !important;
      position: absolute;
      top: -2px;
      left: -12px;
      border-top: 12.5px solid transparent;
      border-bottom: 12.5px solid transparent; 
      border-right: 12.5px solid #FFF;
      z-index: 3;
    }

    ul li span > span.sub {
      width: 0 !important; 
      height: 0 !important;
      position: absolute;
      top: -10.9px;
      left: 2.2px;
      border-top: 10.9px solid transparent;
      border-bottom: 10.9px solid transparent; 
      border-right-width: 10.9px;
      border-right-style: solid;
    }

    ul li span > span.sub.border-color-1 {
      border-right-color: #E23933;
    }
    
    ul li span.triangle-out.border-color-2 {
      border-right-color: #FE5244;
    }
    
    ul li span > span.sub.border-color-3 {
      border-right-color: #164C97;
    }
    
    ul li span.triangle-out.border-color-4 {
      border-right-color: #66B0F0;
    }
    
    ul li span > span.sub.border-color-5 {
      border-right-color: #FFCF2D;
    }
    
    ul li span.triangle-out.border-color-6 {
      border-right-color: rgba(245, 197, 95, 0.98);
    }
    
    ul li span > span.sub.border-color-7 {
      border-right-color: #22343D;
    }
    
    ul li span.triangle-out.border-color-8 {
      border-right-color: #888888;
    }
    
    ul li span > span.sub.border-color-9 {
      border-right-color: #A5B4B4;
    }
    
    ul li span.triangle-out.border-color-10 {
      border-right-color: #BFCFCC;
    }

    ul li span.triangle-out {
      width: 0 !important; 
      height: 0 !important;
      position: absolute;
      top: 0px;
      left: -11.1px;
      border-top: 12.1px solid transparent;
      border-bottom: 12.1px solid transparent; 
      border-right-width: 12.1px;
      border-right-style: solid;
    }

    ul li div.country {
      top: 0px;
      right: -20px;
      margin: 0;

      position: absolute;
      display: flex !important;
    }

    ul li div.country p {
      display: flex;
      position: absolute;
      font-family: Barlow Condensed;
      font-style: normal;
      font-weight: bold;
      color: #FFFFFF;

      font-size: 12px;
      line-height: 11px;
      top: 9px;
      left: 25px;
      margin: 0;
      z-index: 3;
    }

    ul li div.country svg {
      width: auto;
      height: 45px;
      position: absolute;
      z-index: 3;
    }

    ul li .paragraph-count {
      display: flex;
      font-family: Barlow Condensed;
      font-style: normal;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;
      justify-content: flex-end;
      align-items: center;

      padding: 0 70px 0 0;
      height: 21px;
      font-size: 9px;
      line-height: 11px;
      margin: 0;
    }
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 424px) {
  }
`