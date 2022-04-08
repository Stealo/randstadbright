import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import EntretientPasse from './pages/entretientpasse';
import Emplois from './pages/emplois';
import EmploisEnregistre from './pages/emploisenregistre';


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' exact element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/entretientpasse' element={<EntretientPasse />} />
				<Route path='/Emplois' element={<Emplois />} />
				<Route path='/EmploisEnregistre' element={<EmploisEnregistre />} />
			</Routes>
		</Router>
	);
}

export default App;
