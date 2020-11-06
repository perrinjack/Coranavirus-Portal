import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';
import Title from './Title';

export default function Chart(props) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>The last week in {props.title}</Title>
      <ResponsiveContainer>
        <LineChart
          data={props.stuff.slice(0, 14).reverse()}
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
      </ResponsiveContainer>
    </React.Fragment>
  );
}
