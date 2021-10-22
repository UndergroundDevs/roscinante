import Footer from 'components/Footer'
import Header from 'components/Header'
import { Main } from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Main>
        <Header />
        <section className="know-our-project"></section>
        <section className="about-our-project"></section>
        <section className="feedbacks"></section>
        <section className="our-members"></section>
        <Footer />
      </Main>
    </>
  )
}

export default Home
