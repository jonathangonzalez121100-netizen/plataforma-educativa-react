import {useState} from "react"

function CardCurso({ titulo, descripcion, imagen }) {
  
  const [mostrar, setMostrar] = useState(false)

  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      
      {mostrar && <p>{descripcion}</p>}
      
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ver menos" : "Ver más"}
      </button>
    </div>
  )
}

export default CardCurso