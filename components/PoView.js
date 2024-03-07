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
    const res = await fetch('http://localhost:3000/api/createPO', {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('failed to fetch invoices');
    }
    return res.json();
  } catch (error) {
    console.log('error loading invoices:', error);
  }
};

export default function PoView() {
  const [po, setPos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPayrolls();
      setPos(data.po);
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col'>
      {/* <h1 className='text-3xl text-green-900 font-semibold p-11'>History of Payrolls</h1>
      <table className='flex flex-col  mt-11'>
        <thead>
          <tr className='flex flex-row justify-evenly'>
            <th>Date</th>
            <th>Supplier</th>
            <th>Part</th>
            <th>Quantity</th>
            <th>Price Per Part</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {po.map((inv) => (
            <tr key={inv._id} className='flex flex-row gap-11 justify-evenly'>
              <td className=''>{inv.dateAdded}</td>
              <td className=''>{inv.vendor}</td>
              <td className=''>{inv.part}</td>

              <td className=''>{inv.quantity}</td>
              <td className=''>{inv.price_per_part}</td>
              <td>{inv.total}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Supplier&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Part&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Quantity&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Price per Part&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">total&nbsp;(g)</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {po.map((pr) => (
            <StyledTableRow key={pr._id}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell align="right">{pr.dateAdded}</StyledTableCell>
              <StyledTableCell align="right">{pr.vendor}</StyledTableCell>
              <StyledTableCell align="right">{pr.part}</StyledTableCell>
              <StyledTableCell align="right">{pr.quantity}</StyledTableCell>
              <StyledTableCell align="right">{pr.price_per_part}</StyledTableCell>
              <StyledTableCell align="right">{pr.total}</StyledTableCell>



            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
