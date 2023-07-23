import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="info">
        <h2>Znajdź Swój <span>Wymarzony Dom</span></h2>
        <p>Witamy w naszym biurze nieruchomości, dla którego znalezienie wymarzonego domu jest dla nas priorytetem. Nasz zespół doświadczonych agentów zapewnia wyjątkową obsługę i pomaga przejść przez złożony proces kupna lub sprzedaży nieruchomości</p>
        <form className="info-wrapper">
          <input type="email" name="" id="" placeholder='TwójEmail' />
          <input type="submit" value="Wyślij" />
        </form>
      </div>
      <div className="baner">
      
      </div>

    </div>
  )
}

export default Home