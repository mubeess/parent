import React, { useContext, useEffect, useState } from 'react'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppContext from '../../../Context/app/appContext'
import download from 'js-file-download';
import axios from 'axios'

import { History, QuestionAnswerOutlined,CloudDownload } from '@material-ui/icons';

import styled from 'styled-components'

const StyledMain=styled.div`
       background:transparent;
        width:75%;
        height:95%;
        margin-top:10px;
        margin-left:auto;
        margin-right:auto;
        display: flex;
        flex-direction: column;
        margin-left: 21%;
        .topDisplay{
        height:50px;
        background-color: #1E7F95;
        width: 100%;
        display: flex;
        flex-direction: row;
        }
        .assList{
            height: 50px;
            min-width: 90%;
            max-width: 90%;
            background-color: transparent;
            margin-top: 10px;
            margin-left: 10px;
            box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
            border:none;
            display:flex;
            flex-direction: row;
            align-items: center;

        }

`;

export default function Assignment() {
  const appProps=useContext(AppContext)
  const [allAss,setAll]=useState([])
  useEffect(() => {
  fetch(`https://polar-brook-59807.herokuapp.com/student/get-all-student-assignment/?currentClass=${JSON.parse(localStorage.getItem('user')).user.currentClass}&category=${JSON.parse(localStorage.getItem('user')).user.category}`)
  .then(res=>{
    res.json()
    .then(data=>{
      setAll(data.result)
      console.log(appProps.user.user)
    })
  })
  }, [])
    return (
        <StyledMain>
            <div className='topDisplay'>
            <QuestionAnswerOutlined style={{color:'white',marginTop:'10px',marginLeft:'20px'}}></QuestionAnswerOutlined>
            <Typography variant='button' style={{color:'white',marginTop:'10px'}}>My Assignments</Typography>
            </div>

            {
              allAss.length>0&&(
                allAss.map((ass,ind)=>{
                  const newPdf=ass.file.split('/').splice(1).join('/')
                  const maiAss=ass.file.split(':').map(arr=>{
                    if (arr=='http') {
                      return arr+'s'
                    }
                    return arr
                  }).join(':')
                  const myPdf='http://srms-demoo.herokuapp.com/'+newPdf
                  return(
                    <div key={ind} className='assList'>
                     
                  <QuestionAnswerOutlined style={{color:'black',marginLeft:'5px'}}></QuestionAnswerOutlined>
                  <Typography  variant='button' style={{color:'black'}}>{ass.subject||'Mathematics'}</Typography>
                  <Typography variant='body1' style={{color:'black',marginLeft:'50px'}}>Title:{ass.head}</Typography>
                  <Typography variant='caption' style={{color:'black',marginLeft:'20px'}}>body:{ass.text}</Typography>
                  <History style={{color:'black',marginLeft:'50px'}}></History>
                  <Typography variant='body1' style={{color:'black'}}>Posted On:{ass.date||'none'}</Typography>


                  <a download={`Assignment${ind+1}`}  href={maiAss}>
                  <Button
          
               type='submit'
              variant="contained"
              style={{backgroundColor:'#1E7F95',marginLeft:'50px',color:'white'}}
              startIcon={<CloudDownload/>}
            >
              Download
            </Button>
                  </a>
                    
               
                  
                  
      
                  </div>
                  )
                })
              )
            }
            

       {
         allAss.length==0&&(
          <Typography onClick={()=>{
            const me= JSON.parse(localStorage.getItem('user'))
            console.log(me)
          }} variant='button'>No Assignment Yet!!!</Typography>
         )
       }

        </StyledMain>
    )
}
