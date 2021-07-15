import { Divider, Typography } from '@material-ui/core';
import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import gray from '@material-ui/core/colors/grey'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SelectedTeacher from './SelectedTeacher'
const StyledTeachers=styled.div`
margin-left:21%;
margin-top: 20px;
display: flex;
flex-direction: column;
min-width: 75%;
`;

const StyledTableCell = withStyles((theme) => ({
    head: {
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


export default function AssessmentControl() {
    const [allTeachers,setAllTeachers]=useState([])

    useEffect(() => {
        fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-teachers`)
                             .then(res=>{
                               res.json()
                               .then(dat=>{
                            setAllTeachers(dat.message)
                               })
                             })
           }, [])
       
    const classes = useStyles();
    return (
        <StyledTeachers>
       <Divider style={{width:'100%'}}></Divider>
       <Typography>
           Teachers List
       </Typography>
       <Divider></Divider>
       <TableContainer style={{marginTop:'20px'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell align="right">ID NUMBER</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">CA1</StyledTableCell>
            <StyledTableCell align="right">CA2</StyledTableCell>
            <StyledTableCell align="right">CA3</StyledTableCell>
            <StyledTableCell align="right">CA4</StyledTableCell>
            <StyledTableCell align="right">EXAM</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                allTeachers.length>0&&(
                allTeachers.map((teacher,ind)=>(
                    <SelectedTeacher ind={ind} key={ind} teach={teacher}></SelectedTeacher>
                ))
                )
            }
            {
                allTeachers.length==0&&(
                <Typography align='center' variant='button'>
                  No Teachers Available!!!
                </Typography>
                )
            }
         
        </TableBody>
        </Table>
        </TableContainer>
        </StyledTeachers>
    )
}
