import './App.css'
import { useEffect, useState } from "react";
import CardsContainer from './components/CardsContainer.jsx';
import Boton from './components/partials/Boton.jsx';

//import Data from './data/data.json'; // importar directamente

function App() {
	return (
		<>
			<div className="flex flex-col gap-4 bg-neutro-4 dark:bg-neutro-9
		   lg:max-w-5/6 lg:mx-auto">

		   <div className="flex justify-between mt-4 px-4 py-2 items-center
		   border border-neutro-4 bg-neutro-2  rounded-xl">
		        <img src="assets/images/logo.svg" alt="logo" />
				<div className='flex gap-2'>
					<Boton imagen="icon-moon.svg" noclick={true}/>
				</div>
			</div>
		   <div className='flex justify-between mt-4 px-4'  >
					<h1 className="text-3xl font-siete font-display dark:text-neutro-5">Extensions List</h1>
				<div className='flex gap-2'>
					<Boton texto="All" />
					<Boton texto="Active" />
					<Boton texto="Inactive" />
				</div>
			</div>
			<div className="bg-neutro-2 dark:bg-neutro-8">
				<CardsContainer />
			</div>
			</div>
		</>
	)
}

export default App
