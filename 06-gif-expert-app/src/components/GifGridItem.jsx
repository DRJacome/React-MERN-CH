import '../index.css'

const GifGridItem = ({ id, title, url }) => {

  return (
    <div className="carta animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
export default GifGridItem