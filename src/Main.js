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

        <section className='main-div'>
        <h1 className='section-heading'>hello</h1>
        <form className='form' onSubmit={handleSubmit}>
        <div className='btn'>
        <AiOutlineSearch className='search-icon' />
        </div>
        <input 
        placeholder='Search for a country...'
        type='search' 
        className='input'
        value={props.input}
        ref={props.inputR}
        onChange={(e) => props.country(e.target.value)}
        />
      </form>
      </section>

    );
  };
  
  export default Main;