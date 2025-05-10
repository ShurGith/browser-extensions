export const Switcher = () => {
	const cambia =(e)=>{
		const objeto= e.closest('.swtcherContainer')
		const switcher = objeto.querySelector('.switcher')
		const desliza = objeto.querySelector('.desliza')
		desliza.classList.toggle('bg-rojo-7')
		desliza.classList.toggle('translate-x-9')
		switcher.classList.toggle('bg-gray-500')
	}
	return (
			<div className="swtcherContainer">
				<div onClick={(e)=>cambia(e.target)}
				     className="switcher w-16 h-6 border-2  rounded-xl cursor-pointer">
					<div className="desliza w-6 h-5 bg-black rounded-xl"></div>
				</div>
			</div>
	)
}