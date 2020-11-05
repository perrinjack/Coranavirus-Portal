import React from 'react';
import './App.css';
import locals from './locals.json';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';

function Form(input) {
  
  const dispatch = useDispatch();
  const locations = locals.local_authorities;

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const OPTIONS_LIMIT = 5;
  const defaultFilterOptions = createFilterOptions();
  const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };
  const classes = useStyles();

  const [place, setPlace] = React.useState('');
  const handleChangeMake = (value) => {
    setPlace(value);
  };
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
            onChange={(event, value) => handleChangeMake(value)}
              filterOptions={filterOptions}
              id="combo-box-demo"
              options={locations}
              getOptionLabel={(option) => `${option.Town} `}
              renderInput={(params) => (
                <TextField {...params} label="Location" variant="outlined" />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              component={Link}
              to="/results"
              onClick={(event, value) => dispatch(increment(place.Town))}
              className={classes.submit}
            >
              View Figures
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Form;
