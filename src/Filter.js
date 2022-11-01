import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './App.css';

const Filter = (props) => {

const style = {
  backgroundColor:props.toggle,
  fontSize:'0.8rem',
  width:'185px',
  height:'45px',
}

const labelStyle = {
  fontSize:'0.8rem',
  fontWeight:'700',
  fontFamily: 'Nunito Sans',
  position:'absolute',
  top:'-3px',
  left:'0px',
  border:'none'
}

    return (
<main>
      <FormControl className='css-1e7cuzv-MuiFormControl-root' >
        <InputLabel className='label' style={labelStyle}  id="demo-simple-select-autowidth-label">Filter by Region</InputLabel>

        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.change}
          onChange={(e) => props.setChange(e.target.value)}
          label="Filter by Region"
          style={style}
          className='select'
        >

          <MenuItem value='Africa'>Africa</MenuItem>
          <MenuItem value='Americas'>Americas</MenuItem>
          <MenuItem value='Asia'>Asia</MenuItem>
          <MenuItem value='Europe'>Europe</MenuItem>
          <MenuItem value='Oceania'>Oceania</MenuItem>

        </Select>
      </FormControl>
</main>
    );
  };
  
  export default Filter;