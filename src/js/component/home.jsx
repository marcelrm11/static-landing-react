import React from "react";

import Navbar from "./home/navbar.jsx";
import Main from "./home/main.jsx";
import Footer from "./home/footer.jsx";

const Home = () => {
	return (
		<div className="container min-vh-100 position-relative px-0">
			<Navbar />
			<Main />
			<Footer year="2022" text="Marcel Roig Medina" />
		</div>
	);
};

export default Home;
