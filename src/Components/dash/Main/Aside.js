import React,{useState,useContext,useEffect} from 'react'
import styled from 'styled-components'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Dashboard,VerifiedUserRounded,HouseRounded,Folder,Receipt,FileCopy,Group,GroupAdd,Work,ArrowForward,ViewAgenda,Schedule,School,Assessment,Assignment,LockOpen, Book, ReceiptOutlined, AssessmentOutlined, QuestionAnswer, QuestionAnswerOutlined} from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {withRouter,Link} from 'react-router-dom'
import AppContext from '../../../Context/app/appContext'

import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';

const StyledAside=styled.div`
width: 20%;
height: 90%;
background-color:#1E7F95;
margin-top: 10px;
display: flex; 
flex-direction: column;
position: fixed;
z-index: 100;
overflow-y: scroll;
margin-bottom: 10px;
`;
 function Aside(props) {
   const appProps=useContext(AppContext)
   useEffect(()=>{
  console.log(appProps)
   },[])
   const arr=[]
   const isTeacher=appProps.user.role.includes('subjectTeacher')
   const isBursar=appProps.user.role.includes('Bursar')
   const isPrincipal=appProps.user.role.includes('Principal')
   const isFormMaster=appProps.user.role.includes('classTeacher')
   const isAd=appProps.user.role.includes('Admin')
   const isExamOfficer=appProps.user.role.includes('examOfficer')
   const isSubAdmin=appProps.user.role.includes('subAdmin')

  
   
    return (
        <StyledAside>
     
     <Link  to="/dash/assignment">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <QuestionAnswerOutlined style={{color:'white'}}></QuestionAnswerOutlined>
            </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="My Assignments" />
        </ListItem>
        </Link>

     


        <Link  to="/dash/subject">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Book style={{color:'white'}}></Book>
          
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="My Subjects" />
        </ListItem>
        </Link>




        <Link  to="/dash/fees">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <ReceiptOutlined style={{color:'white'}}></ReceiptOutlined>
            </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Fees Payment" />
        </ListItem>
        </Link>

      
        <Link  to="/dash/profile">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
         
            <VerifiedUserRounded style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Profile" />
        </ListItem>
        </Link>
        



        <Link  to="/dash/result">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <AssessmentOutlined style={{color:'white'}}></AssessmentOutlined>
            </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="My Results" />
        </ListItem>
        </Link>


        </StyledAside>
    )
}
export default withRouter(Aside)


// !isTeacher && !isBursar && !isFormMaster && !isNull
// !isTeacher && !isBursar && !isNull?
// !isTeacher && !isBursar && !isFormMaster && !isNull?
// !isTeacher && !isBursar && !isFormMaster && !isNull
// !isBursar && !isNull
// !isTeacher && !isBursar && !isNull
// !isTeacher && !isBursar && !isNull