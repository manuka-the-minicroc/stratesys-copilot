import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

function Form() {
    const [state, handleSubmit] = useForm("meoaplbo");

    const hasError = (field) => {
        return state.errors && state.errors.some(e => e.field === field);
    };

    if (state.succeeded) {
        return (
            <div style={{height:"85vh"}} className="container d-flex justify-content-center align-items-center ">
                
                    <div style={{width:"500px"}}  className=" d-flex flex-column justify-content-center align-items-center">
                        <div className="alert alert-success text-center" role="alert">
                            Gracias por inscribirte! 
                        </div>
                        <Link to="/" className='btn btn-primary'>Volver a inicio!</Link>
                    </div>
                
            </div>
        );
    }

    return (
        <div className='p-3 d-flex justify-content-center align-items-center' style={{ height: "85vh", backgroundImage: "url('/images/background.avif')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} className="card p-4 shadow">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name" className="form-label">Nombre</label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            className={`form-control ${hasError('name') ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">
                                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="surname" className="form-label">Apellidos</label>
                                        <input
                                            id="surname"
                                            type="text"
                                            name="surname"
                                            className={`form-control ${hasError('surname') ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">
                                            <ValidationError prefix="Surname" field="surname" errors={state.errors} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            className={`form-control ${hasError('email') ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">
                                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="phone" className="form-label">Teléfono</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            className={`form-control ${hasError('phone') ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">
                                            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="company" className="form-label">Empresa</label>
                                        <input
                                            id="company"
                                            type="text"
                                            name="company"
                                            className={`form-control ${hasError('company') ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">
                                            <ValidationError prefix="Company" field="company" errors={state.errors} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="position" className="form-label">Cargo</label>
                                        <input
                                            id="position"
                                            type="text"
                                            name="position"
                                            className={`form-control ${hasError('position') ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">
                                            <ValidationError prefix="Position" field="position" errors={state.errors} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className={`form-control ${hasError('message') ? 'is-invalid' : ''}`}
                                    rows="4"
                                />
                                <div className="invalid-feedback">
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button
                                
                                    type="submit"
                                    className="btn btn-primary btn"
                                    disabled={state.submitting}
                                >
                                    Enviar
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Form;