import React, {useRef, useMemo, useEffect, useState } from 'react'
import Loading from './Loading';
import Header from './Header';
import Main from './Main';
import Filter from './Filter';
import Cards from './Cards'
import './App.css';


function App() {

const [loading, setLoading] = useState(true)
const [api, setApi] = useState([])
const [input, setInput] = useState('')
const [change, setChange] = useState('')
const inputRef = useRef()

// eslint-disable-next-line react-hooks/exhaustive-deps


const fetchInfo = async () => { 
try{

  const response = await fetch("https://restcountries.com/v3.1/all")
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


// eslint-disable-next-line react-hooks/exhaustive-deps
const filteredItems =  useMemo(() => {
  return  api.filter(item =>{
      return(
         item.region.toLowerCase().includes(change.toLowerCase())  && 
         item.name.official.toLowerCase().includes(input.toLowerCase())
      )
      })
  })



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
     country={setInput}
     inputR={inputRef}
     input={input}
     />

     <Filter 
     change={change}
     setChange={setChange}
      />


     <Cards 
     Api={filteredItems}

      />
     
</section>
    </>
  )

}

export default App;
