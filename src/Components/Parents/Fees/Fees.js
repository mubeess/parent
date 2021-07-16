import { Button, Divider, FormControl, InputLabel, Select, Typography } from '@material-ui/core';
import { ReceiptOutlined } from '@material-ui/icons';
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
        .inputDetails{
            display: flex;
            flex-direction: row;
            width: 100%;
            margin-top: 50px;
            margin-left: 20px;
        }
        .recieptDetails{
            min-height: 200px;
            width: 63%;
            margin-left: 20px;
            margin-top: 10px;
            box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
            border:none;
            border-left: 6px solid #1E7F95;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

`;

export default function Fees() {
    return (
        <StyledMain>
            <div className='topDisplay'>
            <ReceiptOutlined style={{color:'white',marginTop:'10px',marginLeft:'20px'}}></ReceiptOutlined>
            <Typography variant='button' style={{color:'white',marginTop:'10px'}}>Fees Payment Details</Typography>
            </div>
            <Typography style={{color:'black',marginTop:'20px',marginLeft:'20px'}} variant='button'>Print Previous/Present Term Reciept</Typography>
      <div className='inputDetails'>
            <FormControl style={{width:'30%'}} variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Present Class</InputLabel>
        <Select
          disabled
          native
          value='JSS1'
          label="Present Class"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='JSS1'>JSS1</option>
        </Select>
      </FormControl>



      <FormControl style={{width:'30%',marginLeft:'30px'}} variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Select Term</InputLabel>
        <Select
          native
          value='1'
          label="Select Term"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='none'>---None---</option>
          <option value='First Term'>First Term</option>
          <option value='Second Term'>Second Term</option>
          <option value='Third Term'>Third Term</option>
        </Select>
      </FormControl>

            </div>
        <div className='recieptDetails'>
       <Typography style={{marginLeft:'10px'}} variant='h6'>Purpose Of Payment</Typography>
       <Typography variant='h6'>Amount</Typography>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Tuition</Typography>
       <Typography variant='body1'>40000</Typography>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Tuition</Typography>
       <Typography variant='body1'>40000</Typography>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Tuition</Typography>
       <Typography variant='body1'>40000</Typography>
       <Typography style={{marginLeft:'10px'}} variant='h6'>Total</Typography>
       <Typography variant='h6'>N50000</Typography>
       <Divider style={{gridColumn:'1/3'}}></Divider>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Teller No.</Typography>
       <Typography variant='body1'>00980000</Typography>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Term</Typography>
       <Typography variant='body1'>N50000</Typography>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Payment Status</Typography>
       <Typography variant='body1'>Paid</Typography>
       
        </div>
        <Button style={{width:'30%',marginLeft:'20px',marginTop:'10px'}} variant='outlined' color='primary'>Print Reciept</Button>
        </StyledMain>
    )
}
