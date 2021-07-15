import { Button, Typography } from '@material-ui/core';
import React,{useRef,useContext,useEffect,useState} from 'react'
import styled from 'styled-components'
import {useReactToPrint} from 'react-to-print'
import './dosier.css'
import Logo from './logo1.png'
import AppContext from '../../Context/app/appContext'


const StyledAttendance=styled.div`
margin-left: 21%;
margin-top: 20px;

`;

export default function Attendance() {
    const appProps=useContext(AppContext)
    const [currentSession,setCurrent]=useState('')
    const [total,setTotal]=useState(0)
  
        useEffect(()=>{
            fetch('https://polar-brook-59807.herokuapp.com/admin/get-current-term').
            then(res=>{
              res.json()
              .then(data=>{
             setCurrent(data.result[0].session.year)
                
              })
            })
      const calculatedFees=appProps.reciept[0].purposes.reduce((a,{amountOfPayment})=>parseInt(a)+parseInt(amountOfPayment), 0)
      setTotal(calculatedFees)

    // appProps.reciept[0].purposes.reduce((a,b)=>{
    //     console.log(a,b)
    // })


      
    }, [])
    const componentRef=useRef()
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        copyStyles:true
    
    })
    return (
        <StyledAttendance>
            <Button style={{margin:'10px'}} variant='contained' onClick={handlePrint} color='primary'>Print</Button>
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
                <span className="content-title">NAME: &nbsp;</span> <span  className="content-title-post">{appProps.reciept[0].studentName}</span><br></br>
                <span className="content-title">STUDENT ID: &nbsp;</span> <span  className="content-title-post">{appProps.reciept[0].studentId} </span><br></br>
            </div>
            <div>
                <span className="content-title">CLASS: &nbsp;</span> <span className="content-title-post">{appProps.reciept[0].className}</span><br></br>
                <span className="content-title">TELLER_NO: &nbsp;</span> <span className="content-title-post">{appProps.reciept[0].teller}</span><br></br>
            </div>
            <div>
                <span className="content-title">SESSION:</span> <span className="content-title-post">{currentSession}</span><br></br>
                <span className="content-title">TERM:</span> <span className="content-title-post">{appProps.reciept[0].term}</span><br></br>
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
        appProps.reciept[0].purposes.length>0&&(
        appProps.reciept[0].purposes.map((dat,ind)=>(
<tr>
           
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
        <center><span className="teacher-sign">Teacher Signature</span></center>
    </div>
    </div>
          
            
    </StyledAttendance>
    )
}
