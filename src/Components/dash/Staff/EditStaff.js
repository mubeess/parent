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
import AppContext from '../../../Context/app/appContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import { notification } from 'antd';
import NaijaState from 'naija-state-local-government'
import Backdrop from '@material-ui/core/Backdrop';
const StyledAdd= styled.div`
margin-left:22%;
margin-top: 20px;
margin-bottom: 20px;
width:75%;
min-height: 60vh;
background-color:transparent;
box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
.personal{
  display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:5px;
    width:90%;
    margin-left: auto;
    margin-right: auto;
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
export default function EditStaff() {
    const appProps=useContext(AppContext)
    const classes = useStyles();
    const [localGovs,setLocalGovs]=useState([])
    const [states,setState]=useState([])
    const [currentState,setCurrentState]=useState(appProps.editValue.user.state)
    const [currentLga,setCurrentLga]=useState(appProps.editValue.user.lga)
    const [gender,setGender]=useState(appProps.editValue.user.gender)
    const [firstName,setFirstName]=useState(appProps.editValue.user.firstName)
    const [lastName,setLasttName]=useState(appProps.editValue.user.lastName)
    const [otherName,setOtherName]=useState(appProps.editValue.user.otherName||'')
    const [staffId,setId]=useState(appProps.editValue.user.username)
    const [email,setEmail]=useState(appProps.editValue.user.email)
    const [qualification,setOtherQualification]=useState(appProps.editValue.user.qualification)
    const [department,setDepartment]=useState(appProps.editValue.user.department)
    const [phone,setPhone]=useState(appProps.editValue.user.phone)
    const [address,setAddress]=useState(appProps.editValue.user.address)
    const [accountName,setAccountName]=useState(appProps.editValue.user.accountName)
    const [accountNumber,setAcNumber]=useState(appProps.editValue.user.accountNumber||'')
    const [bankName,setBankName]=useState(appProps.editValue.user.bankName||'')
    const [kinName,setKinName]=useState(appProps.editValue.user.nextKinName)
    const [kinNumber,setKinNumber]=useState(appProps.editValue.user.nextKinPhone1)
    const [kinAddress,setKinAddress]=useState(appProps.editValue.user.nextKinAddress)
    const [kinRelation,setKinRelation]=useState(appProps.editValue.user.relationship)
    

   
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
     
   
      console.log(appProps)
      // fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-classes/?section=${e.target.value}`)
      // .then(res=>{
      //   res.json()
      //   .then(data=>{
      //     console.log(data.message)
      //     setStudentClass(data.message)
      //   })
      // })

    },[])



const [staff,setStaff]=useState({
  firstName:appProps.editValue.user.firstName,
  lastName:'',
  otherName:'',
  staffId:'',
  email:'',
  qualification:'',
  department:'',
  phone:'',
  address:'',
  accountName:'',
  bankName:'',
  bankNumber:'',
  kinName:'',
  kinNumber:'',
  kinRelation:'',
  kinAddress:'',
  gender:'',
  state:'',
  lga:''
})
const changeValues=(e)=>{
  const name=e.target.name
  const value=e.target.value
  let prevStaff=staff
  
  const newStaff = staff;
  newStaff[`${name}`] = e.target.value;
  console.log(newStaff[`${name}`] )
  setStaff(newStaff)
}

const changeSelect=(e)=>{
  console.log(e.target.value)
}
    return (
       <StyledAdd>
     <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Edit Details
      </Typography>
      <Divider></Divider>
        <div className='personal'>
        <TextField style={{width:'99%'}}  name='firstName' value={firstName} label='First Name' onChange={(e)=>{
         setFirstName(e.target.value)
        }} id="outlined-basic" variant="outlined" />
        <TextField value={lastName} style={{width:'99%'}}  name='lastName'  onChange={(e)=>{
           setLasttName(e.target.value)
        }} id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField style={{width:'99%'}}  name='otherName' value={otherName}  onChange={(e)=>{
            setOtherName(e.target.value)
        }} id="outlined-basic" label="Other Name" variant="outlined" />
        </div>
        <div className='personal'>
          
        <TextField value={staffId} onChange={(e)=>{
            setId(e.target.value)
        }} style={{width:'99%'}}  name='staffId'    id="outlined-basic" label="Staff Id" variant="outlined" />
        <TextField value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} style={{width:'99%'}}  name='email'  type='email' id="outlined-basic" label="Email Address" variant="outlined" />
        <FormControl style={{width:'99%'}}   variant="outlined">
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
        <TextField value={qualification} style={{width:'99%'}}  name='qualification'  onChange={(e)=>{
            setOtherQualification(e.target.value)
        }} id="outlined-basic" label="Qualificaion" variant="outlined" />
        <TextField value={department} style={{width:'99%'}}  name='department'  onChange={(e)=>{
            setDepartment(e.target.value)
        }} id="outlined-basic" label="Department" variant="outlined" />
        <TextField value={phone} style={{width:'99%'}}  name='phone'  onChange={(e)=>{
            setPhone(e.target.value)
        }} id="outlined-basic" label="Phone Number" variant="outlined" />
        </div>


       <div className='personal'>
        <TextField value={address} name='address'  onChange={(e)=>{
            setAddress(e.target.value)
        }} style={{gridColumn:'1/4',width:'100%'}} id="outlined-basic" label="Address" variant="outlined" />
        </div>

        <div className='personal'>
        <FormControl style={{width:'99%'}} variant="outlined" >
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


      <FormControl style={{width:'99%'}} variant="outlined" >
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


      <FormControl style={{width:'99%'}} variant="outlined">
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
        <TextField value={bankName} style={{width:'99%'}} name='bankName'  onChange={(e)=>{
            setBankName(e.target.value)
        }} id="outlined-basic" label="Bank Name" variant="outlined" />
        <TextField value={accountNumber} style={{width:'99%'}} name='bankNumber'  onChange={(e)=>{
            setAcNumber(e.target.value)
        }} id="outlined-basic" label="Account Number" variant="outlined" />
        <TextField value={accountName} style={{width:'99%'}} name='accountName'  onChange={(e)=>{
            setAccountName(e.target.value)
        }}id="outlined-basic" label="Account Name" variant="outlined" />
        </div>       




        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Next Of Kin
      </Typography>
      <Divider></Divider>
      <div className='personal'>
        <TextField value={kinName} style={{width:'99%'}} name='kinName'  onChange={(e)=>{
            setKinName(e.target.value)
        }} id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField value={kinNumber} style={{width:'99%'}} name='kinNumber'  onChange={(e)=>{
            setKinNumber(e.target.value)
        }} id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField value={kinRelation} style={{width:'99%'}} name='kinRelation'  onChange={(e)=>{
            setKinRelation(e.target.value)
        }} id="outlined-basic" label="Relationship" variant="outlined" />
        </div>
        <div className='personal'>
        <TextField value={kinAddress} name='kinAddress'  onChange={(e)=>{
            setKinAddress(e.target.value)
        }} style={{gridColumn:'1/4',width:'100%'}} id="outlined-basic" label="Address" variant="outlined" />
        </div>
        <Button onClick={()=>{
          handleToggle()
    const stafff={
      username:staffId,
      firstName,
      lastName,
      email,
      gender,
      qualification,
      department,
      phone,
      address,
      state:currentState,
      lga:currentLga,
      bankName,
      accountNumber,
      accountName,
      nextKinName:kinName,
      nextKinPhone1:kinNumber,
      relationship:kinRelation,
      nextKinAddress:kinAddress

    }
    console.log(stafff)
  fetch(`https://polar-brook-59807.herokuapp.com/admin/edit-staff/?id=${appProps.editValue.user._id}`,{
    method:'PUT',
    headers:{
      "Content-Type":'application/json'
    },
    body:JSON.stringify(stafff)
  }).then(res=>{
    res.json()
    .then(data=>{
     handleClose()
     notification.open({
      message: 'Successfuly Created A Staff',
      description:'Staff Created',
      onClick: () => {
        notification.close()
      },
      type:'success'
    });
    }).catch(err=>{
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

        }} style={{marginLeft:'80%',marginTop:'20px',marginBottom:'20px'}} variant="contained" color='primary'>Update Staff</Button>

<Backdrop style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
       </StyledAdd>
    ) 
}
