import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhoneListContainer from './components/PhoneListContainer/PhoneListContainer';
import PhoneDetailComponent from './components/PhoneDetailComponent/PhoneDetailComponent';

function App() {

	const phones = useSelector(state => state);
	console.log(phones);
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PhoneListContainer />} />
					<Route path="/details/:id" element={<PhoneDetailComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
