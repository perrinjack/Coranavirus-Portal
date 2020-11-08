import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import { Link } from 'react-router-dom';
import { IconFlagUK, IconFlag, IconFlagUS } from 'material-ui-flags';
import Flag from 'react-flagkit';
export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
      <Flag country="GB" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/england">
      <ListItemIcon>
        <Flag country="GB-ENG" />
      </ListItemIcon>
      <ListItemText primary="England" />
      </ListItem>
      <ListItem button component={Link} to="/scotland">
      <ListItemIcon>
        <Flag country="GB-SCT" />
      </ListItemIcon>
      <ListItemText primary="Scotland" />
    </ListItem>
    <ListItem button component={Link} to="/wales">
      <ListItemIcon>
        <Flag country="GB-WLS" />
      </ListItemIcon>
      <ListItemText primary="Wales" />
      </ListItem>
      <ListItem button component={Link} to="/england">
      <ListItemIcon>
        <Flag country="GB-NIR" />
      </ListItemIcon>
      <ListItemText primary="Northern Ireland" />
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
