import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
} from 'recharts';
import IconButton from '@material-ui/core/IconButton';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import Title from './Title';

export default function Chart(props) {
  const theme = useTheme();

  const [barGraph, setbarGraph] = React.useState(false);

  const [dataLengthWeekly, setdataLengthWeekly] = React.useState(7);

  const toggleMonthly = (event) => {
    event.preventDefault();
    setbarGraph(!barGraph);
  };

  const toggleLength = (event) => {
    event.preventDefault();
    dataLengthWeekly === 7 ? setdataLengthWeekly(30) : setdataLengthWeekly(7);
  };

  let closeImg = {
    cursor: 'pointer',
    float: 'right',
    marginTop: '5px',
    marginRight: '25px',
  };
  return (
    <React.Fragment>
      <Title>
        The last week in {props.title}{' '}
        <IconButton onClick={toggleMonthly} style={closeImg}>
          {barGraph ? <ShowChartIcon /> : <EqualizerIcon />}
        </IconButton>
        <IconButton onClick={toggleLength} style={closeImg}>
          <TimelapseIcon />{' '}
        </IconButton>
      </Title>

      <ResponsiveContainer>
        {barGraph ? (
          <BarChart
            width={500}
            height={300}
            data={props.data.slice(0, dataLengthWeekly).reverse()}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />
            <YAxis>
              <Label
                angle={270}
                position="left"
                style={{
                  textAnchor: 'middle',
                  fill: theme.palette.text.primary,
                }}
              >
                New Cases
              </Label>
            </YAxis>
            <Tooltip />
            <Bar dataKey="newCases" fill="#8884d8" />
          </BarChart>
        ) : (
          <LineChart
            data={props.data.slice(0, dataLengthWeekly).reverse()}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary}>
              <Label
                angle={270}
                position="left"
                style={{
                  textAnchor: 'middle',
                  fill: theme.palette.text.primary,
                }}
              >
                New Cases
              </Label>
            </YAxis>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="newCases"
              stroke={theme.palette.primary.main}
              dot={true}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </React.Fragment>
  );
}
