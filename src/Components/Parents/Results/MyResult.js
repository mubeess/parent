import { AssessmentOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Button, Divider, FormControl, InputLabel, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import gray from '@material-ui/core/colors/grey'

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
    const classes = useStyles();
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
          value='JSS1'
          label="Present Class"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='JSS1'>JSS1</option>
        </Select>
      </FormControl>



      <FormControl style={{width:'30%',marginLeft:'30px'}} variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Select Term</InputLabel>
        <Select
          native
          value='1'
          label="Select Term"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='none'>---None---</option>
          <option value='First Term'>First Term</option>
          <option value='Second Term'>Second Term</option>
          <option value='Third Term'>Third Term</option>
        </Select>
      </FormControl>
      </div>
      <Divider style={{marginTop:'10px'}}></Divider>

      <div className='mainResult'>
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
        <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  English Language
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  10
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  10
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  10
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  10
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                 60
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  100
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                A
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                Excellent
                </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  English Language
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  10
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  10
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  10
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  10
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                 60
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  100
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                A
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                Excellent
                </StyledTableCell>
            </StyledTableRow>
        </TableBody>
        </Table>
        </TableContainer>
        <div className='resultDetails'>
            <div className='current'>
            <Typography variant='button'>CURRENT</Typography>
            <div className='subDetails'>
       <Typography style={{marginLeft:'10px'}} variant='body1'>Total:</Typography>
       <Typography variant='body1'>4000</Typography>


       <Typography style={{marginLeft:'10px'}} variant='body1'>Average:</Typography>
       <Typography variant='body1'>90</Typography>


       <Typography style={{marginLeft:'10px'}} variant='body1'>Position:</Typography>
       <Typography variant='body1'>1</Typography>
            </div>
            </div>
            <div className='classDesc'>
            <Typography variant='button'>Class Description</Typography>
            <div className='subDetails'>
       <Typography style={{marginLeft:'10px'}} variant='body1'>TOTAL NO. OF STUDENTS:</Typography>
       <Typography variant='body1'>40</Typography>


       <Typography style={{marginLeft:'10px'}} variant='body1'>TOTAL NO. OF SUBJECTS:</Typography>
       <Typography variant='body1'>9</Typography>


    
            </div>
            </div>
        </div>
        <div className='principalRem'>
        <Typography style={{marginTop:'20px'}} variant='button'>PRINCIPAL REMARK:Dolo</Typography> 
        </div>
      </div>

      <Button style={{width:'30%',marginLeft:'20px',marginTop:'10px'}} variant='outlined' color='primary'>Print Result</Button>
        </StyledMain>
    )
}
