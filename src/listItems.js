import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/england">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="England" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Useful links</ListSubheader>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="Money Troubles" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="Mental Health" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="Job Search" />
    </ListItem>
  </div>
);
