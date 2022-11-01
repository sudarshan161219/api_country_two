import {HiOutlineMoon, HiOutlineSun} from 'react-icons/hi'

const Header = (props) => {


 

    return (

      <header className='header-nav'>        
      <h1>Where in the world?</h1>
      <nav onClick={props.toggle} className='dark-light'>
     {props.theme === 'dark' ? <HiOutlineSun  className='icon' /> : <HiOutlineMoon  className='icon' /> }   
      <p>{props.theme === 'dark' ? 'Light Mode': 'Dark Mode'}</p>  
      </nav>
      </header>

    );
  };
  
  export default Header;