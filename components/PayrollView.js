"use client"
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const getPayrolls = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/payEmployee', {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('failed to fetch payrolls');
    }
    return res.json();
  } catch (error) {
    console.log('error loading payrolls:', error);
  }
};

export default function PayrollView() {
  const [payrolls, setPayrolls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPayrolls();
      setPayrolls(data.payrolls);
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col'>
      {/* <h1 className='text-3xl text-green-900 font-semibold p-11'>History of Payrolls</h1>
      <table className='flex flex-col  mt-11'>
        <thead>
          <tr className='flex flex-row justify-evenly'>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Disbursment</th>
            <th>Withholding</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {payrolls.map((pr) => (
            <tr key={pr._id} className='flex flex-row gap-11 justify-evenly'>
              <td className='ml-[5rem]'>{pr.firstname}</td>
              <td className='pl-[3rem]'>{pr.lastname}</td>
              <td className='pl-[3rem]'>{pr.disbursment}</td>
              <td className='pl-[4rem]'>{pr.withholding}</td>
              <td>{pr.dateAdded}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Firstname</StyledTableCell>
            <StyledTableCell align="right">Lastname&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Disbursment&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Withholding&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Date Added&nbsp;(g)</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {payrolls.map((pr) => (
            <StyledTableRow key={pr._id}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell align="right">{pr.firstname}</StyledTableCell>
              <StyledTableCell align="right">{pr.lastname}</StyledTableCell>
              <StyledTableCell align="right">{pr.disbursment}</StyledTableCell>
              <StyledTableCell align="right">{pr.withholding}</StyledTableCell>
              <StyledTableCell align="right">{pr.dateAdded}</StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
