import { Divider,Typography, Input,Button,TextField} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import React,{useContext,useEffect,useState,useRef} from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Edit from '@material-ui/icons/Edit'
import gray from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import Pagination from '@material-ui/lab/Pagination';
import Alert from '@material-ui/lab/Alert';
import AppContext from '../../../Context/app/appContext'
import StylesTable from './StyledTable'
import Attendance from '../../Dosier/Attendance'
import {useReactToPrint} from 'react-to-print'
import { withRouter } from 'react-router-dom';


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

const StyledResult=styled.div`
   background:transparent;
        width:75%;
        height:95%;
        margin-top:20px;
        margin-left:auto;
        margin-right:auto;
        display: flex;
        flex-direction: column;
        margin-left: 20%;

`;


const StyledView=styled.div`
width: 100%;
min-height: 60vh;
background-color:transparent;
margin-left:50px;

.header{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    
}
.inp{
    input{
        width: 60%;
        border-radius:0px;
        border:1px solid gray;
        height: 20px;
    }
}
table{
    border-spacing:0px;
}
table th{
    padding: 0px;
    text-align: center;
    margin: 0px;
    
}
table td{
    padding: 10px;
    text-align:center;
    margin: 30px;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
}
table tr{
    text-align:center;
    margin:0px;
}
`;

const rows = [
{id:'001',name:'Mubarak Ibrahim',section:'Junior',classs:'JSS1',statuss:'Active'},
{id:'002',name:'Musa Ibrahim',section:'Junior',classs:'JSS1',statuss:'Active'},
{id:'003',name:'Nibrass Koltal',section:'Play Class',classs:'NURSERY',statuss:'Active'},
{id:'004',name:'Mutafa dotzee',section:'Drop Out',classs:'DROP OUT',statuss:'NOT Active'}
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
 function FinalResult(props) {
  const classes = useStyles();
  const componentRef=useRef()
  const appProps=useContext(AppContext)
  const [ca1,setCa1]=useState('black')
  const [ca2,setCa2]=useState('black')
  const [ca3,setCa3]=useState('black')
  const [ca4,setCa4]=useState('black')
  const [exam,setExam]=useState('black')

  const handlePrint=useReactToPrint({
    content:()=>componentRef.current,
    copyStyles:true

})

  useEffect(()=>{
 console.log(appProps)
  },[])
    return (
    <StyledResult>
      <StyledView>
          <Alert severity="warning">You Can't Edit These Result Aftre Final Submission!!!</Alert>
        <Button onClick={()=>{
          props.history.push('attendance')
        }} style={{margin:'30px'}} color='default' variant='contained'>Attendance Sheet</Button>
        <Button onClick={()=>{
          props.history.push('script')
        }} color='default' variant='contained'>Result Script</Button>
        
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
       {appProps.studentsResult.length>=1?appProps.studentsResult[1].class:'none'} || {appProps.studentsResult.length>=1?appProps.studentsResult[1].subject :'none'}
      </Typography>
          <Divider></Divider>
          <TableContainer  style={{marginTop:'20px'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell style={{width:'30%'}}  align="center">STUDENT ID</StyledTableCell>
            <StyledTableCell style={{width:'30%'}}  align="center">NAME</StyledTableCell>
            <StyledTableCell align="center">1ST CA</StyledTableCell>
            <StyledTableCell align="center">2ND CA</StyledTableCell>
            <StyledTableCell align="center">3RD CA</StyledTableCell>
            <StyledTableCell align="center">4TH CA</StyledTableCell>
            <StyledTableCell align="center">EXAMS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            appProps.studentsResult.length>=1&&(
              appProps.studentsResult[0].map((res,ind)=>(
                <StylesTable key={ind} row={res} ind={ind}></StylesTable>
              ))
            )
          // props.students.students.length>=1&&(
          
          //   props.students.students.map((row,ind) => (
          //  <StylesTable key={ind} row={row} ind={ind}></StylesTable>
           
          //   ))


          // )
          }
        </TableBody>
      </Table>
    </TableContainer>
  
    <Button
                  variant="contained"
                  onClick={()=>{
                    props.history.push('result')
                  }}
                  style={{margin:'20px'}}
                  
                >
                  Save and Continue
                </Button>
                {
                  !appProps.user.role.includes('Admin')&&(
                    <>
                    <Button
                onClick={()=>{
                let buttonToPush
                if (appProps.user.user.ca1Button) {
                  buttonToPush='ca1Button'
                } else 
                if (appProps.user.user.ca2Button) {
                  buttonToPush='ca2Button'
                } else 
                if (appProps.user.user.ca3Button) {
                  buttonToPush='ca3Button'
                }  else 
                if (appProps.user.user.ca4Button) {
                  buttonToPush='ca4Button'
                }

            if (buttonToPush==undefined) {
              return alert('Contact The Exam Officer')
            }else{
              const myObj={
                id:appProps.user.user._id,
                submitButton:buttonToPush,
                value:false
              }
                  fetch(`https://polar-brook-59807.herokuapp.com/admin/final-submission`,{
                    method:'PUT',
                    headers:{
                      "Content-Type":'application/json'
                    },
                    body:JSON.stringify(myObj)
                  }).
                  then(res=>{
                    res.json()
                    .then(data=>{
                      console.log("+++++++",myObj)
                      fetch(`https://polar-brook-59807.herokuapp.com/admin/get-single-staff/?username=${appProps.user.user.username}`)
                      .then(res=>{
                        res.json()
                        .then(dat=>{
                          appProps.setUser({role:dat.message.role,user:dat.message})
                          console.log("*******",dat)
                        })
                      })
                    })
                  })

            }

    
                 
                }}
                variant="contained"
                color="primary"
                size='small'
               
               
              >
               Submit CA
              </Button>

              <Button
              onClick={()=>{
                let buttonToPush
                if (appProps.user.user.examButton) {
                  buttonToPush='examButton'
                }

                if (buttonToPush==undefined) {
                  return alert('Contact The Exam Officer')
                }else{
                  const myObj={
                    id:appProps.user.user._id,
                    submitButton:buttonToPush,
                    value:false
                  }
                      fetch(`https://polar-brook-59807.herokuapp.com/admin/final-submission`,{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)
                      }).   
                      then(res=>{
                        res.json()
                        .then(data=>{
                          console.log("+++++++",myObj)
                          fetch(`https://polar-brook-59807.herokuapp.com/admin/get-single-staff/?username=${appProps.user.user.username}`)
                          .then(res=>{
                            res.json()
                            .then(dat=>{
                              appProps.setUser({role:dat.message.role,user:dat.message})
                              console.log("*******",dat)
                            })
                          })
                        })
                      })
              }}}
               style={{
                 backgroundColor:'green',
                 color:'white',
                 marginLeft:'20px'
               }}
                variant="contained"
                size='small'
               
               
              >
               Submit Exam
              </Button>
              </>
                  )
                }
                 
             
              
      </StyledView>
      </StyledResult>
    )
}
export default withRouter(FinalResult)