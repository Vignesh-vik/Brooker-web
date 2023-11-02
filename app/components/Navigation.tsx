import React from 'react'

const Navigation = () => {
  return (
    <>
    <nav className=' pt-6 pl-16 flex text-sm font-semibold'>
        <div >

        <h3>Equity Residental</h3>
        </div>
        <div className=' ml-[46vw] flex gap-10  text-[12px] justify-center '>
            <button className='font-normal border rounded-xl px-3 py-.5'>
                covid 19
            </button>
            <a href="#" >Apartments by city</a>
            <a href="#">Resident login</a>
        </div>
    </nav>
    </>
  )
}

export default Navigation