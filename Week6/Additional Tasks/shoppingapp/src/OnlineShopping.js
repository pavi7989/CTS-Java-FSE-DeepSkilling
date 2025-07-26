// src/OnlineShopping.js
import React from 'react';
import Cart from './Cart';
import './OnlineShopping.css';

class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { itemname: 'Laptop', price: 80000 },
        { itemname: 'TV', price: 120000 },
        { itemname: 'Washing Machine', price: 50000 },
        { itemname: 'Mobile', price: 30000 },
        { itemname: 'Fridge', price: 70000 }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Items Ordered :</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => (
              <Cart key={index} itemname={item.itemname} price={item.price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
