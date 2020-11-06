import * as React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';



const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Typography component="p" variant="h4">
        {props.data}
      </Typography>

      <Typography color="textSecondary" className={classes.depositContext}>
        {(props.date) ? `Updated on ${props.date.substring(0, 22).substring(4)}` : null }
      </Typography>

      <div>
        <Link
          color="primary"
          target="_blank"
          href="https://coronavirus.data.gov.uk/ "
        >
          Source: coronavirus.data.gov.uk
        </Link>
      </div>
    </React.Fragment>
  );
}
