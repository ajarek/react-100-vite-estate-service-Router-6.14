import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='img-wrapper'>
        <div className='img'>
          <img
            src=''
            alt=''
          />
        </div>
      </div>
      <div className='info'>
        <h2>O Nas</h2>
        <p>
          Witamy w czołowej agencji nieruchomości, której misją jest zapewnienie
          wyjątkowej obsługi i wiedzy, aby pomóc naszym klientom osiągnąć ich
          cele związane z nieruchomościami. Dzięki wieloletniemu doświadczeniu w
          branży, nasz zespół oddanych profesjonalistów zbudował reputację
          doskonałości i uczciwości.{' '}
        </p>
        <p>
          {' '}
          Staramy się być na bieżąco z najnowszymi trendami i technologiami na
          rynku nieruchomości, a naszą wiedzę i doświadczenie wykorzystujemy,
          aby pewnie przeprowadzić naszych klientów przez proces kupna i
          sprzedaży.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
