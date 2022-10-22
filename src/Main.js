import React from 'react'
import { AiOutlineSearch} from 'react-icons/ai'


const Main = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
const value = props.input.current.value
if(value === "")return
props.country(prev => {
  return[...prev, value]
})
props.input.current.value =""
    }

    return (
<>
        <div className='main-div'>
        <form className='form' onSubmit={handleSubmit}>
        <button className='btn' type='submit'>
        <AiOutlineSearch className='search-icon' />
        </button>
        <input 
        placeholder='Search for a country...'
        type='search' 
        className='input'
        value={props.input}
        ref={props.inputR}
        onChange={(e) => props.country(e.target.value)}
        />

      </form>
      </div>
</>
    );
  };
  
  export default Main;