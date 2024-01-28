import React from 'react'

const TabButton = ( { active, selectTab, children}) => {

    const buttonClasses = active 
    ? 'text-white border-b border-purple-500' 
    : 'text-slate-400';

  return (
    <button onClick={selectTab}>
        <p className={`mr-6 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    </button>

  )
}

export default TabButton
