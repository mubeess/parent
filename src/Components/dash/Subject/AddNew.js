import { Divider,Typography,TextField,Button} from '@material-ui/core';
import React,{useState} from 'react'
import styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles,  fade,
    ThemeProvider,
    withStyles,
    createMuiTheme, } from '@material-ui/core/styles';
    import { green, orange,grey,yellow } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { notification } from 'antd';

const StyledAdd=styled.div`
display: flex;
min-height: 200px;
width: 70%;
background-color:#f9f9f9;
border: 1px thin #1E7F95;
flex-direction: column;

`;




const useStyles = makeStyles((theme)=>(
    {
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
  } 
  ))
  const theme = createMuiTheme({
    palette: {
      primary: orange,
    
    },
  });


export default function AddNew() {
    const [subject,setSubject]=useState('')
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    return (
        <StyledAdd>
            <Divider></Divider>
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Add New Subject
      </Typography>
            <Divider></Divider>
            <TextField style={{width:'70%',margin:'20px'}} onChange={(e)=>{
                setSubject(e.target.value)
                
            }} name='name' id="outlined-basic" label="Subject Name" variant="outlined" />
            <Button onClick={()=>{
 handleToggle()
const myObj={
    subject
}
fetch('https://polar-brook-59807.herokuapp.com/admin/create-subject',{
method:'POST',
headers:{
"Content-Type":'application/json'
},
body:JSON.stringify(myObj)
}).then(res=>{
res.json()
.then(data=>{
handleClose()
setSubject('')
notification.open({
    message: 'Successfuly Create A Subject',
    description:'Subject Created',
    onClick: () => {
      notification.close()
    },
    type:'success'
  });
console.log(data)
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


            }} style={{width:'40%',margin:'20px',backgroundColor:'#1E7F95'}} color='primary' variant='contained'>Add New Subject</Button>


<Backdrop style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>

        </StyledAdd>
    )
}
