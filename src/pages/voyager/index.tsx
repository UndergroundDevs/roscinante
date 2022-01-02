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
            <div className="content-graph">
              <ul>
                <li className="bg-color-1 border-white width-1">
                  <span className="triangle">
                    <span className="sub border-color-1" />
                  </span>
                  <p className="paragraph-count">103</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#E23933" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>Brasil</p>
                  </div>
                </li>
                <li className="bg-color-2 width-2">
                  <span className="triangle-out border-color-2" />
                  <p className="paragraph-count">103</p>
                </li>
                <li className="bg-color-3 border-white width-3">
                  <span className="triangle">
                    <span className="sub border-color-3" />
                  </span>
                  <p className="paragraph-count">103</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#164C97" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>Alemanha</p>
                  </div>
                </li>
                <li className="bg-color-4 width-4">
                  <span className="triangle-out border-color-4" />
                  <p className="paragraph-count">103</p>
                </li>
                <li className="bg-color-5 border-white width-5">
                  <span className="triangle">
                    <span className="sub border-color-5" />
                  </span>
                  <p className="paragraph-count">103</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#FFCF2D" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>China</p>
                  </div>
                </li>
                <li className="bg-color-6 width-6">
                  <span className="triangle-out border-color-6" />
                  <p className="paragraph-count">103</p>
                </li>
                <li className="bg-color-7 border-white width-7">
                  <span className="triangle">
                    <span className="sub border-color-7" />
                  </span>
                  <p className="paragraph-count">103</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#22343D" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>Rússia</p>
                  </div>
                </li>
                <li className="bg-color-8 width-8">
                  <span className="triangle-out border-color-8" />
                  <p className="paragraph-count">103</p>
                </li>
                <li className="bg-color-9 border-white width-9">
                  <span className="triangle">
                    <span className="sub border-color-9" />
                  </span>
                  <p className="paragraph-count">103</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#A5B4B4" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>Espanha</p>
                  </div>
                </li>
                <li className="bg-color-10 width-10">
                  <span className="triangle-out border-color-10" />
                  <p className="paragraph-count">103</p>
                </li>
              </ul>
            </div>
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
