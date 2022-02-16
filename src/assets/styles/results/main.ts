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
    right: 630px;
  }

  section.results-white div.graph-info ul li:nth-child(2) h2 {
    position: absolute;
    top: 96px;
    right: 615px;
  }
  section.results-white div.graph-info ul li:nth-child(3) h2 {
    position: absolute;
    top: 185px;
    right: 630px;
  }

  section.results-white div.graph-info ul li:nth-child(4) h2 {
    position: absolute;
    top: 270px;
    right: 630px;
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
    top: 12px;
    right: 230px;
  }

  section.results-blue div.graph-info ul li:nth-child(2) h2 {
    position: absolute;
    top: 96px;
    right: 230px;
  }
  section.results-blue div.graph-info ul li:nth-child(3) h2 {
    position: absolute;
    top: 185px;
    right: 230px;
  }

  section.results-blue div.graph-info ul li:nth-child(4) h2 {
    position: absolute;
    top: 270px;
    right: 230px;
  }

  section.results-blue div.graph-info ul li:nth-child(5) h2 {
    position: absolute;
    top: 365px;
    right: 230px;
  }


  section.results-blue div.graph-info ul li:nth-child(1) p {
    position: absolute;
    top: 8px;
    right: 420px;
  }

  section.results-blue div.graph-info ul li:nth-child(2) p {
    position: absolute;
    top: 95px;
    right: 420px;
  }

  section.results-blue div.graph-info ul li:nth-child(3) p {
    position: absolute;
    top: 183px;
    right: 420px;
  }

  section.results-blue div.graph-info ul li:nth-child(4) p {
    position: absolute;
    top: 270px;
    right: 420px;
  }
  
  section.results-blue div.graph-info ul li:nth-child(5) p {
    position: absolute;
    top: 360px;
    right: 420px;
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
      top: 7px;
      right: 390px;
    }

    section.results-white div.graph-info ul li:nth-child(2) h2 {
      position: absolute;
      top: 75px;
      right: 390px;
    }

    section.results-white div.graph-info ul li:nth-child(3) h2 {
      position: absolute;
      top: 145px;
      right: 390px;
    }

    section.results-white div.graph-info ul li:nth-child(4) h2 {
      position: absolute;
      top: 212px;
      right: 390px;
    }

    section.results-white div.graph-info ul li:nth-child(1) p {
      position: absolute;
      top: 3px;
      right: 220px;
    }

    section.results-white div.graph-info ul li:nth-child(2) p {
      position: absolute;
      top: 70px;
      right: 220px;
    }

    section.results-white div.graph-info ul li:nth-child(3) p {
      position: absolute;
      top: 142px;
      right: 220px;
    }

    section.results-white div.graph-info ul li:nth-child(4) p {
      position: absolute;
      top: 212px;
      right: 220px;
    }

    /* =================================================  */
    section.results-blue div.graph-info ul li:nth-child(1) h2 {
      top: 8px;
      right: 70px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) h2 {
      top: 75px;
      right: 50px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) h2 {
      top: 145px;
      right: 60px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) h2 {
      top: 212px;
      right: 60px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) h2 {
      top: 287px;
      right: 60px;
    }

    section.results-blue div.graph-info ul li:nth-child(1) p {
      top: 3px;
      right: 220px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) p {
      top: 70px;
      right: 220px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) p {
      top: 142px;
      right: 220px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) p {
      top: 212px;
      right: 220px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) p {
      top: 280px;
      right: 220px;
    }
  }

  @media screen and (max-width: 1023px) {
    section.results-white{
      display: flex;
      justify-content: center;
      align-items: flex-start;

      min-height: 100vh;
      height: auto;
      width: 100%;
      padding: 80px 0 20px 20px; 
    }

    section.results-blue  {
      display: flex;
      justify-content: center;
      align-items:  flex-start;

      min-height: calc(100vh - 75px);
      height: auto;
      width: 100%;
      padding: 20px 0 20px 20px; 
    }

    section.results-blue img {
      display: none;
    }
      
    section.results-blue h1 {
      padding: 0 0 0 200px;
      width: 100%;
      max-width: 768px;
    }

    section.results-white div.max-content,
    section.results-blue div.max-content {
      justify-content: flex-start;
      flex-direction: column;
      height: 100%;
      max-width: 768px;
    }
    
    section.results-white div.text-content {
      display: flex;
      flex-direction: column;

      width: auto;
    }
    
    section.results-white div.text-content h1 {
      margin: 0;
    }

    section.results-white div.text-content p {
      margin: 0 0 25px 0;
    }
      
    section.results-white div.graph-info,
    section.results-blue div.graph-info {
      width: 600px;
      height: 300px;
      min-width: 600px;
      max-height: 300px;
    }

    section.results-white div.graph-info svg.graphic,
    section.results-blue div.graph-info svg.graphic {
      height: 300px;
      width: 600px;
    }

    section.results-white div.graph-info ul li:nth-child(1) h2 {
      top: 7px;
      right: 430px;
    }

    section.results-white div.graph-info ul li:nth-child(2) h2 {
      top: 63px;
      right: 400px;
    }

    section.results-white div.graph-info ul li:nth-child(3) h2 {
      top: 125px;
      right: 430px;
    }

    section.results-white div.graph-info ul li:nth-child(4) h2 {
      top: 182px;
      right: 430px;
    }

    section.results-white div.graph-info ul li:nth-child(1) p {
      top: 0px;
      right: 270px;
    }

    section.results-white div.graph-info ul li:nth-child(2) p {
      top: 60px;
      right: 270px;
    }

    section.results-white div.graph-info ul li:nth-child(3) p {
      top: 120px;
      right: 270px;
    }

    section.results-white div.graph-info ul li:nth-child(4) p {
      top: 180px;
      right: 270px;
    }

    /* ======================================================== */
    section.results-blue div.graph-info ul li:nth-child(1) h2 {
      top: 4px;
      right: 140px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) h2 {
      top: 63px;
      right: 120px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) h2 {
      top: 125px;
      right: 140px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) h2 {
      top: 182px;
      right: 140px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) h2 {
      top: 242px;
      right: 140px;
    }

    section.results-blue div.graph-info ul li:nth-child(1) p {
      top: 0px;
      right: 270px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) p {
      top: 60px;
      right: 270px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) p {
      top: 120px;
      right: 270px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) p {
      top: 180px;
      right: 270px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) p {
      top: 240px;
      right: 270px;
    }
  }

  @media screen and (max-width: 767px) {
    section.results-white {
      padding: 80px 20px 20px 20px;
    }

    section.results-blue {
      padding: 80px 20px 20px 20px;
      justify-content: center;
    }

    section.results-white div.max-content,
    section.results-blue div.max-content {
      height: 100%;
      max-width: 375px;
      justify-content: center;
    }
          
    section.results-blue h1 {
      padding: 0 0 0 50px;
      max-width: 375px;
      margin-bottom: 50px;
    }

    section.results-white div.text-content {
      display: flex;
      flex-direction: column;

      width: auto;
    }
    
    section.results-white div.text-content h1 {
      margin: 0;
      font-size: 22px;
      line-height: 40px;
    }

    section.results-white div.text-content p {
      font-size: 16px;
      line-height: 22px;
      margin: 0 0 60px 0;
    }
      
    section.results-white div.graph-info,
    section.results-blue div.graph-info {
      width: 320px;
      height: auto;
      min-width: 320px;
      max-height: none;
    }

    section.results-white div.graph-info svg.graphic,
    section.results-blue div.graph-info svg.graphic {
      height: auto;
      width: 320px;
    }
    
    section.results-white div.graph-info ul li:nth-child(1) h2 {
      top: 0px;
      right: 255px;
    }

    section.results-white div.graph-info ul li:nth-child(2) h2 {
      top: 49px;
      right: 233px;
    }

    section.results-white div.graph-info ul li:nth-child(3) h2 {
      top: 97px;
      right: 255px;
    }

    section.results-white div.graph-info ul li:nth-child(4) h2 {
      top: 145px;
      right: 250px;
    }

    section.results-white div.graph-info ul li:nth-child(1) p {
      top: -2px;
      right: 150px;
    }

    section.results-white div.graph-info ul li:nth-child(2) p {
      position: absolute;
      top: 46px;
      right: 150px;
    }

    section.results-white div.graph-info ul li:nth-child(3) p {
      top: 94px;
      right: 150px;
    }

    section.results-white div.graph-info ul li:nth-child(4) p {
      top: 144px;
      right: 150px;
    }

    /* ======================================================= */
    section.results-blue div.graph-info ul li:nth-child(1) h2 {
      top: 0px;
      right: 25px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) h2 {
      top: 46px;
      right: 10px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) h2 {
      top: 94px;
      right: 30px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) h2 {
      top: 139px;
      right: 30px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) h2 {
      top: 190px;
      right: 25px;
    }

    section.results-blue div.graph-info ul li:nth-child(1) p {
      top: -1px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) p {
      position: absolute;
      top: 44px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) p {
      top: 90px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) p {
      top: 137px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) p {
      top: 185px;
      right: 150px;
    }
  }

  @media screen and (max-width: 374px) {
    section.results-white {
      padding: 80px 10px 10px 10px;
    }

    section.results-blue {
      padding: 80px 10px 10px 10px;
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
    }
    
    section.results-white div.text-content h1 {
      margin: 0;
      font-size: 22px;
      line-height: 40px;
    }
      
    section.results-white div.graph-info,
    section.results-blue div.graph-info {
      width: 300px;
      height: auto;
      min-width: 300px;
      max-height: none;
    }

    section.results-white div.graph-info svg.graphic,
    section.results-blue div.graph-info svg.graphic {
      height: auto;
      width: 300px;
    }

    section.results-white div.graph-info ul li:nth-child(1) h2 {
      top: 0px;
      right: 240px;
    }

    section.results-white div.graph-info ul li:nth-child(2) h2 {
      top: 43px;
      right: 220px;
    }

    section.results-white div.graph-info ul li:nth-child(3) h2 {
      top: 90px;
      right: 240px;
    }

    section.results-white div.graph-info ul li:nth-child(4) h2 {
      top: 133px;
      right: 220px;
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

    /* ======================================================= */
    section.results-blue div.graph-info ul li:nth-child(1) h2 {
      top: 0px;
      right: 25px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) h2 {
      top: 43px;
      right: 10px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) h2 {
      top: 88px;
      right: 30px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) h2 {
      top: 131px;
      right: 15px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) h2 {
      top: 178px;
      right: 15px;
    }

    section.results-blue div.graph-info ul li:nth-child(1) p {
      top: -1px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(2) p {
      position: absolute;
      top: 44px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(3) p {
      top: 90px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(4) p {
      top: 137px;
      right: 150px;
    }

    section.results-blue div.graph-info ul li:nth-child(5) p {
      top: 185px;
      right: 150px;
    }
  }
`