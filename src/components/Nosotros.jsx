import { useEffect } from "react"

export const Nosotros = () => {
  useEffect(() => {
  
  const clickear = () =>{
    console.log ('click')
  }

  window.removeEventListener('click', clickear)

  return () => {
    window.removeEventListener('click', clickear)
  }

  }, [])
  
  return (
    <div className="containers">
        <h1 className="main-title">Nosotros</h1>
        <p>Este es el componente "Nosotros"</p>
    </div>
  )
}
export default Nosotros