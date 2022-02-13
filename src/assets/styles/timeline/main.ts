import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    width: 100%;
    height: calc(100vh - 75px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section svg.wolrd {
    width: 50vw;
    margin-right: 3vw;
  }

  section div.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 500px;
    margin-left: 3vw;
  }

  section div.info h1 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;

    font-size: 28px;
    line-height: 38px;
  }

  section div.info span {
    color: #E23933;
    text-transform: uppercase;
  }

  section div.info p {
    font-family: Barlow Semi Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;

    margin: 15px 0 30px 0;
    font-size: 20px;
    line-height: 30px;
  }

  section div.info ul {
    list-style: none;
  }

  section div.info ul li {
    display: flex;
    align-items: center;
  }

  section div.info ul li span {
    width: 44px;
    height: 44px;
    border-radius: 13.8542px;
    margin-right: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  span.red { background: #E23933; }
  span.yellow { background: rgba(245, 197, 95, 0.98);  }
  span.blue { background: #164C97; }

  section div.info ul li + li {
    margin-top: 40px;
  }

  section div.info ul li h2 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    color: #22343D;

    font-size: 24px;
    line-height: 26px;
  }
  
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  @media screen and (max-width: 1023px) {
    section.data {
      width: 100%;
      height: auto;

      flex-direction: column;
    }

    section.data svg.wolrd {
      width: auto;
      height: 50vh;
      margin: 30px 0 0 0;
    }
  }

  @media screen and (max-width: 767px) {
    section.data svg.wolrd {
      width: 50vw;
      height: auto;
      margin: 30px 0 0 0;
    }
      
    section div.info h1 {
      font-size: 20px;
      line-height: 28px;
    }

    section div.info p {
      font-size: 16px;
      line-height: 30px;
      margin-top: 0;
    }

    section div.info ul li h2 {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 424px) {

  }

  @media screen and (max-width: 374px) {
  }
`