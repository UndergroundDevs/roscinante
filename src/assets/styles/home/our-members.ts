import styled from 'styled-components'

export const OurMembers = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 0 20px 0 20px;

  background-image: url(./Bg_two.webp);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  p.title {
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
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    justify-self: center;
    justify-items: center;

    width: 100%;
    max-width: 1600px;
  }

  .content-profile-menbers {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
  }

  .content-profile-menbers .content-text {
    display: flex;
    flex-direction: column;
  }

  .content-profile-menbers .content-text h2 {
    color: #2F281E;
    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
  }

  .content-profile-menbers .content-text p {
    display: flex;
    color: #2F281E;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 13px;
  }

  .content-profile-menbers .photo {
    height: 155px;
    min-width: 155px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-profile-menbers:nth-child(1) .photo img {
    border: 4px solid #E23933;
    object-position: center -44px;
  }

  
  .content-profile-menbers:nth-child(2) .photo img {
    border: 4px solid #164C97;
    object-position: left top;
  }

  .content-profile-menbers:nth-child(3) .photo img {
    border: 4px solid #164C97;
  }

  .content-profile-menbers:nth-child(4) .photo img {
    border: 4px solid #F5C55F;
  }

  .content-profile-menbers:nth-child(5) .photo img {
    border: 4px solid #000000;
    object-position: center -20px;
  }

  .content-profile-menbers:nth-child(6) .photo img {
    border: 4px solid #272727;
    object-position: left top;
  }

  .content-profile-menbers .photo img {
    display: flex;
    height: 140px;
    width: 140px;
    border-radius: 50%;
    object-fit: cover;
  }

  .left-margin {
    margin-left: 25px;
    text-align: left;
  }

  .right-margin {
    margin-right: 25px;
    text-align: right;
  }

  .rever-flex {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding: 40px;

    .content-menbers {
      grid-template-columns: 1fr;
      margin: 30px 0 0 0;
    }

    .rever-flex {
      flex-direction: row;
    }

    .left-margin {
      text-align: left;
    }

    .right-margin {
      margin-left: 25px;
      text-align: left;
    }
  }

  @media screen and (max-width: 767px) {
    margin: 0;
    padding: 40px 20px 0 20px;

    .content-profile-menbers {
      display: flex;
      flex-direction: column;
    }

    .content-profile-menbers .content-text {
      margin-top: 25px;
    }

    .content-profile-menbers .content-text h2 {
      text-align: center;
    }
  }
`;