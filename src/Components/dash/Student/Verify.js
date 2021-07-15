import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import Selects from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import Success from './success2.gif'
import {withRouter,Link} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';
import { Select, Tag,message } from 'antd';
import AppContext from '../../../Context/app/appContext'



const StyledMod=styled.div`
@keyframes appear{
  0%{
    opacity: 0;
    transform: translateX(-200px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}
display:flex;
flex-direction: column;
height:443px;
min-width: 30%;
background-color: white;
margin-top: 50px;
align-items: center;
.successwrite{
  color: green;
  opacity: 0;
  transform: translateX(-200px);
  animation: appear 0.2s linear 1s 1 forwards;
}
img{
  width: 200px;
  height: 200px;
}
`;


const StyledFees=styled.div`
display: flex;
min-height: 400px;
width: 70%;
background-color:#f9f9f9;
border: 1px thin #1E7F95;
flex-direction: column;
.selection{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;
}

`;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop:'20px'
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

 function Verify(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosee = () => {
    setAnchorEl(null);
  };

  const openn = Boolean(anchorEl);
  const id = openn ? 'simple-popover' : undefined;

    const classes = useStyles();
    const [options,setOptions]=React.useState([{ value: 'Tuition' }])
    const [open, setOpen] = React.useState(false);
    const [classs,setClass]=useState('None')
    const [term,setTerm]=useState('None')
    const [studentId,setStudentId]=useState('None')
    const [studentName,setStudentName]=useState('None')
    const [teller,setTeller]=useState('')
    const [section,setSection]=useState('None')
    const [selectedOptions,setSelected]=React.useState(['Tuition'])
    const [allStudent,setAllStudent]=useState([])
    const [purpose,setPurpose]=useState('')
    const [mainStudent,setMain]=useState({class:'None',name:'None'})
    const [amount,setAmount]=useState('')
    const [selectedValWithAm,setValAm]=useState([])
    const appProps=useContext(AppContext)
    

    useEffect(() => {
      let isMounted = true;               // note mutable flag
      // someAsyncOperation().then(data => {
      //   if (isMounted) setState(data);    // add conditional check
      // })
      const payments=[]
      fetch(`https://polar-brook-59807.herokuapp.com/admin/get-payment-type`)
          .then(res=>{
            res.json()
            .then(data=>{
              data.message.map(dat=>{
                let mappDat={value:dat.paymentTypes}
                payments.push({value:dat.paymentTypes,amount:dat.amount})
                
              })
              
              
            })
            .then(dat=>{
              if (isMounted) setOptions(payments)
            })
            console.log('""""""',payments)
          })

      return () => { isMounted = false }; // use cleanup to toggle value, if unmounted
    }, []); 

    // useEffect(()=>{
    //   const payments=[]
    //   fetch(`https://polar-brook-59807.herokuapp.com/admin/get-payment-type`)
    //       .then(res=>{
    //         res.json()
    //         .then(data=>{
    //           data.message.map(dat=>{
    //             let mappDat={value:dat.paymentTypes}
    //             payments.push({value:dat.paymentTypes})
    //           })
              
              
    //         })
    //         .then(dat=>{
    //           setOptions(payments)
    //         })

    //       })
        
    // },[])


    const handleChange = (value) => {
      const filteredAm=options.filter((fil,ind)=>value[ind]==fil.value)
      // setSubjects(event.target.value);

      setSelected(value)
     console.log("|||\\\\",value)
    };



    function tagRender(props) {
      const { label, value, closable, onClose } = props;
      const onPreventMouseDown = event => {
        event.preventDefault();
        event.stopPropagation();
      };
      return (
        <Tag
          color='green'
          onMouseDown={onPreventMouseDown}
          closable={closable}
          onClose={onClose}
          style={{ marginRight: 3,}}
        >
          {label}
        </Tag>
      );
    }





    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <StyledFees>
        <div className='selection'>
        

        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT SECTION</InputLabel>
        <Selects
         onChange={(e)=>{
          setSection(e.target.value)
          fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-student-according-to-section/?section=${e.target.value}`)
          .then(res=>{
            res.json()
            .then(data=>{
              setAllStudent(data.students)
              
            })
          })
        }}
          native
          value={section}
          label="SELECT SECTION"
          inputProps={{
            name:'studentid',
            id: 'outlined-age-native-simple',
          }}
        > 
         <option value='None'>None</option>
         <option value='Daycare'>Daycare</option>
         <option value='Playclass'>Playclass</option>
         <option value='Kindergartens'>Kindergartens</option>
         <option value='Grade'>Grade</option>
          <option value='JSS'>JSS</option>
          <option value='SSS'>SSS</option>
         
        </Selects>
      </FormControl>



        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT STUDET ID</InputLabel>
        <Selects
         onChange={(e)=>{
          setStudentId(e.target.value)
          const currentStd=allStudent.filter(std=>std.username==e.target.value)
          console.log(currentStd)
          const FullName=`${currentStd[0].firstName+" "+currentStd[0].lastName}`;
          setStudentName(FullName)
          setClass(currentStd[0].currentClass)

      //   allStudent.map(std=>{
      // console.log(std.username)
      //     if (std.username==e.target.value) {
      //       let stdToUse=`${std.firstName+' '+std.lastName}`;
      //       setClass(std.currentClass)
      //       setStudentName(stdToUse)
      //       console.log(mainStudent)
      //     }else{
      //       setClass('None')
      //       setStudentName('None')
      //     }
            
      //     })
         
        }}
          native
          value={studentId}
          label="SELECT STUDET ID"
          inputProps={{
            name:'studentid',
            id: 'outlined-age-native-simple',
          }}
        >
           <option  value='none'>None</option>
          {
          allStudent.length>=1&&(
            allStudent.map((std,ind)=>(
              <option key={ind} value={std.username}>{std.username}</option>
            ))
          )
         }
         

        </Selects>
      </FormControl>



    


     
            </div>




            <div className='selection'>
        
            <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">CLASS</InputLabel>
        <Selects
          disabled
          onChange={(e)=>{
            setClass(e.target.value)
          }}
          native
          value={classs}
          label="CLASS"
          inputProps={{
            name:'class',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={classs}>{classs}</option>
        </Selects>
      </FormControl>



       <TextField onChange={(e)=>{
           setTeller(e.target.value)
         }} style={{width:'40%'}} id="outlined-basic" label="PLEASE ENTER TELLER NUMBER" variant="outlined" />
            </div>





            <div className='selection'>
        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">STUDENT NAME</InputLabel>
        <Selects
        disabled
         onChange={(e)=>{
          setStudentName(e.target.value)
        }}
          native
          value={studentName}
          label="STUDENT NAME"
          inputProps={{
            name:'name',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={studentName}>{studentName}</option>
        </Selects>
      </FormControl>




      <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT TERM SESSION</InputLabel>
        <Selects
         onChange={(e)=>{
           setTerm(e.target.value)
         }}
          native
          value={term}
          label="SELECT TERM SESSION"
          inputProps={{
            name:'term',
            id: 'outlined-age-native-simple',
          }}
        >
           <option value='None'>----None-----</option>
          <option value='First Term'>First Term</option>
          <option value='Second Term'>Second Term</option>
          <option value='Third Term'>Third Term</option>
        </Selects>
      </FormControl>

            </div>

    <div style={{width:'100%',marginTop:'20px',marginLeft:'50px'}}>
        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
  <div style={{display:'flex',flexDirection:'column'}}>
 <h4 id="demo-mutiple-chip-label">Purpose Of Payments</h4>
<Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={['Tuition']}
    style={{ width: '100%' }}
    options={options}
    onChange={handleChange}
  />
  </div>
  
  
   </FormControl>
  

   <Button onClick={()=>{
         const selectors={
           term,
           studentId,
           studentName,
           teller,
           className:classs,
           purposeOfPayment:selectedOptions
         }
         const newPays={
           pays:{
             teller,
             purposeOfPayment:selectedOptions
           }
         }
         console.log(newPays)
         fetch(`https://polar-brook-59807.herokuapp.com/admin/verify-payment/?username=${studentId}`,{
          method:'POST',
          headers:{
            "Content-Type":'application/json'
          },
          body:JSON.stringify(newPays)
        }).then(res=>{
          res.json()
          .then(data=>{
            handleOpen()
           
            console.log(data)
          })
        })
       
       }} style={{marginRight:'20px',width:'30%',marginLeft:'50px',marginTop:'20px'}} 
       variant="contained" color='primary'>Verify Fees</Button>
   
        </div>
      




       <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
         <StyledMod>
           <Typography variant="button" display="block" gutterBottom>
            FEES VERIFICATION
           </Typography>
           <Divider style={{width:'100%'}}></Divider>
         <img src={Success} alt='success'></img>
         <h3 className='successwrite'>
           SUCCESS
         </h3>
       <Typography variant="overline" display="block" gutterBottom>
         Payment Verified Successfully 
      </Typography>
      <Button onClick={()=>{
           const selectors={
            term,
            studentId,
            studentName,
            teller,
            className:classs,
            purposeOfPayment:selectedOptions,
            amount,
            purposes:selectedValWithAm
          }
          
        appProps.setReCiept([selectors])
        props.history.push('reciept')
        // window.location.pathname = '/reciept';
      }} style={{background:'green'}} variant="contained" color="primary">
       Print Reciept
   </Button>

         </StyledMod> 
        </Fade>
      </Modal>



      <Popover
        id={id}
        open={openn}
        anchorEl={anchorEl}
        onClose={handleClosee}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
       
      >
      
      <TextField onChange={(e)=>{
        setPurpose(e.target.value)
      }} style={{height:'100px',margin:'30px'}} name='purpose' id="outlined-basic" label="Purpose Of Payment" variant="outlined" />

      
<TextField onChange={(e)=>{
        setAmount(e.target.value)
      }} style={{height:'100px',margin:'30px'}} name='amount' id="outlined-basic" label="Amount In Naira" variant="outlined" />
     
      <Button onClick={()=>{
        const payments=[]
        const newPayment=[]
        const myObj={
          paymentTypes:purpose,
          amount
        }
        fetch('https://polar-brook-59807.herokuapp.com/admin/add-payment',{
          method:'POST',
          headers:{
            "Content-Type":'application/json'
          },
          body:JSON.stringify(myObj)
        })
        .then(res=>{
          res.json()
          .then(data=>{
            console.log(data)
            fetch('https://polar-brook-59807.herokuapp.com/admin/get-payment-type')
            .then(res=>{
              res.json()
              .then(data=>{
                  data.message.map(dat=>{
                    let mappDat={value:dat.paymentTypes}
                    newPayment.push({value:dat.paymentTypes,amount:dat.amount})
                   
                 
                  })
                  message.success('Purpose Added Succesfully')
                  setOptions(newPayment)
                  handleClose()
              })
            })
          })
        })
        console.log(purpose)
      }} style={{marginTop:'35px'}} color='primary' variant='contained'>Add Purpose</Button>
      </Popover>
      <Fab onClick={handleClick}  aria-describedby={id}  color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <div style={{width:'100%',display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
      {
        selectedOptions.length>0&&(
          selectedOptions.map((opt,ind)=>(
             <TextField onBlur={(e)=>{
               const filteredSel=selectedValWithAm.filter(sel=>sel.purposeOfPayment==opt)
               console.log(filteredSel)
               if (filteredSel.length>0) {
                //  console.log(filteredSel[0].amountOfPayment)
                // setValAm([...selectedValWithAm,filteredSel[0].amountOfPayment=e.target.value])
                filteredSel[0].amountOfPayment=e.target.value
               }else{
                setValAm([...selectedValWithAm,{purposeOfPayment:opt,amountOfPayment:e.target.value}])
               }
             
            
             }} style={{width:'90%',margin:'10px',marginLeft:'auto',marginRight:'auto'}} label={`${opt+' '+'Amount'}`} key={ind} size='small' variant='outlined'></TextField>
          ))
        )
      }
       </div>
     
        </StyledFees>
    )
}
export default withRouter(Verify)