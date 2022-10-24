import React from 'react'
// import InputLabel from '@material-ui/core/InputLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './App.css';






const Filter = (props) => {






//   function handleChange(e){
//     setChange(e.target.value)
//     }

// const fetchInfo = async (regionName) => { 

//   if (regionName === "all") {
//     const url = `https://restcountries.com/v3.1/all`;
//     const response = await fetch(url);
//     const data = await response.json();
//     setFilter(data)
//   } else {
//     const url = `https://restcountries.com/v3.1/region/${change}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     setFilter(data)

//   }

//   }
  
//   useEffect (() =>{
//     fetchInfo()
//   }, [])


  
    return (
      <>

       <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.change}
          onChange={(e) => props.setChange(e.target.value)}
          label="Age"
        >
          {/* <MenuItem value='all'>all</MenuItem> */}
          <MenuItem value='Africa'>Africa</MenuItem>
          <MenuItem value='Americas'>Americas</MenuItem>
          <MenuItem value='Asia'>Asia</MenuItem>
          <MenuItem value='Europe'>Europe</MenuItem>
          <MenuItem value='Oceania'>Oceania</MenuItem>

        </Select>
      </FormControl>
    </div>
</>
    );
  };
  
  export default Filter;