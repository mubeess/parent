import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

const StyledTabs=styled.div`
width: 100%;
height: 150px;
border-radius: 10px;
border: 1px solid #ddd;
/* box-shadow: 0px 0px 10px rgba(0,0,0,0.5); */
margin: 20px;
cursor: pointer;
.mainDetail{
    display: grid;
    grid-template-columns:1fr 1fr;
    margin-top: 20px;
}

`;

export default function Tabs(props) {
    return (
      <StyledTabs>
      <Typography align='center' variant="button" display="block" gutterBottom>
        {props.title}
      </Typography>
      <div className='mainDetail'>
     {
         props.Icon?props.Icon:null
     }
      <Typography variant="h4" display="block" gutterBottom>
        {props.value}
      </Typography>
      </div>
      </StyledTabs>
    )
}
