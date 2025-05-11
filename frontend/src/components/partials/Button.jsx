import React from 'react'

function Button({texto}) {
  return (
    <button className="border-1 border-neutro-5 px-4 py-2 rounded-full
    font-display bg-white cursor-pointer text-sm dark:bg-neutro-8 dark:text-neutro-6
    dark:border-neutro-6">
    {texto}
    </button>
  )
}

export default Button