import React from 'react';
import Header from '../../components/Header'
import { Main } from './styles/main'

const Mentored: React.FC = () => {
  return (
    <Main>
      <Header />
      <section>
        <form>
          <h1>Inscrição Mentorados</h1>
          <input type="text" name="email" id="email" placeholder="Insira seu nome aqui!" />
          <input type="email" name="email" id="email" placeholder="Insita seu email aqui!" />
          <textarea name="message" id="message" placeholder="Porque você deseja ser um de nossos mentorados?" cols={30} rows={10} />
          <button type="submit">
            Enviar
          </button>
        </form>
      </section>
    </Main>
  );
}

export default Mentored;