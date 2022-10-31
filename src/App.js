import React, {createContext, useEffect, useState } from 'react'
import Loading from './Loading';
import Header from './Header';

import './App.css';
import AnimatedRoutes from './AnimatedRoutes';

export const  ThemeContext = createContext(null)

function App() {

const [loading, setLoading] = useState(true)
const [api, setApi] = useState([])

const [theme, setTheme] = useState('dark')

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


if(loading){
  return(
    <main>
      <Loading />
    </main>
  )
}


const toggleTheme = () => {
setTheme((theme === 'light' ? 'dark' : 'light'))
}



  return(

    <ThemeContext.Provider value={{theme, toggleTheme}} >

    <div id={theme}>
        <Header toggle={toggleTheme} theme={theme} />
<AnimatedRoutes Api={api} />
    </div>

    </ThemeContext.Provider>

  )

}

export default App;
