import { Button, Divider, FormControl, InputLabel, Select, Typography } from '@material-ui/core';
import { ReceiptOutlined } from '@material-ui/icons';
import React, { useContext, useState,useRef } from 'react'
import AppContext from '../../../Context/app/appContext'
import {useReactToPrint} from 'react-to-print'
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
  const appProps=useContext(AppContext)
  const componentRef=useRef()
    const [term,setTerm]=useState('none')
    const [myFees,setMyFees]=useState([])
    const [total,setTotal]=useState(0)

    const handlePrint=useReactToPrint({
      content:()=>componentRef.current,
      copyStyles:true
  
  })
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
          value={appProps.user.user.currentClass}
          label="Present Class"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={appProps.user.user.currentClass}>{appProps.user.user.currentClass}</option>
        </Select>
      </FormControl>



      <FormControl style={{width:'30%',marginLeft:'30px'}} variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Select Term</InputLabel>
        <Select
          onChange={(e)=>{
            setTerm(e.target.value)
           if(e.target.value=='none') {
          return null
           }else{
             fetch(`https://polar-brook-59807.herokuapp.com/student/get-single-student-payment/?term=${e.target.value}&username=${appProps.user.user.username}`)
             .then(res=>{
               res.json()
               .then(data=>{
               console.log(data)
               if (data.result==null) {
                 return setMyFees([])
               }else{
                setMyFees(data.result.pays)
   const calculatedFees=data.result.pays[0].purposeOfPayment.reduce((a,{amountOfPayment})=>parseInt(a)+parseInt(amountOfPayment), 0)
      setTotal(calculatedFees)
               }
               
               })
             })
           }
          }}
          native
          value={term}
          label="Select Term"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='none'>---None---</option>
          <option value='1'>First Term</option>
          <option value='2'>Second Term</option>
          <option value='3'>Third Term</option>
        </Select>
      </FormControl>

            </div>
        <div ref={componentRef} className='recieptDetails'>
       <Typography style={{marginLeft:'10px'}} variant='h6'>Purpose Of Payment</Typography>
       <Typography variant='h6'>Amount</Typography>
       {
         myFees.length>0&&(
           myFees[0].purposeOfPayment.map((pay,ind)=>(
            <>
          <Typography style={{marginLeft:'10px'}} variant='body1'>{pay.purposeOfPayment}</Typography>
         <Typography variant='body1'>{pay.amountOfPayment}</Typography>
           </>
           ))
         )
       }
       {
         myFees.length==0&&(
          <>
          <Typography style={{marginLeft:'10px'}} variant='body1'>Not Paid!!</Typography>
         <Typography variant='body1'>N0.00</Typography>
         </>
         )
       }
      
     
       <Typography style={{marginLeft:'10px'}} variant='h6'>Total</Typography>
       <Typography variant='h6'>{myFees.length>0?total:'N0.00'}</Typography>
       <Divider style={{gridColumn:'1/3'}}></Divider>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Teller No.</Typography>
       <Typography variant='body1'>{myFees.length>0?myFees[0].teller:'Not Paid!!'}</Typography>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Term</Typography>
       <Typography variant='body1'>{term}</Typography>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Payment Status</Typography>
       <Typography variant='body1'>{myFees.length>0?'Paid':'Not Paid!!'}</Typography>
       
        </div>
        <Button onClick={handlePrint} style={{width:'30%',marginLeft:'20px',marginTop:'10px'}} variant='outlined' color='primary'>Print Reciept</Button>
        </StyledMain>
    )
}
