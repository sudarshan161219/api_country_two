import React, {useRef, useMemo, useState } from 'react'
import { Route, Routes, useLocation} from 'react-router-dom';
import Main from './Main';
import Filter from './Filter';
import Cards from './Cards'
import Info from './Info'
import {AnimatePresence } from "framer-motion"


const AnimatedRoutes = (props) => {

    const [input, setInput] = useState('')
    const [change, setChange] = useState('')
    const inputRef = useRef()


    let location = useLocation();


// eslint-disable-next-line react-hooks/exhaustive-deps
const filteredItems =  useMemo(() => {
  return  props.Api.filter(item =>{
      return(
        item.region.toLowerCase().includes(change.toLowerCase())  && 
         item.name.common.toLowerCase().includes(input.toLowerCase())
      )
      })
  })

    return (
<AnimatePresence>
    <Routes location={location} key={location.pathname} >
        <Route path='/' element={
    <div className='section'>
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
     </div>

        } />  
      
      <Route path='/info/:id' element={<Info/>}  />
      </Routes>
      </AnimatePresence>
    );
  };
  
  export default AnimatedRoutes;
