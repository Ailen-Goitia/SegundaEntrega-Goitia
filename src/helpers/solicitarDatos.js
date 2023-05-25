import data from "../data/data.json";


export const solicitarDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (data);
        },500)
    })
}

export const solicitarItemporId =(id) => {
    return new Promise ((resolve, reject) => {
        const identificador = data.find ((elemento) => elemento.id === id)

        if (identificador) {
            resolve(identificador)
        } else {
            reject({
                error: "Incorrecto, no se encontró el producto"
            })
        }

    })
}