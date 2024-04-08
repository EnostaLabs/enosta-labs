import React from 'react'

const ButtonPrimary = ({ children, addClass = '' }) => {
  return (
    <button
      className={
        'text-white-500 rounded-lg bg-red-500 px-12 py-3 font-semibold text-white outline-none transition-all hover:shadow-orange-md lg:px-16 lg:py-4 ' +
        addClass
      }
    >
      {children}
    </button>
  )
}

export default ButtonPrimary
