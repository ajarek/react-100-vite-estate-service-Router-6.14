import './OurServices.css'

const OurServices = () => {
  return (
    <div className='our-services'>
      <h1>Nasze Usługi</h1>
      <div className='our-services-wrapper'>
        <div className='card-services'>
          <div className='img'>
            <img
              src='/service1.jpg'
              alt=''
            />
          </div>
          <div className='title'>
            <h3>Zakup domu</h3>
            <p>
              Pomożemy Ci znaleźć idealny dom, który będzie odpowiadał Twoim
              potrzebom i budżetowi. Nasz zespół ekspertów przeprowadzi Cię
              przez cały proces zakupu domu od początku do końca w prosty i
              bezproblemowy sposób.
            </p>
          </div>
        </div>
        <div className='card-services'>
          <div className='img'>
            <img
              src='/service2.png'
              alt=''
            />
          </div>
          <div className='title'>
            <h3>Sprzedaż domów</h3>
            <p>
            Pomożemy Ci sprzedać Twój dom szybko i za najlepszą cenę. Nasz zespół ekspertów zapewni Ci indywidualną strategię marketingową, aby przyciągnąć potencjalnych nabywców i zmaksymalizować wartość Twojego domu.
            </p>
          </div>
        </div>
        <div className='card-services'>
          <div className='img'>
            <img
              src='/service3.jpg'
              alt=''
            />
          </div>
          <div className='title'>
            <h3>Zarządzanie własnością</h3>
            <p>
            Świadczymy kompleksowe usługi zarządzania nieruchomościami, aby pomóc Ci zarządzać wynajmowanymi nieruchomościami. Nasz zespół ekspertów zajmie się wszystkim, od sprawdzenia najemców po konserwację i naprawy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
