import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'
import BarCharts from './BarCharts'
import { Fade,Slide } from "react-awesome-reveal";
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import {Dashboard,VerifiedUserRounded,BarChart,Folder,Receipt,FileCopy,Group,GroupAdd,VerifiedUser,SingleBed, FolderOpen} from '@material-ui/icons';
import PieCharts from './PieCharts';
import CircularProgress from '@material-ui/core/CircularProgress';

const StyledMain=styled.div`
       background:transparent;
        width:75%;
        height:95%;
        margin-top:20px;
        margin-left:auto;
        margin-right:auto;
        display: flex;
        flex-direction: column;
        margin-left: 20%;
        .icons{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-auto-rows: minmax(50px,auto);
            grid-gap: 20px;
            

        }
        .charts{
            display: grid;
            grid-template-columns: 1fr;
        }
        .loader{
            width: '100%';
            min-height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

`;
function RandomIcons(ind) {
    switch (ind) {
        case 0:
           return <VerifiedUser color='primary' style={{width:'70px',height:'70px'}}></VerifiedUser>
             
        case 1:
        return <SingleBed style={{width:'70px',height:'70px'}}></SingleBed>
        case 2:
        return <Dashboard style={{width:'70px',height:'70px'}}></Dashboard>
        case 3:
        return <BarChart style={{width:'70px',height:'70px'}}></BarChart>
        case 4:
        return <FileCopy style={{width:'70px',height:'70px'}}></FileCopy>
        case 5:
        return <FolderOpen style={{width:'70px',height:'70px'}}></FolderOpen>
        case 6:
            return <GroupAdd style={{width:'70px',height:'70px'}}></GroupAdd>
        case 7:
                return <GroupAdd style={{width:'70px',height:'70px'}}></GroupAdd>

        default:<GroupAdd style={{width:'70px',height:'70px'}}></GroupAdd>
            break;
    }
  
}
export default function MainApp() {
    const [details,setDetails]=useState([])
    useEffect(()=>{
     fetch('https://polar-brook-59807.herokuapp.com/admin/dashboard')
     .then(res=>{
         res.json()
         .then(data=>{
             setDetails(data)
             console.log(data)
         })
     })
    },[])
    return (
        <StyledMain>
        {
            details.length==0&&(
                <div className='loader'>
                   <CircularProgress color='primary' />
                </div>
            )
        }
         <div className='icons'>
         <Fade triggerOnce cascade>
         {
             details.length>=1&&(
                 details.map((data,ind)=>(
                    <Tabs key={ind} title={data.detail.toUpperCase()} value={data.value} Icon={RandomIcons(ind)}></Tabs> 
                 ))
             )
         }
         </Fade>
         </div>
         <div className='charts'>
        <div style={{width:'100%',height:'60vh'}}>
        <BarCharts></BarCharts>
        </div>
        {/* <div style={{width:'100%',height:'60vh'}}>
        <PieCharts></PieCharts>
        </div> */}
         </div>
        </StyledMain>
    )
}
