import React,{useState,useEffect} from 'react'
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
import CircularProgress from '@material-ui/core/CircularProgress';
import { notification } from 'antd';
import NaijaState from 'naija-state-local-government'
import Backdrop from '@material-ui/core/Backdrop';
const StyledAdd= styled.div`
width: 100%;
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
export default function AddStaff() {
    const classes = useStyles();
    const [localGovs,setLocalGovs]=useState([])
    const [states,setState]=useState([])
    const [currentState,setCurrentState]=useState('')
    const [currentLga,setCurrentLga]=useState('')
    const [gender,setGender]=useState('Female')
   
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    useEffect(()=>{
      setState(NaijaState.states())

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
  firstName:'',
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
  newStaff[`${name}`] = value;
  setStaff(newStaff)
}

const changeSelect=(e)=>{
  console.log(e.target.value)
}
    return (
       <StyledAdd>
     <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Add Staff
      </Typography>
      <Divider></Divider>
        <div className='personal'>
        <TextField style={{width:'99%'}}  name='firstName' onChange={changeValues} id="outlined-basic" label="First Name" variant="outlined" />
        <TextField style={{width:'99%'}}  name='lastName'  onChange={changeValues} id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField style={{width:'99%'}}  name='otherName'  onChange={changeValues} id="outlined-basic" label="Other Name" variant="outlined" />
        </div>
        <div className='personal'>
          
        <TextField disabled style={{width:'99%'}}  name='staffId'  value='Automatically Generated'  id="outlined-basic" label="Staff Id" variant="outlined" />
        <TextField style={{width:'99%'}}  name='email'  onChange={changeValues}  type='email' id="outlined-basic" label="Email Address" variant="outlined" />
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
        <TextField style={{width:'99%'}}  name='qualification'  onChange={changeValues} id="outlined-basic" label="Qualificaion" variant="outlined" />
        <TextField style={{width:'99%'}}  name='department'  onChange={changeValues} id="outlined-basic" label="Department" variant="outlined" />
        <TextField style={{width:'99%'}}  name='phone'  onChange={changeValues} id="outlined-basic" label="Phone Number" variant="outlined" />
        </div>


       <div className='personal'>
        <TextField name='address'  onChange={changeValues} style={{gridColumn:'1/4',width:'100%'}} id="outlined-basic" label="Address" variant="outlined" />
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
        <TextField style={{width:'99%'}} name='bankName'  onChange={changeValues} id="outlined-basic" label="Bank Name" variant="outlined" />
        <TextField style={{width:'99%'}} name='bankNumber'  onChange={changeValues} id="outlined-basic" label="Account Number" variant="outlined" />
        <TextField style={{width:'99%'}} name='accountName'  onChange={changeValues} id="outlined-basic" label="Account Name" variant="outlined" />
        </div>       




        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Next Of Kin
      </Typography>
      <Divider></Divider>
      <div className='personal'>
        <TextField style={{width:'99%'}} name='kinName'  onChange={changeValues} id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField style={{width:'99%'}} name='kinNumber'  onChange={changeValues} id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField style={{width:'99%'}} name='kinRelation'  onChange={changeValues} id="outlined-basic" label="Relationship" variant="outlined" />
        </div>
        <div className='personal'>
        <TextField name='kinAddress'  onChange={changeValues} style={{gridColumn:'1/4',width:'100%'}} id="outlined-basic" label="Address" variant="outlined" />
        </div>
        <Button onClick={()=>{
          handleToggle()
    const stafff={
      username:staff.staffId,
      firstName:staff.firstName,
      lastName:staff.lastName,
      email:staff.email,
      gender:gender,
      qualification:staff.qualification,
      department:staff.department,
      phone:staff.phone,
      address:staff.address,
      state:currentState,
      lga:currentLga,
      bankName:staff.bankName,
      accountNumber:staff.bankNumber,
      accountName:staff.accountName,
      nextKinName:staff.kinName,
      nextKinPhone1:staff.kinNumber,
      relationship:staff.kinRelation,
      nextKinAddress:staff.kinAddress

    }
  fetch('https://polar-brook-59807.herokuapp.com/admin/register-staff',{
    method:'POST',
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

        }} style={{marginLeft:'80%',marginTop:'20px',marginBottom:'20px'}} variant="contained" color='primary'>Add Staff</Button>

<Backdrop style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
       </StyledAdd>
    ) 
}
