import React, {useState, Fragment} from 'react';


const Formulario = () =>  {

    const [datos, modResultados] = useState ({
        nombre: "",
        apellido: "",
        telefono: ""
    })

    const handleInputChange = (event) => {
        modResultados ({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    
    const agregarLista = (event) => {
        event.preventDefault()
        console.log(datos)
        
    } 

    return (
        <Fragment>
            <div className="formularioContent">
                <h1>Formulario</h1>
                <form className="formGrid" onSubmit={agregarLista}>
                    <div>
                        <input 
                        type="text" 
                        placeholder="Nombre" 
                        className="form-control" 
                        onChange={handleInputChange} 
                        name="nombre"
                        ></input>
                    </div>
                    <div >
                        <input 
                        type="text" 
                        placeholder="Apellido" 
                        className="form-control"
                        onChange={handleInputChange} 
                        name="apellido"
                        ></input>
                    </div>
                    <div >
                        <input 
                        type="tel" 
                        pattern="[0-9]{9}" 
                        required 
                        placeholder="Telefono" 
                        className="form-control" 
                        onChange={handleInputChange} 
                        name="telefono"
                        ></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                <ul>
                    {/* <li>{nombre}</li>
                    <li>{apellido}</li>
                    <li>{telefono}</li> */}
                </ul>
            </div>
        </Fragment>
        
    );
    
}
 
export default Formulario;
