import React, { useEffect, useState } from 'react'
import PanelHeader from './PanelHeader'
import ColumnGroupingTable from './Table';

function Panel() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://admindev.inceptia.ai/api/v1/inbound-case/?client=28&local_updated_date_gte=2021-03-01&local_updated_date_lte=2022-03-25', {
        headers: {
          'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MSwidXNlcm5hbWUiOiJyZWFjdGRldkBpbmljZXB0aWEuYWkiLCJleHAiOjE2NTA3NDU0MjAsImVtYWlsIjoicmVhY3RkZXZAaW5pY2VwdGlhLmFpIiwib3JpZ19pYXQiOjE2NTA2NTkwMjB9.8ZDhXYi7NMiMDR-nr_k9NynGdiuozp5_85ig_-0jFIo'
        }
      })
      const newData = await response.json();
      setData(newData);
    }

    fetchData();
  },[])

  console.log(data)

  return (
    <>
      <div className='bg-gray-200 w-full h-screen'>
        <PanelHeader/>
        <div className='h-20 w-full flex justify-between bg-white px-4 items-center'>Detalle 
          <div className='bg-gray-100'>
            {/* Date-Filter Component */}
          </div>
        </div>
        <ColumnGroupingTable data={data}/>
      </div>
    </>
  )
}

export default Panel