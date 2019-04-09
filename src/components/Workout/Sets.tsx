import React, { FunctionComponent } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import { SetsType, WorkoutCheckboxListType } from '../../types/workout';

interface ISetsProps {
  type: WorkoutCheckboxListType;
  data: SetsType;
}

const Sets: FunctionComponent<ISetsProps> = ({ type, data }) => {
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
                {type.map((value, typeIndex) => {
                  return (
                    value.checked && (
                      <div
                        key={`${index}-${typeIndex}`}
                        style={{ margin: '1em 0' }}
                      >
                        <strong>{value.label.toUpperCase()}</strong>{' '}
                        <span>{row[value.name]}</span>
                      </div>
                    )
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
