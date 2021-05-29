import React, { useState} from 'react';

const CaroForm = () => { 

    const[user, setUser]= useState(
        {
            userName:'',
            email:'',      
        }        
    )
    const handleInputChange = e => {
          
        console.log(e.target.value)
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        });
    }
    const enviarDatos = (e) => {
        e.preventDefault();   
        console.log(user.userName + ' - ' + user.email)
    } 
    return(
        <div>
            <form action="" onSubmit={enviarDatos}>
                <h1>Formulario Pruebas</h1>
                <label htmlFor="">Nombre </label>
                <input 
                    type="text" 
                    name="userName" 
                    onChange={handleInputChange}
                />
                <label htmlFor="">Correo</label>
                <input 
                    type="mail"
                    name="email"
                    onChange={handleInputChange}
                />
                <button type="submit">Hazme Click!!!
                </button>
                <h3>{user.name}</h3>
            </form>

        </div>
    );
}
export default CaroForm ;
