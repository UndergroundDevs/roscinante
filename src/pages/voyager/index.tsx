import Image from 'next/image'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Main } from './styles'
import { TitleSection } from 'styles/Title'
import { Container } from 'styles/Container'

const Home: React.FC = () => {
  return (
    <>
      <Main>
        <Header />
        <section className="know-our-project"></section>
        <section className="about-our-project">
          <TitleSection>Conheça nosso projeto!</TitleSection>
          <Container>
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
              <span className="mark-point yellow-span" />
              <h1>DET</h1>
              <p>
                Duolingo English Test: simulado e como estudar para a prova.
              </p>
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
          </Container>
          <a href="">Faça sua inscrição</a>
        </section>
        <section className="feedbacks">
          <TitleSection>Feedbacks</TitleSection>
          <p>
            De uma olhada no feedback de alguns de nossos antigos mentorados!
          </p>
          <Container>
            <div className="content">
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
            <div className="content">
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
            <div className="content">
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
        </section>
        <section className="our-members"></section>
        <Footer />
      </Main>
    </>
  )
}

export default Home
