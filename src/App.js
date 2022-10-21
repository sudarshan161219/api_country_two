import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Header from './Header';
import Main from './Main';
import Filter from './Filter';
import Cards from './Cards'
import './App.css';


const url = "https://restcountries.com/v3.1/all"


function App() {

const [loading, setLoading] = useState(true)
const [api, setApi] = useState([])
const [input, setInput] = useState('')
const [output, setOutput] = useState([])
const [filterParam, setFilterParam] = useState('')



const fetchInfo = async () => { 
try{
  const response = await fetch(url)
  const info = await response.json()
  setLoading(false)
  setApi(info)
} catch(error){
  setLoading(false)
}
}

useEffect (() =>{
  fetchInfo()
}, [])


 useEffect(() =>{
setOutput([])
// eslint-disable-next-line array-callback-return
api.filter( (val) =>{
  if(val.name.official.toLowerCase().includes(input.toLowerCase()) ||
   val.name.common.toLowerCase().includes(input.toLowerCase())){
    setOutput(output =>[...output, val])
  }

  if(filterParam === val.region){
    setOutput(output =>[...output, val])
  }


})
}, [api, input, filterParam])



const country = (searchValue) => {
  setInput(searchValue);
  setFilterParam(searchValue)
  if (input) {
    setOutput(
      api.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    )};

      if (filterParam === api.region) {
        setOutput(
          api.filter((country) =>
            Object.values(country.region)
              .join("")
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
        )};


    }


if(loading){
  return(
    <main>
      <Loading />
    </main>
  )
}



  return(
    <>
    <Header />
<section className='section' >

     <Main 
     country={country}
     input={input}
     />

     <Filter 
     filteredCountry={country}
      filterParam={filterParam} 
      />


     <Cards Api={output} />
     
</section>
    </>
  )

}

export default App;
