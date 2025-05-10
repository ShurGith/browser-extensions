import { Switcher } from "./Switcher.jsx";

function Card() {
	
	
	return (
		<div>
			<div>
				icono
				<div>
					<h4>Nombre</h4>
					<h5>Definicion</h5>
				</div>
			</div>
			<div>
				<button className="text-rojo-5">Eliminar</button>
				<Switcher/>
			</div>
		</div>
	);
}

export default Card;