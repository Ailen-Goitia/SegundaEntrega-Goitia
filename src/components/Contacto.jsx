const Contacto = () => {
  return (
    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form className="formulario-de-contacto">
            <input type="text" placeholder="Ingrese tu nombre"/>
            <input type="email" placeholder="Ingresá tu e-mail"/>
            <input type="phone" placeholder="Ingresá tu teléfono"/>

<button className="enviar" type="submit">Enviar</button>

</form>
    </div>
  )
}

export default Contacto;
