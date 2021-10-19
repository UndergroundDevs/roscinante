import Header from 'components/Header'
import { Main } from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Main>
        <Header />
        <section className="know-our-project"></section>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 767"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-34 0H1406V576.572H-34V0ZM-34 690.829L326 767L686 728.914H1046L1406 767V576.572H-34V690.829ZM-34 0H1406V576.572H-34V0ZM-34 690.829L326 767L686 728.914H1046L1406 767V576.572H-34V690.829Z"
            fill="#E74040"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-34 0H1406V576.572H-34V0ZM-34 690.829L326 767L686 728.914H1046L1406 767V576.572H-34V690.829ZM-34 0H1406V576.572H-34V0ZM-34 690.829L326 767L686 728.914H1046L1406 767V576.572H-34V690.829Z"
            fill="#E74040"
          />
        </svg>
      </Main>
    </>
  )
}

export default Home
