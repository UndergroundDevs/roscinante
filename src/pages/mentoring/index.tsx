import React from 'react'
import Header from '../../components/Header'
import { Main } from './styles/main'

const Mentoring: React.FC = () => {
  return (
    <Main>
      <Header />
      <section>
        <form>
          <h1>Inscrição Mentoria</h1>
          <input type="text" name="email" id="email" placeholder="Insira seu nome aqui!" />
          <input type="email" name="email" id="email" placeholder="Insita seu email aqui!" />
          <textarea name="message" id="message" placeholder="Porque deseja se tornar um mentor da ENG101?" cols={30} rows={10} />
          <button type="submit">
            Enviar
          </button>
        </form>
      </section>
    </Main>
  );
}

export default Mentoring;