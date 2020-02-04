import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
	return (
		<div>
			<div>
				<div className="Login">
					<Link to="/">Home Page</Link>
					<Link to="/Gigapet">Giga-Pet</Link>
					<Link to="/MealForm">Meal Form</Link>
					<Link to="/ChildForm"> Child Form</Link>
				</div>
			</div>
		</div>
	);
}

export default MainPage;
