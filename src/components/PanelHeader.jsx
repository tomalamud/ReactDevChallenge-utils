import React from 'react'

function PanelHeader() {
  return (
    <>
      <div className='h-14 w-full flex justify-between bg-slate-500 px-10 items-center'>PanelHeader <div>Search</div></div>
      <div className='h-20 w-full flex justify-between bg-slate-100 px-10 items-center'>Detalle <div className='bg-slate-300'>Date-Filter Component</div></div>
    </>
  )
}

export default PanelHeader