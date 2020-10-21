import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [make, setMake] = React.useState('');
  const databaseMakes = ['Audi', 'BMW', 'Tesla'];

  const handleChange = (event) => {
    setMake(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Car Make</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={make}
          onChange={handleChange}
          label="Car Make"
        >
          {databaseMakes.map((x) => (
            <MenuItem value={x}>{x}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
