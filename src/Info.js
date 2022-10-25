import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Info = () => {

const [info, setInfo] = useState([])

let { id } = useParams();

const fetchInfo = async () => { 
const response = await fetch(`https://restcountries.com/v3.1/name/${id}`)
  
      const info = await response.json()
      setInfo(info)

    }

      useEffect (() =>{
    fetchInfo()
    }, [])

console.log(info)

  return (
  <>
    <article>
{info.map((item, index) => {
  return(
    <>  
  <img alt={item.name.official} src={item.flags.png}  />
  <h1>{item.name.official}</h1>
    </>
  )

})}
    </article>
    </>
  );
};

export default Info;
