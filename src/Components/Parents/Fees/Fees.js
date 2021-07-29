import { Button, Divider, FormControl, InputLabel, Select, Typography } from '@material-ui/core';
import { ReceiptOutlined } from '@material-ui/icons';
import React, { useContext, useState,useRef, useEffect } from 'react'
import AppContext from '../../../Context/app/appContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import {useReactToPrint} from 'react-to-print'
import styled from 'styled-components'
import Logo from './logo1.png'

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
    const [currentSession,setCurrent]=useState('')
    const [loading,setLoadig]=useState(false)
    useEffect(()=>{
      fetch('https://polar-brook-59807.herokuapp.com/admin/get-current-term').
      then(res=>{
        res.json()
        .then(data=>{
       setCurrent(data.result[0].session.year)
          
        })
      })
    },[])

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
            setLoadig(true)
             fetch(`https://polar-brook-59807.herokuapp.com/student/get-single-student-payment/?term=${e.target.value}&username=${appProps.user.user.username}`)
             .then(res=>{
               res.json()
               .then(data=>{
                 setLoadig(false)
               console.log(data)
               if (data.result==null) {
                 return setMyFees([])
               }else{
                 console.log(data)
                 if (data.result.paid) {
                  const calculatedFees=data.result.pays[0].purposeOfPayment.reduce((a,{amountOfPayment})=>parseInt(a)+parseInt(amountOfPayment), 0)
                  setTotal(calculatedFees)
                 }
                 setMyFees(data.result.pays)
   
      
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
        {/* <div ref={componentRef} className='recieptDetails'>
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
       
        </div> */}
        {
           myFees.length>0&&(
        
        <div ref={componentRef} className="page-break"  id="container">
        <center> <div className="header">
             <img src={Logo} style={{textAlign:'center'}}/><br></br>
             <span className="school-name">NOBLE INTELLECT ACADEMY</span><br></br>
            
           
            <span>No. 24 kofare zone 3,, Jimeta Yola North, Adamawa State</span><br></br>
            <span>Motto: Learning For Better Future.</span>
            <h4>STUDENT RECIEPT</h4>
        </div> </center>
        <div className="information-container">
            <div>
                <span className="content-title">NAME: &nbsp;</span> <span  className="content-title-post">{myFees.length>0?myFees[0].studentName:'Not Paid'}</span><br></br>
                <span className="content-title">STUDENT ID: &nbsp;</span> <span  className="content-title-post">{myFees.length>0?myFees[0].studentId:'Not Paid'} </span><br></br>
            </div>
            <div>
                <span className="content-title">CLASS: &nbsp;</span> <span className="content-title-post">{myFees.length>0?myFees[0].className:'Not Paid!!'}</span><br></br>
                <span className="content-title">TELLER_NO: &nbsp;</span> <span className="content-title-post">{myFees.length>0?myFees[0].teller:'Not Paid!!'}</span><br></br>
            </div>
            <div>
                <span className="content-title">SESSION:</span> <span className="content-title-post">{currentSession}</span><br></br>
                <span className="content-title">TERM:</span> <span className="content-title-post">{myFees.length>0?myFees[0].term:''}</span><br></br>
            </div>

        </div>
        <div>
            <table className="table11">
                <thead>
                <th>PURPOSE OF PAYMENT</th>
                <th>AMOUNT IN FIGURES</th>
                   
                </thead>
                <tbody>
                {
        myFees.length>0&&(
          myFees[0].purposeOfPayment.map((dat,ind)=>(
<tr key={ind}>
           
            <td className="subject">{dat.purposeOfPayment}</td>
            <td className="subject">{`${'N'+dat.amountOfPayment}`}</td>
</tr>
            
        )))
    }
<tr>
           
           <td className="subject"><b>TOTAL</b></td>
           <td className="subject"><b>N{total}</b></td>
</tr>           
                    
                     </tbody>
            </table>
           
        </div>
       <div className="teacher-sign-container">
        <center><span className="teacher-sign">Principal/Admin Signature</span></center>
    </div>
    </div>
    )
      }
      {
        myFees.length==0&&(
          <Typography style={{marginLeft:'10px'}} variant='button'>Select Term To View Your Reciept or Not Yet Paid</Typography>
        )
      }
     {
     loading?<CircularProgress style={{marginLeft:'40%'}} color='primary' />:null
   }
      <Button onClick={handlePrint} style={{width:'30%',marginLeft:'20px',marginTop:'10px'}} variant='outlined' color='primary'>Print Reciept</Button>
        </StyledMain>
    )
}
