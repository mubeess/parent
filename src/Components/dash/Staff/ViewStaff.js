import { Divider,Typography, Input,Button,TextField} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppContext from '../../../Context/app/appContext'
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
import Notifications from '@material-ui/icons/Notifications'
import gray from '@material-ui/core/colors/grey'
import Pagination from '@material-ui/lab/Pagination';
import {EditRounded,DeleteForeverRounded,ViewArrayRounded} from '@material-ui/icons'
import { CSVLink } from 'react-csv'
import {useReactToPrint} from 'react-to-print'
import {withRouter} from 'react-router-dom'

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
 function ViewStaff(props) {
  const appProps=useContext(AppContext)
  const classes = useStyles();
  const[allStaff,setAllStaff]=useState([])
  // const [filtered,setFiltered]=useState('')
  const [searchVal,setSearchVal]=useState('')
  const componentRef=useRef()

  const handlePrint=useReactToPrint({
    content:()=>componentRef.current,
    copyStyles:true

})



  const filtered= allStaff.length==0?allStaff:allStaff.filter(dat=>dat.firstName.toLowerCase().includes(searchVal.toLowerCase())||dat.lastName.toLowerCase().includes(searchVal.toLowerCase())||dat.username.toLowerCase().includes(searchVal.toLowerCase())||dat.role[0].toLowerCase().includes(searchVal.toLowerCase()))

  useEffect(()=>{
    fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-staff`)
    .then(res=>{
      res.json()
      .then(data=>{
        setAllStaff(data.message) 
        console.log(data.message)  
       
      })
      

    })
  },[])
    return (
      <StyledView>
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Manage Staff
      </Typography>
          <Divider></Divider>
          <div className='header'>
         
     
<Button onClick={handlePrint} style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px'}} variant="contained" color="primary">
  PDF
</Button>
<Button style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px'}}  variant="contained" color="primary">
<CSVLink data={filtered} filename='staff'>Excell</CSVLink>
</Button>

<TextField
        onChange={(e)=>{
         setSearchVal(e.target.value)
         console.log(filtered)
        }}
        color='#FFC305'
        style={{marginLeft:'30px',width:'40%',marginRight:'10px',marginTop:'5px'}}
        id="input-with-icon-adornment"
        type='search'
        label="Search By Id, Name, Or Role "
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
      <Table  className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell align="right">FILE NUMBER</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">ROLE</StyledTableCell>
            <StyledTableCell align="right">ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.length>=1&&(
           filtered.map((row,ind) => (
            <StyledTableRow key={ind}>
              <StyledTableCell component="th" scope="row">
                {ind+1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.firstName+" "+row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.role.map(rl=>(`${row.role.includes('Admin')?'*******':rl+'**'}`))}</StyledTableCell>
              <StyledTableCell align="right">
               <EditRounded onClick={()=>{
                appProps.setEdit({user:row})
                 props.history.push('editstaff')
               }} style={{color:'green',marginRight:'10px',cursor:'pointer'}}></EditRounded>
               <DeleteForeverRounded onClick={()=>{
                 const userId=row._id;
                 fetch(`https://polar-brook-59807.herokuapp.com/admin/remove-staff/?id=${userId}`,{
                  method:'DELETE',
                  headers:{
                    "Content-Type":'application/json'
                  }
                })
                 .then(res=>{
                   res.json()
                   .then(data=>{
                     fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-staff`)
                    .then(res=>{
                      res.json()
                      .then(data=>{
                        setAllStaff(data.message)
                        console.log(data.message)
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
         {
           allStaff.length==0&&(
             <h4 style={{textAlign:'center'}}>No any Staff Added Yet</h4>
           )
         }
        </TableBody>
      </Table>
    </TableContainer>
   

      </StyledView>
    )
}

export default withRouter(ViewStaff)