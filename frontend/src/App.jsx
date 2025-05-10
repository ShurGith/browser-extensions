import './App.css'
import Card from "./components/Card.jsx";
import { useEffect, useState } from "react";

//import Data from './data/data.json'; // importar directamente

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('/data/data.json')
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => console.error('Error al cargar el JSON:', err));
	}, []);
	if (data.length > 0)
		console.log(data)
	
	//console.log(Data);
	//getDatos('./data/data.json');
	
	return (
		<>
			<div className="App">
				<h1>Hola Mundo</h1>
			</div>
			<Card/>
		</>
	)
}

export default App
