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

export default function StudentScript() {
    const appProps=useContext(AppContext)
    // useEffect(()=>{
    //   console.log(appProps.studentsResult)
    // },[])
    const componentRef=useRef()
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        copyStyles:true
    
    })
    return (
        <StyledAttendance>
            <Button style={{margin:'10px'}} variant='contained' onClick={handlePrint} color='primary'>Print</Button>
    <div ref={componentRef}  id="container">
        <center> <div className="header">
             <img src={Logo} style={{textAlign:'center'}}/><br></br>
             <span className="school-name">NOBLE INTELLECT ACADEMY</span><br></br>
            
           
            <span>No. 24 kofare zone 3,, Jimeta Yola North, Adamawa State</span><br></br>
            <span>Motto: Learning For Better Future.</span>
            <h4>STUDENT SCORE SHEET</h4>
        </div> </center>
        <div className="information-container">
            <div>
                <span className="content-title">SUBJECT: &nbsp;</span> <span  className="content-title-post">{appProps.studentsResult[1].subject}</span><br></br>
                <span className="content-title">TEACHER: &nbsp;</span> <span  className="content-title-post">MR/MRS</span><br></br>
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
                    <th>1ST CA<br></br>(10)</th>
                    <th>2ND CA<br></br>(10)</th>
                    <th>3RD CA<br></br>(10)</th>
                    <th>4TH CA<br></br>(10)</th>
                    <th>EXAM<br></br>(60)</th>
                   
                </thead>
                <tbody>
                  {
                      appProps.studentsResult[0].map((res,ind)=>(
                    <tr>
                        <td>{ind+1}</td>
                        <td className="subject">{res.username}</td>
                        <td className="subject">{`${res.firstName+" "+res.lastName}`}</td>
                        <td>{res.ca1}</td>
                        <td>{res.ca2}</td>
                        <td>{res.ca3}</td>
                        <td>{res.ca4}</td>
                        <td>{res.exam}</td>
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
