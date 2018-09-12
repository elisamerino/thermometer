import React from 'react';

const FoodBox = ({ food, handleQtyChange }) => {
	const ratio = food.calories / 750;

	const red = 50 + parseInt(ratio * 255);
	const green = 250 - parseInt(ratio * 255);

	console.log(red, +', ' + green);

	return (
		<div className="box" style={{ backgroundColor: `rgba(${red},${green},15,0.5` }}>
			<article className="media">
				<div className="media-left">
					<figure className="image is-64x64">
						<img src={food.image} />
					</figure>
				</div>
				<div className="media-content">
					<div className="content">
						<p>
							<strong>{food.name}</strong> <br />
							<small>{food.calories} cal</small>
						</p>
					</div>
				</div>
				<div className="media-right">
					<div className="field has-addons">
						<div className="control">
							<input
								min="0"
								className="input"
								type="number"
								onChange={(evt) => handleQtyChange(food.name, evt.target.value)}
								value={food.quantity}
							/>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default FoodBox;
