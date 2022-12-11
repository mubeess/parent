import { AssessmentOutlined } from '@material-ui/icons';
import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button, Divider, FormControl, InputLabel, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import gray from '@material-ui/core/colors/grey'
import AppContext from '../../../Context/app/appContext'
import {useReactToPrint} from 'react-to-print'
import Logo from './logo1.png'
import Signature from './signature.jpg'
import './dosier.css'
import CircularProgress from '@material-ui/core/CircularProgress';


const StyledAttendance=styled.div`
/* margin-left: 21%;
margin-top: 20px; */
min-height: 90vh;
.printCont{
    display:flex;
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    flex-direction: column;
}

`;
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
     case 'C5':
              return "Credit"

     case 'C6':
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

const StyledMain=styled.div`
       background:transparent;
        width:75%;
        min-height:95%;
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
        .mainResult{
            .resultDetails{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                width: 80%;
                margin-top: 20px;
                .current{
                    grid-column: 1/2;
                    min-width: 80%;
                    box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
                    min-height: 100px;
                    .subDetails{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                }
                .classDesc{
                    grid-column: 2/4;
                    min-width: 80%;
                    box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
                    min-height: 100px;
                    margin-left: 20px;
                    .subDetails{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                }
            }
        .principalRem{
            width: 80%;
            height: 50px;
            border-top: 1px solid gray;
            border-bottom: 1px solid gray;
            border-left: 5px solid #1E7F95;
            margin-top: 10px;
        }
        }
    
        .inputDetails{
            display: flex;
            flex-direction: row;
            width: 100%;
            margin-top: 50px;
            margin-left: 20px;
        }
`;

const useStyles = makeStyles((theme)=>(
    {
      table: {
        width: 800,
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
  } 
  ))

const StyledTableCell = withStyles((theme) => ({
    head: {
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
export default function MyResult() {
  const componentRef=useRef()
   const appProps=useContext(AppContext)
    const classes = useStyles();
    const [term,setTerm]=useState('none')
    const [myResult,setMyResult]=useState([])
    const [loading,setLoadig]=useState(false)

    const handlePrint=useReactToPrint({
      content:()=>componentRef.current,
      copyStyles:true
  
  })
    
    return (
        <StyledMain>
             <div className='topDisplay'>
            <AssessmentOutlined style={{color:'white',marginTop:'10px',marginLeft:'20px'}}></AssessmentOutlined>
            <Typography variant='button' style={{color:'white',marginTop:'10px'}}>Results</Typography>
            </div>


            <div className='inputDetails'>
            <FormControl style={{width:'30%'}} variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Present Class</InputLabel>
        <Select
          disabled
          native
          value={JSON.parse(localStorage.getItem('user')).user.currentClass}
          label="Present Class"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={JSON.parse(localStorage.getItem('user')).user.currentClass}>{JSON.parse(localStorage.getItem('user')).user.currentClass}</option>
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
            fetch(process.env.REACT_APP_BASE_URL+`admin/get-single-student-result/?term=${e.target.value}&username=${JSON.parse(localStorage.getItem('user')).user.username}&currentClass=${JSON.parse(localStorage.getItem('user')).user.currentClass}&category=${JSON.parse(localStorage.getItem('user')).user.category}`)
            .then(res=>{
              res.json()
              .then(data=>{
                setLoadig(false)
                if (data.message.includes(null)) {
                  return setMyResult([])
                }else{
                  setMyResult(data.message)
                  console.log(data)
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
      <Divider style={{marginTop:'10px'}}></Divider>

      {/* <div ref={componentRef} className='mainResult'>
      <TableContainer  style={{marginTop:'20px',width:800}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>Subjects</StyledTableCell>
            <StyledTableCell>1st CA</StyledTableCell>
            <StyledTableCell>2nd CA</StyledTableCell>
            <StyledTableCell>3rd CA</StyledTableCell>
            <StyledTableCell>4th CA</StyledTableCell>
            <StyledTableCell>Exam</StyledTableCell>
            <StyledTableCell>Total</StyledTableCell>
            <StyledTableCell>Grade</StyledTableCell>
            <StyledTableCell>Remark</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            myResult.length>0&&(
              myResult[1].map((res,ind)=>(
                <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {res.subject}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {res.ca1||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.ca2||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.ca3||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.ca4||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.exam||'0'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.total}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {res.grade||'F'}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                {grader(res.grade)||'Fail'}
                </StyledTableCell>
            </StyledTableRow>

              ))
            )
          }
        {
          myResult.length==0&&(
            <Typography variant='button'>No Result Yet!!!</Typography>
          )
        }
            
        </TableBody>
        </Table>
        </TableContainer>
        <div className='resultDetails'>
            <div className='current'>
            <Typography variant='button'>CURRENT</Typography>
            <div className='subDetails'>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Total:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[0].total:'0'}</Typography>


       <Typography style={{marginLeft:'10px'}} variant='body1'>Average:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[0].average.toPrecision(5):'0'}</Typography>


       <Typography style={{marginLeft:'10px'}} variant='body1'>Session:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[0].session:'None'}</Typography>
            </div>
            </div>
            <div className='classDesc'>
            <Typography variant='button'>Class Description</Typography>
            <div className='subDetails'>
       <Typography style={{marginLeft:'10px'}} variant='body1'>TOTAL NO. OF STUDENTS:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[3]:'0'}</Typography>


       <Typography onClick={()=>{
         console.log(myResult)
       }} style={{marginLeft:'10px'}} variant='body1'>TOTAL NO. OF SUBJECTS:</Typography>
       <Typography variant='body1'>{myResult.length>0?myResult[0].noOfCourse:'0'}</Typography>
    

    
            </div>
            </div>
        </div>
        <div className='principalRem'>
        <Typography style={{marginTop:'20px'}} variant='button'>PRINCIPAL REMARK:{myResult.length>0?myResult[2].remarks:''}</Typography> 
        </div>
      </div> */}
      <StyledAttendance>
    <div ref={componentRef} className='printCont'>
   {
        myResult.length>0&&(
         
            <div id="container">
            <center> <div className="header">
                 <img src={Logo} style={{textAlign:'center'}}/><br></br>
                 <span className="school-name">NOBLE INTELLECT ACADEMY</span><br></br>
                <span>No. 24 kofare zone 3,, Jimeta Yola North, Adamawa State</span><br></br>
                <span>Motto: Learning For Better Future.</span>
                <h4>STUDENT REPORT SHEET</h4>
            </div> </center>
            <div className="information-container">
                <div>
                    <span className="content-title">NAME:</span> <span  className="content-title-post">{`${JSON.parse(localStorage.getItem('user')).user.firstName+' '+JSON.parse(localStorage.getItem('user')).user.lastName}`}</span><br></br>
                    <span className="content-title">STUDENT ID:</span><span className="content-title-post">{myResult.length>0?myResult[0].username:'0'}</span><br></br>
                    <span className="content-title">CLASS:</span><span className="content-title-post">{myResult.length>0?myResult[0].class:'0'}</span><br></br>
                    <span className="content-title">CLASS SIZE:</span><span className="content-title-post">{myResult.length>0?myResult[3]:'0'}</span><br></br>
                </div>
                <div>
                    <span className="content-title">AGGREGATE:</span><span className="content-title-post">{myResult.length>0?myResult[0].total:'0'}</span><br></br>
                    <span className="content-title">AVERAGE:</span><span className="content-title-post">{myResult.length>0?myResult[0].average:'0'}</span><br></br>
                    <span className="content-title">NO OF SUBJECT:</span><span className="content-title-post">{myResult.length>0?myResult[0].noOfCourse:'0'}</span><br></br>
                </div>
                <div>
                    <span className="content-title">SESSION:</span> <span className="content-title-post">{myResult.length>0?myResult[0].session:'0'}</span><br></br>
                    <span className="content-title">TERM:</span><span className="content-title-post">{termer(myResult.length>0?myResult[0].term:'0')}</span><br></br>
                </div>
    
            </div>
            <div>
                {
                     myResult.length>0&&(
                        myResult[0].class.includes('Kindergarten')&&(
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
                               
                               myResult[1].length>=1&&(
                                myResult[1].map((curDos,indd)=>(
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
                     myResult.length>0&&(
                     myResult[0].class.includes('SS')
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
                               
                                 myResult[1].length>=1&&(
                                     myResult[1].map((curDos,indd)=>(
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
                     myResult.length>0&&(
                     myResult[0].class.includes('Grade')
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
                               
                                 myResult[1].length>=1&&(
                                     myResult[1].map((curDos,indd)=>(
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
                     myResult.length>0&&(
                         myResult[0].class.includes('Playclass')|| myResult[0].class.includes('Daycare')?
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
                                     myResult[1].map((curDos,indd)=>(
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
                     myResult.length>0&&(
                        ! myResult[0].class.includes('Play')&&(
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
                    myResult.length>0&&(
                     myResult[0].class.includes('Kindergarten')&&(
                        <div className="table3-container">
                        <span>Cognitive Domain</span>
                        
                           {
                                myResult[2].length>=1&&(
                                <table class="table3">
                                <thead>
                                    <th colspan="5">EFFECTIVE DISPOSITION</th>
                                   
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Attentiveness</td>
                                        <td>{ myResult[2].Attentiveness}</td>
                                        <td>Attitude to school work</td>
                                        <td>{ myResult[2].Attitude}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Emotional Stability</td>
                                        <td>{ myResult[2].Emotional}</td>
                                        <td>Initiative </td>
                                        <td>{ myResult[2].Inactive}</td>
                                    </tr>
                                    <tr>
                                        <td>Neatness</td>
                                        <td>{ myResult[2].Neatness}</td>
                                        <td>Acceptance of Responsibility</td>
                                        <td>{ myResult[2].Acceptance}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Team Work</td>
                                        <td>{ myResult[2].TeamWork}</td>
                                        <td>Preseverance</td>
                                        <td>{ myResult[2].Preseverance}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Speaking Skills</td>
                                        <td>{ myResult[2].Speaking}</td>
                                        <td>Leadership Skills</td>
                                        <td>{ myResult[2].Leadership }</td>
                                    </tr>
                                    <tr>
                                        <td>Honesty</td>
                                        <td>{ myResult[2].Honesty}</td>
                                        <td>Follows rules</td>
                                        <td>{ myResult[2].Follows}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Punctuality</td>
                                        <td>{ myResult[2].Punctuality}</td>
                                        <td>Participation in class</td>
                                        <td>{ myResult[2].Participation}</td>
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
                    myResult.length>0&&(
                     myResult[0].class.includes('Grade')&&(
                      <div className="table3-container">
                      <span>Cognitive Domain</span>
                      
                         {
                              myResult[2].length>=1&&(
                              <table class="table3">
                              <thead>
                                  <th colspan="5">EFFECTIVE DISPOSITION</th>
                                 
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Attentiveness</td>
                                      <td>{ myResult[2].Attentiveness}</td>
                                      <td>Attitude to school work</td>
                                      <td>{ myResult[2].Attitude}</td>
                                  </tr>
                                  
                                  <tr>
                                      <td>Emotional Stability</td>
                                      <td>{ myResult[2].Emotional}</td>
                                      <td>Initiative </td>
                                      <td>{ myResult[2].Inactive}</td>
                                  </tr>
                                  <tr>
                                      <td>Neatness</td>
                                      <td>{ myResult[2].Neatness}</td>
                                      <td>Acceptance of Responsibility</td>
                                      <td>{ myResult[2].Acceptance}</td>
                                  </tr>
                                  
                                  <tr>
                                      <td>Team Work</td>
                                      <td>{ myResult[2].TeamWork}</td>
                                      <td>Preseverance</td>
                                      <td>{ myResult[2].Preseverance}</td>
                                  </tr>
                                  
                                  <tr>
                                      <td>Speaking Skills</td>
                                      <td>{ myResult[2].Speaking}</td>
                                      <td>Leadership Skills</td>
                                      <td>{ myResult[2].Leadership }</td>
                                  </tr>
                                  <tr>
                                      <td>Honesty</td>
                                      <td>{ myResult[2].Honesty}</td>
                                      <td>Follows rules</td>
                                      <td>{ myResult[2].Follows}</td>
                                  </tr>
                                  
                                  <tr>
                                      <td>Punctuality</td>
                                      <td>{ myResult[2].Punctuality}</td>
                                      <td>Participation in class</td>
                                      <td>{ myResult[2].Participation}</td>
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
                        <td class="pr-remarks">{ myResult[2].remarks}</td>
                    </tr>
                </table>
            </div>
            
            <center><img src={Signature}/></center>
        </div>
           )
       
   }
   {
     myResult.length==0&&(
      <Typography variant='button'>Result For Selected Term Not Yet Approved Or Term Not Selected!!</Typography>
     )
   } 
   {
     loading?<CircularProgress style={{marginLeft:'40%'}} color='primary' />:null
   }
    </div>
        </StyledAttendance>

      <Button onClick={handlePrint} style={{width:'30%',marginLeft:'20px',marginTop:'10px',marginBottom:'20px'}} variant='outlined' color='primary'>Print Result</Button>
        </StyledMain>
    )
}
