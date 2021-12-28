import Image from 'next/image'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper';
import { Main } from './styles/main'
import { TitleSection } from 'styles/Title'
import { Container } from 'styles/Container'
import { KnowProjects } from './styles/know-our-project'
import { AboutProject } from './styles/about-project'
import { Feedbacks } from './styles/feedbacks'
import { OurMembers } from './styles/our-members';
import { Links } from './styles/links';
import { Contact } from './styles/contact'
import { Partners } from './styles/partners'

import "swiper/css";
import "swiper/css/pagination"

SwiperCore.use([Pagination]);

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
        <OurMembers>
          <TitleSection>Nossos membros</TitleSection>
          <p>Conheça alguns de nossos membros</p>
          <div className="content-menbers">
            <div className="content-profile-menbers">
              <div className="photo">
                <Image
                  src="/Avator.webp"
                  alt="english 101"
                  width="110px"
                  height="113px"
                />
              </div>
              <h2 className="left-margin">I can take care of your pitch</h2>
            </div>
            <div className="content-profile-menbers rever-flex">
              <div className="photo">
                <Image
                  src="/Avator.webp"
                  alt="english 101"
                  width="110px"
                  height="113px"
                />
              </div>
              <h2 className="right-margin">I can take care of your pitch</h2>
            </div>
            <div className="content-profile-menbers rever-flex">
              <div className="photo">
                <Image
                  src="/Avator.webp"
                  alt="english 101"
                  width="110px"
                  height="113px"
                />
              </div>
              <h2 className="right-margin">I can take care of your pitch</h2>
            </div>
            <div className="content-profile-menbers">
              <div className="photo">
                <Image
                  src="/Avator.webp"
                  alt="english 101"
                  width="110px"
                  height="113px"
                />
              </div>
              <h2 className="left-margin">I can take care of your pitch</h2>
            </div>
          </div>
          <a href="http://google.com">Seja um mentor</a>
        </OurMembers>
        <div className="horizon" />
        <Links>
          <div className="content-box bg-color-blue">
            <div className="text">
              <h1>
                Faça parte do nosso time
              </h1>
              <p>
                Seja você também um mentor ENG.101 <br />
                Inscreva-se aqui!
              </p>
              <a href="http://google.com">
                Inscreva-se
              </a>
            </div>
            <div className="logo">
              <Image
                src="/Logo-Simplifica-Branca.webp"
                alt="english 101"
                width="324px"
                height="300x"
              />
            </div>
          </div>
          <div className="content-box bg-color-yellow">
            <div className="text">
              <h1>
                Faça parte do nosso time
              </h1>
              <p>
                Seja você também um mentor ENG.101 <br />
                Inscreva-se aqui!
              </p>
              <a href="http://google.com">
                Inscreva-se
              </a>
            </div>
            <div className="logo">
              <Image
                src="/Logo-Simplifica-Branca.webp"
                alt="english 101"
                width="324px"
                height="300x"
              />
            </div>
          </div>
        </Links>
        <div className="horizon" />
        <Contact>
          <form>
            <h1>Entre em contato</h1>
            <input type="text" name="email" id="email" placeholder="Insira seu nome aqui!" />
            <input type="email" name="email" id="email" placeholder="Insita seu email aqui!" />
            <textarea name="message" id="message" placeholder="Insira sua mensagem aqui!" cols={30} rows={10} />
            <button type="submit">
              Enviar
            </button>
          </form>
        </Contact>
        <div className="horizon" />
        <Partners>
          <div className="help-project bg-red">
            <h1>Ajude nosso projeto</h1>
            <div className="content-pix">
              <div className="photo">
                <Image
                  src="/pix.webp"
                  alt="english 101"
                  width="149px"
                  height="146px"
                />
              </div>
              <p>Eng101@gmail.com</p>
            </div>
            <input type="text" id="pix" name="pix" defaultValue="Eng101@gmail.com" />
          </div>
          <div className="help-project bg-blue">
            <h1>Nossos Parceiros</h1>
            <Swiper pagination={true}>
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <Image
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Partners>
        <Footer />
      </Main>
    </>
  )
}

export default Home
