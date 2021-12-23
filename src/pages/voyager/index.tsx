import Image from 'next/image'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Main } from './styles/main'
import { TitleSection } from 'styles/Title'
import { Container } from 'styles/Container'
import { KnowProjects } from './styles/know-our-project'
import { AboutProject } from './styles/about-project'
import { Feedbacks } from './styles/feedbacks';

const Home: React.FC = () => {
  return (
    <>
      <Main>
        <Header />
        <KnowProjects>
          <div className="content-info">
            <h1>Conheça nosso projeto!</h1>
            <p>
              Somos uma organização virtual sem fins lucrativos voltada para a
              preparação de jovens para as provas de proficiência em inglês TOEFL
              e DET e para prova de inglês e matemática chamada SAT
            </p>
            <a href="http://google.com">Vamos começar</a>
          </div>
          <div className="picture">
            <Image
              src="/girl-img-header.webp"
              alt="english 101"
              width="714px"
              height="683px"
            />
          </div>
        </KnowProjects>
        <AboutProject>
          <TitleSection>Conheça nosso projeto!</TitleSection>
          <div className="content-about">
            <div className="content">
              <span className="mark-point yellow-span" />
              <h1>DET</h1>
              <p>
                Duolingo English Test: simulado e como estudar para a prova.
              </p>
            </div>
            <div className="content">
              <span className="mark-point blue-span" />
              <div>
                <h1>SAT</h1>
                <p>
                  Exame educacional padronizado nos Estados Unidos aplicado a
                  estudantes do ensino médio, que serve de critério para
                  admissão nas universidades norte-americanas.{' '}
                </p>
              </div>
            </div>
            <div className="content">
              <span className="mark-point red-span" />
              <h1>TOEFL</h1>
              <p>
                O Test of English as a Foreign Language ou Teste de Inglês como
                Língua Estrangeira é um exame que tem o objetivo de avaliar o
                potencial individual de falar e entender o inglês em nível
                acadêmico.
              </p>
            </div>
            <div className="content">
              <span className="mark-point black-span" />
              <h1>APPLICATION</h1>
              <p>Aplicação direta do inglês em sua vida academica.</p>
            </div>
          </div>
          <a href="">Faça sua inscrição</a>
        </AboutProject>
        <Feedbacks>
          <TitleSection>Feedbacks</TitleSection>
          <p>
            De uma olhada no feedback de alguns de nossos antigos mentorados!
          </p>
          <Container>
            <div className="content-e101">
              <h2>
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </h2>
              <div className="content-user">
                <div className="container-img">
                  <Image
                    src="/Ellipse_2.png"
                    alt="This is feedback"
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="content-data">
                  <h3>Wahid Ari</h3>
                  <p>Designer</p>
                </div>
              </div>
            </div>
            <div className="content-e101">
              <h2>
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </h2>
              <div className="content-user">
                <div className="container-img">
                  <Image
                    src="/Ellipse_2.png"
                    alt="This is feedback"
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="content-data">
                  <h3>Wahid Ari</h3>
                  <p>Designer</p>
                </div>
              </div>
            </div>
            <div className="content-e101">
              <h2>
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </h2>
              <div className="content-user">
                <div className="container-img">
                  <Image
                    src="/Ellipse_2.png"
                    alt="This is feedback"
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="content-data">
                  <h3>Wahid Ari</h3>
                  <p>Designer</p>
                </div>
              </div>
            </div>
          </Container>
        </Feedbacks>
        <section className="our-members">
          <TitleSection>Nossos membros</TitleSection>
          <p>Conheça alguns de nossos membros</p>
          <Container>
            <div className="content-grid-menbers"></div>
          </Container>
        </section>
        <Footer />
      </Main>
    </>
  )
}

export default Home
