import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Drug(props) {

    const location = useLocation()

    const[drugsData,setDrugsData] = useState([])
   


    useEffect(() => {
        console.log(location.state.data)
        setDrugsData([...location.state.data.res.data[0]]);
        console.log(drugsData)
    },[])

  return (
    <>
    <table>
        <thead>
            <td>rxcui id</td>
            <td>name</td>
            <td>synonym</td>
        </thead>
        <tbody>
            {drugsData.map(e => <tr key={e.rxcui}>
                <td>{e.rxcui}</td>
                <td>{e.name}</td>
                <td>{e.synonym}</td>
            </tr>)}
        </tbody>
    </table>
    </>
  )
}
