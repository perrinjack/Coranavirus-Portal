import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';

function Form() {
  const history = useHistory();

  const [place, setPlace] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const handleChangeMake = (event) => {
    setPlace(event.target.value);
    setButtonDisabled(!buttonDisabled);
  };

  const handleCalculateClick = () => {
    history.push('/results');
  };

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={locations}
        getOptionLabel={(option) => `${option.town}, ${option.country} `}
        style={{ width: 300 }}
        onChange={handleChangeMake}
        renderInput={(params) => (
          <TextField {...params} label="Location" variant="outlined" />
        )}
      />

      <Button
        variant="contained"
        disabled={buttonDisabled}
        onClick={handleCalculateClick}
      >
        Calculate
      </Button>
    </div>
  );
}

const locations = [
  { town: 'St Albans', country: 'England' },
  { town: 'Harpenden', country: 'England' },
];

export default Form;
