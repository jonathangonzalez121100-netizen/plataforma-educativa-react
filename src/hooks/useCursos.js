import { useState, useEffect } from "react"

//Imagenes
import imgLudicas_1 from "../assets/Ludicas_1.jpg"
import imgLudicas_2 from "../assets/Ludicas_2.jpg"
import imgLudicas_3 from "../assets/Ludicas_3.jpg"
import imgLudicas_4 from "../assets/Ludicas_4.jpg"

export function useCursos() {

const [error, setError] = useState(null)

const cursosData =[
  {
    id:1,
    titulo: "Matemáticas",
    descripcion: "Aprende álgebra y geometría básica.",
    imagen: imgLudicas_1,
    categoria: "Academico"
  },
  {
    id:2,
    titulo: "Lenguaje",
    descripcion: "Mejora tu comprensión lectora.",
    imagen: imgLudicas_2,
    categoria: "Academico" 
  },
  {
    id:3,
    titulo: "Ciencias",
    descripcion: "Explora el mundo natural",
    imagen: imgLudicas_3,
    categoria: "Ciencia" 
  },
  {
    id:4,
    titulo: "Sociales",
    descripcion: "Conoce la historia de nuestro país",
    imagen: imgLudicas_4,
    categoria: "Ciencia"
  }
]

  const [cursos, setCursos] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoriaActiva, setCategoriaActiva] = useState("Todas")

  useEffect(() => {
    setLoading(true)
    setError(null)

    setTimeout(() => {
      
       const falloSimulado =Math.random() < 0.4 // 40% de probabilidad de error

       if (falloSimulado) {
      setError("Error al cargar los cursos. Intenta nuevamente.")
      setLoading(false)
    } else {
      setCursos(cursosData)
      setLoading(false)
    }

    }, 1500)
  
}, [])

  const cursosFiltrados =
    categoriaActiva === "Todas"
      ? cursos
      : cursos.filter(curso => curso.categoria === categoriaActiva)

  const categorias = ["Todas", "Academico", "Ciencia"]

  return {
    cursosFiltrados,
    loading,
    categoriaActiva,
    setCategoriaActiva,
    categorias
  }
}