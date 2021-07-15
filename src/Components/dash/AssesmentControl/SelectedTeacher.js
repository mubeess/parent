import React,{useState,useEffect,useContext} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';
import AppContext from '../../../Context/app/appContext'


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


  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function StyledTable(props) {
    const classes = useStyles();
    const [ca1,setCa1]=useState(props.teach.ca1Button)
    
    const [ca2,setCa2]=useState(props.teach.ca2Button)
    const [ca3,setCa3]=useState(props.teach.ca3Button)
    const [ca4,setCa4]=useState(props.teach.ca4Button)
    const [exam,setExam]=useState(props.teach.examButton)
    const appProps=useContext(AppContext)


    return (
        <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {props.ind+1}
                </StyledTableCell>
              
                <StyledTableCell style={{width:'20%'}} align="right">{props.teach.username}</StyledTableCell>
                <StyledTableCell align="right">{`${props.teach.firstName+" "+props.teach.lastName}`}</StyledTableCell>
                
                 <StyledTableCell align="right">
                 <Switch
                 color='primary'
                 onChange={(e)=>{
                     if (e.target.checked) {
                        setCa1(true)
                     }else{
                        setCa1(false) 
                     }
                     
                     const myObj={
                        teacherId:props.teach._id,
                        button:'ca1Button',
                        value:e.target.checked,
                        username:props.teach.username
                      }
                      fetch(`https://polar-brook-59807.herokuapp.com/admin/allow-submission-priviledge`,{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)
                      })
                      .then(res=>{
                          res.json()
                          .then(data=>{
                              console.log(data)
                          })
                      })
                 }}
              checked={ca1}
             name="checkedA"
            
                inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
                 </StyledTableCell>
                 <StyledTableCell align="right">


                 <Switch
                 color='primary'
                  onChange={(e)=>{
                    if (e.target.checked) {
                       setCa2(true)
                    }else{
                       setCa2(false) 
                    }
                    
                    const myObj={
                       teacherId:props.teach._id,
                       button:'ca2Button',
                       value:e.target.checked,
                       username:props.teach.username
                     }
                     fetch(`https://polar-brook-59807.herokuapp.com/admin/allow-submission-priviledge`,{
                       method:'PUT',
                       headers:{
                         "Content-Type":'application/json'
                       },
                       body:JSON.stringify(myObj)
                     })
                     .then(res=>{
                         res.json()
                         .then(data=>{
                             console.log(data)
                         })
                     })
                }}
              checked={ca2}
             name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
                 </StyledTableCell>
                 <StyledTableCell align="right">
                 <Switch
                 color='primary'
                  onChange={(e)=>{
                    if (e.target.checked) {
                       setCa3(true)
                    }else{
                       setCa3(false) 
                    }
                    
                    const myObj={
                       teacherId:props.teach._id,
                       button:'ca3Button',
                       value:e.target.checked,
                       username:props.teach.username
                     }
                     fetch(`https://polar-brook-59807.herokuapp.com/admin/allow-submission-priviledge`,{
                       method:'PUT',
                       headers:{
                         "Content-Type":'application/json'
                       },
                       body:JSON.stringify(myObj)
                     })
                     .then(res=>{
                         res.json()
                         .then(data=>{
                             console.log(data)
                         })
                     })
                }}
              checked={ca3}
             name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
                 </StyledTableCell>
                 <StyledTableCell align="right">



                 <Switch
                 color='primary'
                  onChange={(e)=>{
                    if (e.target.checked) {
                       setCa4(true)
                    }else{
                       setCa4(false) 
                    }
                    
                    const myObj={
                       teacherId:props.teach._id,
                       button:'ca4Button',
                       value:e.target.checked,
                       username:props.teach.username
                     }
                     fetch(`https://polar-brook-59807.herokuapp.com/admin/allow-submission-priviledge`,{
                       method:'PUT',
                       headers:{
                         "Content-Type":'application/json'
                       },
                       body:JSON.stringify(myObj)
                     })
                     .then(res=>{
                         res.json()
                         .then(data=>{
                             console.log(data)
                         })
                     })
                }}
              checked={ca4}
             name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
                 </StyledTableCell>
                 <StyledTableCell align="right">


                 <Switch
                 color='primary'
                  onChange={(e)=>{
                    if (e.target.checked) {
                       setExam(true)
                    }else{
                       setExam(false) 
                    }
                    
                    const myObj={
                       teacherId:props.teach._id,
                       button:'examButton',
                       value:e.target.checked,
                       username:props.teach.username
                     }
                     fetch(`https://polar-brook-59807.herokuapp.com/admin/allow-submission-priviledge`,{
                       method:'PUT',
                       headers:{
                         "Content-Type":'application/json'
                       },
                       body:JSON.stringify(myObj)
                     })
                     .then(res=>{
                         res.json()
                         .then(data=>{
                             console.log(data)
                         })
                     })
                }}
              checked={exam}
             name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
                 </StyledTableCell>
              </StyledTableRow>
    )
}


