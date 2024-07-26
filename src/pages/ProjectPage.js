import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import clockImage from "../assets/Pasted_image.png";
import musicstore from "../assets/Musicstore.jpeg";
import tictactoe from "../assets/tictactoe.jpeg";
import quickquiz from "../assets/quickquiz.jpeg";
import chatbot from "../assets/chatbot.jpeg";
import videoApi from "../assets/videoApi.jpeg";
import "../components/ProjectPage.css";

const ProjectPage = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<ProjectCard
					image={chatbot}
					title="Simplified Hotel Booking Chatbot"
					description="Developed a RESTful API using Express.js to implement a chatbot capable of handling hotel booking queries.Utilized Express.js framework for building the API. Integrated Gemini API (Gemini 1.5 flash) for natural language processing. Implemented conversation history storage using SQLite and Sequelize. Developed function calls to fetch room data and simulate booking a room."
					link="https://github.com/BarryByte/Bot9---Ben10"
					linktext="GitHub Repository"
				/>
				<ProjectCard
					image={videoApi}
					title="REST-APIs-for-Video-Files"
					description="Built a video processing platform using Node.js, Express, SQLite, and Cloudinary.Enabled users to upload videos seamlessly, leveraging Cloudinary for efficient storage. Implemented video trimming functionality, allowing users to specify start and end times with precision. Empowered users to merge multiple videos into a single cohesive output. Developed a feature to generate secure time-limited download links, enhancing data security and access control (currently not working, will update soon). Utilized technologies such as Node.js, Express, SQLite, Cloudinary, and FFmpeg to create the video processing platform"
					link="https://github.com/BarryByte/Bot9---Ben10"
					linktext="GitHub Repository"
				/>
				<ProjectCard
					image={musicstore}
					title="Music Store Management System"
					description="This project is a comprehensive system for managing a music store. It includes handling product inventory, customer profiles, sales transactions, and employee management. The system facilitates the creation, update, retrieval, and deletion of information about musical products, customers, sales, and staff."
					link="https://github.com/BarryByte/MusicStoreManagement"
					linktext="GitHub Repository"
				/>
				<ProjectCard
					image={quickquiz}
					title="Quick-Quiz"
					description="Quick-Quiz is an interactive web application that tests users' knowledge on various topics. Built using HTML, CSS, and JavaScript, it features dynamic question loading, responsive design for both desktop and mobile, real-time feedback, and score tracking. The user-friendly interface ensures a seamless experience. This project enhanced my skills in front-end development and user experience design."
					link="https://github.com/BarryByte/Quick-Quiz"
					linktext="GitHub Repository"
				/>
				<ProjectCard
					image={tictactoe}
					title="Tic-Tac-Toe"
					description="Tic-Tac-Toe Game Using Object-Oriented Programming (OOP) Concepts. This project is a classic Tic-Tac-Toe game developed using Java and Object-Oriented Programming (OOP) principles. The game implements the essential functionality and rules of Tic-Tac-Toe, where two players take turns placing their markers (X or O) on a 3x3 grid to win by forming a horizontal, vertical, or diagonal line."
					link="https://github.com/BarryByte/Tic-Tac-Toe"
					linktext="GitHub Repository"
				/>
				<ProjectCard
					image={clockImage}
					title="Pokedox-Clock"
					description="I developed a dynamic analog clock using HTML, CSS, and JavaScript. The clock features real-time updates, visually appealing design, and user controls to pause and resume the clock hands."
					link="https://github.com/BarryByte/Pokedex/tree/main/clock_example"
					linktext="GitHub Repository"
				/>
			</div>
		</div>
	);
};

export default ProjectPage;
