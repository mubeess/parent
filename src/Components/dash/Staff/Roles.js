import React,{useState,useEffect} from 'react'
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
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Logo from '../Header/logo.png'
import Backdrop from '@material-ui/core/Backdrop';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import { notification } from 'antd';

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
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;
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
}));
export default function Roles() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [staff,setStaff]=useState('')
  const [staffId,setStaffId]=useState('')
  const [allStaff,setAllStaff]=useState([])
  const [allsubject,setAllSubjects]=useState([])
  const [allClasses,setAllClasses]=useState([])
  const [role,setRole]=useState('None')
  const [classs,setClasss]=useState('None')
  const [category,setCategory]=useState('none')
  const [subject,setSubject]=useState('None')
  const [isEmpty,setIsEmpty]=useState(false)
  const [classTeacherClass,setClassTeacherClass]=useState([])
  useEffect(()=>{
    fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-staff`)
    .then(res=>{
      res.json()
      .then(data=>{
        if (data.message.length==0) {
          setIsEmpty(true)
        }
        setAllStaff(data.message)
      }).then(dat=>{

        fetch('https://polar-brook-59807.herokuapp.com/admin/get-all-subject')
        .then(res=>{
          res.json()
          .then(data=>{
            setAllSubjects(data.message)
            fetch('https://polar-brook-59807.herokuapp.com/admin/get-every-class')
            .then(res=>{
              res.json()
              .then(data=>{
                console.log("+++++++",data)
                setAllClasses(data.message)
              })
            })
          })
        })

      })
      

    })
  },[])
    const classes = useStyles();
    return (
        <StyledRole>
      <div style={{height:role=='subjectTeacher'||role=='classTeacher'?'330px':'200px',transition:'0.5s'}} className='form'>
      <Typography style={{
               color:'black'
             }} variant='button' align='left' gutterBottom>Assign Roles</Typography>
      <Divider></Divider>
    <div className='personal'>
    <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Please Select Staff</InputLabel>
        <Select
        onChange={(e)=>{
        setStaff(e.target.value)
        }}
          native
          value={staff}
          label="Please Select Staff"
          inputProps={{
            name:'staff',
            id: 'outlined-age-native-simple',
          }}
        >
           <option value='None'>None</option>
          {
            allStaff.length>=1&&(
              allStaff.map((dat,ind)=>(
                <option key={ind} value={dat._id}>{dat.username}</option>
              ))
            )
          }
          
         
        </Select>
      </FormControl>


      <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Role</InputLabel>
        <Select
         onChange={(e)=>{
          setRole(e.target.value)
          if (e.target.value!=='subjectTeacher') {
            setClasss('None')
            setSubject('None')
            setCategory('None')
          }

          if (e.target.value!=='classTeacher') {
           setClassTeacherClass('None')
          }
         }}
          native
          value={role}
          label="Select Role"
          inputProps={{
            name:'role',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='None'>None</option>
          <option value='Admin'>Super Admin</option>
          <option value='subAdmin'>Admin</option>
          <option value='Bursar'>Bursar</option>
          <option value='subjectTeacher'>Subject Teacher</option>
          <option value='classTeacher'>Class Teacher</option>
          <option value='Principal'>Principal</option>
          <option value='examOfficer'>Exam Officer</option>
        </Select>
      </FormControl>


    </div>
    {
      role=='classTeacher'&&(
        <div  className='personal'>
        <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Select Class</InputLabel>
            <Select
            onChange={(e)=>{
              setClassTeacherClass([e.target.value])
            }}
              native
              value={classTeacherClass.length>0?classTeacherClass[0]:'---None--'}
              label="Select Class"
              inputProps={{
                name:'class',
                id: 'outlined-age-native-simple',
              }}
            >
              <option value='---None---'>---None---</option>
              {
                allClasses.length>=1&&(
                  allClasses.map((cls,ind)=>(
                    <option key={ind} value={cls.className}>{cls.className}</option>
                  ))
                )
              }
            </Select>
          </FormControl>
        </div>
      )
    }
    
    <div hidden={role!=='subjectTeacher'} style={{opacity:role=='subjectTeacher'?'1':'0',transition:'0.2s'}} className='personal'>
    <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Class</InputLabel>
        <Select
        disabled={role!=='subjectTeacher'}
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
          <option value='---None---'>---None---</option>
          {
            allClasses.length>=1&&(
              allClasses.map((cls,ind)=>(
                <option key={ind} value={cls.className}>{cls.className}</option>
              ))
            )
          }
        </Select>
      </FormControl>


      <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Category</InputLabel>
        <Select
         disabled={role!=='subjectTeacher'}
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
          <option value='---None---'>---None---</option>
          <option value='Science'>Science</option>
          <option value='Arts'>Art</option>
          <option value='Commercial'>Commercial</option>
        </Select>
      </FormControl>


    </div>
    <div  hidden={role!=='subjectTeacher'} style={{opacity:role=='subjectTeacher'?'1':'0',transition:'0.2s'}} className='personal'>
    <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Subject</InputLabel>
        <Select
         disabled={role!=='subjectTeacher'}
        onChange={(e)=>{
          setSubject(e.target.value)
        }}
          native
          value={subject}
          label="Select Subject"
          inputProps={{
            name:'subject',
            id: 'outlined-age-native-simple',
          }}
        >
           <option value='---None----'>---None----</option>
          {
            allsubject.length>=1&&(
              allsubject.map((sbj,ind)=>(
                <option key={ind} value={sbj.subject}>{sbj.subject}</option>
              ))
            )
          }
         
         
        </Select>
      </FormControl>

    </div>
    <div className='personal'>
    <Button onClick={()=>{
      const myObj={
  role,
  teach:{class:classs,subject:[subject],category},
  classTeacher:classTeacherClass
}
console.log(myObj)
handleToggle()
fetch(`https://polar-brook-59807.herokuapp.com/admin/set-role/?id=${staff}`,{
  method:'PUT',
  headers:{
    "Content-Type":'application/json'
  },
  body:JSON.stringify(myObj)
}).then(res=>{
  res.json()
  .then(data=>{
    notification.open({
      message: `Successfuly Added A Role`,
      description:'Role Added',
      onClick: () => {
        notification.close()
      },
      type:'success'
    });
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

    handleClose()
  }).catch(er=>{
    handleClose()
    notification.open({
      message: 'An Error Occured',
      description:'Error',
      onClick: () => {
        notification.close()
      },
      type:'error'
    });
  })
}).catch(err=>{
  handleClose()
  notification.open({
    message: 'An Error Occured',
    description:'Error',
    onClick: () => {
      notification.close()
    },
    type:'error'
  });
})
    }} style={{marginLeft:'70%',marginTop:'10px'}}  variant="contained" color='primary'>Add Role</Button>
    </div>
    
      </div>


 <Divider style={{width:'80%',marginTop:'20px',marginLeft:'20px'}}></Divider>

<Typography style={{
      color:'black',
      width: '80%'
    }} variant='h6' align='center' gutterBottom>Registered Staff</Typography>
<Divider style={{width:'80%',marginLeft:'20px'}}></Divider>

   {
     allStaff.length>=1&&(
       allStaff.map((staf,ind)=>(
        <div key={ind} className='mainDetail'>
        <img src={Logo} alt='logo'></img>
        <Typography style={{
                   color:'black'
                 }} variant='button' align='left' gutterBottom>{staf.firstName+' '+staf.lastName}</Typography>
                 
        <Typography style={{
                   color:'black',
                   marginLeft:'50px'
                 }} variant='button' align='center' gutterBottom>{staf.username}</Typography>
         <Typography style={{
                   color:'black',
                   marginLeft:'50px'
                 }} variant='overline' align='center' gutterBottom>{staf.role.map(rol=>(`${rol+'**'}`))}</Typography>
          <div style={{display:'grid',gridTemplateColumns:'1fr'}}>
          {/* <Button style={{marginLeft:'50px',backgroundColor:'#F39C77',color:'white', width: '7rem'}} variant="contained">Deactivate</Button>
          <Button style={{marginLeft:'30px',backgroundColor:'green',color:'white'}} variant="contained">Edit</Button> */}
          <Button onClick={()=>{
            handleToggle()
            const myObjj={
              role:'None'
            }
            fetch(`https://polar-brook-59807.herokuapp.com/admin/set-role/?id=${staf._id}`,{
              method:'PUT',
              headers:{
                "Content-Type":'application/json'
              },
              body:JSON.stringify(myObjj)
            }).
            then(res=>{
              res.json()
              .then(data=>{
                handleClose()
                notification.open({
                  message: `Successfuly Dropped A Staff`,
                  description:'Role Dropped',
                  onClick: () => {
                    notification.close()
                  },
                  type:'success'
                });

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


     

              })
    }).
    catch(er=>{
      handleClose()
      notification.open({
        message: 'An Error Occured',
        description:'Error',
        onClick: () => {
          notification.close()
        },
        type:'error'
      });
    })

          }} style={{marginLeft:'30px',backgroundColor:'red',color:'white'}} variant="contained">Drop</Button>

          </div>

        </div>
       ))
     )
   }
   {
     allStaff.length==0&&(
       <div style={{width:'80%',minHeight:'200px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <CircularProgress color='primary' />
      <h4 style={{opacity:isEmpty?'1':'0',transition:'0.4s'}}>No Data In Staff List</h4>
      </div>
     )
   }



    




   


<Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
 </Backdrop>

  
        </StyledRole>
    )
}
