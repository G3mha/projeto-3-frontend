import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import StickyFooter from "./Components/StickyFooter/StickyFooter";

import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import React, { useState } from 'react';
import SignUp from "./Pages/SignUp/SignUp";
import Users from "./Pages/Users/Users";
import Profile from "./Pages/Profile/Profile";

function getLogged() {
    const tokenString = localStorage.getItem('token');
	if (tokenString) {
		return true;
	}
	return false;
}
function App() {
    const [isLogged, setIsLogged] = useState(getLogged());


  	return (
		<>
			<NavBar loggedIn={isLogged} />
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/login/" element={<LogIn isLogged={isLogged} setIsLogged={setIsLogged}/>} />
					<Route path="/signup/" element={<SignUp isLogged={isLogged} setIsLogged={setIsLogged}/>} />
					<Route path="/search/user/" element={<Users />} />
					<Route path="/myprofile/" element={<Profile username={JSON.parse(localStorage.getItem('username'))} />} />
					<Route path="/profile/" element={<Profile username={JSON.parse(localStorage.getItem('search'))} />} />
				</Routes>
			</BrowserRouter>
			<StickyFooter />
		</>
  	);
}

export default App;
