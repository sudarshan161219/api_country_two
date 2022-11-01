import { Link } from "react-router-dom";
import {HiOutlineMoon, HiOutlineSun} from 'react-icons/hi'

const Header = (props) => {

    return (
<main>
      <header>
      <nav>        
      <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
      <div onClick={props.toggle} className='dark-light'>
     {props.theme === 'dark' ? <HiOutlineSun  className='icon' /> : <HiOutlineMoon  className='icon' /> }   
      <p>{props.theme === 'dark' ? 'Light Mode': 'Dark Mode'}</p>  
      </div>
      </nav>
       </header>
</main>
    );
  };
  
  export default Header;