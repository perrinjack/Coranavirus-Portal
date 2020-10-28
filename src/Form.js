import React from 'react';
import './App.css';
import locals from './locals.json';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';

function Form(input) {
  const [place, setPlace] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const handleChangeMake = (value) => {
    setPlace(value);
    setButtonDisabled(!buttonDisabled);
    console.log(locals.local_authorities);
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
              getOptionLabel={(option) => `${option.Town} `}
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

const locations = locals.local_authorities;

export default Form;
