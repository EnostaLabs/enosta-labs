import React from 'react'

const ButtonOutline = ({ children }) => {
  return (
    <button className="bg-white-500 hover:text-white-500 rounded-l-full rounded-r-full border border-orange-500 px-5 py-2 font-medium capitalize tracking-wide text-orange-500 outline-none transition-all hover:bg-orange-500 hover:shadow-orange sm:px-8 ">
      {' '}
      {children}
    </button>
  )
}

export default ButtonOutline
