import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'


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

    const prepareCurrencies = (currency) => {
      if (!currency) return;
      return Object.values(currency).map((curr) => curr.name);
    };




  return (
  <>



    <article className='info-box' >
{info.map((item, index) => {
  return(
    // <>  
    <div  className='info-box-flex'  key={item}>

<div className='btn--img-container' >
<div className='btn-container' >
<Link to={'/'} style={{ textDecoration: 'none', width:'200px' }} > 
<button className='info-btn'> <BsArrowLeft className='btn-arrow' /> back </button>
</Link>
</div>

<div className='ino-img-container'>
<img className="info-img" alt={item.name.official} src={item.flags.png}  />
</div>
</div>

<div className='country-info-box'>
<div className='country-info-box-desktop' >
    <ul className='country-info-list'>
    <h1 className='country-info-heading'>{item.name.official}</h1>

      <li className='country-info-list-items'>
        Native Name: <span>{Object.values(item.name.nativeName)[0]?.common}</span>
      </li>

      <li className='country-info-list-items'>
        Population: <span>{item.population.toLocaleString("en-US")}</span>
      </li>

      <li className='country-info-list-items'>
        Region: <span>{item.region}</span> 
      </li>

      <li className='country-info-list-items'>
        Sub Region: <span>{item.subregion}</span>
      </li>

      <li className='country-info-list-items'>
        Capital: <span>{item.capital}</span>
      </li>

    </ul>

    <ul className='country-info-list-two'>
      
      <li className='country-info-list-items'>
        Top Level Domain: <span>{item.tld}</span>
      </li>

      <li className='country-info-list-items'>
        Currencies: <span>{prepareCurrencies(item.currencies)}</span>
      </li>

      <li className='country-info-list-items'>
        Languages: <span>{Object.values(item.languages).toLocaleString('en-US').replaceAll(',', ', ') 
        }</span> 
      </li>

    </ul>

    </div>

<div className='info-tag'>
  <p>Border Countries:</p>

  <div className='tags'>{
    
          item.borders ? item.borders.map((item, index) => (
          <div className="badge" key={index}>
            {item}
            </div>

  )) : '😎'
    
    }</div>


</div>

</div>



    </div>
    // </>
  )

})}
    </article>
    </>
  );
};

export default Info;
