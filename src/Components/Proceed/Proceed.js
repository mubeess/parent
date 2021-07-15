import { Button, Divider,Typography } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import { notification } from 'antd';
import Checkbox from '@material-ui/core/Checkbox';



const StyledProfile=styled.div`
margin-left: 21%;
margin-top: 10px;
background-color:transparent;
width: 75%;
height: 500px;
display: flex;
flex-direction: column;
.warning{
    min-width: 80%;
    min-height: 100px;
    border: 1px solid red;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: row;
    .warn{
        width: 30%;
        height: 100%;
        
    }
    .txt{
        width: 70%;
        margin-left: 10px;
        height: 100%;
    }
}

.instruction{
    min-width: 80%;
    min-height: 230px;
    border: 1px solid green;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
    display: flex;
    flex-direction:column;
    margin-top: 30px;
    .warn{
        width: 100%;
      
        
    }
    .buttons{
        width: 100%;
        display: flex;
        flex-direction: row;
        .write{
            width: 70%;
        }
    }
}

`;

export default function Proceed() {
    const [checked, setChecked] = React.useState(false);
    const [checkedSession,setCheckedSession]=useState(false)
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
      useEffect(()=>{
       fetch('https://polar-brook-59807.herokuapp.com/admin/get-current-term').
       then(res=>{
         res.json()
         .then(data=>{
          notification.open({
            message: `Current Session:${data.result[0].session.year}`,
            description:`Current Term:${data.result[0].currentTerm}`,
            onClick: () => {
              notification.close()
            },
            type:'success'
          });
           console.log(data)
         })
       })
      },[])
    return (
        <StyledProfile>
       <div className='warning'>
      <div className='warn'>
      <Typography style={{fontWeight:'bold',color:'red',marginTop:'20px',marginLeft:'10px'}}  variant='h4'  gutterBottom>
        WARNING!!!
      </Typography>
      </div>

      <div className='txt'>
      <Typography style={{fontWeight:'lighter',color:'red',marginTop:'20px'}}  variant='body1'  gutterBottom>
      this page contains vital information that when altered it can't be retrieved back.
      Read the instructions below carefully before performing any operation.
      </Typography>
      </div>
       </div>


       <div className='instruction'>
       <div className='warn'>
      <Typography style={{fontWeight:'bold',color:'black',marginTop:'20px',marginLeft:'10px'}}  variant='h5'  gutterBottom>
        Instructions:
      </Typography>

      <Typography style={{fontWeight:'bold',color:'black',marginTop:'20px',marginLeft:'10px'}}  variant='h5'  gutterBottom>
      Before clicking the  Next term button make sure all records including Fees and Results have been recorded successfuly.
  
      </Typography>
      </div>


      <div className='buttons'>
      
      <Checkbox
       checked={checked}
       onChange={()=>{
         setChecked(!checked)
       }}
       inputProps={{ 'aria-label': 'primary checkbox' }}
     />

     <div className='write'>
     <Typography style={{fontWeight:'lighter',marginTop:'10px'}}  variant='body1'  gutterBottom>
      this page contains vital information that when altered it can't be retrieved back.
      Read the instructions below carefully before performing any operation.
      
      </Typography>
     </div>

     <Button onClick={()=>{
    
       
       
       if (checked) {
        fetch('https://polar-brook-59807.herokuapp.com/admin/set-new-term',{
          method:'POST',
          headers:{
          "Content-Type":'application/json'
          },
          }).then(res=>{
            res.json()
            .then(data=>{
              notification.open({
                message: `Successfully Set To Next Term`,
                description:`Welcome To Next Term`,
                onClick: () => {
                  notification.close()
                },
                type:'success'
              });
            })
          })
       }else{
         return null
       }
     }} disabled={!checked} style={{backgroundColor:checked?'green':null, color:checked?'white':null,height:'50px'}} variant='contained'>PROCEED TO NEXT TERM</Button>
   
      </div>
      
      
       </div>


       <div className='instruction'>
       <div className='warn'>
      <Typography style={{fontWeight:'bold',color:'black',marginTop:'20px',marginLeft:'10px'}}  variant='h5'  gutterBottom>
        Instructions:
      </Typography>

      <Typography style={{fontWeight:'bold',color:'black',marginTop:'20px',marginLeft:'10px'}}  variant='h5'  gutterBottom>
      Before clicking the  Next Session button make sure all records including Fees, Results have been 
entered successfuly
      </Typography>
      </div>


      <div className='buttons'>
      
      <Checkbox
       checked={checkedSession}
       onChange={()=>{
         setCheckedSession(!checkedSession)
       }}
       inputProps={{ 'aria-label': 'primary checkbox' }}
     />

     <div className='write'>
     <Typography style={{fontWeight:'lighter',marginTop:'10px'}}  variant='body1'  gutterBottom>
      this page contains vital information that when altered it can't be retrieved back.
      Read the instructions below carefully before performing any operation.
      </Typography>
     </div>

     <Button onClick={()=>{
   
       if (checkedSession) {
        const sessionToGo=  prompt('Please Enter Session')
        if (sessionToGo=='') {
          return
        }
        const myObj= {
          session:{
          year:sessionToGo
        }
      }

        fetch('https://polar-brook-59807.herokuapp.com/admin/set-new-session',{
          method:'POST',
          headers:{
          "Content-Type":'application/json'
          },
          body:JSON.stringify(myObj)
          }).then(res=>{
            res.json()
            .then(data=>{
              notification.open({
                message: `Successfully Set To Next Session`,
                description:`Welcome To New Session`,
                onClick: () => {
                  notification.close()
                },
                type:'success'
              });
            })
          })
       }else{
         return null
       }
     }} disabled={!checkedSession} style={{backgroundColor:checkedSession?'green':null, color:checkedSession?'white':null,height:'50px'}} variant='contained'>PROCEED TO NEXT SESSION</Button>
   
      </div>
      
      
       </div>


     
    

    
        </StyledProfile>
    )
}
