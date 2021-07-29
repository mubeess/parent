import { Button, Divider, FormControl, InputLabel, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import gray from '@material-ui/core/colors/grey'
import { Book } from '@material-ui/icons';
import React,{useEffect,useContext,useState} from 'react'
import AppContext from '../../../Context/app/appContext'
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
  const [allSub,setAll]=useState([])
  const appProps=useContext(AppContext)
  useEffect(() => {
    fetch(`https://polar-brook-59807.herokuapp.com/admin/get-class-curriculum/?currentClass=${JSON.parse(localStorage.getItem('user')).user.currentClass}&category=${JSON.parse(localStorage.getItem('user')).user.category}`)
    .then(res=>{
      res.json()
      .then(data=>{
        if (data.result!=null) {
          setAll(data.result.subject)
        }
        
       
      })
    })
    }, [])
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
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell>Subjects</StyledTableCell>
            <StyledTableCell>Class</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {
            allSub.length>0&&(
              allSub.map((sub,ind)=>(
                <StyledTableRow key={ind}>
          <StyledTableCell component="th" scope="row">
                  {ind+1}
                </StyledTableCell>

                <StyledTableCell component="th" scope="row">
                  {sub}
                </StyledTableCell>
               
                <StyledTableCell component="th" scope="row">
                {JSON.parse(localStorage.getItem('user')).user.currentClass}
                </StyledTableCell>
            </StyledTableRow>
              ))
            )
          }

          {
            allSub.length==0&&(
              <Typography>There's no subject allocated!!</Typography>
            )
          }
       

            
         
        </TableBody>
        </Table>
        </TableContainer>
        </StyledMain>
    )
}
