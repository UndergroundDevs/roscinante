import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;

  section.results-white {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    height: 100vh;
    width: 100%;
    padding: 20vh 0 10vh 30px; 
  }

   section.results-blue {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #164C97;

    height: calc(100vh - 75px);
    width: 100%;
    padding: 20px; 
  }

  section.results-blue h1 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;

    padding: 0 0 0 380px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 1440px;
    font-size: 28px;
    line-height: 34px;
  }

  section.results-blue img {
    width: 400px;
    height: auto;
  }

  section.results-white div.max-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
  }

  section.results-blue div.max-content {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    max-width: 1440px;
  }

  section.results-white div.text-content {
    display: flex;
    flex-direction: column;

    width: 30%;
  }

  section.results-white div.text-content h1 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;

    font-size: 40px;
    line-height: 60px;
    margin-bottom: 60px;
  }

  section.results-white div.text-content p {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;

    font-size: 20px;
    line-height: 28px;
  }

  section.results-white div.graph-info {
    width: 900px;
    height: 450px;
    min-width: 900px;
    max-height: 450px;
    background-size: 90% 100%;

    background-image: url("/backg-grafico.webp");
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: right;
    justify-content: center;
    align-content: center;
    display: flex;
    position: relative;
  }

  section.results-blue div.graph-info {
    width: 900px;
    height: 450px;
    min-width: 900px;
    max-height: 450px;
    background-size: 90% 100%;

    justify-content: center;
    align-content: center;
    display: flex;
    position: relative;
  }

  section.results-white div.graph-info svg.graphic,
  section.results-blue div.graph-info svg.graphic {
    height: 440px;
  }

  section.results-white div.graph-info ul, 
  section.results-blue div.graph-info ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    width: 0;
    height: 0;
  }

  section.results-white div.graph-info ul li,
  section.results-blue div.graph-info ul li {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;

    font-size: 20px;
    line-height: 31px;
    color: #FFF;
  }
  
  section.results-white div.graph-info ul li h2,
  section.results-blue div.graph-info ul li h2 {
    font-size: 20px;
  }

  section.results-white div.graph-info ul li p,
  section.results-blue div.graph-info ul li p {
    font-size: 18px;
  }

  section.results-white div.graph-info ul li:nth-child(1) h2 {
    position: absolute;
    top: 12px;
    right: 600px;
  }

  section.results-white div.graph-info ul li:nth-child(2) h2 {
    position: absolute;
    top: 96px;
    right: 600px;
  }
  section.results-white div.graph-info ul li:nth-child(3) h2 {
    position: absolute;
    top: 185px;
    right: 630px;
  }

  section.results-white div.graph-info ul li:nth-child(4) h2 {
    position: absolute;
    top: 270px;
    right: 590px;
  }

  section.results-white div.graph-info ul li:nth-child(1) p {
    position: absolute;
    top: 12px;
    right: 420px;
  }

  section.results-white div.graph-info ul li:nth-child(2) p {
    position: absolute;
    top: 96px;
    right: 420px;
  }

  section.results-white div.graph-info ul li:nth-child(3) p {
    position: absolute;
    top: 183px;
    right: 420px;
  }

  section.results-white div.graph-info ul li:nth-child(4) p {
    position: absolute;
    top: 270px;
    right: 420px;
  }

  /* ======================================================= */
  section.results-blue div.graph-info ul li:nth-child(1) h2 {
    position: absolute;
    top: 69px;
    right: 325px;
  }

  section.results-blue div.graph-info ul li:nth-child(2) h2 {
    position: absolute;
    top: 120px;
    right: 325px;
  }
  section.results-blue div.graph-info ul li:nth-child(3) h2 {
    position: absolute;
    top: 173px;
    right: 310px;
  }

  section.results-blue div.graph-info ul li:nth-child(4) h2 {
    position: absolute;
    top: 222px;
    right: 325px;
  }

  section.results-blue div.graph-info ul li:nth-child(5) h2 {
    position: absolute;
    top: 275px;
    right: 305px;
  }

  section.results-blue div.graph-info ul li:nth-child(6) h2 {
    position: absolute;
    top: 325px;
    right: 310px;
  }

  section.results-blue div.graph-info ul li:nth-child(1) p {
    position: absolute;
    top: 69px;
    right: 440px;
  }

  section.results-blue div.graph-info ul li:nth-child(2) p {
    position: absolute;
    top: 120px;
    right: 440px;
  }

  section.results-blue div.graph-info ul li:nth-child(3) p {
    position: absolute;
    top: 173px;
    right: 440px;
  }

  section.results-blue div.graph-info ul li:nth-child(4) p {
    position: absolute;
    top: 222px;
    right: 440px;
  }
  
  section.results-blue div.graph-info ul li:nth-child(5) p {
    position: absolute;
    top: 275px;
    right: 440px;
  }

  section.results-blue div.graph-info ul li:nth-child(6) p {
    position: absolute;
    top: 324px;
    right: 440px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    section.results-blue h1 {
      padding: 0 0 0 160px;
      max-width: 1024px;
    }

    section.results-white div.max-content,
    section.results-blue div.max-content {
      width: 100%;
      max-width: 1024px;
    }

    section.results-white div.text-content {
      width: 40%;
    }

    section.results-white div.text-content h1 {
      font-size: 30px;
      line-height: 60px;
      margin: 40px 0 20px 0;
    }

    section.results-white div.text-content p {
      font-size: 16px;
    }

    section.results-white div.graph-info,
    section.results-blue div.graph-info {
      width: 500px;
      min-width: 500px;
      max-height: 350px;
    }

    section.results-white div.graph-info svg.graphic,
    section.results-blue div.graph-info svg.graphic {
      height: auto;
      width: 500px;
    }

    section.results-white div.graph-info ul li:nth-child(1) h2 {
    position: absolute;
    top: 5px;
    right: 200px;
  }

  section.results-white div.graph-info ul li:nth-child(2) h2 {
    position: absolute;
    top: 72px;
    right: 190px;
  }
  section.results-white div.graph-info ul li:nth-child(3) h2 {
    position: absolute;
    top: 140px;
    right: 230px;
  }

  section.results-white div.graph-info ul li:nth-child(4) h2 {
    position: absolute;
    top: 210px;
    right: 180px;
  }

  section.results-white div.graph-info ul li:nth-child(1) p {
    position: absolute;
    top: 12px;
    right: 420px;
  }

  section.results-white div.graph-info ul li:nth-child(2) p {
    position: absolute;
    top: 79px;
    right: 420px;
  }

  section.results-white div.graph-info ul li:nth-child(3) p {
    position: absolute;
    top: 145px;
    right: 420px;
  }

  section.results-white div.graph-info ul li:nth-child(4) p {
    position: absolute;
    top: 215px;
    right: 420px;
  }

    section.results-blue div.graph-info ul li:nth-child(1) h2 {
      position: absolute;
      top: 54px;
      right: 145px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) h2 {
      position: absolute;
      top: 94px;
      right: 145px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) h2 {
      position: absolute;
      top: 133px;
      right: 130px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) h2 {
      position: absolute;
      top: 172px;
      right: 145px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) h2 {
      position: absolute;
      top: 213px;
      right: 126px;
    }

    section.results-blue div.graph-info ul li:nth-child(6) h2 {
      position: absolute;
      top: 255px;
      right: 130px;
    }

    section.results-blue div.graph-info ul li:nth-child(1) p {
      position: absolute;
      top: 50px;
      right: 260px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) p {
      position: absolute;
      top: 90px;
      right: 260px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) p {
      position: absolute;
      top: 132px;
      right: 260px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) p {
      position: absolute;
      top: 172px;
      right: 260px;
    }
    
    section.results-blue div.graph-info ul li:nth-child(5) p {
      position: absolute;
      top: 213px;
      right: 260px;
    }

    section.results-blue div.graph-info ul li:nth-child(6) p {
      position: absolute;
      top: 253px;
      right: 260px;
    }
  }

  @media screen and (max-width: 1023px) {
    section.results-blue img {
      display: none;
    }

    section.results-white {
      padding: 80px 10px 10px 10px;
    }

    section.results-blue {
      padding: 80px 10px 10px 10px;
    }

    section.results-white div.text-content h1 {
      font-size: 30px;
      line-height: 60px;
      margin: 40px 0 20px 0;
    }

    section.results-white div.text-content p {
      font-size: 16px;
    }

    section.results-blue h1 {
      padding: 20px;
      margin-bottom: 20px;
      width: 100%;
      max-width: 1440px;
      font-size: 18px;
      line-height: 28px;
    }

    section.results-white div.max-content,
    section.results-blue div.max-content {
      max-width: 320px;
      display: flex;
      flex-direction: column;
    }
    
    section.results-white div.text-content {
      margin-bottom: 30px;
    }

    section.results-white div.text-content h1 {
      margin: 0;
      font-size: 22px;
      line-height: 40px;
    }
      
    section.results-white div.text-content p {
      min-width: 300px;
      display: flex;
    }

    section.results-white div.graph-info,
    section.results-blue div.graph-info {
      width: 300px;
      height: 228.88px;
      min-width: 300px;
      max-height: 228.88px;
    }

    section.results-white div.graph-info svg.graphic,
    section.results-blue div.graph-info svg.graphic {
      height: auto;
      width: 300px;
    }

    section.results-white div.graph-info ul li h2 {
      font-size: 14px;
      width: 100px;
    }
    
    section.results-white div.graph-info ul li p {
      font-size: 16px;
    }

    section.results-white div.graph-info ul li:nth-child(1) h2 {
      top: 0px;
      right: 192px;
    }

    section.results-white div.graph-info ul li:nth-child(2) h2 {
      top: 43px;
      right: 192px;
    }

    section.results-white div.graph-info ul li:nth-child(3) h2 {
      top: 90px;
      right: 185px;
    }

    section.results-white div.graph-info ul li:nth-child(4) h2 {
      top: 133px;
      right: 190px;
    }

    section.results-white div.graph-info ul li:nth-child(1) p {
      top: -4px;
      right: 120px;
    }

    section.results-white div.graph-info ul li:nth-child(2) p {
      position: absolute;
      top: 41px;
      right: 120px;
    }

    section.results-white div.graph-info ul li:nth-child(3) p {
      top: 86px;
      right: 120px;
    }

    section.results-white div.graph-info ul li:nth-child(4) p {
      top: 132px;
      right: 120px;
    }

    section.results-blue div.graph-info ul li h2 {
      font-size: 14px;
      width: 100px;
    }
    
    section.results-blue div.graph-info ul li p {
      font-size: 14px;
    }

    section.results-blue div.graph-info ul li:nth-child(1) h2 {
      position: absolute;
      top: 32px;
      right: 5px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) h2 {
      position: absolute;
      top: 60px;
      right: 0px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) h2 {
      position: absolute;
      top: 88px;
      right: 16px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) h2 {
      position: absolute;
      top: 115px;
      right: 0px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) h2 {
      position: absolute;
      top: 144px;
      right: 16px;
    }

    section.results-blue div.graph-info ul li:nth-child(6) h2 {
      position: absolute;
      top: 172px;
      right: 10px;
    }

    section.results-blue div.graph-info ul li:nth-child(1) p {
      position: absolute;
      top: 29px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) p {
      position: absolute;
      top: 58px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) p {
      position: absolute;
      top: 86px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) p {
      position: absolute;
      top: 114px;
      right: 150px;
    }
    
    section.results-blue div.graph-info ul li:nth-child(5) p {
      position: absolute;
      top: 143px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(6) p {
      position: absolute;
      top: 171px;
      right: 150px;
    }
  }
`