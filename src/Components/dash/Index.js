import React,{useEffect,useContext,useState} from 'react'
import Nav from './Header/Nav'
import styled from 'styled-components'
import Aside from './Main/Aside'

import AppContext from '../../Context/app/appContext'

import { Drawer, Radio, Space } from 'antd';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {EditRounded,DeleteForeverRounded,ViewArrayRounded,CloseOutlined} from '@material-ui/icons'

import { withRouter } from 'react-router-dom'
import Assignment from '../Parents/Main/Assignment'
import MyProfile from '../Parents/Prof/MyProfile'
import Fees from '../Parents/Fees/Fees'
import MySubject from '../Parents/Subject/MySubject'
import MyResult from '../Parents/Results/MyResult'


const StyledDraw=styled.div`
display: flex;
width: 100%;
flex-direction: column;
height: 400px;
background-color:transparent;
overflow-y: scroll;

.addForm{
    display: flex;
    flex-direction: row;
    width: 100%;
}

.mainDetail{
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 80%;
  border:none;
  margin-left:20px;
  margin-top: 10px;
  align-items: center;
  box-shadow: 0px 0px 0.8px rgba(0,0,0,0.5);
}

`;

const useStyles = makeStyles((theme) => ({

    root: {
            width:'90%',
            margin: 20,
            height: 400
          },
          media: {
            height: 140,
          },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
  }));

const StyledMain=styled.div`
display: flex;
flex: 1;
background-color:#ffffff;
width: 100%;
min-height: 100vh;
margin-top: 69px;
flex-direction: row;

`;
 function Main() {
    return (
        <div style={{
        background:'red',
        width:'75%',
        height:'95%',
        marginTop:'10px',
        marginLeft:'auto',
        marginRight:'auto'}}>
            <h1>Main</h1>
        </div>
    )
}



function Index(props) {
    const appProps=useContext(AppContext)
    const [visible,setVisible]=useState(false)
    const [section,setSection]=useState('None')
    const [category,setCategory]=useState('none')
    const [classs,setClass]=useState('')
    const [allClasses,setAllClassess]=useState([])
    const classes = useStyles();

   function close() {
       setVisible(false)
   }

   function open() {
    setVisible(true)
}

const alertUser = (e) => {
    e.preventDefault();
   e.returnValue = "";
   appProps.setUser({user:appProps.user.user})
};

    // useEffect(() => {
    
    //   const user= JSON.parse(localStorage.getItem('user'))
    //   appProps.setUser({user:user.user})

    //   window.onbeforeunload = function() {
    //     return true;
    // };

    // return () => {
    //     window.onbeforeunload = null;
    // };

      // window.addEventListener("beforeunload", alertUser);
      // return () => {
      //   window.removeEventListener("beforeunload", alertUser);
      // };
  
      // if (appProps.user.user.firstName==undefined) {
      //   props.history.push('/')
      // }
        // fetch('https://polar-brook-59807.herokuapp.com/admin/get-every-class')
        // .then(res=>{
        //   res.json()
        //   .then(data=>{
        //     setAllClassess(data.message)
        //   })
        // })
    
    // }, [])
    const Dynamic=()=>{
        switch (props.match.url) {
            case '/dash/fees':
                        return <Fees></Fees>
            case '/dash/subject':
                            return <MySubject></MySubject>
             case '/dash/assignment':
                              return <Assignment></Assignment>
             case '/dash/profile':
                                return <MyProfile></MyProfile>
            
                case '/dash/result':
                                    return <MyResult></MyResult>
              

                                        
             
        
            default:
                return <Main></Main>
                
        }
    }
      
  
  return (
    <div style={{
        position: 'relative',
        display:'flex',
        overflow:'hidden'
    }}>
       
            <>
            <Nav></Nav>
            <StyledMain>
                <Aside open={open}></Aside>
                <Dynamic></Dynamic>
          
       
            </StyledMain>
            </>
        

    </div>
  );
}

export default withRouter(Index);












{/* <Drawer
          title="Manage Classes"
          placement='top'
          closable={false}
          onClose={close}
          visible={visible}
          height='500px'
        >
     <StyledDraw>
         <div className='addForm'>
         <FormControl style={{width:'20%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Section</InputLabel>
        <Select
         onChange={(e)=>{
            if (section!=='SSS') {
                setCategory('None')
            }
         setSection(e.target.value)
         }}
          native
          value={section}
          label="Select Section"
          inputProps={{
            name:'section',
            id: 'outlined-age-native-simple',
          }}
        >  
           <option value='none'>None</option>
           <option value='Daycare'>Daycare</option>
           <option value='Playclass'>Playclass</option>
           <option value='Kindergartens'>Kindergartens</option>
           <option value='Grade'>Grades</option>
          <option value='JSS'>JSS</option>
          <option value='SSS'>SSS</option>
        </Select>
      </FormControl>



     

      <TextField style={{width:'20%',marginTop:'9px'}} onChange={(e)=>{
          setClass(e.target.value)
      }} name='className' id="outlined-basic" label="Class Name" variant="outlined" />

      <Button onClick={()=>{
          const myObj=section=='SSS'?{
              section,
              category,
              className:classs
          }:{
            className:classs,
            section
          }
          console.log(myObj)


          fetch('https://polar-brook-59807.herokuapp.com/admin/create-class',{
            method:'POST',
            headers:{
            "Content-Type":'application/json'
            },
            body:JSON.stringify(myObj)
            }).then(res=>{
            res.json()
            .then(data=>{
            console.log(data)

            fetch('https://polar-brook-59807.herokuapp.com/admin/get-every-class')
        .then(res=>{
          res.json()
          .then(data=>{
            setAllClassess(data.message)
          })
        })

            }).catch(err=>{
            alert('An Error Occured')
            })
            }).catch(err=>{
            alert('An Error Occured')
            })





      }} style={{width:'15%',height:'40px',marginTop:'20px',marginLeft:'20px'}} variant="contained" color='primary'>Add Class</Button>

   <CloseOutlined onClick={()=>{
     close()
   }} style={{marginLeft:'auto',marginRight:'20px',cursor:'pointer'}}></CloseOutlined>

         </div>

         <Divider style={{width:'100%'}}></Divider>

         <Typography style={{
               color:'black'
             }} variant='h6' align='center' gutterBottom>Registered Classes</Typography>
      <Divider style={{width:'100%'}}></Divider>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>


{
  allClasses.length>=1&&(
    allClasses.map((dat,ind)=>(
      <div className='mainDetail' style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
      <Typography style={{
                 color:'black'
               }} variant='button' align='left' gutterBottom>{ind+1}</Typography>
               
      <Typography style={{
                 color:'black',
                 marginLeft:'50px'
               }} variant='button' align='left' gutterBottom>{dat.className}</Typography>
            <DeleteForeverRounded onClick={()=>{
                   const myObj={
                     id:dat._id
                   }
                     fetch(`https://polar-brook-59807.herokuapp.com/admin/delete-class`,{
                      method:'DELETE',
                      headers:{
                        "Content-Type":'application/json'
                      },
                      body:JSON.stringify(myObj)
                    })
                     .then(res=>{
                       res.json()
                       .then(data=>{
                         console.log(data)
                         fetch('https://polar-brook-59807.herokuapp.com/admin/get-every-class')
                       .then(res=>{
                        res.json()
                       .then(data=>{
                        setAllClassess(data.message)
                        })
        })
                       })
                       
                 
                     })
                 }} style={{color:'red',cursor:'pointer',marginLeft:'20px'}}></DeleteForeverRounded>
      </div>
  
    ))
  )
}

{
  allClasses.length==0&&(
    <Typography style={{
      color:'black',
      margin:'0 auto',
      width:'100%'
    }} variant='h6' align='center' gutterBottom>No Data Added Yet</Typography>
  )
}

</div>
        
     </StyledDraw>
        </Drawer> */}




// const filtered=data.filter(dat=>dat.state.toLowerCase().includes(searchVal.toLowerCase())||dat.lga.toLowerCase().includes(searchVal.toLowerCase())||dat.category.toLowerCase().includes(searchVal.toLowerCase()))