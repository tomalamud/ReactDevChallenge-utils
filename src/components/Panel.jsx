import React from 'react'
import PanelHeader from './PanelHeader'
import ColumnGroupingTable from './Table';

function Panel() {
  return (
    <>
      <div className='bg-gray-200 w-full h-screen'>
        <PanelHeader className="shadow"/>
        <div className='h-20 w-full flex justify-between bg-slate-100 px-10 items-center'>Detalle <div className='bg-slate-300'>Date-Filter Component</div></div>
        <ColumnGroupingTable/>
      </div>
    </>
  )
}

export default Panel