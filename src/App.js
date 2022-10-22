import React, {useRef, useMemo, useEffect, useState } from 'react'
import Loading from './Loading';
import Header from './Header';
import Main from './Main';
// import Filter from './Filter';
import Cards from './Cards'
import './App.css';


const url = "https://restcountries.com/v3.1/all"


function App() {

const [loading, setLoading] = useState(true)
const [api, setApi] = useState([])
const [input, setInput] = useState('')
const inputRef = useRef()

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


//  useEffect(() =>{
// setOutput([])
// // eslint-disable-next-line array-callback-return
// api.filter( (val) =>{
//   if(val.name.official.toLowerCase().includes(input.toLowerCase()) ||
//    val.name.common.toLowerCase().includes(input.toLowerCase())){
//     setOutput(output =>[...output, val])
//   }

//   // if(filterParam === val.region){
//   //   setOutput(output =>[...output, val])
//   // }


// })
// }, [api, input])


// const filteredItems =  useMemo(() => {
//   return  api.filter(item =>{
//      return item.name.official.toLowerCase().includes(input.toLowerCase())
//       })
  
//   })


  const filteredItems = api.filter(item =>{
     return item.name.official.toLowerCase().includes(input.toLowerCase())
        })
  
    



if(loading){
  return(
    <main>
      <Loading />
    </main>
  )
}

// const setIn

  return(
    <>
    <Header />
<section className='section' >

     <Main 
     country={setInput}
     inputR={inputRef}
     input={input}
     />

     {/* <Filter 
      country={setInput}
      inputR={inputRef}
      input={input}
      /> */}


     <Cards Api={filteredItems} />
     
</section>
    </>
  )

}

export default App;
