import styled from 'styled-components'

export const OurMembers = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 75px);
  margin-top: 20px;
  padding: 40px 0 0 0;

  background-image: url(./Bg_two.webp);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: #22343D;

    font-size: 16px;
    line-height: 26px;
    margin-top: 20px;
  }

  a {
    background: #164C97;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;

    margin-top: 60px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 4px;
    width: 243px;
    height: 61px;
  }
  
  a:hover {
    opacity: 0.8;
  }

  .content-menbers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    justify-self: center;
    justify-items: center;

    width: 90%;
  }

  .content-profile-menbers {
    display: flex;
    width: auto;
  }

  .content-profile-menbers h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2F281E;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;

    font-size: 16px;
    line-height: 24px;
  }

  .left-margin {
    margin-left: 50px;
  }

  .right-margin {
    margin-right: 50px;
  }

  .rever-flex {
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding: 40px 0 0 0;

    .content-menbers {
      grid-template-columns: 1fr;
      margin: 30px 0 0 0;
    }

    .rever-flex {
      flex-direction: row;
    }
    
    .content-profile-menbers:nth-child(2) {
      flex-direction: row-reverse;
    }

    .content-profile-menbers:nth-child(3) h2 {
      margin: 0 0 0 50px;
    }

    .content-profile-menbers:nth-child(4) {
      flex-direction: row-reverse;
    }

    .content-profile-menbers:nth-child(4) h2 {
      margin: 0 50px 0 0;
    }
  }

  @media screen and (max-width: 767px) {
    margin: 0;
    padding: 40px 20px 0 20px;

    .content-profile-menbers:nth-child(4) h2 {
      margin: 0 20px 0 0;
    }

    .content-profile-menbers:nth-child(3) h2 {
      margin: 0 0 0 20px;
    }

    .left-margin {
      margin-left: 20px;
    }

    .right-margin {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 424px) {
  }

  @media screen and (max-width: 374px) {
  }
`;