import React,{useState,useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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


  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function StyledTable(props) {
    const classes = useStyles();
    const [Attentiveness,setAttentiveness]=useState('black')
    const [Emotional,setEmotion]=useState('black')
    const [Neatness,setHard]=useState('black')
    const [remarks,setRemarks]=useState('black')
    const [TeamWork,setTeam]=useState('black')
    const [Speaking,setSpeaking]=useState('black')
    const [Honesty,setHonesty]=useState('black')
    const [Punctuality,setPunctuality]=useState('black')
    const [Attitude,setAttitude]=useState('black')
    const [Initiative,setInitiative]=useState('black')
    const [Acceptance,setAcceptance]=useState('black')
    const [Preseverance,setPreseverance]=useState('black')
    const [Leadership,setLeadership]=useState('black')
    const [Follows,setFollows]=useState('black')
    const [Participation,setParticipation]=useState('black')

    
    

    return (
        <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {props.ind+1}
                </StyledTableCell>
                <StyledTableCell style={{width:'10%'}} align="center">{props.row.username}</StyledTableCell>
                <StyledTableCell style={{width:'10%'}} align="center">{props.row.firstName+" "+props.row.lastName}</StyledTableCell>
                <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Attentiveness}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          key:'Attentiveness',
                          value:e.target.value,
                          username:props.row.username,

                       
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setAttentiveness('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='neatness'  type='text'></input>
                </div>
                 </StyledTableCell>





                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Emotional}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          
                          key:'Emotional',
                          value:e.target.value,
                          username:props.row.username,
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setEmotion('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='Emotional'  type='text'></input>
                </div>
                 </StyledTableCell>




                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Neatness}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Neatness',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setHard('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>


              
                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${TeamWork}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'TeamWork',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setTeam('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>






                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Speaking}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Speaking',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setSpeaking('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>



                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Honesty}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Honesty',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setHonesty('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>






                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Punctuality}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Punctuality',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setPunctuality('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>






                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Attitude}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Attitude',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setAttitude('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>






                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Initiative}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Initiative',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setInitiative('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>







                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Acceptance}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Acceptance',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setAcceptance('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>







                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Preseverance}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Preseverance',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setPreseverance('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>





                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Leadership}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Leadership',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setLeadership('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>







       
                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Follows}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Follows',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setFollows('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>



                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${Participation}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                         
                          key:'Participation',
                          value:e.target.value,
                          username:props.row.username,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setParticipation('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>





                 


                 {/* <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${remarks}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          id:props.row._id,
                          cognitive:{
                            "Attitude":e.target.value
                           }
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setRemarks('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='remarks'  type='text'></input>
                </div>
                 </StyledTableCell> */}





                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${remarks}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          key:'remarks',
                          value:e.target.value,
                          username:props.row.username,
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/add-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setRemarks('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='remarks'  type='text'></input>
                </div>
                 </StyledTableCell>
                 
              </StyledTableRow>
    )
}
