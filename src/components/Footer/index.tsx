import Image from "next/image";
import { FacebookWithCircle, InstagramWithCircle, TwitterWithCircle } from '@styled-icons/entypo-social'
import { FooterStyle } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <section className="container-footer">
        <div className="content-logo">
          <a href="" className="logo">
            <Image
              src="/logo-simple-color.webp"
              alt="english 101"
              width="153px"
              height="139px"
            />
          </a>
          <ul>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <InstagramWithCircle size="45px" color="#164C97" title="intagram e101" />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FacebookWithCircle size="45px" color="#164C97" title="intagram e101" />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <TwitterWithCircle size="45px" color="#164C97" title="intagram e101" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="resources">
          <li>
            <h1>Recursos</h1>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="">Menbros</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
        </ul>
        <div className="news">
          <h1>
            Faça parte! <br />
            Fique sabendo de todas as novidades!
            <form>
              <input type="text" placeholder='Digite seu e-mail aqui!' />
              <button>Enviar</button>
            </form>
          </h1>
        </div>
      </section>
      <section className="container-bg" />
    </FooterStyle>
  )
}

export default Footer
