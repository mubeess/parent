import React,{useState} from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import Selects from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import {withRouter,Link} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle'
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { Select, Tag } from 'antd';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { notification } from 'antd';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
}
}));



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
height:143px;
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





 function AddSubject(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [section,setSection]=useState('None')
    const [studentClassess,setStudentClass]=useState([{className:'JSS1'}])
    const [category,setCategory]=useState('none')
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [options,setOptions]=React.useState([{ value: 'Mathematics' }])
    const [selectedOptions,setSelected]=React.useState([''])
    const [selectedClass,setSelectedClass]=useState('None')





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




    React.useEffect(()=>{
      let newSub=[]
     fetch('https://polar-brook-59807.herokuapp.com/admin/get-all-subject')
     .then(res=>{
       res.json()
       .then(data=>{
        // setSubjects(data.message)
       console.log('rrr')
     
        data.message.map(data=>{
          newSub.push({value:data.subject})
        })
       }).then(dat=>{
        setOptions(newSub)
        
       })
     })
    },[])

    const [subject, setSubject] = React.useState({
      session:'',
      category:'',
      class:''
    });

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (value) => {
      // setSubjects(event.target.value);
      setSelected(value)
    //  console.log(value)
    };

    const handleChange2 = (e) => {
      const name=e.target.name
      const value=e.target.value
    //  let prevSubject=subject

  const newSubject = subject;
  newSubject[`${name}`] = value;
  setSubject(newSubject)
    };
  
    return (
        <StyledFees>
             <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
        <AlertTitle>Success</AlertTitle>
          Succesfully Added Subject!!!
        </Alert>
      </Collapse>
        <div className='selection'>
        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT SECTION</InputLabel>
        <Selects
         onChange={(e)=>{
         console.log(e.target.value)
         setSection(e.target.value)
         fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-classes/?section=${e.target.value}`)
         .then(res=>{
           res.json()
           .then(data=>{
             console.log(data.message)
             setStudentClass(data.message)
           })
         })
        //  
         }}
          native
          value={section}
          label="SELECT SECTION"
          inputProps={{
            name:'session',
            id: 'outlined-age-native-simple',
          }}
        >
           <option value='none'>None</option>
          <option value='Daycare'>Daycare</option>
          <option value='Playclass'>Playclass</option>
          <option value='Kindergartens'>Kindergartens</option>
          <option value='Grade'>Grade</option>
          <option value='JSS'>JSS</option>
          <option value='SSS'>SSS</option>
        </Selects>
      </FormControl>


      <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT CLASS</InputLabel>
        <Selects
         onChange={(e)=>{
           console.log(e.target.value)
           setSelectedClass(e.target.value)
         }}
          native
          value={selectedClass}
          label="SELECT CLASS"
          inputProps={{
            name:'class',
            id: 'outlined-age-native-simple',
          }}
        >
           <option value='none'>None</option>
          {
            studentClassess.map((student)=>(
              <option value={student.className}>{student.className}</option>
            ))
          }
        </Selects>
      </FormControl>
            </div>




            <div className='selection'>
        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT CATEGORY</InputLabel>
        <Selects

        disabled={section!=='SSS'}
         onChange={(e)=>{
          setCategory(e.target.value)
          console.log(e.target.value)
         }}
          native
          value={category}
          label="SELECT CATEGORY"
          inputProps={{
            name:'category',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='none'>None</option>
          <option value='Science'>Science</option>
          <option value='Arts'>Arts</option>
          <option value='Commercial'>Commercial</option>
        </Selects>
      </FormControl>


<FormControl style={{width:'40%'}} className={classes.formControl}>
  <div style={{display:'flex',flexDirection:'column'}}>
 <h4 id="demo-mutiple-chip-label">Select Subjects</h4>
<Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={['Chemistry', 'Physics']}
    style={{ width: '100%' }}
    options={options}
    onChange={handleChange}
  />
  </div>
  </FormControl>

            </div>

       <Button onClick={()=>{
        // setOpen(true)
        setOpen2(true)
        const myObj={
          section,
          category,
          name:selectedClass,
          subject:selectedOptions
        }
        fetch('https://polar-brook-59807.herokuapp.com/admin/add-curriculum',{
          method:'POST',
          headers:{
            "Content-Type":'application/json'
          },
          body:JSON.stringify(myObj)
        }).then(res=>{
          res.json()
          .then(data=>{
            setOpen2(false)
            setOpen(true)
            setTimeout(() => {
              setOpen(false) 
            }, 3000);
            console.log(data)
          }).catch(err=>{
            alert('An Error Occured')
          })
        }).catch(err=>{
          alert('An Error Occured')
        })

       }} style={{marginLeft:'70%',marginTop:'20px',marginRight:'40px',backgroundColor:'#1E7F95'}} variant="contained" color='primary'>Add Subject</Button>


      


<Backdrop style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open2}>
        <CircularProgress color="inherit" />
      </Backdrop>

        </StyledFees>
    )
}
export default withRouter(AddSubject)