import { useState } from "react"

const App = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const handleWeight = (event) => {
    const value = event.target.value
    setWeight(value) 
  }
  const handleHeight = (event) => {
    const value = event.target.value
    setHeight(value)
  }
  const bodyMassIndex = weight / ((height/100)**2)
  const bodyMassIndexResult = () => {
    let result = ''
    if(bodyMassIndex < 18.5) {
      result = 'Baja'
    }else if(bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
      result = 'Normal'
    }else if(bodyMassIndex >= 25 && bodyMassIndex <=29.9) {
      result = 'Sobrepeso'
    }else if(bodyMassIndex >= 30) {
      result = 'Obeso'
    }else {
      result = 'Datos incorrectos'
    }
    return result
  }
  return (
    <section className="w-96 border mx-auto bg-sky-500 rounded-md my-5">
      <h1 className="text-3xl font-bold text-center text-white p-5">IMC Calculator</h1>
      <div className="bg-sky-200 p-5">
        <label>
          <span className="font-bold block">Weight: {weight} kg</span>
          <input type="range" min="50" max="200" className="w-full" onChange={handleWeight}/>
        </label>
        <label>
          <span className="font-bold block">Height: {height} cm</span>
          <input type="range" min="50" max="200" className="w-full" onChange={handleHeight}/>
        </label>
        <p className="text-2xl font-bold bg-orange-400 text-center p-5 mt-5 rounded-md">
          Tu IMC es {bodyMassIndex.toFixed(2)}
        </p>

        <p className="text-2xl font-bold bg-orange-500 text-center p-5 mt-5 rounded-md">
          Estado de IMC: {bodyMassIndexResult()}
        </p>
      </div>
    </section>
  )
}

export default App