import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const Info = () => {

const [info, setInfo] = useState([])

let { id } = useParams();

      useEffect (() =>{
const fetchInfo = async () => { 
      try{
      const response = await fetch(`https://restcountries.com/v3.1/name/${id}`)
      const info = await response.json()
      setInfo(info)
      } catch(error){
    console.log('error')
      }
    }

    fetchInfo()
    }, [id])

console.log(info)

  return (
  <>



    <article className='info-box' >
{info.map((item, index) => {
  return(
    <>  
    <div  key={item}>
  <div className='btn-img'>
    <div>
        <Link to={'/'} style={{ textDecoration: 'none' }} > <button> back </button></Link>
    </div>

  <img alt={item.name.official} src={item.flags.png}  />
      </div>




  <h1>{item.name.official}</h1>
    </div>
    </>
  )

})}
    </article>
    </>
  );
};

export default Info;
