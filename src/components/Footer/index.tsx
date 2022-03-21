import Link from 'next/link'
import { MouseEvent } from 'react'
import { LinkedinWithCircle, InstagramWithCircle } from '@styled-icons/entypo-social'
import { FooterStyle } from './styles'

function onScrollStart(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  const section = event.currentTarget.getAttribute('href');
  if (!section)
    return;


  const sectionElement = document.querySelector('#' + section);
  console.log(sectionElement);

  if (!sectionElement)
    return;

  sectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function onScrollEnd(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  const section = event.currentTarget.getAttribute('href');
  if (!section)
    return;


  const sectionElement = document.querySelector('#' + section);
  console.log(sectionElement);

  if (!sectionElement)
    return;

  sectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <section className="container-footer">
        <div className="content-logo">
          <a href="" className="logo">
            <img
              src="/logo-simple-color.webp"
              alt="english 101"
            />
          </a>
          <ul>
            <li>
              <a href="https://www.instagram.com/english101asl/" target="_blank" rel="noopener noreferrer">
                <InstagramWithCircle size="45px" color="#164C97" title="intagram e101" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/english101/" target="_blank" rel="noopener noreferrer">
                <LinkedinWithCircle size="45px" color="#164C97" title="intagram e101" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="resources">
          <li>
            <a href="project" onClick={onScrollEnd}>Projeto</a>
          </li>
          <li>
            <Link href="/results">
              <a>Resultados</a>
            </Link>
          </li>
          <li>
            <Link href="/working">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a href="contact" onClick={onScrollStart}>Contato</a>
          </li>
          <li>
            <a href="menbers" onClick={onScrollStart}>Menbros</a>
          </li>
        </ul>
        <div className="news">
          <h1>
            Faça parte! <br />
            Fique sabendo de todas as novidades!
            <form>
              <a
                href="https://gmail.us7.list-manage.com/subscribe?u=20d6058d6463ffd6e88556eab&id=70f7459253"
                target="_blank"
              >
                Newsletter
              </a>
            </form>
          </h1>
        </div>
      </section>
      <section className="container-bg" />
    </FooterStyle>
  )
}

export default Footer
