import React from "react";

import Navbar from "./home/navbar.jsx";
import Main from "./home/main.jsx";
import Footer from "./home/footer.jsx";

const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
};

export default Home;
