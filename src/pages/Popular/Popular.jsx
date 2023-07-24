import './Popular.css'
import data from '../../assets/data.json'
const Popular = () => {
  return ( 
    <div className='popular'>
      <h1>Popularne <span>Oferty</span> </h1>
      <div className="popular-wrapper">
       {data.map(dt=>{
        return(
          <div key={dt.id} className="card">
            <div className="img">

            <img src={dt.src} alt={dt.name} />
            </div>
            <p>{dt.name}</p>
            <p>{dt.adres}</p>
            <p>{dt.rooms} pok. {dt.area} m <sup>2</sup></p>
            <p className='price'>{(+dt.price).toFixed(2)} PLN</p>
            <button>Zobacz Detale</button>
          </div>
        )
       })}
      </div>
      
    </div>
  )
}

export default Popular