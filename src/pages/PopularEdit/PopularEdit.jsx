import './PopularEdit.css'
import { useParams, Link } from 'react-router-dom'
import data from '../../assets/data.json'
import { useState, useEffect } from 'react'
const PopularEdit = () => {
  let { id } = useParams()
  const [selectedData, setSelectedData] = useState([])
  useEffect(() => {
    setSelectedData(data?.find((el) => el.id === id))
  })

  return (
    <div className='popular-edit'>
      <div className='img'>
        <img
          src={selectedData.src}
          alt={selectedData.name}
        />
      </div>
      <div className='info'>
        <h2>{selectedData.name}</h2>
        <span>
          adres: <b>{selectedData.adres}</b>
        </span>
        <span>
          pok.: <b>{selectedData.rooms}</b> pow.: <b>{selectedData.area}</b>
        </span>
        <div className='opis'>{selectedData.description}</div>
        <div className='wrapper-cena'>
          <div className='cena'>
            cena: <b>{selectedData.price}</b> PLN
          </div>
          <Link
            to={'/popularne'}
            className='link-cena'
          >
            Powrót
          </Link>
          <Link
            to={'/'}
            className='link-cena'
          >
            Zamawiam
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularEdit
