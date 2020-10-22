import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

function Form(input) {
  const [place, setPlace] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const handleChangeMake = (value) => {
    setPlace(value);
    setButtonDisabled(!buttonDisabled);
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Enter Your Town / City
          </Typography>
          <form className={classes.form}>
            <Autocomplete
              id="combo-box-demo"
              options={locations}
              getOptionLabel={(option) => `${option.town}, ${option.country} `}
              onChange={(event, value) => handleChangeMake(value)}
              renderInput={(params) => (
                <TextField {...params} label="Location" variant="outlined" />
              )}
            />

            <Button
              type="submit"
              fullWidth

              variant="contained"
              color="primary"
              onClick={() => input.input(place)}
              className={classes.submit}
              disabled={buttonDisabled}
              component={Link}
              to="/results"
            >
              View Figures
            </Button>
          </form>
        </div>
      </Container>
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
