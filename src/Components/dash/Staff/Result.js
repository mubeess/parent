import React,{useEffect,useState} from 'react'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green'
import SelectSubject from './SelectSubject'
import FinalResult from './FinalResult';
import Alert from '@material-ui/lab/Alert';
const StyledFinal=styled.div`



`;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#1E7F95',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select Subject', 'Enter Results'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SelectSubject></SelectSubject>;
    case 1:
      return 'What is an ad group anyways?';
    default:
      return 'Unknown step';
  }
}



const StyledResult=styled.div`
   background:transparent;
        width:75%;
        height:95%;
        margin-top:20px;
        margin-left:auto;
        margin-right:auto;
        display: flex;
        flex-direction: column;
        margin-left: 20%;

`;

 function Result(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [students, setStudents] = React.useState({});
    const steps = getSteps();
    

   function handleStudents(std) {
     setStudents(std)
     console.log(students)
   }

    const isStepOptional = (step) => {
        return step === 1;
      };
    
      const isStepSkipped = (step) => {
        return skipped.has(step);
      };
    
      const handleNext = () => {
        let newSkipped = skipped;
        if (activeStep==1) {
          console.log('finishedddd')
        }
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
    return (
      <ThemeProvider theme={theme}>
        <StyledResult>
          <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel  {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Alert severity="success">Result Submitted Succesfully</Alert>
            <Button onClick={()=>{
              setActiveStep(0)
            }} className={classes.button}>
              Return
            </Button>
          </div>
        ) : (
          <div>
            {/* {getStepContent(activeStep)} */}
            {/* <Typography className={classes.instructions}></Typography> */}
            {
             activeStep===0&&(
               <SelectSubject handleStudents={(std)=>handleStudents(std)} handleNext={()=>handleNext}></SelectSubject>
             )
            }
            {
             activeStep===1&&(
              <FinalResult students={students}></FinalResult>
             )
            }
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
             
              {
                activeStep === steps.length - 1&&(
                  <>
                  <Button
                  variant="contained"
                  onClick={()=>{
                    window.location.reload()
                  }}
                  style={{margin:'20px'}}
                  
                >
                  Save and Continue
                </Button>

                  <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
               Final Submission
              </Button>
              </>
                )
              }
            
            </div>
          </div>
        )}
      </div>
    </div>
        </StyledResult>
        </ThemeProvider>
    )
}
export default withRouter(Result)