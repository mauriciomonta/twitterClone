import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';

import { supabase } from './client';

function App() {

	return (
		<div className="row">
			<BrowserRouter>
				<Menu />
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
