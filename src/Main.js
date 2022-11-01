import React from 'react'
import { AiOutlineSearch} from 'react-icons/ai'


const Main = (props) => {


    return (

        <article className='main-div'>
        <section className='form'>
        <AiOutlineSearch className='search-icon' />
        <input 
        placeholder='Search for a country...'
        type='search' 
        className='input'
        value={props.input}
        ref={props.inputR}
        onChange={(e) => props.country(e.target.value)}
        ></input>
      </section>
      </article>

    );
  };
  
  export default Main;