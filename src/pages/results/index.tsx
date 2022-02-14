import Header from 'components/Header'
import type { NextPage } from 'next'
import { Main } from 'assets/styles/results/main'
import Graphic from 'components/Graphic'

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
        </section>
      </Main>
    </>
  )
}

export default Home
