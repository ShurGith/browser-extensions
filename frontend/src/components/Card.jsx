import Button from "./partials/Button";
import { Switcher } from "./partials/Switcher";

function Card({logo,name,description}) {
	
	
	return (
		<div className="flex flex-col items-center border border-neutro-4 bg-neutro-2 rounded-xl px-2 py-4 gap-4
		font-display dark:bg-neutro-8 dark:border-neutro-7 dark:text-neutro-5">
			<div className="flex items-start gap-3 ">
				<img
				 src={`${logo}`} alt={name} />
				<div>
					<h4 className="text-lg font-siete dark:text-neutro-5">{name}</h4>
					<h5 className="text-sm font-cuatro text-neutro-6 text-principal">{description}</h5>
				</div>
			</div>
			<div className="flex w-full items-center justify-between">
				<Button texto="Remove"/>
				<Switcher/>
			</div>
		</div>
	);
}

export default Card;