import React,{useContext, useEffect,useState,useRef} from 'react'
import {withRouter} from 'react-router-dom'
import {useReactToPrint} from 'react-to-print'
import styled from 'styled-components'
import Logo from './logo.png'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import AppContext from '../../Context/app/appContext'
import { Button } from '@material-ui/core'
const StyledReciept=styled.div`
width: 100%;
height: 100vh;
background-color:lightgray;
display: flex;
flex-direction: column;
align-items: center;
.mainReciept{
    background-color: white;
    display: flex;
   flex-direction: column;
   align-items: center;
   min-height: 90vh;
   min-width: 40%;
   margin-top: 20px;
   position: relative;
   .back{
       position: absolute;
       width: 90%;
       height: 90%;
       z-index: 0;
       margin-top:25%;
       img{
        width: 100%;
       height: 100%;
       opacity: 0.2;
       }
   }
   .address{
    display: flex;
    flex-direction: row;
    z-index: 2;
    img{
        width: 100px;
        height: 100px;
    }
}
.studentDetails{
    display: flex;
    z-index: 2;
    flex-direction: column;
    
    .singleDetails{
        display: flex;
        flex-direction: row;
         
    }
 

}
.singleDetails{
        display: flex;
        flex-direction: row;
}
}

`;

 function Reciept(props) {
    const appProps=useContext(AppContext)
    const componentRef=useRef()
    useEffect(() => {
        console.log(appProps)
        
    }, [])

    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        copyStyles:true
    
    })
   
    return (
       <StyledReciept ref={componentRef}>
           <div  className='mainReciept'>
            <div className='back' style={{zIndex:'0'}}>
            <img src={Logo} alt='back'></img>
            </div>
            
           <Typography onClick={()=>{
                 console.log(appProps)
           }} style={{marginLeft:'auto'}} variant="overline" display="block" gutterBottom>
        PMB:5432
          </Typography>
           <div className='address'>
            <img src={Logo} alt='logo'></img>
            <div className='mainAddress'>
            <Typography variant="h6" gutterBottom>
            NOBLE INTELLECT ACADEMY
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
          No. 25 zone 3 Kofare, Jimeta Yola North Adamawa State 
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
      nobleintellectacademy@gmail.com  ||   08140409672
      </Typography>
            </div>
           </div>



     <Typography style={{zIndex:'2'}} align='center' variant="h6" gutterBottom>
     STUDENT RECEIPT
      </Typography>

      <Typography  style={{zIndex:'2'}} variant="caption" display="block" gutterBottom>
      2020/2021 ACADEMIC SESSION
      </Typography>
      <div className='studentDetails'>
          <div className='singleDetails'>
          <Typography style={{marginRight:'70px',}} variant="caption" display="block" gutterBottom>
      STUDENT ID: {appProps.reciept[0].studentId}
      </Typography>
      <Typography style={{marginLeft:'auto'}} variant="caption" display="block" gutterBottom>
      DATE:12/06/2021
      </Typography>
          </div>
      


          <div className='singleDetails'>
      <Typography style={{marginRight:'70px'}}  variant="caption" display="block" gutterBottom>
      NAME: {appProps.reciept[0].studentName}
      </Typography>
      <Typography style={{marginLeft:'auto'}} variant="caption" display="block" gutterBottom>
      CLASS:{appProps.reciept[0].className}
      </Typography>
      </div>


      <div className='singleDetails'>
      <Typography style={{marginRight:'70px'}}  variant="caption" display="block" gutterBottom>
    TELLER NO: {appProps.reciept[0].teller}
      </Typography>
      <Typography style={{marginLeft:'auto'}} variant="caption" display="block" gutterBottom>
      TERM:{appProps.reciept[0].term}
      </Typography>
      </div>
      </div>
      <Divider style={{width:'100%',marginTop:'20px'}}></Divider>
      <div className='studentDetails'>

      <div className='singleDetails'>
      <Typography style={{marginRight:'70px'}}  variant="h6" display="block" gutterBottom>
      PURPOSE OF PAYMENT:
      </Typography>
      <Typography style={{marginLeft:'auto'}} variant="h6" display="block" gutterBottom>
      AMOUNT
      </Typography>
      </div>
    {
        appProps.reciept[0].purposeOfPayment.map((dat,ind)=>(

            <div className='singleDetails'>
            <Typography style={{marginRight:'70px'}}  variant="caption" display="block" gutterBottom>
            {dat}
            </Typography>
            <Typography style={{marginLeft:'auto'}} variant="caption" display="block" gutterBottom>
            N50,000
            </Typography>
            </div>
        ))
    }
      

      </div>



      <Divider style={{width:'100%'}}></Divider>

      <div className='singleDetails'>
      <Typography style={{marginRight:'70px'}}  variant="h6" display="block" gutterBottom>
      TOTAL
      </Typography>
      <Typography style={{marginLeft:'auto'}} variant="h6" display="block" gutterBottom>
     N50,000
      </Typography>
      </div>
      <Divider style={{width:'100%'}}></Divider>
      <Divider style={{width:'50%',marginTop:'40px'}}></Divider>
      <Typography variant="overline" display="block" gutterBottom>
      BURSARY SIGNATURE
      </Typography>
           </div>

           <Button onClick={()=>{
               handlePrint()
               props.history.push('fees')
           }} color='primary' variant='contained' style={{width:'150px'}}>Print Reciept</Button>
       </StyledReciept>
    )
}
export default withRouter(Reciept)