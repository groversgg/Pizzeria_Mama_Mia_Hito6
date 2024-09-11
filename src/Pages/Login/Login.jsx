import React, { useState } from 'react'
import '../Register/register.css'

const Login = (props) => {

    const handleEmailChanhge = (event) => {
        props.setEmail(event.target.value)
    }
    const handlePassword1Chanhge = (event) => {
        props.setPassword1(event.target.value)
    }

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (props.password1.length < 6) {
          setMessage('El password debe tener al menos 6 caracteres');
          return;
        }
        setMessage("Registro exitoso")
      }

    return (
        <div className='contentform'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name='email'
                        value={props.email}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                        onChange={handleEmailChanhge}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name='password1'
                        value={props.password1}
                        id="exampleInputPassword1"
                        required
                        onChange={handlePassword1Chanhge}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
                <br />
                {message && <div className={`alert ${message === 'Registro exitoso' ? 'alert-success' : 'alert-danger'}`} role="alert">{message}</div>}
            </form>
        </div>
    )
}

export default Login
