import { Divider,Typography, Input,Button,TextField, Backdrop} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import React,{useEffect,useState,useRef,useContext} from 'react'
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
import {EditRounded,DeleteForeverRounded,ViewArrayRounded,CloseOutlined} from '@material-ui/icons'
import gray from '@material-ui/core/colors/grey'
import AppContext from '../../../Context/app/appContext'
import { CSVLink } from 'react-csv'
import {useReactToPrint} from 'react-to-print'
import {withRouter} from 'react-router-dom'
import Bio from '../../Bio/Bio';

const StyledModal=styled.div`
display: flex;
flex-direction: column;
width: 65%;
max-height: 90vh;
background-color: white;
border-radius: 5px;
box-shadow: 5px 10px #888888;
overflow-y: scroll;


`;

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



const StyledView=styled.div`
width: 100%;
min-height: 60vh;
background-color:transparent;
.header{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    
}

`;

const rows = [
{id:'001',name:'Mubarak Ibrahim',section:'Junior',classs:'JSS1',statuss:'Active'},
{id:'002',name:'Musa Ibrahim',section:'Junior',classs:'JSS1',statuss:'Active'},
{id:'003',name:'Nibrass Koltal',section:'Play Class',classs:'NURSERY',statuss:'Active'},
{id:'004',name:'Mutafa dotzee',section:'Drop Out',classs:'DROP OUT',statuss:'NOT Active'}
];


const useStyles = makeStyles((theme)=>(
  {
    table: {
      minWidth: 700,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
  }
} 
))

 function ViewStudent(props) {
  const appProps =useContext(AppContext)
const classes = useStyles();
const[allStudents,setAllStudents]=useState([])
// const [filtered,setFiltered]=useState('')
const [searchVal,setSearchVal]=useState('')
const [studentSelected,setStudentSelected]=useState([])

const componentRef=useRef()
const componentRef2=useRef()

const handlePrint=useReactToPrint({
    content:()=>componentRef.current,
    copyStyles:true

})

const handlePrint2=useReactToPrint({
  content:()=>componentRef2.current,
  copyStyles:true

})



const [open, setOpen] = React.useState(false);
const handleClose = () => {
  setOpen(false);
};
const handleToggle = () => {
  setOpen(!open);
};


const filtered=allStudents.filter(dat=>dat.firstName.toLowerCase().includes(searchVal.toLowerCase())||dat.lastName.toLowerCase().includes(searchVal.toLowerCase())||dat.username.toLowerCase().includes(searchVal.toLowerCase())||dat.section.toLowerCase().includes(searchVal.toLowerCase())||dat.currentClass.toLowerCase().includes(searchVal.toLowerCase()))


useEffect(()=>{
  fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-student`)
  .then(res=>{
    res.json()
    .then(data=>{
      setAllStudents(data.students)
      console.log(data.students)
    })

  })
},[])


    return (
      <StyledView>
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Manage Students
      </Typography>
          <Divider></Divider>
          <div className='header'>
<Button onClick={handlePrint} style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px'}} variant="contained" color="primary">
  PDF
</Button>
<Button style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px'}}  variant="contained" color="primary">
<CSVLink data={filtered} filename='students'>Excell</CSVLink>
</Button>
<TextField
      onChange={(e)=>{
       setSearchVal(e.target.value)
      }}
        color='#FFC305'
        style={{marginLeft:'30px',width:'40%',marginRight:'10px',marginTop:'5px'}}
        id="input-with-icon-adornment"
        type='search'
        label="Search By Id, Name, Section,Or Class"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}
      />
          </div>
          <TableContainer ref={componentRef} style={{marginTop:'20px'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell align="right">ID NUMBER</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">SECTION</StyledTableCell>
            <StyledTableCell align="right">CLASS</StyledTableCell>
            <StyledTableCell align="right">GENDER</StyledTableCell>
            <StyledTableCell align="right">ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          
          allStudents.length>=1&&(
            filtered.map((row,ind) => (
              <StyledTableRow key={ind}>
                <StyledTableCell component="th" scope="row">
                  {ind+1}
                </StyledTableCell>
                <StyledTableCell align="right">{row.username}</StyledTableCell>
                <StyledTableCell align="right">{row.firstName+" "+row.lastName}</StyledTableCell>
                <StyledTableCell align="right">{row.section}</StyledTableCell>
                <StyledTableCell align="right">{row.currentClass}</StyledTableCell>
                <StyledTableCell align="right">{row.gender}</StyledTableCell>
                <StyledTableCell align="right">
                <ViewArrayRounded onClick={()=>{
                  setStudentSelected([row])
                  handleToggle()
                }} style={{color:'#F39C77',marginRight:'10px',cursor:'pointer'}}></ViewArrayRounded>
                 <EditRounded onClick={()=>{
                      appProps.setEdit({user:row})
                      props.history.push('editstudent')
                 }} style={{color:'green',marginRight:'10px',cursor:'pointer'}}></EditRounded>
                 <DeleteForeverRounded onClick={()=>{
                   const userId=row._id;
                   fetch(`https://polar-brook-59807.herokuapp.com/admin/remove-student/?id=${userId}`,{
                    method:'DELETE',
                    headers:{
                      "Content-Type":'application/json'
                    }
                  })
                   .then(res=>{
                     res.json()
                     .then(data=>{
                       fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-student`)
                      .then(res=>{
                        res.json()
                        .then(data=>{
                          setAllStudents(data.students)
                          console.log(data.students)
                        })
                        
                  
                      })
                     })
                     
               
                   })
                   console.log(row._id)
                 }} style={{color:'red',marginRight:'10px',cursor:'pointer'}}></DeleteForeverRounded>
                </StyledTableCell>
              </StyledTableRow>
            ))
          )
          
       }
        </TableBody>
      </Table>
    </TableContainer>
   
    <Backdrop  style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open}>
     
       <StyledModal>
         <Divider></Divider>
         <CloseOutlined style={{color:'black',marginLeft:'auto',marginRight:'20px',cursor:'pointer'}} onClick={()=>{
           handleClose()
         }}></CloseOutlined>
     <Button onClick={handlePrint2} style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px',width:'30%',marginTop:'20px',marginBottom:'20px'}} variant="contained" color="primary">
  PDF
</Button>
    <Bio props={studentSelected} ref={componentRef2}></Bio>

       </StyledModal>
      </Backdrop>


      </StyledView>
    )
}

export default withRouter(ViewStudent)