import React,{useRef,useContext,useEffect,useState} from 'react'
import styled from 'styled-components'
import Logo from './logo1.png'
import Signature from './signature.jpg'
import {useReactToPrint} from 'react-to-print'
import './dosier.css'
import { Button } from '@material-ui/core';


import AppContext from '../../Context/app/appContext'


const grader = (grade) => {

    switch (grade) {
        case 'A1':
            return "Excellent" 

        case 'B2':
            return "Very Good"
            
        case 'B3':
            return "Good" 

        case 'C4':
            return "Credit"
       case 'C4':
                return "Credit"

       case 'C4':
                    return "Credit"
    
     case 'D7':
                 return "Pass"

     case 'E8':
                    return "Pass"
    

        case 'F':
            return "Fail"
    
        default:
            return "Fail"
        
    }
}


const termer = (term) => {

    switch (term) {
        case 1:
            return "First Term" 
       case 2:
            return "Second Term" 
      case 3:
            return "Third Term" 

       
    
        default:
            return "None"
        
    }
}

const StyledAttendance=styled.div`
margin-left: 21%;
margin-top: 20px;
min-height: 100vh;
.printCont{
    display:flex;
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    flex-direction: column;
}

`;

export default function Dosier() {
   const appProps=useContext(AppContext)
    const componentRef=useRef()
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        copyStyles:true
    
    })

    return (
        <StyledAttendance>
    <Button style={{margin:'10px'}} variant='contained' onClick={handlePrint} color='primary'>Print</Button>
    <div ref={componentRef} className='printCont'>
   {
       appProps.dosier.length>=1&&(
           appProps.dosier.map((dos,ind)=>(
            <div key={ind} id="container">
            <center> <div className="header">
                 <img src={Logo} style={{textAlign:'center'}}/><br></br>
                 <span className="school-name">NOBLE INTELLECT ACADEMY</span><br></br>
                <span>No. 24 kofare zone 3,, Jimeta Yola North, Adamawa State</span><br></br>
                <span>Motto: Learning For Better Future.</span>
                <h4>STUDENT REPORT SHEET</h4>
            </div> </center>
            <div className="information-container">
                <div>
                    <span className="content-title">NAME:</span> <span  className="content-title-post">{`${dos[2][0].firstName+' '+dos[2][0].lastName}`}</span><br></br>
                    <span className="content-title">STUDENT ID:</span><span className="content-title-post">{dos[0].username}</span><br></br>
                    <span className="content-title">CLASS:</span><span className="content-title-post">{dos[0].class}</span><br></br>
                    <span className="content-title">CLASS SIZE:</span><span className="content-title-post">{appProps.dosier.length}</span><br></br>
                </div>
                <div>
                    <span className="content-title">AGGREGATE:</span><span className="content-title-post">{dos[0].total}</span><br></br>
                    <span className="content-title">AVERAGE:</span><span className="content-title-post">{dos[0].average}</span><br></br>
                    <span className="content-title">NO OF SUBJECT:</span><span className="content-title-post">{dos[0].noOfCourse}</span><br></br>
                </div>
                <div>
                    <span className="content-title">SESSION:</span> <span className="content-title-post">{dos[0].session}</span><br></br>
                    <span className="content-title">TERM:</span><span className="content-title-post">{termer(dos[0].term)}</span><br></br>
                </div>
    
            </div>
            <div>
                {
                     dos.length>0&&(
                        dos[0].class.includes('Kindergarten')&&(
                            <table class="table11">
                <thead>
                    <th>SUBJECT</th>
                    <th>1ST CA <br></br>(10)</th>
                    <th>2ND CA <br></br>(10)</th>
                    <th>3RD CA <br></br>(10)</th>
                    <th>4TH CA <br></br>(10)</th>
                   
                    <th>EXAM<br></br>(60)</th>
                    <th>TOTAL</th>
                    <th>GRADE</th>
                    <th>POSITION</th>
                    <th>REMARKS</th>
                </thead>
                <tbody>
                {
                               
                               dos[1].length>=1&&(
                                   dos[1].map((curDos,indd)=>(
                                       <tr key={indd}>
                                       <td className="subject">{curDos.subject}</td>
                                       <td>{curDos.ca1 ||0}</td>
                                       <td>{curDos.ca2 ||0}</td>
                                       <td>{curDos.ca3 ||0}</td>
                                       <td>{curDos.ca4 ||0}</td>
                                       <td>{curDos.exam ||0}</td>
                                       <td>{curDos.total ||0}</td>
                                       <td>{curDos.grade ||'F'}</td>
                                       <td>{curDos.subjectPosition}</td>
                                       <td>{grader(curDos.grade) ||'FAIL'}</td>
                                   </tr>
                                   ))
                               )
                           }
                </tbody>
            </table>
                        )
                     )
                }
                {
                    dos.length>0&&(
                    dos[0].class.includes('SS')
                    &&(
                        <table className="table11">
                        <thead>
                            <th>SUBJECT</th>
                            <th>1ST CA <br></br>(10)</th>
                            <th>2ND CA <br></br>(10)</th>
                            <th>3RD CA <br></br>(10)</th>
                            <th>4TH CA <br></br>(10)</th>
                            <th>EXAM<br></br>(60)</th>
                            <th>TOTAL</th>
                            <th>GRADE</th>
                            <th>POSITION</th>
                            <th>REMARKS</th>
                        </thead>
                       
                        <tbody>
                            {
                               
                                dos[1].length>=1&&(
                                    dos[1].map((curDos,indd)=>(
                                        <tr key={indd}>
                                        <td className="subject">{curDos.subject}</td>
                                        <td>{curDos.ca1 ||0}</td>
                                        <td>{curDos.ca2 ||0}</td>
                                        <td>{curDos.ca3 ||0}</td>
                                        <td>{curDos.ca4 ||0}</td>
                                        <td>{curDos.exam ||0}</td>
                                        <td>{curDos.total ||0}</td>
                                        <td>{curDos.grade ||'F'}</td>
                                        <td>{curDos.subjectPosition}</td>
                                        <td>{grader(curDos.grade) ||'FAIL'}</td>
                                    </tr>
                                    ))
                                )
                            }
                            
                         
                             
                        </tbody>
                    </table>
           
                    ))
                }


{
                    dos.length>0&&(
                    dos[0].class.includes('Grade')
                    &&(
                        <table className="table11">
                        <thead>
                            <th>SUBJECT</th>
                            <th>1ST CA <br></br>(10)</th>
                            <th>2ND CA <br></br>(10)</th>
                            <th>3RD CA <br></br>(10)</th>
                            <th>4TH CA <br></br>(10)</th>
                            <th>EXAM<br></br>(60)</th>
                            <th>TOTAL</th>
                            <th>GRADE</th>
                            <th>POSITION</th>
                            <th>REMARKS</th>
                        </thead>
                       
                        <tbody>
                            {
                               
                                dos[1].length>=1&&(
                                    dos[1].map((curDos,indd)=>(
                                        <tr key={indd}>
                                        <td className="subject">{curDos.subject}</td>
                                        <td>{curDos.ca1 ||0}</td>
                                        <td>{curDos.ca2 ||0}</td>
                                        <td>{curDos.ca3 ||0}</td>
                                        <td>{curDos.ca4 ||0}</td>
                                        <td>{curDos.exam ||0}</td>
                                        <td>{curDos.total ||0}</td>
                                        <td>{curDos.grade ||'F'}</td>
                                        <td>{curDos.subjectPosition}</td>
                                        <td>{grader(curDos.grade) ||'FAIL'}</td>
                                    </tr>
                                    ))
                                )
                            }
                            
                         
                             
                        </tbody>
                    </table>
           
                    ))
                }
                
                {
                    dos.length>0&&(
                        dos[0].class.includes('Playclass')||dos[0].class.includes('Daycare')?
                        (
                            <table class="table11">
                            <thead>
                                <th class="subject">SUBJECT</th>
                                <th class="subject">TEACHERS COMMENT <br></br></th>
                              
                               
                            </thead>
                            <tbody>
                                <tr>
                                    <td class='subject'colspan="2">LITERARCY/NUMERACY</td>
                                </tr>
                                {
                                    dos[1].map((curDos,indd)=>(
                                 <tr key={indd}>
                                   
                                    <td className="subject">{curDos.subject}</td>
                                    <td className="subject"></td>
                                </tr>
                                    ))
                                }
                                
                                 
                            </tbody>
                        </table>
                        ):null)
                        }
               



               
               
            </div>
            <div className="grade-cognitive-section">
                {
                    dos.length>0&&(
                        !dos[0].class.includes('Play')&&(
                            <div className="table2-container">
                            <span>Grading Scale</span>
                            <table class="table2">
                             <thead>
                                 <th>Score</th>
                                 <th>Grade</th>
                                 <th>Descriptors</th>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td>91-100</td>
                                     <td>A1</td>
                                     <td>Distinction</td>
                                 </tr>
                                 <tr>
                                     <td>81-90</td>
                                     <td>B2</td>
                                     <td>Very Good</td>
                                 </tr>
                                 <tr>
                                     <td>71-80</td>
                                     <td>B3</td>
                                     <td>Good</td>
                                 </tr>
                                 <tr>
                                     <td>65-70</td>
                                     <td>C4</td>
                                     <td>Credit</td>
                                 </tr>
                                 <tr>
                                     <td>60-64</td>
                                     <td>C5</td>
                                     <td>Credit</td>
                                 </tr>
                                 <tr>
                                     <td>50-59</td>
                                     <td>C6</td>
                                     <td>Credit</td>
                                 </tr>
                                 <tr>
                                     <td>45-49</td>
                                     <td>D7</td>
                                     <td>Pass</td>
                                 </tr>
                                 <tr>
                                     <td>40-44</td>
                                     <td>E8</td>
                                     <td>Pass</td>
                                 </tr>
                                 <tr>
                                     <td>0-39</td>
                                     <td>F9</td>
                                     <td>Fail</td>
                                 </tr>
                             </tbody>
                             
                         </table>
                            
                         </div>
                        ))
                }
               

               {
                   dos.length>0&&(
                    dos[0].class.includes('Kindergarten')&&(
                        <div className="table3-container">
                        <span>Cognitive Domain</span>
                        
                           {
                               dos[2].length>=1&&(
                                <table class="table3">
                                <thead>
                                    <th colspan="5">EFFECTIVE DISPOSITION</th>
                                   
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Attentiveness</td>
                                        <td>{dos[2][0].Attentiveness}</td>
                                        <td>Attitude to school work</td>
                                        <td>{dos[2][0].Attitude}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Emotional Stability</td>
                                        <td>{dos[2][0].Emotional}</td>
                                        <td>Initiative </td>
                                        <td>{dos[2][0].Inactive}</td>
                                    </tr>
                                    <tr>
                                        <td>Neatness</td>
                                        <td>{dos[2][0].Neatness}</td>
                                        <td>Acceptance of Responsibility</td>
                                        <td>{dos[2][0].Acceptance}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Team Work</td>
                                        <td>{dos[2][0].TeamWork}</td>
                                        <td>Preseverance</td>
                                        <td>{dos[2][0].Preseverance}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Speaking Skills</td>
                                        <td>{dos[2][0].Speaking}</td>
                                        <td>Leadership Skills</td>
                                        <td>{dos[2][0].Leadership }</td>
                                    </tr>
                                    <tr>
                                        <td>Honesty</td>
                                        <td>{dos[2][0].Honesty}</td>
                                        <td>Follows rules</td>
                                        <td>{dos[2][0].Follows}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Punctuality</td>
                                        <td>{dos[2][0].Punctuality}</td>
                                        <td>Participation in class</td>
                                        <td>{dos[2][0].Participation}</td>
                                    </tr>
                                   
                                </tbody>
                                
                            </table>
                               )
                           }
                          
                       <table class="table2">
                           <tr>
                               <td>Keys</td>
                               <td>5-Excellent</td>
                               <td>4-Good</td>
                               <td>3-Fair</td>
                               <td>2-Poor</td>
                           </tr>
                       </table>
                          
                       </div>
                    ))
               }


{
                   dos.length>0&&(
                    dos[0].class.includes('Grade')&&(
                        <div className="table3-container">
                        <span>Cognitive Domain</span>
                         
                           <table class="table3">
                           <thead>
                               <th colspan="5">EFFECTIVE DISPOSITION</th>
                              
                           </thead>
                           <tbody>
                               <tr>
                                   <td>Attentiveness</td>
                                   <td>5</td>
                                   <td>Attitude to school work</td>
                                   <td>5</td>
                               </tr>
                               
                               <tr>
                                   <td>Emotional Stability</td>
                                   <td>5</td>
                                   <td>Initiative </td>
                                   <td>5</td>
                               </tr>
                               <tr>
                                   <td>Neatness</td>
                                   <td>5</td>
                                   <td>Acceptance of Responsibility</td>
                                   <td>5</td>
                               </tr>
                               
                               <tr>
                                   <td>Attentiveness</td>
                                   <td>5</td>
                                   <td>Attitude to school work</td>
                                   <td>5</td>
                               </tr>
                               <tr>
                                   <td>Team Work</td>
                                   <td>5</td>
                                   <td>Preseverance</td>
                                   <td>5</td>
                               </tr>
                               
                               <tr>
                                   <td>Speaking Skills</td>
                                   <td>5</td>
                                   <td>Leadership Skills</td>
                                   <td>5</td>
                               </tr>
                               <tr>
                                   <td>Honesty</td>
                                   <td>5</td>
                                   <td>Follows rules</td>
                                   <td>5</td>
                               </tr>
                               
                               <tr>
                                   <td>Punctuality</td>
                                   <td>5</td>
                                   <td>Participation in class</td>
                                   <td>5</td>
                               </tr>
                              
                           </tbody>
                           
                       </table>
                       <table class="table2">
                           <tr>
                               <td>Keys</td>
                               <td>5-Excellent</td>
                               <td>4-Good</td>
                               <td>3-Fair</td>
                               <td>2-Poor</td>
                           </tr>
                       </table>
                          
                       </div>
                    ))
               }
               
            </div>
            <div>
                <span>PROMOTION STATUS</span>
                <span className="promotion-status"></span>
            </div>
          <div>
            <span>NEXT TERM BEGINS:________________________</span>
        </div>
            <div>
                <table className="table1">
                    <tr>
                        <td>PRINCIPAL REMARK</td>
                        <td class="pr-remarks">{dos[2][0].remarks}</td>
                    </tr>
                </table>
            </div>
            
            <center><img src={Signature}/></center>
        </div>
           ))
       )
   }
    
    </div>
        </StyledAttendance>
    )
}
