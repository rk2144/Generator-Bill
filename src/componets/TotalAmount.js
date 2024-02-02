import React from 'react';

function TotalAmount({ items }) {
  return (
    <div>
      <h3>Total Amount</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TotalAmount;
