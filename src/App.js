import React, {useRef, useMemo, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Loading from './Loading';
import Header from './Header';
import Main from './Main';
import Filter from './Filter';
import Cards from './Cards'
import Info from './Info'
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
  const response = await fetch("https://restcountries.com/v3.1/all" )
  const info = await response.json()
  setApi(info)
  setLoading(false)
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

      // eslint-disable-next-line no-unreachable
      })
  })



if(loading){
  return(
    <main>
      <Loading />
    </main>
  )
}

// console.log(api)

  return(
    <>
        <Header />
<Routes>
  <Route path='/' element={
       <>
 
       <section className='section'>

<div className='flex' >
            <Main
              className='flex-form'
              country={setInput}
              inputR={inputRef}
              input={input} 
              />

            <Filter
              className='flex-select'
              change={change}
              setChange={setChange} 
              />

</div>

              
     <Cards Api={filteredItems} />     
  
          </section>
          </>
  } />  

<Route path='/info/:id' element={<Info/>}  />
</Routes>
    </>
  )

}

export default App;
