import { Button, Divider, FormControl, InputLabel, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import gray from '@material-ui/core/colors/grey'
import { Book } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const StyledMain=styled.div`
       background:transparent;
        width:75%;
        min-height:95%;
        margin-top:10px;
        margin-left:auto;
        margin-right:auto;
        display: flex;
        flex-direction: column;
        margin-left: 21%;
      

            .topDisplay{
        height:50px;
        background-color: #1E7F95;
        width: 100%;
        display: flex;
        flex-direction: row;
        }

`;

const useStyles = makeStyles((theme)=>(
    {
      table: {
        width: 400,
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
  } 
  ))

const StyledTableCell = withStyles((theme) => ({
    head: {
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default function MySubject() {
    const classes = useStyles();
    return (
        <StyledMain>
             <div className='topDisplay'>
            <Book style={{color:'white',marginTop:'10px',marginLeft:'20px'}}></Book>
            <Typography variant='button' style={{color:'white',marginTop:'10px'}}>My Current Subjects</Typography>
            </div>

            <TableContainer  style={{marginTop:'20px',width:400}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>Subjects</StyledTableCell>
            <StyledTableCell>Class</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  English Language
                </StyledTableCell>
               
                <StyledTableCell component="th" scope="row">
                JSS1
                </StyledTableCell>
            </StyledTableRow>

            
         
        </TableBody>
        </Table>
        </TableContainer>
        </StyledMain>
    )
}
