import React from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineSearch} from 'react-icons/ai'


const Main = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
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
        onChange={(e) => props.country(e.target.value)}
        />

      </form>
      </div>
</>
    );
  };
  
  export default Main;