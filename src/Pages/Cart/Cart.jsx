import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import { formatNumber } from '../../assets/js/utils';
import './cart.css';
import { PizzaContext } from '../../Context/pizzaContext';

const Cart = () => {
  const { carrito, agregarProducto, disminuirProducto, obtenerCantidadTotal, obtenerTotalPagar } = useContext(CartContext);
  const { pizzas } = useContext(PizzaContext);
  return (
    <div>
      <h2>Detalles del Pedido</h2>
      <h3>Cantidad de Productos: {obtenerCantidadTotal()}</h3>
      <div className='d-flex align-items-center'>
        <h3>Total a Pagar: $ {formatNumber(obtenerTotalPagar())}</h3>
        <button className='btn btn-success m-2'>Pagar</button>
      </div>

      <div className='p3'>
        {pizzas.map((producto) => (
          <div className='d-flex align-items-center' key={producto.id}>
            <div className='titulo'>
              <img src={producto.img} alt={producto.name} />
            </div>
            <div className='descripcion'>
              <p><strong>{producto.name}</strong></p>
              <p>Precio: <strong>${formatNumber(producto.price)}</strong></p>
              <p>Cantidad: {carrito.find(item => item.id === producto.id)?.count || 0}</p>
            </div>

            <div className='botones'>
              <button className='btn btn-success m-2' onClick={() => agregarProducto(producto)}>+</button>
              <button className='btn btn-danger m-2' onClick={() => disminuirProducto(producto)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
