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
import Buttons from '@material-ui/core/Button'
import {withRouter,Link} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle'
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Select, Tag } from 'antd';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Upload, message,Button} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
height: 550px;
width: 60%;
background-color:#f9f9f9;
border: 1px thin #1E7F95;
flex-direction: column;
margin-left: 22%;
margin-top: 10px;
.selection{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;
}

`;



const propsss = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };





 function AddSubject(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [section,setSection]=useState('none')
    const [studentClassess,setStudentClass]=useState([{className:'JSS1'}])
    const [category,setCategory]=useState('none')
    const [subject,setSubject]=useState('none')
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [options,setOptions]=React.useState([{ value: 'Mathematics' }])
    const [selectedOptions,setSelected]=React.useState([''])
    const [selectedClass,setSelectedClass]=useState('none')
    const [title,setTitile]=useState('')
    const [msgBody,setMsgBody]=useState('')
    const [id,setId]=useState('')





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

    // const [subject, setSubject] = React.useState({
    //   session:'',
    //   category:'',
    //   class:''
    // });

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
          <option value='none'>---None---</option>
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
          {/* <option value='Jss 1'>Jss 1</option>
          <option value='Jss 2'>Jss 2</option> */}
           <option value='none'>---None---</option>
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
         <option value='none'>---None---</option>
          <option value='Science'> Science</option>
          <option value='Arts'>Arts</option>
          <option value='Commercial'>Commercial</option>
        </Selects>
      </FormControl>



      <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT SUBJECT</InputLabel>
        <Selects
         onChange={(e)=>{
          setSubject(e.target.value)
          console.log(e.target.value)
         }}
          native
          value={subject}
          label="SELECT SUBJECT"
          inputProps={{
            name:'subject',
            id: 'outlined-age-native-simple',
          }}
        >
              <option value='none'>---None---</option>
        {
            options.length>=1&&(
                options.map((dat,ind)=>(
                <option key={ind} value={dat.value}>{dat.value}</option>
                ))
            )
        }
        
        </Selects>
      </FormControl>

            </div>


            <div className='selection'> 
            <TextField value={title} onChange={(e)=>{
              setTitile(e.target.value)
            }} style={{width:'80%'}}  name='title' id="outlined-basic" label="Please Input Assignment Title Here...." variant="outlined" />
            </div>
            <div className='selection'> 
            <TextareaAutosize value={msgBody} onChange={(e)=>{
              setMsgBody(e.target.value)
            }} style={{width:'80%'}}  aria-label="minimum height" rowsMin={3} placeholder="Other Info If Necessary" />
             </div>
<div className='selection'> 
    <Upload 
    action='https://polar-brook-59807.herokuapp.com/teacher/create-assignment-file'
    name='file'
    method='POST'
   

    beforeUpload={(file)=>{
      console.log(file.type)
      if (file.type !== 'application/pdf') {
          message.error(`${file.name} is not a pdf file`);
        }
        return file.type === 'application/pdf' ? true : Upload.LIST_IGNORE;
      
    }}
    onChange={(info)=>{
      if (info.file.status !== 'uploading') {
        console.log('rrr');
      }
      if (info.file.status === 'done') {
        const idd=info.file.response.message.insertedId
        message.success(`${info.file.name} file uploaded successfully`);
        setId(idd)
        
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }}
   
    >
    <Button icon={<UploadOutlined />}>Upload A Pdf Format Of Your Assignment</Button>
  </Upload>
</div>
       <Buttons onClick={()=>{


const myObj={
  id,
  username:'mubis',
  staffId:'mubis',
  className:selectedClass,
  category,
  head:title,
  text:msgBody
}


        setOpen2(true)
        // setOpen2(true)
        // const myObj={
        //   section,
        //   category,
        //   name:selectedClass,
        //   subject:selectedOptions,
        //   title,
        //   msgBody
        // }
        console.log(myObj)
        fetch('https://polar-brook-59807.herokuapp.com/teacher/create-assignment-text',{
          method:'PUT',
          headers:{
            "Content-Type":'application/json'
          },
          body:JSON.stringify(myObj)
        })
        .then(res=>{
          res.json()
          .then(data=>{
            setOpen2(false)
            if (data.success) {
              message.success('Assignment Added Succesful')
              setTitile('')
              setMsgBody('')
            }else{
              message.error('Unable To Add Assignment')
            }
          })
        })

       }} style={{marginLeft:'70%',marginTop:'20px',marginRight:'40px',backgroundColor:'#1E7F95'}} variant="contained" color='primary'>Post Assignment</Buttons>


      


<Backdrop style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open2}>
        <CircularProgress color="inherit" />
      </Backdrop>

        </StyledFees>
    )
}
export default withRouter(AddSubject)