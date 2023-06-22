import { useForm } from "react-hook-form";

const Contacto = () => {
  
const {register, handleSubmit} = useForm ();

const enviar = (dato) => {
  console.log (dato);
}

  return (
    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form className="formulario-de-contacto" onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder="Ingrese tu nombre completo" {...register("nombre")} />
            <input type="email" placeholder="Ingrese tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingrese tu teléfono" {...register("telefono")} />
            <button className="enviar" type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Contacto;
