import { useEffect, useState, MouseEvent } from 'react'
import { HeaderMobile, HeaderStyle } from './styles'
import Link from 'next/link'

const Header: React.FC = () => {
  const [shadow, setShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY >= 200) {
        return setShadow(true)
      }

      if (window.scrollY <= 200) {
        return setShadow(false)
      }
    })
  }, [])

  function isOpenMenu(event: MouseEvent<HTMLSpanElement>) {
    setIsOpen(!isOpen);
  }

  function onScrollStart(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const section = event.currentTarget.getAttribute('href');
    if (!section)
      return;


    const sectionElement = document.querySelector('#' + section);
    console.log(sectionElement);

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
    console.log(sectionElement);

    if (!sectionElement)
      return;

    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  return (
    <>
      <HeaderStyle shadow={shadow} isOpen={isOpen}>
        <Link href="/">
          <a className="home-link">
            <img
              src="/Logo-Colorida-1.webp"
              alt="Englosh 101 mentoria"
            />
          </a>
        </Link>
        <ul className="navigation">
          <li>
            <a href="project" onClick={onScrollStart}>Projeto</a>
          </li>
          <li>
            <a href="menbers" onClick={onScrollStart}>Membros</a>
          </li>
          <li>
            <Link href="/working">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/results">
              <a>Resultados</a>
            </Link>
          </li>
          <li>
            <a href="contact" onClick={onScrollEnd}>Contato</a>
          </li>
        </ul>
        <ul className="sign-donate">
          <li>
            <Link href="/working">
              <a className="red">Doe Agora</a>
            </Link>
          </li>
          <li>
            <Link href="/working">
              <a className="blue">Login</a>
            </Link>
          </li>
        </ul>
      </HeaderStyle>
      <HeaderMobile>
        <Link href="/">
          <a className="home-link">
            <img
              src="/Logo-Colorida-1.webp"
              alt="Englosh 101 mentoria"
            />
          </a>
        </Link>
        <span onClick={isOpenMenu}>
          <div />
        </span>
      </HeaderMobile>
    </>
  )
}

export default Header
