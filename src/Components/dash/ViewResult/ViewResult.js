import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {FormatListNumbered,ConfirmationNumber} from '@material-ui/icons'
import Select from '@material-ui/core/Select';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Logo from '../Header/logo.png'
import Backdrop from '@material-ui/core/Backdrop';
import gray from '@material-ui/core/colors/grey'


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import AppContext from '../../../Context/app/appContext'
import {Alert} from 'antd'
import { withRouter } from 'react-router';

const StyledRole=styled.div`
       background:#f9f9f9;
        min-width:90%;
        min-height:95%;
        margin-top:10px;
        margin-left:auto;
        margin-right:auto;
        margin-left: 20%;
        .form{
          height:300px;
          width: 80%;
          border:none;
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
          .personal{
            width: 90%;
            display: flex;
            flex-direction: row;
            margin-left: auto;
            margin-right: auto;

          }
          
        }
        
.mainDetail{
  display: flex;
  flex-direction: row;
  height: 47px;
  width: 80%;
  border:none;
  margin-left:20px;
  margin-top: 10px;
  align-items: center;
  box-shadow: 0px 0px 0.8px rgba(0,0,0,0.5);

  img{
    width: 80px;
    height: 45px;
  }
}

`;


const StyledView=styled.div`
width: 80%;
min-height: 60vh;
background-color:transparent;
margin-left:20px;

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
// const useStyles = makeStyles({
//     root: {
//       width:'90%',
//       margin: 20,
//       height: 400
//     },
//     media: {
//       height: 140,
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   });


const useStyles = makeStyles((theme) => ({

  root: {
          width:'90%',
          margin: 20,
          height: 400
        },
        media: {
          height: 140,
        },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  table: {
    minWidth: 700,
  },
}));



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






 function ViewResult(props) {
  const [open, setOpen] = React.useState(false);
  const appProps=useContext(AppContext)
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [staff,setStaff]=useState('')
  const [isAdmin,setIsAdmin]=useState(true)
  const [session,setSession]=useState('')
  const [allStaff,setAllStaff]=useState([])
  const [section,setSection]=useState('None')
  const [classs,setClasss]=useState('JSS1')
  const [category,setCategory]=useState('none')
  const [term,setTerm]=useState('')
  const [allClass,setAllClass]=useState([])
  const [isEmpty,setIsEmpty]=useState(false)
  const [cognitiveValue,setCognitive]=useState([])
  const [allStudents,setAllStudents]=useState([])
  useEffect(()=>{


    fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-staff`)
    .then(res=>{
      res.json()
      .then(data=>{
        if (data.message.length==0) {
          setIsEmpty(true)
        }
        setAllStaff(data.message)
      })
      

    })
  },[])
    const classes = useStyles();
    return (
        <StyledRole>
    
       {
           isAdmin&&(
            <div style={{height:section=='SSS'?'330px':'300px',transition:'0.5s'}} className='form'>
            <Typography style={{
                     color:'black'
                   }} variant='button' align='left' gutterBottom>Select Class</Typography>
            <Divider></Divider>







            <div className='personal'>
      
      <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Session</InputLabel>
        <Select
         onChange={(e)=>{
          setSession(e.target.value)
         }}
          native
          value={session}
          label="Select Session"
          inputProps={{
            name:'session',
            id: 'outlined-age-native-simple',
          }}
        >
            <option value='---None---'>---None---</option>
          <option value='2019/2020'>2019/2020</option>
          <option value='2020/2021'>2020/2021</option>
          <option value='2020/2019'>2020/2019</option>
          <option value='2022/2023'>2022/2023</option>
          <option value='2022/2023'>2023/2024</option>
          <option value='2022/2023'>2024/2025</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Term</InputLabel>
        <Select
        onChange={(e)=>{
          setTerm(e.target.value)
        }}
          native
          value={term}
          label="Select Term"
          inputProps={{
            name:'term',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='None'>None</option>
          <option value='1'>1st Term</option>
          <option value='2'>2nd Term</option>
          <option value='3'>3rd Term</option>
          
        </Select>
      </FormControl>


    </div>












          <div className='personal'>
      
            <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Section</InputLabel>
              <Select
               onChange={(e)=>{
                setSection(e.target.value)
               
                fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-classes/?section=${e.target.value}`)
                .then(res=>{
                  res.json()
                  .then(data=>{
                   console.log(data)
                   setAllClass(data.message)
                  
                  })
                })
                
               }}
                native
                value={section}
                label="Select Section"
                inputProps={{
                  name:'section',
                  id: 'outlined-age-native-simple',
                }}
              >
                 <option value='None'>---None---</option>
                 <option value='Daycare'>Daycare</option>
                <option value='Kindergartens'>Kindergartens</option>
                <option value='Playclass'>Playclass</option>
                <option value='Grade'>Grade</option>
                <option value='JSS'>JSS</option>
                <option value='SSS'>SSS</option>
              </Select>
            </FormControl>
      
      
            <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Class</InputLabel>
              <Select
              onChange={(e)=>{
                setClasss(e.target.value)
              }}
                native
                value={classs}
                label="Select Class"
                inputProps={{
                  name:'class',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option value='None'>None</option>
                {
                    allClass.length>=1&&(
                        allClass.map((cls,ind)=>(
                          <option key={ind} value={cls.className}>{cls.className}</option>
                        ))
                    )
                }
              </Select>
            </FormControl>
      
      
          </div>
         
          <div hidden={section!=='SSS'} className='personal'>
      
            <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Category</InputLabel>
              <Select
               disabled={section!=='SSS'}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                native
                value={category}
                label="Select Category"
                inputProps={{
                  name:'category',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option value='None'>None</option>
                <option value='Science'>Science</option>
                <option value='Arts'>Arts</option>
                <option value='Commercial'>Commercial</option>
              </Select>
            </FormControl>
      
      
          </div>
          
          <div className='personal'>
          <Button onClick={()=>{
            handleToggle()
            fetch(`https://polar-brook-59807.herokuapp.com/admin/get-a-class-result/?className=${classs}&&category=${category}&&term=${term}&&session=${session}`)
                .then(res=>{
                  res.json()
                  .then(data=>{
                  if (data.success) {
                    appProps.setDosier(data.message)
                    props.history.push('dosier')
                    console.log(data)
                    handleClose()
                  }else{
                    handleClose()
                    alert('Error Occured While Fetching Students')
                  }
                                   
                  }).catch(err=>{
                    handleClose()
                    alert('Error Occured While Fetching Students')
                  })
                })
                .catch(err=>{
                  handleClose()
                  alert('Error Occured While Fetching Students')
                })
     
          }} style={{marginLeft:'70%',marginTop:'10px'}}  variant="contained" color='primary'>View Students</Button>
          </div>
          
            </div>
           )
       }
   


 <Divider style={{width:'80%',marginTop:'20px',marginLeft:'20px'}}></Divider>

<Typography style={{
      color:'black',
      width: '80%'
    }} variant='h6' align='center' gutterBottom>Student's List</Typography>
<Divider style={{width:'80%',marginLeft:'20px',marginTop:'10px'}}></Divider>



<StyledView>
    
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
       {classs} || {category}
      </Typography>
          <Divider></Divider>
      <TableContainer  style={{marginTop:'20px'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell  align="center">STUDENT ID</StyledTableCell>
            <StyledTableCell align="center">NAME</StyledTableCell>
            <StyledTableCell  align="center">POSITION</StyledTableCell>
            <StyledTableCell  align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {
           appProps.dosier.length>=1&&(
            appProps.dosier.map((student,ind)=>(
              <StyledTableRow key={ind}>
                     <StyledTableCell component="th" scope="row">
                         {ind+1}
                     </StyledTableCell>
                          <StyledTableCell align="right">{student[0].username}</StyledTableCell>
                          <StyledTableCell align="right">{`${student[2][0].firstName+' '+student[2][0].lastName}`}</StyledTableCell>
                          <StyledTableCell align="right">{student[0].position}</StyledTableCell>
                          <StyledTableCell align="right">
                            <Button onClick={()=>{
                          console.log('clicked')
                             
                            }} style={{backgroundColor:'green',color:'white'}} variant='contained'>Print Result</Button>
                          </StyledTableCell>
                </StyledTableRow>
              ))

           )
           
         }
       
          
        </TableBody>
      </Table>
    </TableContainer>
  



    

      </StyledView>




   


<Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
 </Backdrop>

  
        </StyledRole>
    )
}

export default withRouter(ViewResult)