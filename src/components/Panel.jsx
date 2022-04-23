import { Button, ButtonGroup } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react'
import PanelHeader from './PanelHeader'
import ColumnGroupingTable from './Table';

function Panel() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [date, setDate] = useState({ from: '2021-03-01', to: '2022-03-25'})
  const fromRef = useRef(null);
  const toRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://admindev.inceptia.ai/api/v1/inbound-case/?client=28&local_updated_date_gte=${date.from}&local_updated_date_lte=${date.to}${ page !== 0 ?'&page=' + page : ''}`, {
        headers: {
          'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MSwidXNlcm5hbWUiOiJyZWFjdGRldkBpbmljZXB0aWEuYWkiLCJleHAiOjE2NTA3NDU0MjAsImVtYWlsIjoicmVhY3RkZXZAaW5pY2VwdGlhLmFpIiwib3JpZ19pYXQiOjE2NTA2NTkwMjB9.8ZDhXYi7NMiMDR-nr_k9NynGdiuozp5_85ig_-0jFIo'
        }
      })
      const newData = await response.json();
      setData(newData);
    }
    fetchData();
  },[page, date])
  
  const handlePickDate = () => {
    setDate({
      from: fromRef.current.value,
      to: toRef.current.value
    })
  }
  console.log(date)


  return (
    <>
      <div className='bg-gray-200 w-full h-auto'>
        <PanelHeader/>
        <div className='h-20 w-full flex justify-between bg-white px-4 items-center'>Detalle 
          <div>
            {/* Date-Filter Component */}
            <form className='flex space-x-2 items-end'>
              <div>
                <label>Buscar desde</label>
                <input type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  ref={fromRef}
                  placeholder="yyyy-mm-dd"/>
              </div>
              <div>
                <label>Buscar hasta</label>
                <input type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  ref={toRef}
                  placeholder="yyyy-mm-dd"/>
              </div>
              <Button onClick={handlePickDate} className='h-10 drop-shadow-none bg-slate-400' variant="contained">Buscar</Button>
            </form>
          </div>
        </div>
        <ColumnGroupingTable data={data}/>
        <div className='w-full h-10 bg-white flex justify-end items-center px-6'>
          <ButtonGroup className='h-8 bg-slate-400' disableElevation variant="contained">
            <Button className='bg-gray-400' onClick={page >= 1 ? () => setPage(page - 1) : undefined}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
            <Button className='bg-gray-400' onClick={data.next ? () => setPage(page + 1) : null}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  )
}

export default Panel