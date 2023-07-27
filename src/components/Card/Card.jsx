import './Card.css'

const Card = ({ src, title, text }) => {
  return (
    <div className='card'>
      <div className='img'>
        <img
          src={src}
          alt='foto'
        />
      </div>
      <div className='title'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
