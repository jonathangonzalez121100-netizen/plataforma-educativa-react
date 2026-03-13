import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import {useCursos} from "./hooks/useCursos"
import CardCurso from "./components/CardCurso"

function App() {

  const {
    cursosFiltrados,
    loading,
    categoriaActiva,
    setCategoriaActiva,
    categorias
  } = useCursos ()

  if (loading){
    return <h2>Cargando cursos...</h2>
  }
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <main>
        <h1>Nuestros Cursos</h1>
        
        <div className="filtros">
            <button 
              className={categoriaActiva === "Todas" ? "activo" :""}
              onClick={() => setCategoriaActiva("Todas")}>
              Todas
            </button>

            <button
             className={categoriaActiva === "Todas" ? "inactivo" :""}
             onClick={() => setCategoriaActiva("Academico")}>
              Académico
            </button>

            <button 
              className={categoriaActiva === "Todas" ? "inactivo" :""}
              onClick={() => setCategoriaActiva("Ciencia")}>
              Ciencia
            </button>
          </div>

          <div className="grid-cursos">
          {cursosFiltrados.map((curso) => (
            <CardCurso
            key={curso.id}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            imagen={curso.imagen}
            />
          ))}  
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App