import React from 'react'


export default function Producto({
    producto
}) {
    return (
        <div>
            <h1> {producto.name} </h1>
            <p>  {producto.precio} </p>
        </div>
    );
}

