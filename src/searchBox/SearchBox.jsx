import { InputAdornment, TextField, Typography } from '@mui/material';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox({ setData }) {
  const styles = {
    margin: '2 auto',
    width: '50%',
  };
  //for Preventing repeated calls
  const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };
  const handleSearchFieldData = debounce(e => fetchData(e));
  const fetchData = value => {
    let searchString = value;
    let url = `https://api.waqi.info/v2/search/?token=${'9f34f664128dc9b032932a116ecc73e7b4d264fa'}&keyword=${searchString}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        response.data.forEach((item, i) => (item.id = i + 1));
        setData(response.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Typography sx={{ mt: 2, p: 3 }} variant='h5'>
        AIR QUALITY SEARCH
      </Typography>
      <TextField
        sx={styles}
        fullWidth
        id='outlined-basic'
        label='Search For Countries'
        variant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        size='small'
        onChange={e => handleSearchFieldData(e.target.value)}
        endIcon
      />
    </div>
  );
}
