import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import NativeSelect from '@material-ui/core/NativeSelect';
import NaijaState from 'naija-state-local-government'
import AppContext from '../../../Context/app/appContext'

import CircularProgress from '@material-ui/core/CircularProgress';
import { notification } from 'antd';
import Backdrop from '@material-ui/core/Backdrop';
const StyledAdd= styled.div`
margin-left:22%;
margin-top: 20px;
margin-bottom: 20px;
width:75%;
min-height: 60vh;
box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
.personal{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:5px;
    width:90%;
    margin-left: auto;
    margin-right: auto;
    /* flex-direction: row; */
    /* justify-content: space-evenly; */
}
`;
const useStyles = makeStyles((theme) => ({
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
  }
  }));
export default function EditStudent() {
    const appProps=useContext(AppContext)

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
useEffect(()=>{
    setState(NaijaState.states())
    if (appProps.editValue.user.state) {
      let lgas= NaijaState.lgas(`${appProps.editValue.user.state}`)
      setLocalGovs(lgas.lgas)
    }
    if (appProps.editValue.user.section=='SSS') {
        setIsStudet(true)
       }else{
         setIsStudet(false)
       }
       fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-classes/?section=${appProps.editValue.user.section}`)
  .then(res=>{
    res.json()
    .then(data=>{
      console.log(data.message)
      setAllClasses(data.message)
      // setStudentClass(data.message)
    })
  })
},[])
     
  const [localGovs,setLocalGovs]=useState([])
    const [states,setState]=useState([])
    const [currentState,setCurrentState]=useState(appProps.editValue.user.state)
    const [currentLga,setCurrentLga]=useState(appProps.editValue.user.lga)
    const [firstName,setFirstName]=useState(appProps.editValue.user.firstName)
    const [lastName,setLasttName]=useState(appProps.editValue.user.lastName)
    const [otherName,setOtherName]=useState(appProps.editValue.user.otherName||'')
    const [dob,setDob]=useState(appProps.editValue.user.dob || '')
    const [kinName,setKinName]=useState(appProps.editValue.user.kinName)
    const [id,setId]=useState(appProps.editValue.user.username)
    const [address,setAddress]=useState(appProps.editValue.user.address)
    const [kinNumber,setKinNumber]=useState(appProps.editValue.user.kinNumber)
    const [kinAddress,setKinAddress]=useState(appProps.editValue.user.kinAddress)
    const [kinRelation,setKinRelation]=useState(appProps.editValue.user.kinRelation)





    const classes = useStyles();
    const [allClasses,setAllClasses]=useState([])
    const [isSStudent,setIsStudet]=useState(false)
    const [term,setTerm]=useState(appProps.editValue.user.term)
    const [gender,setGender]=useState(appProps.editValue.user.gender)
    const [lga,setLga]=useState('Maiha')
    const [section,setSection]=useState(appProps.editValue.user.section)
    const [classs,setClass]=useState(`${appProps.editValue.user.currentClass}`)
    const [category,setCtegory]=useState(appProps.editValue.user.category)
    const [students,setStudets]=useState({
      firstName:'',
      lastName:'',
      otherName:'',
      studentId:'',
      address:'',
      kinName:'',
      kinNumber:'',
      kinRelation:'',
      kinAddress:'',
      dob:''
    })


    const changeValues=(e)=>{
      const name=e.target.name
      const value=e.target.value
      const newStudents = students;
      newStudents[`${name}`] = value;
      setStudets(newStudents)
    }
  
    return (
       <StyledAdd>
     <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
      Edit Student Details
      </Typography>
      <Divider></Divider>
        <div className='personal'>
        <TextField value={firstName} style={{width:'99%'}} onChange={(e)=>{
            setFirstName(e.target.value)
        }} name='firstName' id="outlined-basic" label="First Name" variant="outlined" />
        <TextField value={lastName} style={{width:'99%'}}onChange={(e)=>{
            setLasttName(e.target.value)
        }} name='lastName' id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField value={otherName} style={{width:'99%'}} onChange={(e)=>{
            setOtherName(e.target.value)
        }} name='otherName' id="outlined-basic" label="Other Name" variant="outlined" />
        </div>
        <div className='personal'>
          
          <TextField id="date"
          value={dob}
          name='dob'
          onChange={(e)=>{
            setDob(e.target.value)
        }}
          style={{width:'99%'}}
        label="DOB"
        type="date"
        defaultValue="2017-05-24"
         variant="outlined" />
    
        <TextField disabled name='studentId' value={id} onChange={(e)=>{
            setId(e.target.value)
        }} style={{width:'99%'}} id="outlined-basic" label="ID Number" variant="outlined" />
        <FormControl style={{width:'99%'}} variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
        <Select
          onChange={(e)=>{
            setGender(e.target.value)
          }}
          native
          value={gender}
          label="Gender"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Male'> Male</option>
          <option value='Female'>Female</option>
        </Select>
      </FormControl>
        </div>
        <div className='personal'>
        <TextField value={address}  name='address' onChange={(e)=>{
            setAddress(e.target.value)
        }} style={{gridColumn:'1/4'}} id="outlined-basic" label="Address" variant="outlined" />
        </div>
        <div className='personal'>
        <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Country</InputLabel>
        <Select
         disabled
          native
          value='Nigeria'
          label="Country"
          inputProps={{
            name: 'Country',
            id: 'outlined-age-native-simple',
          }}
        >

          <option value='Nigeria'>Nigeria</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">State</InputLabel>
        <Select
           onChange={(e)=>{
            setCurrentState(e.target.value)
            if (e.target.value!=='None') {
             let lgas= NaijaState.lgas(`${e.target.value}`)
             setLocalGovs(lgas.lgas)
            }
         
           }}
          native
          value={currentState}
          label="State"
          inputProps={{
            name: 'state',
            id: 'outlined-age-native-simple',
          }}
        >
         <option value='None'>---None---</option>
          {
            states.length>=1&&(
              states.map((state,ind)=>(
                <option key={ind} value={state}>{state}</option>
              ))
            )
          }
        </Select>
      </FormControl>


      <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">LGA</InputLabel>
        <Select
       onChange={(e)=>{
        setCurrentLga(e.target.value)
      }}
          native
          value={currentLga}
          label="LGA"
          inputProps={{
            name: 'lga',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='---None---'>---None---</option>
          {
            localGovs.length>=1&&(
              localGovs.map((lga,ind)=>(
                <option key={ind} value={lga}>{lga}</option>
              ))
            )
          }
        </Select>
      </FormControl>
        </div>


        <div className='personal'>
        <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Enrollment Session</InputLabel>
        <Select
        disabled
         onChange={(e)=>{
         setTerm(e.target.value)
         }}
          native
          value={term}
          label="Enrollment Session"
          inputProps={{
            name: 'term',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='First Term'>First Term</option>
          <option value='Second Term'>Second Term</option>
          <option value='Third Term'>Third Term</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Section</InputLabel>
        <Select
        disabled
        value={section}
         onChange={(e)=>{
           setSection(e.target.value)
           if (e.target.value=='SSS') {
            setIsStudet(true)
           }else{
             setIsStudet(false)
           }
           fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-classes/?section=${e.target.value}`)
      .then(res=>{
        res.json()
        .then(data=>{
          console.log(data.message)
          setAllClasses(data.message)
          // setStudentClass(data.message)
        })
      })
          
         }}
          native
          label="Section"
          inputProps={{
            name: 'section',
            id: 'outlined-age-native-simple',
          }}
        >
           <option value='Kindergartens'>Kindergartens</option>
          <option value='Playclass'>Playclass</option>
          <option value='Grade'>Grade</option>
          <option value='JSS'>JSS</option>
          <option value='SSS'>SSS</option>
       

        </Select>
      </FormControl>

      <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Class</InputLabel>
        <Select
        disabled
          onChange={(e)=>{
            setClass(e.target.value)
            
            
          }}
          native
          value={classs}
          label="Class"
          inputProps={{
            name: 'class',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='none'>None</option>
          {
            allClasses.length>=1&&(
              allClasses.map((cls,ind)=>(
                <option key={ind} value={cls.className}>{cls.className}</option>
              ))
            )
          }
          {/* <option value='JSS2'>Jss2</option>
          <option value='SSs2'>SS2</option>
          <option value='JSS3'>Jss3</option>
          <option value='JSS1'>JSS1</option> */}

        </Select>
      </FormControl>



      
        </div>
        <div className='personal'>
        <FormControl hidden={!isSStudent} style={{width:'99%',transition:'1s',opacity:isSStudent?'1':'0'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
        <Select
         onChange={(e)=>{
           setCtegory(e.target.value)
         }}
          native
          value={category}
          label="Category"
          inputProps={{
            name: 'category',
            id: 'outlined-age-native-simple',
          }}
        >
           <option value='none'>none</option>
          <option value='Science'>Science</option>
          <option value='Arts'>Arts</option>
        </Select>
      </FormControl>
        </div>
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Parent/Guardian
      </Typography>
      <Divider></Divider>
      <div className='personal'>
        <TextField value={kinName} style={{width:'99%'}} name='kinName' onChange={(e)=>{
            setKinName(e.target.value)
        }} id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField value={kinNumber} style={{width:'99%'}} name='kinNumber' onChange={(e)=>{
            setKinNumber(e.target.value)
        }} id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField value={kinRelation} style={{width:'99%'}} name='kinRelation'  onChange={(e)=>{
            setKinRelation(e.target.value)
        }} id="outlined-basic" label="Relationship" variant="outlined" />
        </div>
        <div className='personal'>
        <TextField value={kinAddress} name='kinAddress'  onChange={(e)=>{
            setKinAddress(e.target.value)
        }} style={{gridColumn:'1/4'}} id="outlined-basic" label="Address" variant="outlined" />
        </div>
        <Button onClick={()=>{
          handleToggle()
          const selectedStudent={
            state:currentState,
            lga:currentLga,
            gender,
            section,
            currentClass:classs,
            category,
            firstName:firstName,
            username:id,
            lastName:lastName,
            dob,
            otherName:otherName,
            address,
            kinName:kinName,
            kinAddress:kinAddress,
            kinRelation:kinRelation,
            kinNumber:kinNumber,
            country:'Nigeria'
          }
          console.log(selectedStudent)
          fetch(`https://polar-brook-59807.herokuapp.com/admin/edit-student/?id=${appProps.editValue.user._id}`,{
            method:'PUT',
            headers:{
              "Content-Type":'application/json'
            },
            body:JSON.stringify(selectedStudent)
          }).then(res=>{
            res.json()
            .then(data=>{
              console.log(data)
              if (data.success) {
                handleClose()
              notification.open({
               message: 'Successfuly Updated Student Record',
               description:'Student Updated',
               onClick: () => {
                 notification.close()
               },
               type:'success'
             });
              } else {
                notification.open({
                  message: 'An Error Occured',
                  description:'Error',
                  onClick: () => {
                    notification.close()
                  },
                  type:'error'
                });
          handleClose()
              }
            }).catch(err=>{
              console.log(err)
              notification.open({
                message: 'An Error Occured',
                description:'Error',
                onClick: () => {
                  notification.close()
                },
                type:'error'
              });
        handleClose()
            })
          }).catch(err=>{
            console.log(err)
            notification.open({
              message: 'An Error Occured',
              description:'Error',
              onClick: () => {
                notification.close()
              },
              type:'error'
            });
        handleClose()
          })
        }} style={{marginLeft:'80%',marginTop:'20px',marginBottom:'20px'}} variant="contained" color='primary'>Update Student</Button>



<Backdrop style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
       </StyledAdd>
    )
}
