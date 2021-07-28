import { AssessmentOutlined } from '@material-ui/icons';
import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button, Divider, FormControl, InputLabel, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import gray from '@material-ui/core/colors/grey'
import AppContext from '../../../Context/app/appContext'
import {useReactToPrint} from 'react-to-print'



const grader = (grade) => {

  switch (grade) {
      case 'A1':
          return "Excellent" 

      case 'B2':
          return "Very Good"
          
      case 'B3':
          return "Good" 

      case 'C4':
          return "Credit"
     case 'C5':
              return "Credit"

     case 'C6':
                  return "Credit"
  
   case 'D7':
               return "Pass"

   case 'E8':
                  return "Pass"
  

      case 'F':
          return "Fail"
  
      default:
          return "Fail"
      
  }
}

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
        .mainResult{
            .resultDetails{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                width: 80%;
                margin-top: 20px;
                .current{
                    grid-column: 1/2;
                    min-width: 80%;
                    box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
                    min-height: 100px;
                    .subDetails{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                }
                .classDesc{
                    grid-column: 2/4;
                    min-width: 80%;
                    box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
                    min-height: 100px;
                    margin-left: 20px;
                    .subDetails{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                }
            }
        .principalRem{
            width: 80%;
            height: 50px;
            border-top: 1px solid gray;
            border-bottom: 1px solid gray;
            border-left: 5px solid #1E7F95;
            margin-top: 10px;
        }
        }
    
        .inputDetails{
            display: flex;
            flex-direction: row;
            width: 100%;
            margin-top: 50px;
            margin-left: 20px;
        }
`;

const useStyles = makeStyles((theme)=>(
    {
      table: {
        width: 800,
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
export default function MyResult() {
  const componentRef=useRef()
   const appProps=useContext(AppContext)
    const classes = useStyles();
    const [term,setTerm]=useState('none')
    const [myResult,setMyResult]=useState([])

    const handlePrint=useReactToPrint({
      content:()=>componentRef.current,
      copyStyles:true
  
  })
    
    return (
        <StyledMain>
             <div className='topDisplay'>
            <AssessmentOutlined style={{color:'white',marginTop:'10px',marginLeft:'20px'}}></AssessmentOutlined>
            <Typography variant='button' style={{color:'white',marginTop:'10px'}}>Results</Typography>
            </div>


            <div className='inputDetails'>
            <FormControl style={{width:'30%'}} variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Present Class</InputLabel>
        <Select
          disabled
          native
          value={appProps.user.user.currentClass}
          label="Present Class"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={appProps.user.user.currentClass}>{appProps.user.user.currentClass}</option>
        </Select>
      </FormControl>



      <FormControl style={{width:'30%',marginLeft:'30px'}} variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Select Term</InputLabel>
        <Select
         onChange={(e)=>{
           setTerm(e.target.value)
          if(e.target.value=='none') {
         return null
          }else{
            fetch(`https://polar-brook-59807.herokuapp.com/admin/get-single-student-result/?term=${e.target.value}&username=${appProps.user.user.username}&currentClass=${appProps.user.user.currentClass}&category=${appProps.user.user.category}`)
            .then(res=>{
              res.json()
              .then(data=>{
                if (data.message.includes(null)) {
                  return setMyResult([])
                }else{
                  setMyResult(data.message)
                  console.log(data)
                }
                
              })
            })
          }
         }}
          native
          value={term}
          label="Select Term"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='none'>---None---</option>
          <option value='1'>First Term</option>
          <option value='2'>Second Term</option>
          <option value='3'>Third Term</option>
        </Select>
      </FormControl>
      </div>
      <Divider style={{marginTop:'10px'}}></Divider>

      <div ref={componentRef} className='mainResult'>
      <TableContainer  style={{marginTop:'20px',width:800}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>Subjects</StyledTableCell>
            <StyledTableCell>1st CA</StyledTableCell>
            <StyledTableCell>2nd CA</StyledTableCell>
            <StyledTableCell>3rd CA</StyledTableCell>
            <StyledTableCell>4th CA</StyledTableCell>
            <StyledTableCell>Exam</StyledTableCell>
            <StyledTableCell>Total</StyledTableCell>
            <StyledTableCell>Grade</StyledTableCell>
            <StyledTableCell>Remark</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            myResult.length>0&&(
              myResult[1].map((res,ind)=>(
                <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {res.subject}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {res.ca1||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.ca2||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.ca3||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.ca4||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.exam||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.total}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.grade||'F'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {grader(res.grade)||'Fail'}
                </StyledTableCell>
            </StyledTableRow>

              ))
            )
          }
        {
          myResult.length==0&&(
            <Typography variant='button'>No Result Yet!!!</Typography>
          )
        }
            
        </TableBody>
        </Table>
        </TableContainer>
        <div className='resultDetails'>
            <div className='current'>
            <Typography variant='button'>CURRENT</Typography>
            <div className='subDetails'>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Total:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[0].total:'0'}</Typography>


       <Typography style={{marginLeft:'10px'}} variant='body1'>Average:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[0].average.toPrecision(5):'0'}</Typography>


       <Typography style={{marginLeft:'10px'}} variant='body1'>Position:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[0].position:'Not Specified'}</Typography>
            </div>
            </div>
            <div className='classDesc'>
            <Typography variant='button'>Class Description</Typography>
            <div className='subDetails'>
       <Typography style={{marginLeft:'10px'}} variant='body1'>TOTAL NO. OF STUDENTS:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[3]:'0'}</Typography>


       <Typography style={{marginLeft:'10px'}} variant='body1'>TOTAL NO. OF SUBJECTS:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[0].noOfCourse:'0'}</Typography>
    

    
            </div>
            </div>
        </div>
        <div className='principalRem'>
        <Typography style={{marginTop:'20px'}} variant='button'>PRINCIPAL REMARK:{myResult.length>0?myResult[2].remarks:''}</Typography> 
        </div>
      </div>

      <Button onClick={handlePrint} style={{width:'30%',marginLeft:'20px',marginTop:'10px'}} variant='outlined' color='primary'>Print Result</Button>
        </StyledMain>
    )
}
