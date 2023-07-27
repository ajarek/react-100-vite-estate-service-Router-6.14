import './OurClients.css'
import Card from '../../components/Card/Card'
const OurClients = () => {
  return (
    <div className='our-clients'>
      <h1>Nasi Klienci</h1>
      <div className='our-clients-wrapper'>
        <Card
          src={'/client1.jpg'}
          title={'Joanna Kamińska'}
          text={
            '"Praca z tą agencją nieruchomości była wspaniałym doświadczeniem. Ich zespół był kompetentny i profesjonalny, dzięki czemu szybko i łatwo znaleźliśmy nasz wymarzony dom."'
          }
        />
        <Card
          src={'/client2.jpg'}
          title={'Grzegorz Radomski'}
          text={
            '„Byłem pod wrażeniem strategii marketingowej tej agencji, kiedy sprzedawaliśmy nasz dom. Naprawdę zrobili wszystko, aby zaprezentować mój dom i przyciągnąć potencjalnych nabywców”.'
          }
        />
        <Card
          src={'/client3.jpg'}
          title={'Anna Bielicka'}
          text={
            '„Współpracuję z tą agencją od kilku lat w zakresie usług zarządzania nieruchomościami i są fantastyczni. Bardzo dobrze sobie ze wszystkim radzą”.'
          }
        />
      </div>
    </div>
  )
}

export default OurClients
