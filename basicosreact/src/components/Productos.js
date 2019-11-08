import React, { Component, Fragment } from 'react'
import Producto from './Producto';


export default class Productos extends Component {
    state = {
        productos: [
            { id: 1, name: 'Camisa React js', precio: 30 },
            { id: 2, name: 'Camisa Node js', precio: 30 },
            { id: 3, name: 'Camisa Angular js', precio: 30 },
            { id: 4, name: 'Camisa Vue js', precio: 30 },
        ]
    }


    componentDidMount() {
        console.log(1);
    }

    componentWillMount() {
        console.log(2);
    }

    componentWillUpdate() {
        console.log(3);
    }

    componentWillUnmount() {
        console.log(4);
    }
    
    render() {

        console.log(5);
        const {productos} = this.state;
        console.log(productos);

        return (
            <Fragment>
                <h1> Lista de productos! </h1>
                { productos.map(producto => {
                    return <Producto
                        key = {producto.id}
                        producto = { producto }
                    />
                }) }
            </Fragment>
        );
    }
}

