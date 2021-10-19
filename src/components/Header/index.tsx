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
              width={216}
              height={89}
              layout="fixed"
            />
          </a>
        </Link>
        <ul className="navigation">
          <li>
            <a href="/project">Projeto</a>
          </li>
          <li>
            <a href="/members">Menbros</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/results">Resultados</a>
          </li>
          <li>
            <a href="/contact">Contato</a>
          </li>
        </ul>
        <ul className="sign-donate">
          <li>
            <a href="/donate" className="red">
              Doe Agora
            </a>
          </li>
          <li>
            <a href="/sign" className="blue">
              Login
            </a>
          </li>
        </ul>
      </HeaderStyle>
    </>
  )
}

export default Header
