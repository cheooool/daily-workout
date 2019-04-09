import React, { FunctionComponent } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

interface ISetsProps {
  header: string[];
  data: {
    [key: string]: any;
  }[];
}

const Sets: FunctionComponent<ISetsProps> = ({ header, data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">Set</TableCell>
          <TableCell align="center">Data</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => {
          return (
            <TableRow key={index}>
              <TableCell component="td" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell component="td" scope="row" align="center">
                {header.map((type, typeIndex) => {
                  return (
                    <div
                      key={`${index}-${typeIndex}`}
                      style={{ margin: '1em 0' }}
                    >
                      <strong>{type.toUpperCase()}</strong>{' '}
                      <span>{row[type]}</span>
                    </div>
                  );
                })}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Sets;
