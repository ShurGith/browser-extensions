
import { useState } from 'react'
import { Switch } from '@headlessui/react'
export const Switcher = () => {
	const [enabled, setEnabled] = useState(false)


	return (

		<Switch
			checked={enabled}
			onChange={setEnabled}
			className= "group relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-rojo-7 focus:ring-offset-2 focus:outline-hidden data-checked:bg-rojo-7"
		>
			<span
				aria-hidden="true"
				className="pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5"
			/>
		</Switch>
	)
}