import { Button } from '@material-ui/core';
import React,{useRef,useContext,useEffect} from 'react'
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
    useEffect(()=>{
      console.log(appProps.studentsResult[0][0])
    },[])
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
            <h4>STUDENT ATTENDANCE SHEET</h4>
        </div> </center>
        <div className="information-container">
            <div>
                <span className="content-title">SUBJECT: &nbsp;</span> <span  className="content-title-post">{appProps.studentsResult[1].subject}</span><br></br>
                <span className="content-title">TEACHER: &nbsp;</span> <span  className="content-title-post">MR/MRS </span><br></br>
            </div>
            <div>
                <span className="content-title">CLASS: &nbsp;</span> <span className="content-title-post">{appProps.studentsResult[1].class}</span><br></br>
                <span className="content-title">CLASS-SIZE: &nbsp;</span> <span className="content-title-post">{appProps.studentsResult[0].length}</span><br></br>
            </div>
            <div>
                <span className="content-title">SESSION:</span> <span className="content-title-post">{appProps.studentsResult[0][0].session}</span><br></br>
                <span className="content-title">TERM:</span> <span className="content-title-post">{appProps.studentsResult[0][0].term}</span><br></br>
            </div>

        </div>
        <div>
            <table className="table11">
                <thead>
                    <th>S/N</th>
                    <th>STUDENT ID</th>
                    <th>NAMES </th>
                    <th>SIGN IN </th>
                    <th>SIGN OUT </th>
                   
                </thead>
                <tbody>
                  {
                      appProps.studentsResult[0].map((res,ind)=>(
                    <tr>
                        <td>{ind+1}</td>
                        <td className="subject">{res.username}</td>
                        <td className="subject">{`${res.firstName+" "+res.lastName}`}</td>
                        <td></td>
                        <td></td>
                    </tr>
                      ))
                  }
                    
                    
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
