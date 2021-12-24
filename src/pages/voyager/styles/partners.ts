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
    padding: 30px;
    
    width: 637px;
    height: 295px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }

  .help-project h1 {
  }

  .help-project input {
    width: 100px;
    display: none;
    height: 30px;
  }

  .help-project .content-pix {
    display: flex;
  }

  .help-project .content-pix .photo {
    display: block;
    width: 149px;
    height: 141px;
  }

  .bg-red {
    background: #E23933;
  }

  .bg-blue {
    background: #164C97;
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