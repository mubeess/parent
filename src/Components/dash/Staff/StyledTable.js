import React,{useState,useEffect,useContext} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
    const [ca1,setCa1]=useState('black')
    const [ca2,setCa2]=useState('black')
    const [ca3,setCa3]=useState('black')
    const [ca4,setCa4]=useState('black')
    const [exam,setExam]=useState('black')
    const appProps=useContext(AppContext)
    useEffect(()=>{
     console.log("++++++++++++++",appProps)
    },[])


    return (
        <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {props.ind+1}
                </StyledTableCell>
              
                <StyledTableCell style={{width:'20%'}} align="center">{props.row.username}</StyledTableCell>
                <StyledTableCell align="center">{props.row.firstName+" "+props.row.lastName}</StyledTableCell>
                <StyledTableCell align="center">
                <div className='inp'>
                    <input
                     disabled={appProps.user.role.includes('Admin')?false:!appProps.user.user.ca1Button}
                    style={{border:`2px solid ${ca1}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          key:'ca1',
                          id:props.row._id,
                          value:parseInt(e.target.value),
                          currentClass:props.row.class,
                          username:props.row.username,
                          category:props.row.category,
                          subject:props.row.subject
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/teacher/insert-one-result',{
                        method:'POST',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setCa1('green')
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='ca1' placeholder={props.row.ca1}  type='text'></input>
                </div>
                 </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input
                         disabled={appProps.user.role.includes('Admin')?false:!appProps.user.user.ca2Button}
                        style={{border:`2px solid ${ca2}`}}
                     onBlur={
                      (e)=>{
                const myObj={
                  key:'ca2',
                  id:props.row._id,
                  value:parseInt(e.target.value),
                  currentClass:props.row.class,
                  username:props.row.username,
                  category:props.row.category,
                  subject:props.row.subject

                }
                fetch('https://polar-brook-59807.herokuapp.com/teacher/insert-one-result',{
                method:'POST',
                headers:{
                  "Content-Type":'application/json'
                },
                body:JSON.stringify(myObj)   
              }).then(res=>{
                res.json()
                .then(data=>{
                  console.log(data)
                  // appProps.setUser({})
                 setCa2('green')
                })
               
              })
                      }
                    }
                    name='ca2' placeholder={props.row.ca2} type='text'></input>
                </div>
                 </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input
                     disabled={appProps.user.role.includes('Admin')?false:!appProps.user.user.ca3Button}
                     style={{border:`2px solid ${ca3}`}}
                     onBlur={
                      (e)=>{
                const myObj={
                  key:'ca3',
                  id:props.row._id,
                  value:parseInt(e.target.value),
                  currentClass:props.row.class,
                  username:props.row.username,
                  category:props.row.category,
                  subject:props.row.subject

                }
                fetch('https://polar-brook-59807.herokuapp.com/teacher/insert-one-result',{
                method:'POST',
                headers:{
                  "Content-Type":'application/json'
                },
                body:JSON.stringify(myObj)   
              }).then(res=>{
                res.json()
                .then(data=>{
                  // appProps.setUser({})
                 setCa3('green')
                })
               
              })
                      }
                    }
                    name='ca3' placeholder={props.row.ca3} type='text'></input>
                </div>
                </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input 
                      disabled={appProps.user.role.includes('Admin')?false:!appProps.user.user.ca4Button}
                     style={{border:`2px solid ${ca4}`}}
                     onBlur={
                      (e)=>{
                const myObj={
                  key:'ca4',
                  id:props.row._id,
                  value:parseInt(e.target.value),
                  currentClass:props.row.class,
                  username:props.row.username,
                  category:props.row.category,
                  subject:props.row.subject

                }
                fetch('https://polar-brook-59807.herokuapp.com/teacher/insert-one-result',{
                method:'POST',
                headers:{
                  "Content-Type":'application/json'
                },
                body:JSON.stringify(myObj)   
              }).then(res=>{
                res.json()
                .then(data=>{
                  // appProps.setUser({})
                 setCa4('green')
                })
               
              })
                      }
                    }
                    name='ca4' placeholder={props.row.ca4} type='text'></input>
                </div>
                 </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input
                      disabled={appProps.user.role.includes('Admin')?false:!appProps.user.user.examButton} 
                      style={{border:`2px solid ${exam}`}}
                      onBlur={
                       (e)=>{
                 const myObj={
                   key:'exam',
                   id:props.row._id,
                   value:parseInt(e.target.value),
                   currentClass:props.row.class,
                   username:props.row.username,
                   category:props.row.category,
                   subject:props.row.subject
 
                 }
                 console.log(myObj)
                 fetch('https://polar-brook-59807.herokuapp.com/teacher/insert-one-result',{
                 method:'POST',
                 headers:{
                   "Content-Type":'application/json'
                 },
                 body:JSON.stringify(myObj)   
               }).then(res=>{
                 res.json()
                 .then(data=>{
                   // appProps.setUser({})
                  setExam('green')
                 })
                
               })
                       }
                     }
                    name='exam' placeholder={props.row.exam} type='text'></input>
                </div>
                 </StyledTableCell>
              </StyledTableRow>
    )
}
