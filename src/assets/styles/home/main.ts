import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .horizon {
    width: 90%;
    height: 1px;
    margin: 20px 0;
    background: rgba(188, 208, 229, 1);
  }

  div.loading {
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(255,255,255, .5);
    z-index: 10;
    justify-content: center;
    align-items: center;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  div.loading div.lo {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border-left: 10px solid #E23933;
    border-right: 10px solid #164C97;
    border-top: 10px solid #22343D;
    border-bottom: 10px solid #FFCF2D;
    animation: spin 1.5s linear infinite;
  }
`
