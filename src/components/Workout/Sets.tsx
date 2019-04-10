import React, { FunctionComponent } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Button
} from '@material-ui/core';
import { SetsListType, WorkoutCheckboxListType } from '../../types/workout';
import { Add, Close, Edit } from '@material-ui/icons';

interface ISetsProps {
  type: WorkoutCheckboxListType;
  data: SetsListType;
  handleOpenSetsAddForm: () => void;
  handleOpenSetsUpdateForm: (selectedIndex: number) => void;
}

const Sets: FunctionComponent<ISetsProps> = ({
  type,
  data,
  handleOpenSetsAddForm,
  handleOpenSetsUpdateForm
}) => {
  return (
    <Paper>
      <Table style={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell style={tableCellStyles} align="center">
              Set
            </TableCell>
            <TableCell style={tableCellStyles} align="center">
              Data
            </TableCell>
            <TableCell style={tableCellStyles} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={tableCellStyles} align="center">
              {data.length + 1}
            </TableCell>
            <TableCell style={tableCellStyles} align="center" colSpan={2}>
              <Button fullWidth={true} onClick={handleOpenSetsAddForm}>
                <Add fontSize="small" color="primary" />
              </Button>
            </TableCell>
          </TableRow>
          {data.reverse().map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell
                  style={tableCellStyles}
                  component="td"
                  scope="row"
                  align="center"
                >
                  {data.length - index}
                </TableCell>
                <TableCell
                  style={tableCellStyles}
                  component="td"
                  scope="row"
                  align="center"
                >
                  {type.map((value, typeIndex) => {
                    return (
                      value.checked && (
                        <div
                          key={`${index}-${typeIndex}`}
                          style={{ margin: '1em 0', lineHeight: '1.5em' }}
                        >
                          <strong>{value.label.toUpperCase()}</strong> <br />
                          <span>{row[value.name]}</span>
                        </div>
                      )
                    );
                  })}
                </TableCell>
                <TableCell style={tableCellStyles}>
                  <IconButton onClick={() => handleOpenSetsUpdateForm(index)}>
                    <Edit fontSize="small" color="primary" />
                  </IconButton>
                  <IconButton>
                    <Close fontSize="small" color="secondary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

// 임시 스타일 추후 @material-ui/styles 추가하여 스타일 작업 필요
const tableCellStyles = {
  padding: '0'
};

export default Sets;
