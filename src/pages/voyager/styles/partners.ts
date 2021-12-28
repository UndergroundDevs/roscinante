import styled from "styled-components";

export const Partners = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 50px;
  width: 100%;
  height: calc(100vh - 75px);

  .help-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 40px;
    
    width: 637px;
    height: 295px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }

  .help-project h1 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;

    font-size: 36px;
    line-height: 30px;
  }

  .help-project input {
    width: 100px;
    height: 30px;
    display: none;
  }

  .help-project .content-pix {
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;
  }

  .help-project .content-pix p {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;

    font-size: 45px;
    line-height: 30px;
    margin-left: 60px;
  }

  .help-project .content-pix .photo {
    display: block;
    width: 149px;
    height: 146px;
  }
  
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    width: 260px;
    display: flex;
  }

  
  .content .info {
    margin-left: 20px;
  }

  .content .info h2 {
    text-align: center;
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;

    font-size: 24px;
    line-height: 30px;
  }

  .content .info p {
    font-size: 14px;
    line-height: 30px;

    text-align: center;
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: 300;
    text-align: center;
    color: #FFFFFF;
  }

  .swiper-pagination-bullet-active {
    background: #E23933 !important;
    border: 2px solid #FFFFFF;
  }

  .swiper-pagination-bullet {
    background: #FFF;
    opacity: 1;
  }

  .bg-red {
    background: #E23933;
  }

  .bg-blue {
    background: #164C97;
  }

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  flex-direction: column;
  padding: 15px 30px;
  
  .help-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 40px;
    
    width: 637px;
    height: 285px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }
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