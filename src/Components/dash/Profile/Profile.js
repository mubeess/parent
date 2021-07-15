import { Divider,Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import MainProfile from '../../Profile/MainProfile.js';



const StyledProfile=styled.div`
margin-left: 21%;
margin-top: 10px;
background-color:transparent;
width: 85%;
min-height: 100vh;
display: flex;
flex-direction: column;
.header{ 
    height: 400px;
    width: 100%;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: row;
    .mainDetails{
    width: 50%;
    height: 100%;
    background-color: transparent;
    .individual{
        display: flex;
        flex-direction:column;
    }
  
    }
    .avatar{
        display: grid;
        align-items:right;
        
    }
}

`;

export default function Profile() {
    return (
        <StyledProfile>
        <Typography  variant="h4" display="block" gutterBottom>
        Profile
      </Typography>
      <Divider style={{width:'100%'}}></Divider>
     <MainProfile></MainProfile>
      

      
        </StyledProfile>
    )
}
