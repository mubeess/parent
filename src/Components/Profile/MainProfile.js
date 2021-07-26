import { Button, makeStyles, TextField } from '@material-ui/core'
import React,{useContext,useState,useRef,useEffect} from 'react'
import Passport from './101.jpeg'
import './profile.css'
import AppContext from '../../Context/app/appContext'
import {useReactToPrint} from 'react-to-print'
import Avatar from '@material-ui/core/Avatar';
import { Upload, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';


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

 

export default function MainProfile() {
    const classes = useStyles();
    const componentRef=useRef()
    const [change,setChange]=useState(false)
    const [oldPassword,setOldPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const appProps=useContext(AppContext)
    const [imageUrl,setImageUrl]=useState('')

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        copyStyles:true
    
    })
  useEffect(()=>{
    const myImage = appProps.user.user.image.split('/')
    const myRealImage=myImage.splice(1,2).join('/')
    let appImage=`https://polar-brook-59807.herokuapp.com/${myRealImage}`;
    setImageUrl(appImage)
    console.log(myImage)

  },[])
    
    
 
    
    return (
             <div style={{marginTop:'30px'}} ref={componentRef} id="container-fluid">
        {/* <img className="profile-pic" src='https://polar-brook-59807.herokuapp.com/public/images/musty-avatar.jpg' /> */}
       <div className='profile-pic'>
       <Avatar style={{width:'100%',height:'100%'}} alt={appProps.user.user.firstName} src={imageUrl} />   
        </div>     
        <div className="cover-page-section">
            <div className="btn-container">
            <Upload 

       beforeUpload={(file)=>{
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');}
            }}
    action={`https://polar-brook-59807.herokuapp.com/student/set-profile-pic/?id=${appProps.user.user._id}`}
    name='profile_pic'
    method='PUT'
   

    onChange={(info)=>{
      if (info.file.status !== 'uploading') {
        console.log('rrr');
      }
      if (info.file.status === 'done') {
        const idd=info.file.response.message.insertedId
        message.success(`${info.file.name} file uploaded successfully`);
        const myImage = info.file.response.message.split('/')
        const myRealImage=myImage.splice(1,2).join('/')
       const  newAppImage=`https://polar-brook-59807.herokuapp.com/${myRealImage}`;
        setImageUrl(newAppImage)
        console.log(newAppImage,',,,,,,,,,,,,',info.file.response)
        // setId(idd)
        
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }}
   
    >
    <Button color='primary' variant='contained' icon={<UploadOutlined />}>Upload A Profile picture</Button>
  </Upload>
            <Button onClick={handlePrint} style={{marginTop:'20px'}} variant='contained'>Print Profile</Button>
            </div>
        </div>
        <div  className="profile-pic-section">
          
         <table className="profile-detail">
             <tr>
                 <td>STAFF ID:</td>
                 <td>{appProps.user.user.username ||'None Set'}</td>
             </tr>
             <tr>
                <td>FULL NAME:</td>
                <td>{`${appProps.user.user.firstName+' '+appProps.user.user.lastName ||'None Set'}`}</td>
            </tr>
            <tr>
                <td>STATE</td>
                <td>{appProps.user.user.state || 'None set'}</td>
            </tr>
            <tr>
                <td>ROLE</td>
                <td onClick={()=>{
                  console.log(appProps.user.user)
                }}>Student</td>
            </tr>
         </table>
       
        </div>
        <div className="other-editable-info">
            <input className='profileInp' type="text" value={appProps.user.user.username ||'None Set'} disabled/>
            <input className='profileInp' type="text" value={`${appProps.user.user.firstName+' '+appProps.user.user.lastName  ||'None Set'}`} disabled/>
            {/* <input className='profileInp' type="text" value={appProps.user.role.map(rl=>(`${rl+'**'}`))} disabled/> */}
            <input className='profileInp' type="text" value={appProps.user.user.state || 'None set'} disabled/>
            {/* <input className='profileInp' type="text" value={appProps.user.role.includes('Teacher')?'Academics':'Non Academics'} disabled/> */}
            <input className='profileInp' type="text" value={appProps.user.user.currentClass || 'None Set'} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.gender || 'None Set'} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.address || 'None Set'} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.country.toUpperCase() || 'None set'} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.state||'State Not Set'} disabled/>
            
        </div>
        <div  className="change-password-section">
            <div className="change-pwd">
            <Button onClick={()=>{
                setChange(!change)
            }} variant='contained' style={{width:'70%',margin:'auto',marginBottom:'20px'}} color='secondary'>Change Password</Button>
      
           
              
            </div>
            <div style={{opacity:change?"1":'0',transition:'0.5s'}} className="password-setting-section">
                <span>If You dont want to change your password click on the change
                    password button to terminate
                </span>
             
       
         <TextField onChange={(e)=>{
             setOldPassword(e.target.value)
         }} style={{margin:'3px'}}  size='small'  name='password' id="outlined-basic" label="Please enter old password here" variant="outlined" />
         <TextField onChange={(e)=>{
             setNewPassword(e.target.value)
         }} style={{margin:'3px'}} size='small'  name='password' id="outlined-basic" label="Enter new password here" variant="outlined" />
         <TextField onChange={(e)=>{
             setConfirmPassword(e.target.value)
         }} style={{margin:'3px'}} size='small'  name='password' id="outlined-basic" label="Confirm new password" variant="outlined" />
          

         <Button onClick={()=>{
            
             const myObj={
                 oldPassword,
                 newPassword
             }
             console.log(appProps.user)
             if (newPassword!==confirmPassword) {
             return   message.error('Password does not Match!!!')
             }else{
                 handleToggle()
                 setTimeout(() => {
                    
                 }, 3000);
                fetch(`https://polar-brook-59807.herokuapp.com/student/change-password/${appProps.user.user._id}`,{
                    method:'POST',
                    headers:{
                      "Content-Type":'application/json'
                    },
                    body:JSON.stringify(myObj)
                  })
                  .then(res=>{
                      res.json()
                      .then(data=>{
                        notification.open({
                                  message: 'Password Updated Successfuly',
                                  description:'Password Updated',
                                  onClick: () => {
                                    notification.close()
                                  },
                                  type:'success'
                                });
                        handleClose()
                       
                      })
                  })

             }
               
            }} variant='contained' style={{width:'30%',marginLeft:'auto',marginBottom:'20px',backgroundColor:'green',color:'white'}}>Change Password</Button>
               
            </div>
           
        </div>
       
       
        <Backdrop style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
        </div>
    )
}
