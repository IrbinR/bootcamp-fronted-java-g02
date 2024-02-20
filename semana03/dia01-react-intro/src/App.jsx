// COMPONENTE USANDO FUNCTION 
/*function App () {
  return (
    <h1>Hola React!</h1>
  )
}*/

// COMPONENTE USANDO ARROW FUNCTION

/*const App = () => {
  return <h1>Hola React soy un componente con Arrow Function!</h1>
}*/

// COMPONENTE DE REACT USANDO MÚLTIPLES LINEAS CON SU ELEMENTO PADRE

/*const App = () => {
  return (
    <div>
      <h1>Hola React soy un componente de Arrow Function!</h1>
      <h2>hola react en la segunda linea</h2>
    </div>
  )
}*/

// COMPONENTE USANDO FRAGMENTOS (FRAGMENTS) PARA EVITAR RENDERIZAR EN UN ELEMENTO PADRE

//const App = () => {
//  return(
//    <>
//      <h1>Hola React!</h1>
//      <p>Estoy en el bootcamp!</p>
//      {/*Comentario en react dentro de JSX */}
//    </>
//  )
//}

// ANIDANDO COMPONENTES DENTRO DE OTROS

// function Saludo() {
//   return <h1>hola Victor</h1>
// }

// function Despedida() {
//   return <h1>Adios Victor</h1>
// }

// const App = () => {
//   return(
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//       {/* Comentario en react dentro de JSX */}

//       <Saludo/>
//       <Despedida/>
//     </>
//   )
// }
//  import Saludos from "../components/Saludos"
//  import Despedida from "../components/Despedida"
// const App = () => {
//   return(
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//       {/* Comentario en react dentro de JSX */}

//       <Saludos/>
//       <Despedida/>
//     </>
//   )
// }

// USANDO CSS EN REACT
import Saludos from "../components/Saludos"
import Despedida from "../components/Despedida"
import './demo.css'
const App = () => {
  return(
    <>
      <h1 style={{color: 'red', textDecoration: 'underline', backgroundColor:'#ddd'}}>Hola React!</h1>
      <p className="parrafo">Estoy en el bootcamp!</p>
      {/* Comentario en react dentro de JSX */}

      <Saludos/>
      <Despedida/>
    </>
  )
}

export default App
