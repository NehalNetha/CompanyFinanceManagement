
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
import Link from "next/link";




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

const getVendors = async () => {
    try{
        const res = await  fetch("http://localhost:3000/api/vendors", {
            cache: "no-store"
        })
        if(!res.ok){
            throw new Error("failed to fetch tops")
        }
        return res.json()
    }catch(error){
        console.log("error loading topics: ", error)
    }
}

export default  function EmployeeList() {
    // const{ vendors} = await getVendors()

    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getVendors()
            setVendors(data.vendors)

        }

        fetchData();
    }, [])

    return (

        // <>
        //     {vendors.map((em) => (
        //          <div key={em._id} className='py-11 px-11 flex flex-col gap-5'>
        //             <Link href={`/vendor/${em._id}`}>
        //                  {em.company} 
        //             </Link>
        //          </div>
        //     ))}
           
        // </>

        <div>
    <TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} aria-label="customized table">
    <TableHead>
    <TableRow>

         <StyledTableCell align="right">Company</StyledTableCell>
        <StyledTableCell align="right">Equipment</StyledTableCell>
        <StyledTableCell align="right">Address Line &nbsp;(g)</StyledTableCell>
        <StyledTableCell align="right">City&nbsp;(g)</StyledTableCell>
        <StyledTableCell align="right">State&nbsp;(g)</StyledTableCell>
        <StyledTableCell align="right">zip&nbsp;(g)</StyledTableCell>
        <StyledTableCell align="right">Price&nbsp;(g)</StyledTableCell>




    </TableRow>
    </TableHead>
    <TableBody>
    {vendors.map((pr) => (
        <StyledTableRow key={pr._id}>
        {/* <StyledTableCell component="th" scope="row">
            {row.name}
        </StyledTableCell> */}
        <StyledTableCell align="right">{pr.company}</StyledTableCell>
        <StyledTableCell align="right">{pr.equipment}</StyledTableCell>
        <StyledTableCell align="right">{pr.addressLine}</StyledTableCell>
        <StyledTableCell align="right">{pr.city}</StyledTableCell>
        <StyledTableCell align="right">{pr.state}</StyledTableCell>
        <StyledTableCell align="right">{pr.zip}</StyledTableCell>
        <StyledTableCell align="right">{pr.price}</StyledTableCell>







            </StyledTableRow>
        ))}
        </TableBody>
        </Table>
        </TableContainer>
        </div>

    )
}
