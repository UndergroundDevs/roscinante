import React from 'react'
import Header from '../../components/Header'
import { Main } from './styles/main'
import { TimeLine } from './styles/section-timeline';

const Mentoring: React.FC = () => {
  return (
    <Main>
      <Header />
      <TimeLine>
        <h1>Nossa estrada até aqui</h1>
        <div className="timeline">
          <div className="line">
            <div className="point blue">
              <div className="balloon up">
                <span className="blue-bolo">
                  1
                </span>
                <div className="vertical-line" />
              </div>
              <span className="triangle" />
              <div className="text-info">
                <p>Nossa história começa aqui</p>
              </div>
              <p>2021</p>
            </div>
            <div className="point red">
              <div className="balloon down reverse">
                <span className="red-bolo">
                  2
                </span>
                <div className="vertical-line reverse-margin red-line" />
              </div>
              <span className="reverse-triangle" />
              <div className="text-info reverse">
                <p>Nossa história começa aqui</p>
              </div>
              <p>2021</p>
            </div>
            <div className="point yellow">

            </div>
            <div className="point black">

            </div>
          </div>
        </div>
      </TimeLine>
    </Main>
  );
}

export default Mentoring;