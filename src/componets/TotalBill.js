import React from 'react';


const Totalbill = ({ total }) => {
	return (
		<div className="total">
			<h4>
				Sub Total:
				₹{total.toFixed(2)}
			</h4>
		</div>
	);
};

export default Totalbill; 