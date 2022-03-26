import Footer from 'components/Footer'
import Header from 'components/HeaderHome'
import Link from 'next/link'
import axios from 'axios'
import React, { useState, ChangeEvent, MouseEvent } from 'react'
import SwiperCore, { Pagination } from 'swiper'
import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Main } from 'assets/styles/home/main'
import { TitleSection } from 'styles/Title'
import { KnowProjects } from 'assets/styles/home/know-our-project'
import { AboutProject } from 'assets/styles/home/about-project'
import { Feedbacks } from 'assets/styles/home/feedbacks'
import { OurMembers } from 'assets/styles/home/our-members'
import { Links } from 'assets/styles/home/links'
import { Contact } from 'assets/styles/home/contact'
import { Partners } from 'assets/styles/home/partners'
import { validationContact } from 'services/validation'

import "swiper/css"
import "swiper/css/pagination"

SwiperCore.use([Pagination]);

export interface FieldInitalInput {
  name: string;
  email: string;
  message: string;
}

const Home: NextPage = () => {
  const [formData, setFormData] = useState<FieldInitalInput>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function handleInput(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function submitEmail(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      await validationContact.validate(formData);
    } catch (error) {
      const alertMessage = JSON.parse(JSON.stringify(error));
      alert(alertMessage.message)
    }

    const URL = process.env.URL + '/email'

    try {
      const response = await axios.post(URL, {
        name: "Kevson Filipe",
        email: "kevsonfilipesantos@gmail.com",
        message: "Hello World"
      });

      alert(response.data.data)
    } catch (err) {
      alert(err.response.data.error)
    }
  }

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
                  <p className="paragraph-count">1</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#E23933" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>Qatar</p>
                  </div>
                </li>
                <li className="bg-color-2 width-2">
                  <span className="triangle-out border-color-2" />
                  {/* <p className="paragraph-count">103</p> */}
                </li>
                <li className="bg-color-3 border-white width-3">
                  <span className="triangle">
                    <span className="sub border-color-3" />
                  </span>
                  <p className="paragraph-count">2</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#164C97" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>India</p>
                  </div>
                </li>
                <li className="bg-color-4 width-4">
                  <span className="triangle-out border-color-4" />
                  {/* <p className="paragraph-count">103</p> */}
                </li>
                <li className="bg-color-5 border-white width-5">
                  <span className="triangle">
                    <span className="sub border-color-5" />
                  </span>
                  <p className="paragraph-count">2</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#FFCF2D" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>Paraguai</p>
                  </div>
                </li>
                <li className="bg-color-6 width-6">
                  <span className="triangle-out border-color-6" />
                  {/* <p className="paragraph-count">103</p> */}
                </li>
                <li className="bg-color-7 border-white width-7">
                  <span className="triangle">
                    <span className="sub border-color-7" />
                  </span>
                  <p className="paragraph-count">1</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#22343D" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>Peru</p>
                  </div>
                </li>
                <li className="bg-color-8 width-8">
                  <span className="triangle-out border-color-8" />
                  {/* <p className="paragraph-count">103</p> */}
                </li>
                <li className="bg-color-9 border-white width-9">
                  <span className="triangle">
                    <span className="sub border-color-9" />
                  </span>
                  <p className="paragraph-count">0</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#A5B4B4" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>Inglaterra</p>
                  </div>
                </li>
                <li className="bg-color-10 width-10">
                  <span className="triangle-out border-color-10" />
                  {/* <p className="paragraph-count">103</p> */}
                </li>
              </ul>
            </div>
            <a href="http://google.com">Vamos começar</a>
          </div>
          <div className="picture">
            <img
              src="/girl-img-header.webp"
              alt="english 101"
            />
          </div>
        </KnowProjects>
        <AboutProject id="project">
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
          <p className="text">
            De uma olhada no feedback de alguns de nossos antigos mentorados!
          </p>
          <div className="content">
            <div className="content-e101">
              <div className="content-user">
                <div className="container-img">
                  <img
                    src="/person/Luiza-Louback-_Mentee_.webp"
                    alt="This is feedback"
                  />
                </div>
                <div className="content-data">
                  <h3>Luiza Louback</h3>
                  <p>Toefl: 111 | DET: 140</p>
                </div>
              </div>
              <p>
                A English 101 me possibilitou conhecimentos práticos e ferramentas únicas
                que foram essenciais para o meu estudo e preparação para provas de
                proficiência, como o TOEFL e o Duolinguo English Test. Por meio de
                uma mentoria individual incrível, eu consegui me desafiar e ir
                além das minhas expectativas. Além do mais, fiz grandes amigos e
                criei conexões com a comunidade inspiradora que a English proporciona.
              </p>
            </div>
            <div className="content-e101">
              <div className="content-user">
                <div className="container-img">
                  <img
                    src="/person/Moizes-Henriques-_mentee_mentor-_-Tufts-_26_.webp"
                    alt="This is feedback"
                  />
                </div>
                <div className="content-data">
                  <h3>Moizes Henriques</h3>
                  <p>Tufts '26 | DET: 125</p>
                </div>
              </div>
              <p>
                Eu tive o prazer de experimentar duas das várias oportunidades que a
                English101 oferece, que foi ser mentor e mentee. Em todas as vezes
                eu tive todo suporte da coordenação, e todo mundo na liderança está
                lá para te ajudar e te compreender. O maior diferencial da English é,
                com certeza, a comunidade. Há eventos todo mês para integrar a comunidade,
                e isso me fez me sentir muito pertencente ao projeto, pelo modo ao qual
                fui recebido e introduzido ao ambiente da English. Recomendo essa experiência
                para qualquer pessoa de olhos fechados!
              </p>
            </div>
            <div className="content-e101">
              <div className="content-user">
                <div className="container-img">
                  <img
                    src="/person/David-Sztajnbok-_mentor-de-SAT_.webp"
                    alt="This is feedback"
                  />
                </div>
                <div className="content-data">
                  <h3>David</h3>
                  <p>mentor de SAT</p>
                </div>
              </div>
              <p>
                Na English101, tenho a liberdade de poder montar minhas próprias aulas
                e ter um contato muito próximo com os alunos. É uma delícia ver o
                pessoal arrasando nas provas, e tudo isso faz a English101 um lugar
                ótimo para ensinar (além das fofocas, que apesar de eu não participar
                muito, sei que rolam soltas).
              </p>
            </div>
            <div className="content-e101">
              <div className="content-user">
                <div className="container-img">
                  <img
                    src="/person/Luana-de-Paula-_ex-mentee-e-atual-mentora-de-DET_.webp"
                    alt="This is feedback"
                  />
                </div>
                <div className="content-data">
                  <h3>Luana de Paula</h3>
                  <p>ex-mentee e atual mentora de DET</p>
                </div>
              </div>
              <p>
                Desde que fui aceita no início de 2021, a comunidade da English101 esteve
                comigo em todos os passos da minha aplicação pro exterior.
                Foi muito além de apenas conseguir uma boa nota no DET! A conexão que
                tenho com meus mentees e com os outros mentores é essencial para mim e
                tenho muito orgulho de fazer parte de uma organização como a English!
              </p>
            </div>
          </div>
        </Feedbacks>
        <OurMembers id="menbers">
          <TitleSection style={{ marginTop: '40px' }}>Nossos membros</TitleSection>
          {/* <p className="title">Conheça alguns de nossos membros</p> */}
          <div className="content-menbers">
            <div className="content-profile-menbers">
              <div className="photo">
                <img
                  src="/person/Karen-Mendonça-_Chief-Learning-Officer_.webp"
                  alt="english 101"
                />
              </div>
              <div className="content-text">
                <h2 className="left-margin">Karen Mendonça (Chief Learning Officer)</h2>
                <p className="left-margin">
                  Oie! Sou a Karen, tenho 18 anos e sou de Araraquara/SP. Sempre me interessei
                  muito por educação e estive envolvida com voluntariado, um dos motivos por ter
                  me juntado à English. E embora tenha começado como mentee, hoje sou uma espécie
                  de faz tudo, mais conhecida como Chief Learning Officer.
                </p>
              </div>
            </div>
            <div className="content-profile-menbers rever-flex">
              <div className="photo">
                <img
                  src="/person/Helena-Barros-_Chief-Executive-officer_.webp"
                  alt="english 101"
                />
              </div>
              <div className="content-text">
                <h2 className="right-margin">Helena Barros (Chief Executive Officer)</h2>
                <p className="right-margin">
                  Oi, pessoal!! Me chamo Lena, tenho 19 anos e sou de BH/MG.
                  Fundei a English101 em 2020 e desde então tenho trabalhado
                  para que possamos ajudar mais estudantes. Atualmente, atuo
                  como Chief Executive Officer, direcionando e ajudando todos
                  os departamentos da E101.
                </p>
              </div>
            </div>
            <div className="content-profile-menbers rever-flex">
              <div className="photo">
                <img
                  // src="/person/Karen-Mendonça-_Chief-Learning-Officer_.webp"
                  alt="english 101"
                />
              </div>
              <div className="content-text">
                <h2 className="right-margin">João Lima (Chief Operating Officer)</h2>
                <p className="right-margin">
                  E ai! Meu nome é João Lima, tenho 18 anos, e sou de Curitiba, Paraná.
                  Conheci a E101 pelos programas de mentoria de SAT e DET no fim de 2020, e,
                  com a ajuda de mentores incríveis, conquistei meu 1420 no SAT e 145 no DET.
                  Atualmente, atuo como Chief Operating Officer, supervisionando os
                  departamentos de marketing, administrativo e eventos&parcerias para
                  garantir que tudo funcione!
                </p>
              </div>
            </div>
            <div className="content-profile-menbers">
              <div className="photo">
                <img
                  src="/person/Clarice-Pena-_Chief-Marketing-Officer_.webp"
                  alt="english 101"
                />
              </div>
              <div className="content-text">
                <h2 className="left-margin">Clarice Pena (Chief Marketing Officer)</h2>
                <p className="left-margin">
                  Oi, pessoal! Meu nome é Clarice, tenho 18 anos e sou de Contagem/MG.
                  Entrei na equipe de marketing da E101 no começo de 2021 e desde então
                  tenho me dedicado para manter toda a imagem pública do projeto.
                  Também fui mentee de DET e sou muito grata por todo o apoio da
                  minha mentora e de toda a comunidade da English.
                </p>
              </div>
            </div>
            <div className="content-profile-menbers">
              <div className="photo">
                <img
                  src="/person/Laryssa-Vasconcellos-_Chief-Admission-Officer_.webp"
                  alt="english 101"
                />
              </div>
              <div className="content-text">
                <h2 className="left-margin">Laryssa Vasconcellos (Chief Admission Officer)</h2>
                <p className="left-margin">
                  Oi! Meu nome é Laryssa Vasconcellos, tenho 19 anos, e sou do Rio de Janeiro :)
                  Entrei na E101 como mentee em 2020, mas em 2021 virei mentora de DET e conquistei
                  minha nota de 135! Além disso, também sou Chief Admissions Officer, coordenando
                  o processo de aplicação para a E101 e entrevistando os candidatos.
                </p>
              </div>
            </div>
            <div className="content-profile-menbers rever-flex">
              <div className="photo">
                <img
                  src="/person/Jose-Miguel-_Chief-Product-Officer_.webp"
                  alt="english 101"
                />
              </div>
              <div className="content-text">
                <h2 className="right-margin">Jose-Miguel Rosindo (Chief Product Officer)</h2>
                <p className="right-margin">
                  Ei! Me chamo Jose-Miguel, tenho 17 anos e sou natural de Massachusetts,
                  nos EUA. Com uma nota de 145 no DET, me tornei Mentor e AO, ajudando
                  vários alunos a alcançarem notas incríveis no teste de proficiência.
                  Ademais, sou Chief Product Officer, onde sou responsável por parcerias,
                  eventos e reputação da E101.
                </p>
              </div>
            </div>
            {/* <div className="content-profile-menbers rever-flex">
              <div className="photo">
                <img
                  src="/Avator.webp"
                  alt="english 101"
                />
              </div>
              <h2 className="right-margin">I can take care of your pitch</h2>
            </div>
            <div className="content-profile-menbers rever-flex">
              <div className="photo">
                <img
                  src="/Avator.webp"
                  alt="english 101"
                />
              </div>
              <h2 className="right-margin">I can take care of your pitch</h2>
            </div>
            <div className="content-profile-menbers">
              <div className="photo">
                <img
                  src="/Avator.webp"
                  alt="english 101"
                />
              </div>
              <h2 className="left-margin">I can take care of your pitch</h2>
            </div> */}
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
              <Link href="/mentored">
                <a>
                  Inscreva-se
                </a>
              </Link>
            </div>
            <div className="logo">
              <img
                src="/Logo-Simplifica-Branca.webp"
                alt="english 101"
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
              <Link href="/mentoring">
                <a>
                  Inscreva-se
                </a>
              </Link>
            </div>
            <div className="logo">
              <img
                src="/Logo-Simplifica-Branca.webp"
                alt="english 101"
              />
            </div>
          </div>
        </Links>
        <div className="horizon" />
        <Contact id="contact">
          <form>
            <h1>Entre em contato</h1>
            <input
              type="text"
              id="name"
              placeholder="Insira seu nome aqui!"
              name="name"
              value={formData.name}
              onChange={handleInput}
            />
            <input
              type="email"
              id="email"
              placeholder="Insita seu email aqui!"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
            <textarea
              id="message"
              placeholder="Insira sua mensagem aqui!"
              cols={30}
              rows={10}
              name="message"
              value={formData.message}
              onChange={handleInput}
            />
            <button type="submit" onClick={submitEmail}>
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
                <img
                  src="/pix.webp"
                  alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground <br /> DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Underground DEVS</h2>
                    <p>Desenvolvimento inteligente</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper pagination={true} className="swiper-mobile">
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
                    <img
                      src="/underground-slogan-1.webp"
                      alt="english 101"
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
