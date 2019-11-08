import React from 'react'

export const Header = ({titulo, parrafo}) => {
    return (
        <div>
           <h1> {titulo} </h1>
           <p className="text-center"> {parrafo} </p> 
        </div>
    )
}

export default Header;
