import React, { Component } from 'react'
const uuid = require('uuid/v1');

export default class NuevaCita extends Component {
    state = {
        cita: {
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: '',

        }
    }


    handleChange = e => {
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })
    }

    // Cuando el usuario envía el formulario 
    handleSubmit = e => {
        e.preventDefault();

        // extraer los valores del state
        const {mascota, dueño, fecha, hora, sintomas} = this.state.cita;

        if(mascota ==='' || dueño ==='' || fecha ==='' || hora ==='' || sintomas ===''){
            this.setState({
                error: true
            });
            return;
        }

        const nuevaCita = {
            ...this.state.cita,
            id: '' 
        };
        nuevaCita.id = uuid();
        console.log(nuevaCita);

        this.props.crearNuevaCita(nuevaCita);

    }

    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    <form onSubmit={this.handleSubmit} >

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre de la mascota" name="mascota" 
                                onChange={this.handleChange} value={this.state.cita.mascota} />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre del dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre del dueño" name="dueño"
                                onChange={this.handleChange} value={this.state.cita.dueño} />
                            </div>
                        </div>
                    
                    
                        <div className="form-group row">
                            <label className="col-sm-4  col-md-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="date" className="form-control"  name="fecha"
                                onChange={this.handleChange} value={this.state.cita.fecha} />
                            </div>

                            <label className="col-sm-4  col-md-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control"  name="hora" 
                                onChange={this.handleChange} value={this.state.cita.hora}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Síntomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" placeholder="Describe los síntomas" name="sintomas" 
                                    onChange={this.handleChange} value={this.state.cita.sintomas}>

                                </textarea>
                                
                            </div>
                        </div>
                    

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita" />

                    </form>


                </div>
                
            </div>
        )
    }
}
