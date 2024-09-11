import React from 'react'
import { formatNumber } from '../../assets/js/utils';
import { useContext } from 'react';

const Pizza = ({ name, price, ingredients=[], img, desc }) => {
    const {agregarProducto} = useContext(CartContext)
    return (
        <div className="card" >
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h4 className="card-title">
                    {name}
                </h4>
                <hr />
                <p className="card-text">
                    <strong>Ingredientes:</strong>
                </p>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <hr />
                <p className="card-text text-center">
                    <strong>Descripcion:</strong>{desc}
                </p>
                <hr />
                <p className="card-text">
                    <strong>Precio: $ {formatNumber(Number(price))}</strong>
                </p>
                <div className="mt-auto d-flex justify-content-around gap-2">
                    <a href="#" className="btn btn-outline-success col-5">
                        <i className="fa-solid fa-eye"></i> Ver mas
                    </a>
                    <a href="#" className="btn btn-outline-success col-5">
                        <i className="fa-solid fa-cart-shopping"></i> Añadir
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Pizza
