import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    color: 'red',
  },
  selectEmpty: {
    marginTop: theme.spacing(6),
  },
}));

function Form() {
  const classes = useStyles();
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');
  const [modelList, setModelList] = React.useState([]);
  const [engine, setEngine] = React.useState('');
  const [engineDisabled, setEngineDisabled] = React.useState(true);
  const [modelDisabled, setModelDisabled] = React.useState(true);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const databaseMakes = ['Audi', 'BMW', 'Tesla'];
  const databaseModels = {
    Audi: ['TT', 'Q'],
    BMW: ['2 series', '3 Series', '4 series', '1 Series'],
    Tesla: ['Model X'],
  };
  const engineList = ['2.0'];

  const handleChangeMake = (event) => {
    setMake(event.target.value);
    setModelList(databaseModels[event.target.value]);
    setModel('');
    setEngine('');
    setModelDisabled(false);
    setEngineDisabled(true);
    setButtonDisabled(true);
  };

  const handleChangeModel = (event) => {
    setModel(event.target.value);
    setEngine('');
    setEngineDisabled(false);
  };

  const handleChangeEngine = (event) => {
    setEngine(event.target.value);
    setButtonDisabled(false);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Car Make</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={make}
          onChange={handleChangeMake}
          label="Car Make"
        >
          {databaseMakes.map((x) => (
            <MenuItem value={x}>{x}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={model}
          onChange={handleChangeModel}
          label="Car Model"
          disabled={modelDisabled}
        >
          {modelList.map((x) => (
            <MenuItem value={x}>{x}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Engine</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={engine}
          onChange={handleChangeEngine}
          label="Engine"
          disabled={engineDisabled}
        >
          {engineList.map((x) => (
            <MenuItem value={x}>{x}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" disabled={buttonDisabled}>
        Calculate
      </Button>
    </div>
  );
}

export default Form;
