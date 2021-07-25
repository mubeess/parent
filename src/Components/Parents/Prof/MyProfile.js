import { Typography } from '@material-ui/core';
import { VerifiedUserRounded } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import MainProfile from '../../Profile/MainProfile';

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
        

`;

export default function MyProfile() {
    return (
        <StyledMain>
             <div className='topDisplay'>
             <VerifiedUserRounded style={{color:'white',marginTop:'10px',marginLeft:'10px'}} />
            <Typography variant='button' style={{color:'white',marginTop:'10px'}}>My Profile</Typography>
            </div>
           <MainProfile/>
        </StyledMain>
    )
}
