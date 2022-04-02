import Header from '../../components/Header'
import axios from 'axios'
import { useState, ChangeEvent, MouseEvent } from 'react'
import type { NextPage } from 'next'
import { Main } from 'assets/styles/mentoring/main'
import { FieldInitalInput } from 'pages/voyager'
import { validationContact } from 'services/validation'

const Mentoring: NextPage = () => {
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
      setLoading(false)
      const alertMessage = JSON.parse(JSON.stringify(error));
      return alert(alertMessage.message)
    }

    const URL = '/api/mentoring'
    try {
      const response = await axios.post(URL, { ...formData });
      setLoading(false)
      return alert(response.data.data)
    } catch (err) {
      setLoading(false)
      return alert(err.response.data.error)
    }
  }

  return (
    <Main>
      <Header />
      <section>
        <form>
          <h1>Inscrição Mentoria</h1>
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
            placeholder="Insita seu email aqui!"
            name="email"
            value={formData.email}
            onChange={handleInput}
          />

          <textarea
            id="message"
            placeholder="Por que deseja se tornar um membro da e101?"
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
      </section>
      <div className="loading" style={{
        display: !loading ? "none" : "flex"
      }}>
        <div className="lo"></div>
      </div>
    </Main>
  );
}

export default Mentoring;