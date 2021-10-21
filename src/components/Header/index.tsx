import { HeaderStyle } from './styles'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <>
      <HeaderStyle>
        <Link href="/">
          <a className="home-link">
            <Image
              src="/Logo.png"
              alt="Englosh 101 mentoria"
              layout="responsive"
              width={216}
              height={89}
            />
          </a>
        </Link>
        <ul className="navigation">
          <li>
            <Link href="/project">
              <a>Projeto</a>
            </Link>
          </li>
          <li>
            <Link href="/members">
              <a>Menbros</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/results">
              <a>Resultados</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
        <ul className="sign-donate">
          <li>
            <Link href="/donate">
              <a className="red">Doe Agora</a>
            </Link>
          </li>
          <li>
            <Link href="/sign">
              <a className="blue">Login</a>
            </Link>
          </li>
        </ul>
      </HeaderStyle>
    </>
  )
}

export default Header
