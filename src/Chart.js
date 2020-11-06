import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Legend,
  BarChart,
  Tooltip,
  Bar,
} from 'recharts';
import IconButton from '@material-ui/core/IconButton';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Title from './Title';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
export default function Chart(props) {
  const theme = useTheme();

  const [barGraph, setbarGraph] = React.useState(true);

  const toggleMonthly = (event) => {
    event.preventDefault();
    setbarGraph(!barGraph);
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
          <EqualizerIcon />
        </IconButton>
      </Title>

      <ResponsiveContainer>
        {barGraph ? (
          <BarChart
            width={500}
            height={300}
            data={props.data.slice(0, props.datalength).reverse()}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />
            <YAxis />

            <Bar dataKey="newCases" fill="#8884d8" label/>
          </BarChart>
        ) : (
          <LineChart
            data={props.data.slice(0, props.datalength).reverse()}
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
