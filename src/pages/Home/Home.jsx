import './Home.css'
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Home = () => {
  const [userEmail, setUserEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    setUserEmail(e.target[0].value)
    e.target[0].value = ''
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
    navigate('/')
  }
  return (
    <div className='home'>
      {showModal ? (
        <Modal
          email={userEmail}
          onClose={handleCloseModal}
        />
      ) : null}
      <div className='info'>
        <h2>
          Znajdź Swój <span>Wymarzony Dom</span>
        </h2>
        <p>
          Witamy w naszym biurze nieruchomości, dla którego znalezienie
          wymarzonego domu jest dla nas priorytetem. Nasz zespół doświadczonych
          agentów zapewnia wyjątkową obsługę i pomaga przejść przez złożony
          proces kupna lub sprzedaży nieruchomości
        </p>
        <form
          className='info-wrapper'
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type='email'
              name=''
              id=''
              placeholder='Twój Email'
              required
            />
          </div>
          <div>
            <input
              type='submit'
              value='Wyślij'
            />
          </div>
        </form>
      </div>
      <div className='baner'></div>
    </div>
  )
}

export default Home
