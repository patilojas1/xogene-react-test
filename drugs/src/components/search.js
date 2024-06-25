import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search() {

    const navigate = useNavigate()

    const[error,setError] = useState(false)

    const handleClick = ()  => {
        axios.get("https://rxnav.nlm.nih.gov/REST/drugs.json?name=" + drugs).then((res) => {
            // if(res.data.drugGroup.name !== null)
            console.log(res.data.drugGroup.conceptGroup[1])
                navigate("/drugs/" + drugs,{state:{data:res.data.drugGroup.conceptGroup[1].conceptProperties}})
            // else if(res.data.suggestionGroup.suggestionList) {
            //     axios.get("https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=" + drugs).then(res => {
            //         navigate("/drugs/"+ drugs,{state:{data:res.data.suggestionGroup.suggestionList.suggestion}})
            //     })
            // }
            // else {
            //     setError(true)
            // }
        })
    }

    const [drugs,setDrugs] = useState("")
  return (
    <>
    <input type="text" className="form-control" placeholder="Username" value={drugs} onChange={e => setDrugs(e.target.value)} aria-describedby="addon-wrapping"></input>
    <button onClick={()=> handleClick()}>Click</button>
    {error && <alert>Not found</alert>}
    </>
  )
}
