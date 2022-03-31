import Header from 'components/Header'
import type { NextPage } from 'next'
import { Main } from 'assets/styles/results/main'
import Graphic from 'components/Graphic'
import Graphic2 from 'components/Graphic2'

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Header />
        <section className="results-white">
          <div className="max-content">
            <div className="text-content">
              <h1>Resultados</h1>
              <p>
                Por meio de nossas mentorias individualizadas de DET e TOEFL, obtivemos
                resultados de excelência nestas provas. Nossos mentees atingiram nível
                C1+, isto é, mostraram grande fluência e domínio da língua inglesa.
              </p>
            </div>
            <div className="graph-info">
              <Graphic />
              <ul>
                <li>
                  <h2>Média de DET</h2>
                  <p>125</p>
                </li>
                <li>
                  <h2>Média de Toefl</h2>
                  <p>102</p>
                </li>
                <li>
                  <h2>Brasil</h2>
                  <p>260</p>
                </li>
                <li>
                  <h2>Estados Unidos</h2>
                  <p>5</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="results-blue">
          <h1>Número de alunos em cada país</h1>
          <div className="max-content">
            <img src="/Logo-Simplifica-Branca.webp" alt="logo english 101" />
            <div className="graph-info">
              <Graphic2 />
              <ul>
                <li>
                  <h2>Qatar</h2>
                  <p>1</p>
                </li>
                <li>
                  <h2>India</h2>
                  <p>2</p>
                </li>
                <li>
                  <h2>Paraguai</h2>
                  <p>3</p>
                </li>
                <li>
                  <h2>Peru</h2>
                  <p>2</p>
                </li>
                <li>
                  <h2>Inglaterra</h2>
                  <p>0</p>
                </li>
                <li>
                  <h2>Noruega</h2>
                  <p>0</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Main>
    </>
  )
}

export default Home
