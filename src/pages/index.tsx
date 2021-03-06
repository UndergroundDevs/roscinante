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
    setLoading(true)
    try {
      await validationContact.validate(formData);
    } catch (error) {
      const alertMessage = JSON.parse(JSON.stringify(error));
      setLoading(false)
      return alert(alertMessage.message)
    }

    const URL = '/api/email'
    try {
      const response = await axios.post(URL, { ...formData });
      setLoading(false)
      return alert(response.data.data)
    } catch (err) {
      setLoading(false)
      return alert(err.response.data.error)
    }
  }

  function onScrollStart(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const section = event.currentTarget.getAttribute('href');
    if (!section)
      return;

    const sectionElement = document.querySelector('#' + section);
    if (!sectionElement)
      return;

    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function onScrollEnd(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const section = event.currentTarget.getAttribute('href');
    if (!section)
      return;


    const sectionElement = document.querySelector('#' + section);
    if (!sectionElement)
      return;

    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  return (
    <>
      <Main>
        <Header />
        <KnowProjects>
          <div className="content-info">
            <h1>Conhe??a nosso projeto!</h1>
            <p>
              Somos uma organiza????o virtual sem fins lucrativos voltada para a
              prepara????o de jovens para as provas de profici??ncia em ingl??s TOEFL
              e DET e para prova de ingl??s e matem??tica chamada SAT
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
                  <p className="paragraph-count">1</p>
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
                <li className="bg-color-9 border-white width-9">
                  <span className="triangle">
                    <span className="sub border-color-9" />
                  </span>
                  <p className="paragraph-count">1</p>
                  <div className="country">
                    <svg width={107} height={52} viewBox="0 0 107 52" fill="none">
                      <path d="M21.1272 31.7858H21.1311H90.163C94.2491 31.7858 98.1567 30.2243 101.029 27.4625C103.899 24.7025 105.5 20.9721 105.5 17.0953C105.5 13.2185 103.899 9.48803 101.029 6.7281C98.1567 3.96624 94.2491 2.4048 90.163 2.4048L11.5845 2.4048L11.5823 2.4048C10.2874 2.40294 9.00618 2.64689 7.81248 3.12134C6.61885 3.59577 5.53806 4.29058 4.63058 5.16319C3.72325 6.03569 3.00716 7.06858 2.52038 8.20105C2.03365 9.33336 1.78493 10.5447 1.78683 11.7663V11.7686V48.3005L17.4311 33.2569L17.4393 33.2492C18.4321 32.3086 19.7571 31.7893 21.1272 31.7858Z" fill="#A5B4B4" stroke="white" strokeWidth={3} />
                    </svg>
                    <p>Noruega</p>
                  </div>
                </li>
                <li className="bg-color-10 width-10">
                  <span className="triangle-out border-color-10" />
                  {/* <p className="paragraph-count">103</p> */}
                </li>
              </ul>
            </div>
            <a href="project" onClick={onScrollStart}>Vamos come??ar</a>
          </div>
          <div className="picture">
            <img
              src="/girl-img-header.webp"
              alt="english 101"
            />
          </div>
        </KnowProjects>
        <AboutProject id="project">
          <TitleSection>Conhe??a nosso projeto!</TitleSection>
          <div className="content-about">
            <div className="content">
              <span className="mark-point yellow-span" />
              <h1>DET</h1>
              <p>
                O Duolingo English Test ?? uma prova de profici??ncia em ingl??s que
                vem se tornando bastante popular. Ele ?? uma prova adaptativa e
                dura aproximadamente 1h.
              </p>
            </div>
            <div className="content">
              <span className="mark-point blue-span" />
              <div>
                <h1>SAT</h1>
                <p>
                  O Scholastic Aptitude Test ?? um exame educacional padronizado de ingl??s e
                  matem??tica. Ele costuma ser aplicado a estudantes do ensino m??dio e
                  serve de crit??rio para admiss??o nas universidades dos EUA. Podemos
                  consider??-lo o ???ENEM americano???.
                </p>
              </div>
            </div>
            <div className="content">
              <span className="mark-point red-span" />
              <h1>TOEFL</h1>
              <p>
                O Test Of English as a Foreign Language ?? uma prova de profici??ncia em
                ingl??s bastante disseminada. Ele ?? estruturado em quatro se????es e tem
                dura????o de 4h.
              </p>
            </div>
            <div className="content">
              <span className="mark-point black-span" />
              <h1>APPLICATION</h1>
              <p>
                Como muitos de nossos membros buscam oportunidades no exterior, tentamos auxili??-los
                neste processo, conhecido como application. Por isso, promovemos eventos e
                workshops diversos.
              </p>
            </div>
          </div>
          <Link href="/mentored">
            <a>Fa??a sua inscri????o</a>
          </Link>
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
                A English 101 me possibilitou conhecimentos pr??ticos e ferramentas ??nicas
                que foram essenciais para o meu estudo e prepara????o para provas de
                profici??ncia, como o TOEFL e o Duolinguo English Test. Por meio de
                uma mentoria individual incr??vel, eu consegui me desafiar e ir
                al??m das minhas expectativas. Al??m do mais, fiz grandes amigos e
                criei conex??es com a comunidade inspiradora que a English proporciona.
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
                Eu tive o prazer de experimentar duas das v??rias oportunidades que a
                English101 oferece, que foi ser mentor e mentee. Em todas as vezes
                eu tive todo suporte da coordena????o, e todo mundo na lideran??a est??
                l?? para te ajudar e te compreender. O maior diferencial da English ??,
                com certeza, a comunidade. H?? eventos todo m??s para integrar a comunidade,
                e isso me fez me sentir muito pertencente ao projeto, pelo modo ao qual
                fui recebido e introduzido ao ambiente da English. Recomendo essa experi??ncia
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
                Na English101, tenho a liberdade de poder montar minhas pr??prias aulas
                e ter um contato muito pr??ximo com os alunos. ?? uma del??cia ver o
                pessoal arrasando nas provas, e tudo isso faz a English101 um lugar
                ??timo para ensinar (al??m das fofocas, que apesar de eu n??o participar
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
                Desde que fui aceita no in??cio de 2021, a comunidade da English101 esteve
                comigo em todos os passos da minha aplica????o pro exterior.
                Foi muito al??m de apenas conseguir uma boa nota no DET! A conex??o que
                tenho com meus mentees e com os outros mentores ?? essencial para mim e
                tenho muito orgulho de fazer parte de uma organiza????o como a English!
              </p>
            </div>
          </div>
        </Feedbacks>
        <OurMembers id="menbers">
          <TitleSection style={{ marginTop: '40px' }}>Nossos membros</TitleSection>
          {/* <p className="title">Conhe??a alguns de nossos membros</p> */}
          <div className="content-menbers">
            <div className="content-profile-menbers">
              <div className="photo">
                <img
                  src="/person/Karen-Mendon??a-_Chief-Learning-Officer_.webp"
                  alt="english 101"
                />
              </div>
              <div className="content-text">
                <h2 className="left-margin">Karen Mendon??a (Chief Learning Officer)</h2>
                <p className="left-margin">
                  Oie! Sou a Karen, tenho 18 anos e sou de Araraquara/SP. Sempre me interessei
                  muito por educa????o e estive envolvida com voluntariado, um dos motivos por ter
                  me juntado ?? English. E embora tenha come??ado como mentee, hoje sou uma esp??cie
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
                  Fundei a English101 em 2020 e desde ent??o tenho trabalhado
                  para que possamos ajudar mais estudantes. Atualmente, atuo
                  como Chief Executive Officer, direcionando e ajudando todos
                  os departamentos da E101.
                </p>
              </div>
            </div>
            <div className="content-profile-menbers rever-flex">
              <div className="photo">
                <img
                  src="/person/Jo??o-Lima-_Chief-Operating-Officer_.webp"
                  alt="english 101"
                />
              </div>
              <div className="content-text">
                <h2 className="right-margin">Jo??o Lima (Chief Operating Officer)</h2>
                <p className="right-margin">
                  E ai! Meu nome ?? Jo??o Lima, tenho 18 anos, e sou de Curitiba, Paran??.
                  Conheci a E101 pelos programas de mentoria de SAT e DET no fim de 2020, e,
                  com a ajuda de mentores incr??veis, conquistei meu 1420 no SAT e 145 no DET.
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
                  Oi, pessoal! Meu nome ?? Clarice, tenho 18 anos e sou de Contagem/MG.
                  Entrei na equipe de marketing da E101 no come??o de 2021 e desde ent??o
                  tenho me dedicado para manter toda a imagem p??blica do projeto.
                  Tamb??m fui mentee de DET e sou muito grata por todo o apoio da
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
                <h2 className="left-margin">Laryssa Vasconcellos (Chief Admissions Officer)</h2>
                <p className="left-margin">
                  Oi! Meu nome ?? Laryssa Vasconcellos, tenho 19 anos, e sou do Rio de Janeiro :)
                  Entrei na E101 como mentee em 2020, mas em 2021 virei mentora de DET e conquistei
                  minha nota de 135! Al??m disso, tamb??m sou Chief Admissions Officer, coordenando
                  o processo de aplica????o para a E101 e entrevistando os candidatos.
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
                  v??rios alunos a alcan??arem notas incr??veis no teste de profici??ncia.
                  Ademais, sou Chief Product Officer, onde sou respons??vel por parcerias,
                  eventos e reputa????o da E101.
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
          <a href="https://forms.gle/VGoVwaPA8ReLXu61A" target="_blank">Seja um mentor</a>
        </OurMembers>
        <div className="horizon" />
        <Links>
          <div className="content-box bg-color-blue">
            <div className="text">
              <h1>
                Fa??a parte do nosso time
              </h1>
              <p>
                Seja voc?? tamb??m um mentor e101 <br />
                Inscreva-se aqui!
              </p>
              <a href="https://forms.gle/VGoVwaPA8ReLXu61A" target="_blank">
                Inscreva-se
              </a>
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
                Seja um de nossos mentorados!
              </h1>
              <p>
                Fa??a parte do nosso projeto <br />
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
              placeholder="Insira seu email aqui!"
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
              <p>english101asl@gmail.com</p>
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
                      style={{ borderRadius: '50%' }}
                      src="/Isap-Logo.webp"
                      alt="International Study Ambassador Program - ISAP | To Promote & Engage"
                    />
                  </div>
                  <div className="info">
                    <h2>International Study Ambassador Program</h2>
                    <p>To Promote & Engage</p>
                  </div>
                </div>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      style={{ borderRadius: '50%' }}
                      src="/Geduc-Logo.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Geduc</h2>
                    <p>Guardi??es da Educa????o</p>
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
                      style={{ borderRadius: '50%' }}
                      src="/Globalizando-Logo-_1_.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Globalizando</h2>
                    <p>Seja um cidad??o global</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper pagination={true} className="swiper-mobile">
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      style={{ borderRadius: '50%' }}
                      src="/Isap-Logo.webp"
                      alt="International Study Ambassador Program - ISAP | To Promote & Engage"
                    />
                  </div>
                  <div className="info">
                    <h2>International Study Ambassador Program</h2>
                    <p>To Promote & Engage</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      style={{ borderRadius: '50%' }}
                      src="/Geduc-Logo.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Geduc</h2>
                    <p>Guardi??es da Educa????o</p>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="logo-partern">
                    <img
                      style={{ borderRadius: '50%' }}
                      src="/Globalizando-Logo-_1_.webp"
                      alt="english 101"
                    />
                  </div>
                  <div className="info">
                    <h2>Globalizando</h2>
                    <p>Seja um cidad??o global</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Partners>
        <Footer />
        <div className="loading" style={{
          display: !loading ? "none" : "flex"
        }}>
          <div className="lo"></div>
        </div>
      </Main>
    </>
  )
}

export default Home
