import React from 'react';
import { formatNumber } from '../../assets/js/utils';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';
import { useContext } from 'react';


const Navbar = () => {   
    const { obtenerTotalPagar } = useContext(CartContext);
    const token = 123; // Si el token no es correcto, se cambian los botones
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button type="button" className="btn btn-dark"><i className="fa-solid fa-pizza-slice"></i><Link to="/" className="link-offset-2 link-underline link-underline-opacity-0 link-light"> Home</Link></button>
                            </li>
                            {token == 1234 ? (
                                <>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-dark"><i className="fa-solid fa-user"></i><Link to="/Profile" className="link-offset-2 link-underline link-underline-opacity-0 link-light"> Profile</Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-dark"><i className="fa-solid fa-lock"></i> Logout</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-dark"><i className="fa-solid fa-key"></i><Link to="/Login" className="link-offset-2 link-underline link-underline-opacity-0 link-light"> Login</Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-dark"><i className="fa-solid fa-lock"></i><Link to="/Register" className="link-offset-2 link-underline link-underline-opacity-0 link-light"> Register</Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-dark"><i className="fa-solid fa-cart-shopping"></i><Link to="/Cart" className="link-offset-2 link-underline link-underline-opacity-0 link-light"> Cart</Link></button>
                                    </li>
                                </>
                            )}
                        </ul>
                        <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-cart-shopping"></i> <Link to="/Total" className="link-offset-2 link-underline link-underline-opacity-0 link-light"> Total: $ {formatNumber(obtenerTotalPagar())}</Link></button>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;