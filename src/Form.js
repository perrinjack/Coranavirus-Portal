import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from 'react-router-dom';
function Form(input) {
  const [place, setPlace] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const handleChangeMake = (value) => {
    setPlace(value);
    setButtonDisabled(!buttonDisabled);
  };

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={locations}
        getOptionLabel={(option) => `${option.town}, ${option.country} `}
        style={{ width: 300 }}
        // onChange={handleChangeMake}
        onChange={(event, value) => handleChangeMake(value)}
        renderInput={(params) => (
          <TextField {...params} label="Location" variant="outlined" />
        )}
      />
      <Link to={`/results`}>
        <Button
          variant="contained"
          disabled={buttonDisabled}
          onClick={() => input.input(place)}
        >
          Calculate
        </Button>
      </Link>
    </div>
  );
}

const locations = [
  { town: 'St Albans', country: 'England' },
  { town: 'Harpenden', country: 'England' },
  { town: 'Luton', country: 'England' },
  { town: 'Bristol', country: 'England' },
  { town: 'Battersea', country: 'England' },
];

export default Form;
