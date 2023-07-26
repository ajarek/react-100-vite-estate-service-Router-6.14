import './OurServices.css'
import Card from '../../components/Card/Card'

const OurServices = () => {
  return (
    <div className='our-services'>
      <h1>Nasze Usługi</h1>
      <div className='our-services-wrapper'>
        <Card
          src={'/service1.jpg'}
          title={'Zakup domu'}
          text={
            'Pomożemy Ci znaleźć idealny dom, który będzie odpowiadał Twoim potrzebom i budżetowi. Nasz zespół ekspertów przeprowadzi Cię przez cały proces zakupu domu od początku do końca w prosty i bezproblemowy sposób.'
          }
        />
        <Card
          src={'/service2.png'}
          title={'Sprzedaż domów'}
          text={
            'Pomożemy Ci sprzedać Twój dom szybko i za najlepszą cenę. Nasz zespół ekspertów zapewni Ci indywidualną strategię marketingową, aby przyciągnąć potencjalnych nabywców i zmaksymalizować wartość Twojego domu.'
          }
        />
        <Card
          src={'/service3.jpg'}
          title={'Zarządzanie własnością'}
          text={
            'Świadczymy kompleksowe usługi zarządzania nieruchomościami, aby pomóc Ci zarządzać wynajmowanymi nieruchomościami. Nasz zespół ekspertów zajmie się wszystkim, od sprawdzenia najemców po konserwację i naprawy.'
          }
        />
      </div>
    </div>
  )
}

export default OurServices
