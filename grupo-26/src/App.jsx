import React from 'react'
import { Fragment } from 'react'
import Var_props from './components/Var_props'
import Objetos from './components/Obj_props'
import Fun from './components/Fun_props'

const App = () => {
    //por funciones
    const saludar = () =>{
        alert('Hola')
    }


    //por objeto
    const user = {
        nombre: 'Maria Gomez',
        edad: 2,
        color: 'Rosado'
    }

    //por variables
    const nombre = 'Jose Perez'
    const edad = 20
    return (
        <>
            <Var_props nombre={nombre} edad = {edad} />
            <Objetos userInfo={user} />
            <Fun saludar={saludar}/>
        </>
    )

}

export default App;