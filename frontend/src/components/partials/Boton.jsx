import { useState } from 'react'

function Boton({texto="",imagen="", noclick=false}) {
  const [enabled, setEnabled] = useState()
  return (
    <button className={`border-1 border-neutro-5 ${!noclick ? 'px-4 py-2 rounded-full ' : 'p-2 rounded-md'} font-display cursor-pointer text-sm dark:bg-neutro-8 dark:text-neutro-6
    dark:border-neutro-6 focus:ring-2 focus:ring-rojo-7 focus:ring-offset-2 focus:outline-hidden ${enabled ? 'bg-rojo-7 text-neutro-3' : 'bg-white text-neutro-6'} `}
      onClick={()=> !noclick && setEnabled(!enabled)}
    >
    
    {texto && texto}
    {imagen && <img src={`assets/images/${imagen}`} alt={imagen} />}
    </button>
  )
}

export default Boton