import Header from 'components/HeaderHome'
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
                Somos uma organização virtual sem fins lucrativos voltada
                para a preparação de jovens para as provas de proficiência
                em inglês TOEFL e DET e para prova de inglês e matemática
                chamada SAT
              </p>
            </div>
            <div className="graph-info">
              <Graphic />
              <ul>
                <li>
                  <h2>Brasil</h2>
                  <p>40</p>
                </li>
                <li>
                  <h2>Alemanha</h2>
                  <p>60</p>
                </li>
                <li>
                  <h2>China</h2>
                  <p>80</p>
                </li>
                <li>
                  <h2>Rússia</h2>
                  <p>70</p>
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
                  <h2>Brasil</h2>
                  <p>40</p>
                </li>
                <li>
                  <h2>Alemanha</h2>
                  <p>60</p>
                </li>
                <li>
                  <h2>China</h2>
                  <p>80</p>
                </li>
                <li>
                  <h2>Rússia</h2>
                  <p>70</p>
                </li>
                <li>
                  <h2>França</h2>
                  <p>70</p>
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
