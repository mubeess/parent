import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { History, QuestionAnswerOutlined,CloudDownload } from '@material-ui/icons';
import React from 'react'
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
    return (
        <StyledMain>
            <div className='topDisplay'>
            <QuestionAnswerOutlined style={{color:'white',marginTop:'10px',marginLeft:'20px'}}></QuestionAnswerOutlined>
            <Typography variant='button' style={{color:'white',marginTop:'10px'}}>My Assignments</Typography>
            </div>
            <div className='assList'>
            <QuestionAnswerOutlined style={{color:'black',marginLeft:'5px'}}></QuestionAnswerOutlined>
            <Typography variant='button' style={{color:'black'}}>English Language</Typography>
            <Typography variant='body1' style={{color:'black',marginLeft:'50px'}}>Title:JSS1</Typography>
            <Typography variant='caption' style={{color:'black',marginLeft:'20px'}}>body:jkkjjhhhggguuuuhhgg</Typography>
            <History style={{color:'black',marginLeft:'50px'}}></History>
            <Typography variant='body1' style={{color:'black'}}>Posted On:12-12-09</Typography>
            <Button
        variant="contained"
        style={{backgroundColor:'#1E7F95',marginLeft:'50px',color:'white'}}
        startIcon={<CloudDownload/>}
      >
        Download
      </Button>

            </div>


            <div className='assList'>
            <QuestionAnswerOutlined style={{color:'black',marginLeft:'5px'}}></QuestionAnswerOutlined>
            <Typography variant='button' style={{color:'black'}}>English Language</Typography>
            <Typography variant='body1' style={{color:'black',marginLeft:'50px'}}>Title:JSS1</Typography>
            <Typography variant='caption' style={{color:'black',marginLeft:'20px'}}>body:jkkjjhhhggguuuuhhgg</Typography>
            <History style={{color:'black',marginLeft:'50px'}}></History>
            <Typography variant='body1' style={{color:'black'}}>Posted On:12-12-09</Typography>
            <Button
        variant="contained"
        style={{backgroundColor:'#1E7F95',marginLeft:'50px',color:'white'}}
        startIcon={<CloudDownload/>}
      >
        Download
      </Button>

            </div>


            <div className='assList'>
            <QuestionAnswerOutlined style={{color:'black',marginLeft:'5px'}}></QuestionAnswerOutlined>
            <Typography variant='button' style={{color:'black'}}>English Language</Typography>
            <Typography variant='body1' style={{color:'black',marginLeft:'50px'}}>Title:JSS1</Typography>
            <Typography variant='caption' style={{color:'black',marginLeft:'20px'}}>body:jkkjjhhhggguuuuhhgg</Typography>
            <History style={{color:'black',marginLeft:'50px'}}></History>
            <Typography variant='body1' style={{color:'black'}}>Posted On:12-12-09</Typography>
            <Button
        variant="contained"
        style={{backgroundColor:'#1E7F95',marginLeft:'50px',color:'white'}}
        startIcon={<CloudDownload/>}
      >
        Download
      </Button>

            </div>
        </StyledMain>
    )
}
